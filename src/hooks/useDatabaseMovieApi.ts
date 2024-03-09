import axios from 'axios'
import { MovieDB, MovieDBResults } from '../types/MovieDB'

const api = {
  baseURL: `https://api.themoviedb.org/3`
}
export const dataBaseMovieApi = () => ({
  getDataMovieApiByName: async (id: string | null): Promise<MovieDB> => {
    const response = await axios.get(api.baseURL + `/search/movie?query=${id}&language=pt-BR&api_key=${import.meta.env.VITE_API_KEY}`)
    return response.data
  },

  getDataMovieApiById: async (id: number | null): Promise<MovieDBResults> => {
    const response = await axios.get(api.baseURL + `/movie/${id}?language=pt-BR&api_key=${import.meta.env.VITE_API_KEY}`)

    return response.data
  }
})