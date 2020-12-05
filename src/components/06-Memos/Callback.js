import React, { useCallback, useState } from 'react'
import { ShowIncrement } from './ShowIncrement';

export const Callback = () => {

   const [counter, setCounter] = useState(10);
   const increment = useCallback(() => {
      setCounter(c => c + 1);
   }, [setCounter]);

   return (
      <div>
         <h1>Callback {counter} </h1>
         <hr />

         <ShowIncrement increment={increment} />
      </div>
   )
}
