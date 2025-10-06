import React from 'react'
import { useAuthContext } from '../context/AuthContext'

export const LoginPage = () => {

    const {isChecking, isAuthenticated , user, loginWithEmailAndPassword, logout } = useAuthContext()

    // if (isChecking) {
    //   return <h3>Verificando usuario... </h3>
    // }
  return (
    <div className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center gap-6 border border-gray-200 w-full max-w-md mx-auto">
    <h3 className="text-2xl font-bold text-green-700 mb-2">Login Page</h3>
    {isAuthenticated ? (
      <>
        <h3 className="text-lg font-semibold text-green-700">Bienvenido</h3>
        <pre>
          {JSON.stringify(user, null, 2)}
        </pre>
        <button 
        onClick={() => logout()}
        className="bg-amber-600 text-white rounded-xl mt-2 px-4 py-2 font-bold shadow hover:bg-blue-700 transition">Salir</button>
      </>
    ) : (
      <>
        <h3 className="text-lg font-semibold text-gray-700">Log in</h3>
        <button 
        onClick={() => loginWithEmailAndPassword('ignmonlop@alu.edu.gva.es' ,'123456')}
        className="bg-green-600 text-white rounded-xl mt-2 px-4 py-2 font-bold shadow hover:bg-red-700 transition">Acceder</button>
      </>
    )}
    <h2 className="text-md font-bold text-gray-700 mb-2">Código del componente:</h2>
    <pre className="bg-gray-100 rounded-md p-4 w-full max-w-xl text-left text-xs text-gray-800 overflow-x-auto border border-gray-200">
      {`
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
        }

        interface User{
            name: string;
            email: string;
        }

        const [status, setStatus] = useState(AuthStatus.CHECKING)

        useEffect(() => {
          setTimeout(() => {
            setStatus(AuthStatus.NOT_AUTHENTICATED)
          }, 1500)
        },)

        return (
          <AuthContext.Provider value ={{
              // Propiedades
              status: status,
  
              // Getters
              isChecking: status === AuthStatus.CHECKING,
              isAuthenticated:  status === AuthStatus.AUTHENTICATED
          }}>
              {children}
          </AuthContext.Provider>
        )
      `}
    </pre>
  </div>
  )
}
