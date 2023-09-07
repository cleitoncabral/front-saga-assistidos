import { useState, useContext } from "react"
import { AuthContext } from "./AuthContext"
import { User } from "../../types/User"
import { useApi } from "../../hooks/useApi"
import { UserRegister } from "../../types/UserRegister"
import {useDatabaseMovieApi} from "../../hooks/useDatabaseMovieApi"
import { useUserContentWatched } from "../../hooks/useUserContentWatched"

export const AuthProvider = ({children}: {children: JSX.Element}) => {

  const [user, setUser] = useState<User | null>(null)
  const [contentWatched, setContentWatched] = useState<Promise<object | null>>()
  const api = useApi()
  const getDataApi = useDatabaseMovieApi()
  const useUserContentWatchedApi = useUserContentWatched()

  const signin = async (email: string, password: string) => {
    const data = await api.signin(email, password)
    
    if (data && data.token) {
      // setUser(data)
      // setLocalStorage(data.token)

      
      setContentWatched(useUserContentWatchedApi.getUserContentWatched(data.contentWatched, data.token))

      setUser(data)
      console.log(contentWatched)
      
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