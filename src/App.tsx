import { Routes, Route, Navigate } from 'react-router-dom';
import { Login } from './Screens/Login';
import { NotFoundPage } from './Screens/NotFoundPage';
import { useContext } from 'react';
import { AuthenticateContext } from './context/Authenticate';

function App() {
  const {} = useContext(AuthenticateContext);

  return (
    <Routes>
      <Route path="*" element={<NotFoundPage />} />
      <Route path='/' element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default App