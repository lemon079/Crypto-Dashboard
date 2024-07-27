import React from 'react'
import { BiSolidDollarCircle } from "react-icons/bi";

const RecentTransaction = ({ transactionType = '', dateTime, amount = '0' }) => {
  return (
    <>
      <section className="single-transaction-container mb-3 flex justify-between bg-white p-3">
        <div className='flex gap-3 items-center'>
          <BiSolidDollarCircle className='text-4xl bg-customGrey400 p-2 rounded-full' />
          <div>
            <h3 className='text-sm font-semibold'>{transactionType}</h3>
            <h4 className='text-customGrey800 text-sm font-semibold'>{dateTime}</h4>
          </div>
        </div>
        <div className='font-semibold text-sm text-black'>
          {amount}
        </div>
      </section>
    </>
  )
}

export default RecentTransaction