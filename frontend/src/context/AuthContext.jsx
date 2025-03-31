import React, { createContext, useState, useContext } from 'react'
import PropTypes from 'prop-types'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase/firebase.config'

const AuthContext = createContext()

export const useAuth = () => {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {

  const [currentUser, setCurrentUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const registerUser = async (email, password) => {
    return await createUserWithEmailAndPassword(auth, email, password)
  }

  const value = {
    currentUser,
    loading,
    registerUser
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