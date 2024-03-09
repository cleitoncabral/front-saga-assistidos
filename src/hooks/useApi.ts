import axios from 'axios'
import { ContentWatched } from '../types/ContentWatched'
import { User } from '../types/User'

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL
})

export const useApi = () => ({

  login: async (email: string, password: string) => {
    console.log(api)
    const response = await api.post('/login', {email, password})
    
    return response.data
  },

  autoLogin: async (token: string | null) => {
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
    const response = await api.post('/login/logout', {
      headers: {
        'Authorization': 'Bearer ' + userToken,
        'Content-Type': 'application/json'
      }
    })

    return response
  },

  createContent: async (content: object, userToken: string | undefined) => {
    const response = await api.post('/contentWatched/create', content, {
      headers: {
        'Authorization': 'Bearer ' + userToken,
        'Content-Type': 'application/json'
      }
    })

    return response
  },

  updateContent: async (content: ContentWatched, userToken: string | undefined) => {
    const response = await api.put('/contentWatched/update/' + content.id, content , {
      headers: {
        'Authorization': 'Bearer ' + userToken,
        'Content-Type': 'application/json'
      }
    })
    
    return response
  },
  
  deleteContentWatched: async (id: string, userToken: string | undefined) => {
    const response = await api.delete('/contentWatched/delete/' + id, {
      headers: {
        'Authorization': 'Bearer ' + userToken,
        'Content-Type': 'application/json'
      }
    })

    return response
  },

  getAllContentWatched: async (userToken: string | undefined) => {
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