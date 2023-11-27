import { useState } from "react"
import { AuthContext } from "./AuthContext"
import { User } from "../../types/User"
import { useApi } from "../../hooks/useApi"
import { UserRegister } from "../../types/UserRegister"
import { ContentWatched } from "../../types/ContentWatched"
import { MovieDBResults } from "../../types/MovieDB"

export const AuthProvider = ({children}: {children: JSX.Element}) => {

  const [user, setUser] = useState<User | null>(null)
  const [contentWatched, setContentWatched] = useState<Array<ContentWatched> | null>(null)
  const api = useApi()

  const signin = async (email: string, password: string) => {
    const data = await api.signin(email, password)
    if (data && data.token) {    
      localStorage.setItem('user', data)
      localStorage.setItem('token', data.token)
      
      setUser(data)
      setContentWatched(data.contentWatched)
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

  const createContent = async (content: object, userToken: string | null | undefined) => {
    await api.createContent(content, userToken)
    const getAllContentWatched = await api.getAllContentWatched(userToken)
    setContentWatched(getAllContentWatched.data)
    
    return true
  }

  const updateContent = async (content: ContentWatched, id: string, userToken: string | null | undefined) => {
    
    const getAllContentWatched = await api.updateContent(content, id, userToken)
    console.log(getAllContentWatched)
    await setContentWatched(getAllContentWatched.data)
    return true
  }

  const deleteAllContentWatched = async (userToken: string | null | undefined) => {
    const response = await api.deleteAllContentWatched(userToken)
    setContentWatched(response.data)

    return true
  }

  return (
    <AuthContext.Provider value={{user, contentWatched, signin, signout, register, createContent, updateContent, deleteAllContentWatched}}> 
      {children}
    </AuthContext.Provider>
  )
}
