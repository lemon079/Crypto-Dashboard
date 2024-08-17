import React from 'react'
import { VscAccount } from "react-icons/vsc";
import { RiMenu2Line } from "react-icons/ri";

const Header = ({ openNav }) => {

  return (
    <header> {/* opening button of sideNav on header */}
      <div className='max-w-[1230px] mx-auto flex justify-between py-4 px-10 sm:px-28'>
        <button className={`side-nav-btn text-3xl block sm:hidden`} onClick={()=>openNav()}><RiMenu2Line /></button>
        <h1 className='font-semibold text-3xl'>Dashboard</h1>
        <VscAccount className='text-4xl' />
      </div>

    </header>
  )
}

export default Header