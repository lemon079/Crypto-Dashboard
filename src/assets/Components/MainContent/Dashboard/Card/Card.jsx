import React from 'react'

const Card = ({ title = '', text = '', customClass = '' }) => {

    return (
        <div className={`card-container p-4 rounded-xl space-y-2 ${title==='Loans'? 'bg-white' : 'bg-customPurple800'}`}>
            <h2 className={`text-xs rounded-full w-fit px-2 py-1 font-semibold ${title === 'Loans' ? 'bg-customPurple800 text-white' : 'bg-white text-customPurple800'}`}>{title}</h2>
            <p className={`font-semibold text-black ${title === 'Loans' ? 'text-black' : 'text-white'}`}>{text}</p>
        </div>
    )
}

export default Card