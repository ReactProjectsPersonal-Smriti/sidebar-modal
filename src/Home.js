import React, { useContext, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { AppContext, useGlobalContext } from './context'

const Home = () => {
  const {
    openModal,
    openSidebar
  } = useGlobalContext();
  return <main>
    <button onClick={openSidebar} className='sidebar-toggle'>
      <FaBars />
    </button>
    <button onClick={openModal} className='btn'>
      show modal
    </button>
  </main>
}

export default Home
