import { MovieDBResults } from "./MovieDB"

export type ContentWatched = {
  contentId: number,
  rate: number,
  comment: string,
  contentWatchedItem?: MovieDBResults,
  user: Object
} 