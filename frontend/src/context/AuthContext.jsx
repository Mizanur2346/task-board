import { createContext, useContext, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext();

const API_BASE = 'http://127.0.0.1:8000/api';

export function AuthProvider({ children }) {
  const [token, setToken] = useState(
    localStorage.getItem('accessToken')
  );

  const login = async (username, password) => {
    const response = await axios.post(`${API_BASE}/login/`, {
      username,
      password
    });

    localStorage.setItem('accessToken', response.data.access);
    localStorage.setItem('refreshToken', response.data.refresh);

    setToken(response.data.access);
  };

  const register = async (username, password) => {
    await axios.post(`${API_BASE}/register/`, {
      username,
      password
    });

    await login(username, password);
  };

  const logout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    setToken(null);
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        login,
        register,
        logout,
        isAuthenticated: !!token
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);