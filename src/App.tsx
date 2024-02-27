import {RouterProvider} from 'react-router-dom'
import { router } from './router/router'
function App() {
  
  return (
    <section className='h-full bg-black text-white'>
      <RouterProvider router={router} />
    </section>
    // <section className='h-full bg-black text-white'>
    //   <Routes>
    //     <Route path='/' element={<AuthForm />} />
    //     <Route path='home' element={ <RequiredAuth><UserAuth /></RequiredAuth>}> 
    //       <Route path="/home" index element={<Home />} />
    //       <Route path='searchContent'  element={<SearchContent />} />
    //       <Route path='searchContent/movie'  element={<AddContent />} />
    //       <Route path='/home/movie'  element={<AddContent />} />
    //     </Route>
    //   </Routes>
    // </section>
  )
}

export default App
