export type AuthenticateContextType = {
  isLogged: boolean,
  handleLogout: () => Promise<void>,
  handleLogin: (email: string, password: string) => Promise<boolean>,
  authenticateUserData: any,
  isValidatingAccess: boolean
}

export type LoginFormType = {
  email: string,
  password: string
}