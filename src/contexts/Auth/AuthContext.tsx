import {createContext} from 'react'
import { User } from '../../types/User'
import { UserRegister } from '../../types/UserRegister'
import { ContentWatched } from '../../types/ContentWatched'

export type AuthContextType = {
  user: User | null
  contentWatched: Array<ContentWatched> | null
  login: (email: string, password: string) => Promise<boolean>
  autoLogin: () => Promise<boolean>
  logout: () => void
  register: (userRegister: UserRegister) => Promise<boolean>
  createContent: (content: object, userToken: string | null | undefined) => Promise<boolean>
  updateContent: (content: ContentWatched, id: string, userToken: string | null | undefined) => Promise<boolean>
  deleteContent: (id: string, userToken: string | null | undefined) => Promise<boolean>
  deleteAllContentWatched: (user: User | null) => Promise<boolean>
}

export const AuthContext = createContext<AuthContextType>(null!)