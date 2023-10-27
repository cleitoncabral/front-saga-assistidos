import { MovieDBResults } from "./MovieDB"

export type ContentWatched = {
  contentId: number,
  rate: Number,
  comment: String,
  contentWatchedItem?: MovieDBResults,
  user: Object
} 