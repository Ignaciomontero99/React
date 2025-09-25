import React , { useState } from 'react'

export const useCounter = () => {

    const [count, setCount] = useState<number>(10)
    
      const inscreaseBy = (value: number) => {
        setCount(Math.max(value + count, 0))
      }

  return  {
    // Prpiedades
    count,

    // Accion
    inscreaseBy,
  }
}
