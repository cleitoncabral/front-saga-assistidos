import { useState } from "react"
import { AuthContext } from "./AuthContext"
import { User } from "../../types/User"
import { useApi } from "../../hooks/useApi"
import { UserRegister } from "../../types/UserRegister"
import { ContentWatched } from "../../types/ContentWatched"

export const AuthProvider = ({children}: {children: JSX.Element}) => {

  const [user, setUser] = useState<User | null>(null)
  const [contentWatched, setContentWatched] = useState<Array<ContentWatched> | null>(null)
  const api = useApi()

  const login = async (email: string, password: string) => {
    const data = await api.login(email, password)
    if (data && data.token) {    
      
      setUser(data)
      setContentWatched(data.contentWatched)
      setToken(data.token)
      return true
    }

    return false
  }

  const autoLogin = async () => {
    const response = await api.autoLogin(localStorage.getItem('authToken'))
    if (response) {
      response.data.token = localStorage.getItem('authToken')
      setUser(response.data)
      setContentWatched(response.data.contentWatched)
      return true
    }
    
    return false
  }

  const setToken = (token: string) => {
    localStorage.setItem('authToken', token) 
  }

  const logout = async () => {
    const token = localStorage.getItem('authToken') 
    const response = await api.logout(token)
    console.log(response)
    setUser(null)
    setContentWatched(null)
    localStorage.setItem('authToken', '')
  }

  const register = async (userRegister: UserRegister) => {
    const data = await api.register(userRegister)

    return data ? true : false
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

  const deleteContent = async (id: string, userToken: string | null | undefined) => {
    const deleteContentWatched = await api.deleteContentWatched(id, userToken)
    setContentWatched(deleteContentWatched.data)
    
    return true
  }

  const deleteAllContentWatched = async (user: User | null) => {
    const response = await api.deleteAllContentWatched(user)
    setContentWatched(null)

    return true
  }

  return (
    <AuthContext.Provider value={{user, contentWatched, login, autoLogin, logout, register, createContent, updateContent, deleteContent, deleteAllContentWatched}}> 
      {children}
    </AuthContext.Provider>
  )
}
