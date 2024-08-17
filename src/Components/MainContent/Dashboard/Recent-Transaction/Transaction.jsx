import React from 'react'
import RecentTransaction from './RecentTransaction'

const date = new Date();
const year = date.getFullYear();
const month = String(date.getMonth() + 1).padStart(2, '0');
const day = String(date.getDate()).padStart(2, '0');
const formattedDate = `${year}-${month}-${day}`

const hours = String(date.getHours()).padStart(2, '0');
const minutes = String(date.getMinutes()).padStart(2, '0');
const seconds = String(date.getSeconds()).padStart(2, '0');

const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

const Transaction = () => {

  const transactions = [
    {
      type: 'INR DEPOSIT',
      dateTime: formattedDateTime,
      amount: '+ ₹81,123.10'
    },
    {
      type: 'BTC SELL',
      dateTime: formattedDateTime,
      amount: '- 12.48513391 BTC'
    },
    {
      type: 'INR DEPOSIT',
      dateTime: formattedDateTime,
      amount: '+ ₹81,123.10'
    }
  ];

  return (
    <>
      <section className='recent-transactions-container px-4 py-3 bg-white rounded-xl flex flex-col justify-around'>
        <h2 className='text-customGrey800 font-semibold text-sm flex items-center gap-1'>Recent Transactions</h2>
        {transactions.map((transaction, index) => {
          return <RecentTransaction key={`transaction_${index + 1}`} transactionType={transaction.type} dateTime={transaction.dateTime} amount={transaction.amount}
          />
        })}
        <button className='bg-customGrey400 text-black font-bold text-sm w-full p-2 rounded-xl hover:bg-customGrey500'>View All</button>
      </section>
    </>
  )
}

export default Transaction