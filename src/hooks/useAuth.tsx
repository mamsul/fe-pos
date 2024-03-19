import { createContext, useContext, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { removeToken, setToken } from '../lib/utils';
import { useLocalStorage } from './useLocalStorage';

interface IAuthContext {
  user: IUser | null;
  handleAuthData: (data: IUser) => void;
  logout: () => void;
}

export const AuthContext = createContext<IAuthContext | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useLocalStorage('user', null);
  const navigate = useNavigate();

  const handleAuthData = async (data: IUser) => {
    setToken({
      accessToken: data.accessToken,
      refreshToken: data.refreshToken,
    });
    setUser({ name: data.name, email: data.email, roleId: data.roleId });
    navigate('/dashboard');
  };

  const logout = () => {
    setUser(null);
    removeToken();
    navigate('/', { replace: true });
  };

  const value = useMemo<IAuthContext>(
    () => ({
      user,
      handleAuthData,
      logout,
    }),
    [user],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
