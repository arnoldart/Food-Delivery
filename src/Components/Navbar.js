import React, { useState, useEffect } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import Logo from './images/logo.png'

function Navbar() {

  const [click,setClick] = useState(false)
  const [button, setButton] = useState(true)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false)
    } else {
      setButton(true)
    }
  }

  useEffect(() => {
    showButton();
  }, []);
  
  window.addEventListener('resize', showButton);
  
  return (
    <>
      <div className="navbar">
        <div className="navbar-container container">
          <Link className="navbar-icon" onClick={closeMobileMenu}>
            <img src={Logo} alt="orang"></img>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={ click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-items'>
              <Link className="nav-links actives" onClick={closeMobileMenu}>
                <p>Home</p>
              </Link>
            </li>
            <li className='nav-items'>
              <Link className="nav-links" onClick={closeMobileMenu}>
                <p>Product</p>
              </Link>
            </li>
            <li className='nav-items'>
              <Link className="nav-links" onClick={closeMobileMenu}>
                <p>Faq</p>
              </Link>
            </li>
            <li className='nav-items'>
              <Link className="nav-links" onClick={closeMobileMenu}>
                <p>Contact</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar
