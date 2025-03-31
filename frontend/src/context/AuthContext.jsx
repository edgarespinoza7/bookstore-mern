import React, { createContext, useState, useContext } from 'react'
import PropTypes from 'prop-types'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase/firebase.config'

const AuthContext = createContext()

export const useAuth = () => {
  return useContext(AuthContext)
}


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

  const value = {
    currentUser,
    loading,
    registerUser,
    loginUser
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