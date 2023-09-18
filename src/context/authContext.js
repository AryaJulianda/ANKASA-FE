'use client'

import React from "react";

const AuthContext = React.createContext();
const { Provider } = AuthContext;

const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = React.useState({
   token: "",
  });

  const setUserAuthInfo = ({ data }) => {
    console.log(data.access_token,'ini token')
   const token = localStorage.setItem("access_token", data.access_token);

   setAuthState({
    token,
   });
 };
 
 // checks if the user is authenticated or not
 const isUserAuthenticated = () => !!authState.token;

 const logout = () => {
  // Hapus token dari localStorage
  localStorage.removeItem("token");

  // Set ulang keadaan autentikasi ke nilai awal
  setAuthState({
    token: "",
  });
};

 return (
  <Provider
    value={{
    authState,
    setAuthState: (userAuthInfo) => 
    setUserAuthInfo(userAuthInfo),
    isUserAuthenticated,
    logout
    }}
  >
    {children}
  </Provider>
 );
};

export { AuthContext, AuthProvider  };
