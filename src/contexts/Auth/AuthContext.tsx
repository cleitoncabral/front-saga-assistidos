import {createContext} from 'react'
import { User } from '../../types/User'
import { UserRegister } from '../../types/UserRegister'
import { ContentWatched } from '../../types/ContentWatched'

export type AuthContextType = {
  user: User | null
  register: (userRegister: UserRegister) => Promise<boolean>
  login: (email: string, password: string) => Promise<boolean | undefined>
  autoLogin: () => Promise<boolean>
  contentWatched: Array<ContentWatched> | null
  logout: () => void
  createContent: (content: object, userToken: string | undefined) => Promise<boolean>
  updateContent: (content: ContentWatched, userToken: string | undefined) => Promise<boolean>
  deleteContent: (id: string, userToken: string | undefined) => Promise<boolean>
  deleteAllContentWatched: (user: User | null) => Promise<boolean>
}

export const AuthContext = createContext<AuthContextType>(null!)