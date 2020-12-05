import React from 'react'

export const Small = React.memo(({values}) => {

   console.log('me volvi a llamar')

   return (
      <small>
         {values}
      </small>
   )
})
