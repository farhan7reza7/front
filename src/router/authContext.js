import { createContext, useCallback, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const navigate = useNavigate();

  const login = useCallback(() => {
    setIsAuthenticated(true);
    navigate("../");
  }, [navigate]);

  const logout = useCallback(() => {
    setIsAuthenticated(false);
    //navigate("../login");
  }, []);

  const register = useCallback(() => {
    setIsAuthenticated(true);
    navigate("../");
  }, [navigate]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
