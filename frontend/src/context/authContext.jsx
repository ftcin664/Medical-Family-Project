import { createContext, useState, useEffect } from "react";
import PropTypes from 'prop-types';

// Create Context
export const AuthContext = createContext();

// Provide Context
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load token from sessionStorage or localStorage
    const savedToken = localStorage.getItem("authToken");
    if (savedToken) {
      setToken(savedToken);
      // Optionally fetch user details from token or backend
      const userDetails = JSON.parse(localStorage.getItem("userDetails"));
      setUser(userDetails);
    }
    setIsLoading(false);
  }, []);

  const login = (token, userDetails) => {
    setToken(token);
    setUser(userDetails);
    // Save to localStorage or localStorage
    localStorage.setItem("authToken", token);
    localStorage.setItem("userDetails", JSON.stringify(userDetails));
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("authToken");
    localStorage.removeItem("userDetails");
  };

  return (
    <AuthContext.Provider value={{ token, user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired
};