import React from 'react'

export const ObjectLiterals = () => {

    interface Person {
        age: number;
        firstName: string;
        lastName: string;
        address: Address;
    }

    interface Address {
        country: string;
        province: string;
        city: string;
        street?: string; // Propiedad opcional gracias a ? 
        zipCode: number;
    }

    const person: Person = {
        age: 26,
        firstName: 'Ignacio',
        lastName: ' Montero',
        address: {
            country: 'Spain',
            province: 'Valencia',
            city: 'Aldaia',
            zipCode: 46960
        }
    }
    return (
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center gap-4 border border-gray-200">
            <h1 className="text-2xl font-bold text-orange-700 mb-2">Objects Literals</h1>
            <small className="text-gray-500 mb-2">Apartado para explicar cómo funcionan los objetos.</small>
            <h2 className="text-xl font-semibold mb-2">Objeto Persona:</h2>
            <pre className="bg-gray-100 rounded-md p-4 w-full text-left text-sm text-gray-800 overflow-x-auto">
                {JSON.stringify(person, null, 2)}
            </pre>
        </div>
    )
}
