// AuthContext.tsx
import React, { createContext, useState, useEffect, ReactNode } from 'react';

// Определение типов
interface AuthContextType {
  isAuthenticated: boolean;
  username: string;
  loginContext: (token: string, username?: string) => void;
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
    const storedUsername = localStorage.getItem('username');
    if (token) {
      setIsAuthenticated(true);
    }

    if (storedUsername) {
      setUsername(storedUsername); 
    }
  }, []);

  const loginContext = (token: string, username: string = 'Default Name') => {
    // Пример логики авторизации
    localStorage.setItem('token', token);
    localStorage.setItem('username', username);
    setIsAuthenticated(true);
    setUsername(username);
    
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