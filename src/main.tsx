import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from './components/theme-provider.tsx'
import { BrowserRouter } from 'react-router-dom';
import { AuthenticateProvider } from './context/Authenticate.tsx'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthenticateProvider>
      <BrowserRouter>
        <ThemeProvider
          defaultTheme='light'
        >
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </AuthenticateProvider>
    <ToastContainer 
      position='bottom-right'
      theme='colored'
    />
  </React.StrictMode>,
)