import { MovieDBResults } from "./MovieDB"

export type ContentWatched = {
  contentId: number,
  id: string | undefined,
  rate: number, 
  comment?: string,
  contentWatchedItem?: MovieDBResults,
  user?: Object
} 