import React, { createContext, useContext, useState, useEffect } from 'react';
import { onAuthStateChanged, login as firebaseLogin, signup as firebaseSignup, logout as firebaseLogout } from '../auth/firebase';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const login = (email, password) => firebaseLogin(email, password);
  const signup = (email, password) => firebaseSignup(email, password);
  const logout = () => firebaseLogout();

  const value = {
    currentUser,
    login,
    signup,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
