import React from 'react'
import { useForm } from 'react-hook-form';

// Definimos los tipos para los inputs del formulario. Este tipo de objeto no tiene metodos.
type FormInputs = {
    email: string;
    password: string;
}

export const FormPages = () => {

const {handleSubmit} = useForm<FormInputs>({
    defaultValues: {
        email: 'ignmonlop@alu.edu.gva.es',
        password: '123456'
    }
});

const onSubmit = (myForm: FormInputs) => {
    console.log(myForm);
}

  return (
    <>
        <h3>Form Page</h3>

        <div className="flex flex-col space-y-2 w-[500px]">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input 
                    type="email" 
                    placeholder="Email"
                    className="border border-gray-300 rounded px-3 py-2"
                />
                <input 
                    type="password" 
                    placeholder="Password"
                    className="border border-gray-300 rounded px-3 py-2"
                />
                <button 
                    type="submit" 
                    className="bg-blue-500 text-white rounded px-3 py-2 hover:bg-blue-600">
                    Login
                </button>
            </form>
        </div>
    </>
  )
}