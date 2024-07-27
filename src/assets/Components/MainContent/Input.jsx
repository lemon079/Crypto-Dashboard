import React from 'react'

const Input = ({ text, type, id, placeholder, customClass = ''}) => {
    return (
        <>
            <div className='space-y-2 w-full'>
                {text && <label htmlFor={id} className='font-semibold'>{text}</label>}
                <input type={type} name={id} id={id} placeholder={placeholder} className={`px-2 py-2 ${customClass}`} />
            </div>
        </>
    )
}

export default Input
