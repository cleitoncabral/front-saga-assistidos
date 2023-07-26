import {createContext} from 'react'
import { User } from '../../types/User'
import { UserRegister } from '../../types/UserRegister'

export type AuthContextType = {
  user: User | null
  signin: (email: string, password: string) => Promise<boolean>
  signout: () => void
  register: (userRegister: UserRegister) => Promise<boolean>
}

export const AuthContext = createContext<AuthContextType>(null!)