import axios from 'axios'
import { MovieDBResults } from '../types/MovieDB'

const api = {
  baseURL: `https://api.themoviedb.org/3/movie`
}
export const getContentUser = () => ({
  contentWatched: async (id: number): Promise<MovieDBResults> => {
    const response = await axios.get(api.baseURL + `/${id}?api_key=${import.meta.env.VITE_API_KEY}`)

    return response.data
  }
})