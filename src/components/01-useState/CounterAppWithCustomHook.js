import React from 'react'
import { useCounter } from '../../hooks/useCounter'

export const CounterAppWithCustomHook = () => {

   const {state, increment, reset, decrement} = useCounter()

   return (
      <>
         <h1>CounterApp with Custom hook {state} </h1>
         <hr />

         <button className='btn' onClick={ () => increment(2)}>+1</button> 
         <button className='btn' onClick={reset}>Reset</button>
         <button className='btn' onClick={ () => decrement(4)}>-1</button>
      </>
   )
}
