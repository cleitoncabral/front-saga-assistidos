import {useContext} from 'react'
import { AuthContext } from './AuthContext'
import { Home } from '../../pages/Home'

export const RequiredAuth = ({children}: {children: JSX.Element}) => {
  const auth = useContext(AuthContext)

  if(!auth.user) {
    return <Home />
  }
  return children
}