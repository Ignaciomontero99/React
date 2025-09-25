import React from 'react'

export const BasicTypes = () => {

    const name: string = 'Ignacio' // Constante String
    const age: number = 26 // Constante Number (O int)
    const isActive: boolean = true // Constante Booleana 
    const powers: string[] = ['PHP', 'JavaScript', 'TypeScript'] // Array de Strings

  return (
    <>
      <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center gap-4 border border-gray-200">
        <h1 className="text-2xl font-bold text-purple-700 mb-2">Basics Types</h1>
        <small className="text-gray-500 mb-2">Apartado para explicar tema de constantes.</small>
        <h3 className="text-lg">Hola <span className="font-semibold text-blue-600">{name}</span>, bienvenido a Typescript</h3>
        <h2 className="text-lg">Tengo <span className="font-bold text-green-600">{age}</span> años</h2>
        <span className="text-base mb-2">{isActive ? <span className="text-green-600 font-semibold">El usuario está activo</span> : <span className="text-red-600 font-semibold">El usuario no está activo</span>}</span>
        <h4 className="text-md font-bold mt-2">Mis superpoderes son:</h4>
        <p className="text-blue-500">{powers.join(', ')}</p>
        <h2 className="text-md font-bold text-gray-700 mb-2">Código de las constantes:</h2>
        <pre className="bg-gray-100 rounded-md p-4 w-full max-w-xl text-left text-sm text-gray-800 overflow-x-auto border border-gray-200">
        {`
        const name: string = 'Ignacio'
        const age: number = 26
        const isActive: boolean = true
        const powers: string[] = ['PHP', 'JavaScript', 'TypeScript']
        `}
        </pre>
      </div>
    </>
  )
}
