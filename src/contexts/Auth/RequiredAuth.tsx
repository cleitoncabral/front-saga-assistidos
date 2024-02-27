import {PropsWithChildren, useContext, useEffect} from 'react'
import { AuthContext } from './AuthContext'
import { Outlet, useNavigate, useOutletContext, useParams } from 'react-router-dom'

export const RequiredAuth = () => {
  const {user} = useContext(AuthContext)
  const context = useOutletContext()
  const navigate = useNavigate()

  useEffect(() => {
    if(user === null) {
      navigate('/', {replace: true})
    }
  }, [navigate, user])

  return <Outlet context={context} />
}