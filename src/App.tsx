import { Header } from './components/Header'
import {Route, Routes} from 'react-router-dom'
import { AuthForm } from './pages/AuthForm'
import { Home } from './pages/Home'
import { RequiredAuth } from './contexts/Auth/RequiredAuth'
import { useContext } from "react"
import { AuthContext } from "./contexts/Auth/AuthContext"
function App() {
  const userAuth = useContext(AuthContext)
  console.log(userAuth)
  return (
    <section className='text-white'>
      <Header isAuth={userAuth.user ? true : false} />
      
      <Routes>
        <Route path='/' element={<AuthForm />} />
        <Route path='/home' element={ <RequiredAuth><Home /></RequiredAuth>} />
      </Routes>
    </section>
  )
}

export default App
