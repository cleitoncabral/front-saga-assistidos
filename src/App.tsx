import { useContext, useState } from 'react'
import { Header } from './components/Header'
import {Route, Routes} from 'react-router-dom'
import { AuthForm } from './pages/AuthForm'
import { Home } from './pages/Home'
import { RequiredAuth } from './contexts/Auth/RequiredAuth'

function App() {
  const [user, setUser] = useState()

  return (
    <section className='text-white'>
      <Header />
      
      <Routes>
        <Route path='/' element={<AuthForm />} />
        <Route path='/home' element={ <RequiredAuth><Home /></RequiredAuth>} />
      </Routes>
    </section>
  )
}

export default App
3