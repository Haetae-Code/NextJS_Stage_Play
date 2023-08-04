// AuthProvider.js
import React, { useState } from 'react';

export const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  
  const value = { isLoggedIn, setIsLoggedIn };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
