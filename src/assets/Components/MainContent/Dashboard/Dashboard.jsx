import React from 'react'
import './Dashboard.css'
import MyWallet from './User-Account/MyWallet'
import CurrentPrice from './Current-Price/CurrentPrice'
import Transaction from './Recent-Transaction/Transaction'
import Card from './Card/Card'

const DashBoard = () => {

  return (
    <>
      <section className="wallet-button-container">
        <MyWallet />
      </section>

      <section className='currentprice-transaction-container'>
        <CurrentPrice />
        <Transaction />
      </section>

      <section className='cards-container'>
        <Card title='Loans' text={`Learn more about Loans - Keep your Bitcoin, access it's value without selling it`} />
        <Card title='Contact' text={`Learn more about our real estate, mortgage, and  corporate account services`} />
      </section>
    </>
  )
}

export default DashBoard