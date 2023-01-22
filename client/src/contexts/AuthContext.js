import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import firebaseApp from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(firebaseApp);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [dbUser, setDbUser] = useState(null);
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const shipping = 100;
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log(`Saved ${cart.length} items to localstorage`);
  }, [cart]);

  useEffect(() => {
    let subTotalPrice = 0;
    cart.map(
      (product) =>
        (subTotalPrice =
          subTotalPrice + product.productPrice * product.quantity)
    );
    setSubtotal(subTotalPrice);
    setTotal(subTotalPrice + shipping);
  }, [shipping, cart]);

  useEffect(() => {
    if (user === null) {
      return;
    }
    fetch(`${process.env.REACT_APP_baseURL}/user?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setDbUser(data));
  }, [user]);

  const addToCart = (product, quantity) => {
    const cartId = [];
    cart.map((prod) => cartId.push(prod._id));
    if (cartId.includes(product._id)) {
      console.log("already added");
    } else {
      product.quantity = quantity;
      setCart([...cart, product]);
    }
  };

  const updateCart = (productId, quantity, add) => {
    const newCart = [...cart];
    newCart.map((product) => {
      if (productId === product._id) {
        // const index = newCart.indexOf(product);
        // delete newCart[index];
        if (add) {
          product.quantity = quantity + 1;
        } else {
          if (product.quantity <= 1) {
            // product.quantity = 1;
            newCart.splice(newCart.indexOf(product), 1);
          } else {
            product.quantity = quantity - 1;
          }
        }
      }
      return console.log();
    });
    setCart(newCart);
  };

  const addUserToDB = (user) => {
    fetch(`${process.env.REACT_APP_baseURL}/user`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((res) => {
      res.json();
    });
  };

  const updateUser = (profile) => {
    setLoading(true);
    return updateProfile(auth.currentUser, profile);
  };

  const providerLogin = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  const loginUserEmail = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const createNewUserEmail = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    setLoading(true);
    signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    setUser,
    updateUser,
    createNewUserEmail,
    loginUserEmail,
    providerLogin,
    logout,
    loading,
    addUserToDB,
    cart,
    setCart,
    addToCart,
    dbUser,
    updateCart,
    subtotal,
    total,
    shipping,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
