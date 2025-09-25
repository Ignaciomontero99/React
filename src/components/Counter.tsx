import React from 'react'
import { useCounter } from '../hooks/useCounter';

export const Counter = () => {

  const {count, inscreaseBy} = useCounter()

  return (
    <> 
      <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center gap-4 border border-gray-200">
        <h1 className="text-2xl font-bold text-yellow-600 mb-2">Counter</h1>
        <small className="text-gray-500 mb-2">Apartado para explicar cómo funciona un contador.</small>
        <span className="text-lg">Contador: <span className="text-green-600 font-bold">{count}</span></span>
        <div className="flex flex-row gap-4">
          <button 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => inscreaseBy(1)}
          >
            Incrementar
          </button>
          <button 
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => inscreaseBy(-1)}
          >
            Decrementar
          </button>
        </div>
        <h2 className="text-md font-bold text-gray-700 mb-2">Código del componente:</h2>
        <pre className="bg-gray-100 rounded-md p-4 w-full max-w-xl text-left text-xs text-gray-800 overflow-x-auto border border-gray-200">
          {`
          import React, { useState } from 'react'

          export const Counter = () => {

            return (
              <div>
                { ........ UI Code ....... }
                onClick={() => inscreaseBy(1)}
                or 
                onClick={() => inscreaseBy(-1)}
              </div>
            );

            UseCount --> Hook
             const [count, setCount] = useState(10)
                
                  const inscreaseBy = (value: number) => {
                    setCount(Math.max(value + count, 0));
                  }
            
              return  {
                // Prpiedades
                count,
                
                // Accion
                inscreaseBy,
              }
          }`}
        </pre>
      </div>    
</> )}