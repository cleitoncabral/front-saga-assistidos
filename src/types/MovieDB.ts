import { ContentWatched } from "./ContentWatched"

export interface MovieDBResults {
  backdrop_path: string,
  id: string,
  overview: string,
  poster_path: string,
  release_date: string,
  title: string,
  genre_ids: object,
  reviewContent: ContentWatched 
}

export type MovieDB = {
  page: number,
  results: Array<MovieDBResults>
  total_pages: number,
  total_results: number
}
