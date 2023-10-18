import { useContext } from 'react'
import { AuthContext } from "../../contexts/Auth/AuthContext"

export const Home = () => {
  const userAuth = useContext(AuthContext)
  return (
    <section>
      <h1>boas vindas, {userAuth.user?.name}</h1>
    </section>
  )
}