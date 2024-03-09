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
      setLocalStorageToken(data.token)
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

  const register = async (userRegister: UserRegister) => {
    const data = await api.register(userRegister)

    return data ? true : false
  }

  const setLocalStorageToken = (token: string) => {
    localStorage.setItem('authToken', token) 
  }

  const logout = async () => {
    const token = localStorage.getItem('authToken') 
    await api.logout(token)

    setUser(null)
    setContentWatched(null)
    localStorage.setItem('authToken', '')
  }

  const createContent = async (content: object, userToken: string | undefined) => {
     const response = await api.createContent(content, userToken)
     console.log(response)
    const getAllContentWatched = await api.getAllContentWatched(userToken)
    setContentWatched(getAllContentWatched.data)
    
    return true
  }

  const updateContent = async (content: ContentWatched, userToken: string | undefined) => {
    const getAllContentWatched = await api.updateContent(content, userToken)
    await setContentWatched(getAllContentWatched.data)
    return true
  }

  const deleteContent = async (id: string, userToken: string | undefined) => {
    const deleteContentWatched = await api.deleteContentWatched(id, userToken)
    setContentWatched(deleteContentWatched.data)
    
    return true
  }

  const deleteAllContentWatched = async (user: User | null) => {
    await api.deleteAllContentWatched(user)
    setContentWatched(null)

    return true
  }

  return (
    <AuthContext.Provider value={{user, login, autoLogin, register, contentWatched, logout, createContent, updateContent, deleteContent, deleteAllContentWatched}}> 
      {children}
    </AuthContext.Provider>
  )
}
