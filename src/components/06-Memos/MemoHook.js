import React, { useMemo, useState } from 'react'
import { procesoPesado } from '../../helpers/procesoPesado';
import { useCounter } from '../../hooks/useCounter'

export const MemoHook = () => {

   const {counter, increment} = useCounter(10)
   const [show, setShow] = useState(true);
   const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter])


   return (
      <div>
         <h1>Counter: <small>{counter}</small> </h1>
         <hr />

         <button
            className='btn btn-primary'
            onClick={increment}
         >
            +1
         </button>

         <p>{memoProcesoPesado}</p>

         <button
            className='btn btn-outline-success'
            onClick={() => {
               setShow(!show);
            }}
         >
            show/hide {JSON.stringify(show)}
         </button>
      </div>
   )
}
