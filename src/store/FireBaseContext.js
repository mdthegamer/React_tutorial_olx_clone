import {createContext, useState} from 'react'
export const FirebasesContext = createContext(null)
export const AuthContext = createContext(null);
export default function Context ({children}){
    const [user,setUser]=useState('hello')
     return(
         <AuthContext.Provider value={{user,setUser}}>
             {children}
         </AuthContext.Provider>
     )
}