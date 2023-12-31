import axios from 'axios'
import { ContentWatched } from '../types/ContentWatched'
import { User } from '../types/User'

const api = axios.create({
  baseURL: 'http://localhost:3003/api'
})

export const useApi = () => ({
  login: async (email: string, password: string) => {
    try {
      const response = await api.post('/login', {email, password})
      return response.data
    } catch (error) {
      console.log(error)
    }
    
  },

  autoLogin: async (token: string | null) => {
    console.log(token)
    if(token) {
      const response = await api.get('/login/autoLogin', {
        headers: {
          'Authorization': 'Bearer ' + token,
          'Content-Type': 'application/json'
        }
      })
      
      return response
    }

    return false
  },

  register: async (userRegister: object) => {
    const response = await api.post('/users/register', userRegister)
    return response.data
  },

  logout: async (userToken: string | null) => {
    console.log(userToken)
    const response = await api.post('/login/logout', {
      headers: {
        'Authorization': 'Bearer ' + userToken,
        'Content-Type': 'application/json'
      }
    })

    return response
  },

  createContent: async (content: object, userToken: string | null | undefined) => {
    const response = await api.post('/contentWatched/create', content, {
      headers: {
        'Authorization': 'Bearer ' + userToken,
        'Content-Type': 'application/json'
      }
    })
    return response
  },

  updateContent: async (content: ContentWatched, id: string, userToken: string | null | undefined) => {
    const response = await api.put('/contentWatched/update/' + id, content , {
      headers: {
        'Authorization': 'Bearer ' + userToken,
        'Content-Type': 'application/json'
      }
    })
    
    return response
  },
  
  deleteContentWatched: async (id: string, userToken: string | null | undefined) => {
    const response = await api.delete('/contentWatched/delete/' + id, {
      headers: {
        'Authorization': 'Bearer ' + userToken,
        'Content-Type': 'application/json'
      }
    })

    console.log(response)
    return response
  },

  getAllContentWatched: async (userToken: string | null | undefined) => {
    const response = await api.get('/contentWatched', {
      headers: {
        'Authorization': 'Bearer ' + userToken,
        'Content-Type': 'application/json'
      }
    })

    return response
  },

  deleteAllContentWatched: async (user: User | null) => {
    const response = await api.delete('/contentWatched/deleteAll', {
      headers: {
        'Authorization': 'Bearer ' + user?.token,
        'Content-Type': 'application/json'
      },
      data: {user}
    })

    return response.data
  }
})