import {Route, Routes} from 'react-router-dom'
import { AuthForm } from './pages/AuthForm/AuthForm'
import UserAuth from './pages/UserAuth/UserAuth'
import { RequiredAuth } from './contexts/Auth/RequiredAuth'
import { SearchContent } from './pages/SearchContent/SearchContent'
import { Home } from './pages/Home'
function App() {
  
  return (
    <section className='text-white'>
      <Routes>
        <Route path='/' element={<AuthForm />} />
        <Route path='home' element={ <RequiredAuth><UserAuth /></RequiredAuth>}> 
          <Route path="/home" index element={<Home />} />
          <Route path='searchContent'  element={<SearchContent/>} />
        </Route>
      </Routes>
    </section>
  )
}

export default App
