import { useState } from "react"
import { AuthContext } from "./AuthContext"
import { User } from "../../types/User"
import { useApi } from "../../hooks/useApi"
import { UserRegister } from "../../types/UserRegister"

export const AuthProvider = ({children}: {children: JSX.Element}) => {

  const [user, setUser] = useState<User | null>(null)
  const api = useApi()

  const signin = async (email: string, password: string) => {
    const data = await api.signin(email, password)
    console.log(data)
    if (data && data.token) {
      setUser(data)
      setLocalStorage(data.token)
      return true
    }

    return false
  }

  const signout = () => {

  }

  const register = async (userRegister: UserRegister) => {
    const data = await api.register(userRegister)

    if(data) {
      return true
    }

    return false
  }

  const setLocalStorage = (token: string) => {
    localStorage.setItem('authToken', token)
  }

  return (
    <AuthContext.Provider value={{user, signin, signout, register}}> 
      {children}
    </AuthContext.Provider>
  )
}