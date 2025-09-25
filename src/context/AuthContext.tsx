import {Children, createContext, useContext, useEffect, useState, type PropsWithChildren} from "react";

enum AuthStatus{
    CHECKING = 'checking',
    AUTHENTICATED = 'authtenticated',
    NOT_AUTHENTICATED = 'not-authenticated'
}

// Clases con interface
interface AuthState {
   status?: AuthStatus;
   toker?: string;
   user?: User;
   errorMenssage?: string
}

interface User{
    name: string;
    email: string;
}

// Para manejo de estados globales (Variables Globales)
export const AuthContext = createContext({} as AuthState)

export const useAuthContext = () => useContext(AuthContext); 

export const AuthProvider = ({ children }: PropsWithChildren) => {

    const [status, setStatus] = useState(AuthStatus.CHECKING)

    useEffect(() => {
      setTimeout(() => {
        setStatus(AuthStatus.NOT_AUTHENTICATED)
      }, 1500)
    },)
    

    return (
        <AuthContext.Provider value ={{
            status: status
        }}>
            {children}
        </AuthContext.Provider>
    )

    // Para llamar el contexto en otras pantallas, se realiza lo siguiente:
    // import { useAuthContext } from "../context/AuthContext"
    // const {} = useAuthContext()
}