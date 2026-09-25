import { useContext } from 'react'
import {createContext, useEffect, useState} from "react"

// AuthContext   create the shared authentication space
// AuthProvider holds the authentication state
// currentUser store who loggin
// setCurrentUser change who is logged in
// Provider value make both value of states available for children

export const AuthContext = createContext();

export const AuthProvider = ({ children}) => {

  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    
    const savedUser = JSON.parse(localStorage.getItem("logginUser"))

    if(savedUser){
      setCurrentUser(savedUser)
    }
  }, [])

  const logout = () => {
    localStorage.removeItem("logginUser")
    setCurrentUser(null)
  }

  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser, logout}}>
      {children}
    </AuthContext.Provider>
  )
}