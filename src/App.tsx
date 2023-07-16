import { useContext, useState } from 'react'
import { Header } from './components/Header'
import {Route, Routes} from 'react-router-dom'
import { AuthForm } from './pages/AuthForm'
import { Home } from './pages/Home'

function App() {
  const [user, setUser] = useState()

  return (
    <section className='text-white'>
      <Header />
      
      <Routes>
        <Route path='/' element={<AuthForm />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </section>
  )
}

export default App
3