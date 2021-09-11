import React, { createContext, useState } from 'react'

 export const AuthContext = createContext();
 export const AuthContextProvider = (props)=>{
          const [isLoggedIn,setIsLoggedIn] = useState(false)
          return( 
              <AuthContext.Provider value={{isLoggedIn,setIsLoggedIn}}>
                  {props.children}
              </AuthContext.Provider>
          )
 };