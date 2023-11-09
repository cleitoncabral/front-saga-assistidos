import {createContext} from 'react'
import { User } from '../../types/User'
import { UserRegister } from '../../types/UserRegister'
import { ContentWatched } from '../../types/ContentWatched'

export type AuthContextType = {
  user: User | null
  contentWatched: Array<ContentWatched> | null
  signin: (email: string, password: string) => Promise<boolean>
  signout: () => void
  register: (userRegister: UserRegister) => Promise<boolean>
  createContent: (content: object, userToken: string | null | undefined) => Promise<boolean>
}

export const AuthContext = createContext<AuthContextType>(null!)