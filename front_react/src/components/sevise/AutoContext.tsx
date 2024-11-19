// AuthContext.tsx
import React, { createContext, useState, useEffect, ReactNode } from 'react';

// Определение типов
interface AuthContextType {
  isAuthenticated: boolean;
  username: string;
  loginContext: (token: string) => void;
  logoutContext: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

// Создание контекста
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Провайдер контекста
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  useEffect(() => {
    // Пример проверки авторизации при загрузке приложения
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const loginContext = (token: string) => {
    // Пример логики авторизации
    localStorage.setItem('token', token);
    setIsAuthenticated(true);
    setUsername('userName');
  };

  const logoutContext = () => {
    // Пример логики выхода
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    setUsername('');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, username, loginContext, logoutContext }}>
      {children}
    </AuthContext.Provider>
  );
};