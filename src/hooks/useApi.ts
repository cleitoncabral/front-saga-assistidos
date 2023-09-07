import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3003/api'
})

export const useApi = () => ({
  // validateToken: async (token: string) => {

  // },
  signin: async (email: string, password: string) => {
    const response = await api.post('/login', {email, password})
    console.log(response)
    return response.data
  },
  register: async (userRegister: object) => {
    console.log(userRegister)
    const response = await api.post('/users', userRegister)
    return response.data
  },
  // logout: async () => {

  // }
})