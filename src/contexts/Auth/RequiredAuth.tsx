import {useContext} from 'react'
import { AuthContext } from './AuthContext'

export const RequiredAuth = ({children}: {children: JSX.Element}) => {
  const auth = useContext(AuthContext)

  if(!auth.user) {
    return <h1>Erro</h1>
  }
  return children
}