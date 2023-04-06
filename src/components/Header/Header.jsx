import React from 'react'
import Navbar from './navbar/Navbar'
import Sidenavbar from './sidenavbar/Sidenavbar'

function Header() {
  return (
    <header>
        <Navbar/>
        <Sidenavbar/>
    </header>
  )
}

export default Header