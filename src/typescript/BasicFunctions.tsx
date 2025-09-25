import React from 'react'

// Función que suma dos números y retorna un número
const addTwoNumbers = (a: number, b: number): string => { // También funciona sin typar los valores.
    return ` ${a + b} ` // Retorna la suma como string.
    // $ Es una template string que permite insertar variables dentro de un string con ${variable}
}

export const BasicFunctions = () => {
  return (
    <>
      <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center gap-4 border border-gray-200">
        <h1 className="text-2xl font-bold text-blue-600 mb-2">Basic Functions</h1>
        <small className="text-gray-500 mb-2">Apartado para explicar cómo funciona una función.</small>
        <span className="text-lg">La suma de <span className="font-semibold">2 + 3</span> es: <span className="text-green-600 font-bold">{addTwoNumbers(2, 3)}</span></span>
         <h2 className="text-md font-bold text-gray-700 mb-2">Código de la función:</h2>
        <pre className="bg-gray-100 rounded-md p-4 w-full max-w-xl text-left text-sm text-gray-800 overflow-x-auto border border-gray-200">
        {`const addTwoNumbers = (a: number, b: number): string => {
          return \` \${a + b} \` // Retorna la suma como string.
        }`}
        </pre>
      </div>
      <div className="mt-4 w-full flex flex-col items-center">
       
      </div>
    </>
  )
}
