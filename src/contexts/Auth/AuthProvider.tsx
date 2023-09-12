import { useEffect, useState } from "react"
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

  useEffect(() => {
    const validateToken = async () => {
      const storageData = localStorage.getItem('authToken')
      if (storageData) {
        const data = await api.validateToken(storageData)

        if (data.user) {
          setUser(data.user)
        }
      }
    }

    validateToken()
  }, [api])

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

// import { useState, useContext } from "react"
// import { AuthContext } from "./AuthContext"
// import { User } from "../../types/User"
// import { useApi } from "../../hooks/useApi"
// import { UserRegister } from "../../types/UserRegister"
// import {useDatabaseMovieApi} from "../../hooks/useDatabaseMovieApi"
// import { useUserContentWatched } from "../../hooks/useUserContentWatched"

// export const AuthProvider = ({children}: {children: JSX.Element}) => {

//   const [user, setUser] = useState<User | null>(null)
//   const [contentWatched, setContentWatched] = useState<Promise<object | null>>()
//   const api = useApi()
//   const getDataApi = useDatabaseMovieApi()
//   const useUserContentWatchedApi = useUserContentWatched()

//   const signin = async (email: string, password: string) => {
//     const data = await api.signin(email, password)
    
//     if (data && data.token) {
//       setUser(data)
//       setLocalStorage(data.token)

      
//       setContentWatched(useUserContentWatchedApi.getUserContentWatched(data.contentWatched, data.token))

//       setUser(data)
//       console.log(contentWatched)
      
//       return true
//     }

//     return false
//   }

//   const signout = () => {

//   }

//   const register = async (userRegister: UserRegister) => {
//     const data = await api.register(userRegister)

//     if(data) {
//       return true
//     }

//     return false
//   }

//   const setLocalStorage = (token: string) => {
//     localStorage.setItem('authToken', token)
//   }

//   return (
//     <AuthContext.Provider value={{user, signin, signout, register}}> 
//       {children}
//     </AuthContext.Provider>
//   )
// }