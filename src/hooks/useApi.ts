import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3003/api'
})

export const useApi = () => ({
  signin: async (email: string, password: string) => {
    try {
      const response = await api.post('/login', {email, password})
      return response.data
    } catch (error) {
      console.log(error)
    }
    
  },
  register: async (userRegister: object) => {
    const response = await api.post('/users', userRegister)
    return response.data
  },
  // logout: async () => {

  // }

  createContent: async (content: object, userToken: string | null | undefined) => {
    const response = await api.post('/contentWatched/create', content, {
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
  }
})