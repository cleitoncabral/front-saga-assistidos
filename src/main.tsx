import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './global.css'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './contexts/Auth/AuthProvider.tsx'
import { DataContentProvider } from './contexts/DataContentMovieApi/DataContentProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <AuthProvider>
        <DataContentProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </DataContentProvider>
      </AuthProvider>
    </React.StrictMode>
)
