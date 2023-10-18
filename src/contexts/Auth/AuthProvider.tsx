import { useState } from "react"
import { AuthContext } from "./AuthContext"
import { User } from "../../types/User"
import { useApi } from "../../hooks/useApi"
import { UserRegister } from "../../types/UserRegister"
import {getContentUser} from '../../hooks/getContentUser'
import { ContentWatched } from "../../types/ContentWatched"

const getContentWatched = getContentUser()

export const AuthProvider = ({children}: {children: JSX.Element}) => {

  const [user, setUser] = useState<User | null>(null)
  const api = useApi()

  const signin = async (email: string, password: string) => {
    const data = await api.signin(email, password)
    if (data && data.token) {
      await data.contentWatched.forEach((item: ContentWatched) => item.contentWatchedItem = getContentWatched.contentWatched(item.contentId))
      
      localStorage.setItem('user', data)
      localStorage.setItem('token', data.token)
      setUser(data)
      setToken(data.token)
      return true
    }

    return false
  }

  const setToken = (token: string) => {
    localStorage.setItem('authToken', token)
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

  return (
    <AuthContext.Provider value={{user, signin, signout, register}}> 
      {children}
    </AuthContext.Provider>
  )
}
