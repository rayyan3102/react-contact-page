import React from 'react'

import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    
      <nav className={styles.Navbar}> 
      <div className='logo'>
        <img src="/Frame.png" alt="logo" />
      </div>
      <div>
      <ul>
        <li>MENU</li>
        <li>ABOUT</li>
        <li>CONTACT</li>
      </ul>
      </div>
    </nav>

  )
}

export default Navbar
