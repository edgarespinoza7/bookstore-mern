import React, { createContext, useState, useContext } from 'react'
import PropTypes from 'prop-types'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { auth } from '../firebase/firebase.config';
import { GoogleAuthProvider } from 'firebase/auth';

const AuthContext = createContext();


export const useAuth = () => {
  return useContext(AuthContext)
};

const googleProvider = new GoogleAuthProvider();

// This is the provider component
export const AuthProvider = ({ children }) => {

  const [currentUser, setCurrentUser] = useState(null)
  const [loading, setLoading] = useState(true)

  // This function register a new user with email and password
  const registerUser = async (email, password) => {
    return await createUserWithEmailAndPassword(auth, email, password)
  }


  // This function will log in the user and set the current user state
  const loginUser = async (email, password) => {
    return await signInWithEmailAndPassword(auth, email, password)
  }

  // Sign up with google
  const signInWithGoogle = async () => {
    return await signInWithPopup(auth, googleProvider)
  }

  const value = {
    currentUser,
    loading,
    registerUser,
    loginUser,
    signInWithGoogle
  }


  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}



AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
}