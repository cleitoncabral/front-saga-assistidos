import axios from 'axios'
import { ContentWatched } from '../types/ContentWatched'

export const getContentUser = () => ({
  contentWatched: async (id: String): Promise<ContentWatched | void> => {
    const api = {
      baseURL: `https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_API_KEY}`
    }
    
    const response = await axios.get(api.baseURL)
    
    return response.data
  }
})