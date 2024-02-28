import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './global.css'
import { AuthProvider } from './contexts/Auth/AuthProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <AuthProvider>
          <App />
    </AuthProvider>
)
