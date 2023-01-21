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
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log(`Saved ${cart.length} items to localstorage`);
  }, [cart]);

  useEffect(() => {
    if (user === null) {
      return;
    }
    fetch(`http://localhost:5000/user?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setDbUser(data));
  }, [user]);

  const addToCart = (product) => {
    product.quantity = 1;
    setCart([...cart, product]);
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
          product.quantity = quantity - 1;
        }
        console.log(newCart);
      }
    });
    setCart(newCart);
  };

  const addUserToDB = (user) => {
    fetch("http://localhost:5000/user", {
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
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
