import React from 'react'
import { useAuthContext } from '../context/AuthContext'

export const LoginPage = () => {

    const {status} = useAuthContext()
  return (
    <>
    <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center gap-4 border border-gray-200 w-full max-w-md mx-auto">
      <h3 className="text-2xl font-bold text-blue-700 mb-2">Login Page</h3>
      <span className="text-lg text-gray-700">Estado: <span className="font-semibold text-green-600">{status}</span></span>
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
            errorMenssage?: string
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
                  status: status
              }}>
                  {children}
              </AuthContext.Provider>
          )
          
        `}
      </pre>
    </div>
  </>
  )
}
