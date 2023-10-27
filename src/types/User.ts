import {ContentWatched} from './ContentWatched'
export type User = {
  token: string | null,
  id: number,
  name:string,
  email: string,
  password?: string,
  contentWatched: Array<ContentWatched>
}