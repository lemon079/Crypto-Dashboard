import React from 'react'

const Currency = ({text = null}) => {
  return (
    <>
    {text && <h3 className='text-xs text-customGrey800 py-1 px-2 rounded-xl bg-customGrey400'>{text}</h3>}
    </>
  )
}

export default Currency