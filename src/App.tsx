import { Routes, Route, Navigate } from 'react-router-dom';
import { Login } from './Screens/Login';
import { NotFoundPage } from './Screens/NotFoundPage';
import { useContext } from 'react';
import { AuthenticateContext } from './context/Authenticate';
import { LoaderAccessValidation } from './components/system/LoaderAccessValidation';
import AdminRoutes from './routes/AdminRoutes';

function App() {
  const { isValidatingAccess } = useContext(AuthenticateContext);

  if (isValidatingAccess)
    return <LoaderAccessValidation />

  return (
    <Routes>
      <Route path="*" element={<NotFoundPage />} />
      <Route path='/' element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      {AdminRoutes}
    </Routes>
  )
}

export default App;