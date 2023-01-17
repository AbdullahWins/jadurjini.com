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
  const [loading, setLoading] = useState(true);
  // const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useState([]);

  // cart
  const addToCart = (productId) => {
    const productWithQuantity = { productId, quantity: 1 };
    setCart([...cart, productWithQuantity]);
  };

  console.log(cart);
  // // Whenever items change save to localStorage
  // useEffect(() => {
  //   localStorage.setItem("cart", JSON.stringify(cart));
  //   console.log(`Saved ${cart.length} items to localstorage`);
  // }, [cart]); //dependency is items

  // // Add a new item
  // const addToCart = (productId, quan) => {
  //   cart.map((product) => {
  //     if (product.productId !== productId) {
  //       setCart([...cart, { productId, quantity }]);
  //     }
  //     cart.pop(productId);
  //     setQuantity(quantity+1)
  //     return setCart([...cart, { productId, quantity}]);
  //   });
  // };

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
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
