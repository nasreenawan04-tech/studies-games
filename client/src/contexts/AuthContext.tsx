
import React, { createContext, useContext, useState, useEffect } from 'react';

export interface User {
  id: string;
  username: string;
  email: string;
  totalScore: number;
  gamesPlayed: number;
  createdAt: string;
  avatar?: string;
}

export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (username: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  loading: boolean;
  updateUserScore: (gameId: string, score: number) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for stored user session
    const storedUser = localStorage.getItem('dapsigames-user');
    const token = localStorage.getItem('dapsigames-token');
    
    if (storedUser && token) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        localStorage.removeItem('dapsigames-user');
        localStorage.removeItem('dapsigames-token');
      }
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Login failed');
      }

      const data = await response.json();
      setUser(data.user);
      localStorage.setItem('dapsigames-user', JSON.stringify(data.user));
      localStorage.setItem('dapsigames-token', data.token);
    } catch (error) {
      throw error;
    }
  };

  const register = async (username: string, email: string, password: string) => {
    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Registration failed');
      }

      const data = await response.json();
      setUser(data.user);
      localStorage.setItem('dapsigames-user', JSON.stringify(data.user));
      localStorage.setItem('dapsigames-token', data.token);
    } catch (error) {
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('dapsigames-user');
    localStorage.removeItem('dapsigames-token');
  };

  const updateUserScore = async (gameId: string, score: number) => {
    if (!user) return;

    try {
      const token = localStorage.getItem('dapsigames-token');
      const response = await fetch('/api/auth/update-score', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ gameId, score }),
      });

      if (response.ok) {
        const updatedUser = await response.json();
        setUser(updatedUser);
        localStorage.setItem('dapsigames-user', JSON.stringify(updatedUser));
      }
    } catch (error) {
      console.error('Failed to update score:', error);
    }
  };

  const value = {
    user,
    login,
    register,
    logout,
    loading,
    updateUserScore,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
