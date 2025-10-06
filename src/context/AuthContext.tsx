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
   errorMenssage?: string;
   
   isChecking?: boolean;
   isAuthenticated?: boolean;

   // Acction or Methods
   loginWithEmailAndPassword: (email: string, passowrd: string) => void;
   logout:() => void;
}

interface User{
    name?: string;
    email?: string;
}

// Para manejo de estados globales (Variables Globales)
export const AuthContext = createContext({} as AuthState)

export const useAuthContext = () => useContext(AuthContext); 

export const AuthProvider = ({ children }: PropsWithChildren) => {

    const [status, setStatus] = useState(AuthStatus.CHECKING)
    const [user, setUser] = useState<User>()

    // useEffect(() => {
    //   setTimeout(() => {
    //     setStatus(AuthStatus.NOT_AUTHENTICATED)
    //   }, 1500)
    // },)

    const loginWithEmailAndPassword = (email:string, password:string ) => {
        setUser({
            name: 'Nacho',
            email: email,
        })
        setStatus(AuthStatus.AUTHENTICATED)
    }

    const logout = () =>{
        setUser(undefined)
        setStatus(AuthStatus.NOT_AUTHENTICATED)
    }
    

    return (
        <AuthContext.Provider value ={{
            // Propiedades
            status: status,
            user: user,

            // Getters
            isChecking: status === AuthStatus.CHECKING,
            isAuthenticated:  status === AuthStatus.AUTHENTICATED,

            // Action
            loginWithEmailAndPassword,
            logout,
        }}>
            {children}
        </AuthContext.Provider>
    )

    // Para llamar el contexto en otras pantallas, se realiza lo siguiente:
    // import { useAuthContext } from "../context/AuthContext"
    // const {} = useAuthContext()
}