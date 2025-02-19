import React, { Children } from 'react'

function Button({}) {
  return (
    <>
      <button type={type} className='btn' {...props}>{Children}</button>
    </>
  )
}

export default Button
