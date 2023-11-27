import { MovieDBResults } from "./MovieDB"

export type ContentWatched = {
  contentId: number,
  id: string,
  rate: number, 
  comment: string | undefined,
  contentWatchedItem?: MovieDBResults,
  user?: Object
} 