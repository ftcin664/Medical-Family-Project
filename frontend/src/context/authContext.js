import { createContext, useState, useEffect } from "react";
import PropTypes from 'prop-types';

// Create Context
export const AuthContext = createContext();

// Provide Context
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Load token from sessionStorage or localStorage
    const savedToken = sessionStorage.getItem("authToken");
    if (savedToken) {
      setToken(savedToken);
      // Optionally fetch user details from token or backend
      const userDetails = JSON.parse(sessionStorage.getItem("userDetails"));
      setUser(userDetails);
    }
  }, []);

  const login = (token, userDetails) => {
    setToken(token);
    setUser(userDetails);
    // Save to sessionStorage or localStorage
    sessionStorage.setItem("authToken", token);
    sessionStorage.setItem("userDetails", JSON.stringify(userDetails));
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    sessionStorage.removeItem("authToken");
    sessionStorage.removeItem("userDetails");
  };

  return (
    <AuthContext.Provider value={{ token, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired
};