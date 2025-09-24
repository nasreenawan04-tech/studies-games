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
  if (context === undefined) {
    // Return a default context instead of throwing error to prevent crashes
    console.warn('useAuth called outside of AuthProvider, returning default values');
    return {
      user: null,
      login: async () => {},
      register: async () => {},
      logout: () => {},
      loading: false, // Added loading property to match AuthContextType
      updateUserScore: async () => {} // Added updateUserScore property to match AuthContextType
    };
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
      // Mock authentication for development
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API delay

      // Simple mock validation
      if (email === 'demo@dapsigames.com' && password === 'demo123') {
        const mockUser: User = {
          id: '1',
          username: 'Demo User',
          email: email,
          totalScore: 1250,
          gamesPlayed: 15,
          createdAt: new Date().toISOString(),
          avatar: undefined
        };

        setUser(mockUser);
        localStorage.setItem('dapsigames-user', JSON.stringify(mockUser));
        localStorage.setItem('dapsigames-token', 'mock-jwt-token');
        return;
      }

      // For any other credentials, create a user account automatically for demo
      const mockUser: User = {
        id: Math.random().toString(36).substr(2, 9),
        username: email.split('@')[0],
        email: email,
        totalScore: 0,
        gamesPlayed: 0,
        createdAt: new Date().toISOString(),
        avatar: undefined
      };

      setUser(mockUser);
      localStorage.setItem('dapsigames-user', JSON.stringify(mockUser));
      localStorage.setItem('dapsigames-token', 'mock-jwt-token');
    } catch (error) {
      throw new Error('Login failed. Please try again.');
    }
  };

  const register = async (username: string, email: string, password: string) => {
    try {
      // Mock registration for development
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API delay

      // Check if user already exists in localStorage (simple check)
      const existingUsers = localStorage.getItem('dapsigames-users') || '[]';
      const users = JSON.parse(existingUsers);

      if (users.find((user: any) => user.email === email)) {
        throw new Error('User with this email already exists');
      }

      const newUser: User = {
        id: Math.random().toString(36).substr(2, 9),
        username: username,
        email: email,
        totalScore: 0,
        gamesPlayed: 0,
        createdAt: new Date().toISOString(),
        avatar: undefined
      };

      // Save to mock database
      users.push(newUser);
      localStorage.setItem('dapsigames-users', JSON.stringify(users));

      setUser(newUser);
      localStorage.setItem('dapsigames-user', JSON.stringify(newUser));
      localStorage.setItem('dapsigames-token', 'mock-jwt-token');
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
      // Mock score update
      const updatedUser = {
        ...user,
        totalScore: user.totalScore + score,
        gamesPlayed: user.gamesPlayed + 1
      };

      setUser(updatedUser);
      localStorage.setItem('dapsigames-user', JSON.stringify(updatedUser));

      // Update in mock database too
      const existingUsers = localStorage.getItem('dapsigames-users') || '[]';
      const users = JSON.parse(existingUsers);
      const userIndex = users.findIndex((u: any) => u.id === user.id);

      if (userIndex >= 0) {
        users[userIndex] = updatedUser;
        localStorage.setItem('dapsigames-users', JSON.stringify(users));
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