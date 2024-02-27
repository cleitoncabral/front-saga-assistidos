import { MovieDBResults } from "./MovieDB"

export type ContentWatched = {
  contentId: number,
  id: string,
  rate: number, 
  comment?: string,
  contentWatchedItem?: MovieDBResults,
  user?: Object
} 