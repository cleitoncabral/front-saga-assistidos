import {RouterProvider} from 'react-router-dom'
import { router } from './router/router'
function App() {
  
  return (
    <section className='h-full bg-black text-white'>
      <RouterProvider router={router} />
    </section>
  )
}

export default App
