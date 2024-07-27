import React from 'react'

const Button = ({icon : Icon = null,text = '', customClass = ''}) => {
  return (
    <button className={`flex items-center justify-center bg-customPurple800 text-white py-2 px-4 rounded-lg font-semibold text-sm gap-2 ${customClass} hover:bg-blue-800`}><Icon className='text-white text-lg'/> {text}</button>
  )
}

export default Button