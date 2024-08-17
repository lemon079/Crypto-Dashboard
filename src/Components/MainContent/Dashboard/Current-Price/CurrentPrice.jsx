import React from 'react'
import TextMoney from '../TextMoney'
import Button from '../../Button'
import { PiCurrencyInrBold } from "react-icons/pi";
import { CgArrowTopRight } from "react-icons/cg";
import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6";


const duration = ['H', 'D', 'W', 'M'];
const stamps = ['7:15 AM', '12:55 AM', '6:35 AM', '12:15 PM', '5:55 PM'];


const CurrentPrice = ({ text = '' }) => {
    return (
        <section className='current-price-container px-4 py-3 bg-white rounded-xl space-y-5'>

            <section className='flex justify-between items-center '>
                <div className='flex items-end'>
                    <TextMoney text={'Current Price'} balance={'26,670.25'} currencyIcon={PiCurrencyInrBold} />

                    <span className='text-green-500 font-semibold flex items-center'><CgArrowTopRight /><span>0.04%</span></span>

                </div>
                <section className="buttons-container flex flex-wrap gap-2 justify-end items-end h-fit col-span-1 md:justify-center ">
                    <Button icon={FaCirclePlus} text={"Buy"} />
                    <Button icon={FaCircleMinus} text={"Sell"} />
                </section>
            </section>

            <section className='tabs-container text-xs flex justify-end'>
                <ul className='bg-customGrey400 p-1 w-fit rounded-lg flex gap-2'>
                    {duration.map((duration) => {
                        return <li key={duration} className='text-stone-400 p-1 font-semibold rounded-lg cursor-pointer hover:bg-white hover:text-black'>
                            1{duration}
                        </li>
                    })}
                </ul>
            </section>

            <figure>
                <img src='/Graph.png' alt="graph" className='w-full' />
            </figure>

            <section className='timestamp-container'>
                <ul className='rounded-lg flex justify-between'>
                    {stamps.map((stamp) => {
                        return <li key={stamp} className='text-stone-400 text-xs p-1 font-semibold cursor-default'>
                            {stamp}
                        </li>
                    })}
                </ul>
            </section>


        </section >
    )
}

export default CurrentPrice