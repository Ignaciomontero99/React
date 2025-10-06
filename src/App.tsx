import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BasicTypes } from './typescript/BasicTypes'
import { ObjectLiterals } from './typescript/ObjectLiterals'
import { BasicFunctions } from './typescript/BasicFunctions'
import { Counter } from './components/Counter'
import { AuthProvider } from './context/AuthContext'
import { LoginPage } from './components/LoginPage'
import { UsersPage } from './components/UsersPage'

function App() {
  
  return (
    <>
      <AuthProvider>
        <div className="flex justify-center items-center mb-6">
          <a href="https://vitejs.dev" target="_blank"> </a>
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </div>
        <h3 className="text-3xl font-bold underline mb-8 text-center">BASES APP TSX</h3>
        <div className="flex flex-row gap-6 justify-center items-stretch">
          <div className="flex-1 flex flex-col gap-6">
            <BasicTypes />
            <Counter />
          </div>
          <div className="flex-1 flex flex-col gap-6">
            <ObjectLiterals />
            <LoginPage />
          </div>
          <div className="flex-1 flex flex-col gap-6">
            <BasicFunctions />
            <UsersPage />
          </div>
        </div>
      </AuthProvider>
    </>
  )
}

export default App
