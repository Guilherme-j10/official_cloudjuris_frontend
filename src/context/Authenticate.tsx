import { AuthenticateContextType } from "@/Dtos";
import { createContext, useEffect, useState } from "react";
import { toast } from 'react-toastify';

export const AuthenticateContext = createContext({} as AuthenticateContextType);

export const AuthenticateProvider: React.FC <{ children: React.ReactNode }> =  ({ children }) => {
  const localStorageKey = 'userStateAccessToken';
  const [ isLogedIn, setIsLogedIn ] = useState(false);
  const [ isVlidatingAccess, setIsVlidatingAccess ] = useState(true);

  const handleLogin = async (email: string, password: string): Promise<boolean> => {
    const fakeEmail = 'guilherme@cloudjuris';
    const fakePassword = '1234';

    await new Promise(resolve => setTimeout(() => resolve(true), 1000));

    if (email === fakeEmail && password === fakePassword) {
      localStorage.setItem(localStorageKey, 'true');
      setIsLogedIn(true);

      return true;
    }

    toast.error('Senha ou e-mail incorretos!');
    return false;
  }

  const handleLogout = async (): Promise<void> => {
    localStorage.setItem(localStorageKey, 'false');
    setIsLogedIn(false);
  }

  const handleValidateTokenAccess = async (): Promise<void> => {
    await new Promise(resolve => setTimeout(() => resolve(true), 1000));
    const getTokenFromLocalStorage = localStorage.getItem(localStorageKey);

    if (getTokenFromLocalStorage?.length) {
      if (getTokenFromLocalStorage === 'true') {
        setIsVlidatingAccess(false);
        setIsLogedIn(true);
      }

      return;
    }

    setIsVlidatingAccess(false)
  } 

  useEffect(() => {
    handleValidateTokenAccess();
  }, []);

  return (
    <AuthenticateContext.Provider value={{
      isLogged: isLogedIn,
      authenticateUserData: {},
      handleLogin,
      handleLogout,
      isValidatingAccess: isVlidatingAccess
    }}>
      {children}
    </AuthenticateContext.Provider>
  );
} 