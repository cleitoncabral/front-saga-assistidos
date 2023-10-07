import {Route, Routes} from 'react-router-dom'
import { AuthForm } from './pages/AuthForm'
import { Home } from './pages/Home'
import { RequiredAuth } from './contexts/Auth/RequiredAuth'
import { SearchContent } from './pages/SearchContent/SearchContent'
import { useState } from 'react'

function App() {
  const [searchResult, setSearchResult] = useState<object | null>(null)
  
  return (
    <section className='text-white'>
      <Routes>
        <Route path='/' element={<AuthForm />} />
        <Route path='/home' element={ <RequiredAuth><Home onSearchResult={setSearchResult}/></RequiredAuth>} />
        <Route path='/searchContent'  element={ <RequiredAuth><SearchContent searchResult={searchResult} /></RequiredAuth>} />
      </Routes>
    </section>
  )
}

export default App
