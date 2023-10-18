import {useContext} from 'react'
import { AuthContext } from './AuthContext'
import { AuthForm } from '../../pages/AuthForm/AuthForm'

export const RequiredAuth = ({children}: {children: JSX.Element}) => {
  const auth = useContext(AuthContext)

  if(!auth.user) {
    return <AuthForm />
  }
  return children
}