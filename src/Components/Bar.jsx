import React from 'react'
import { Link } from 'react-router-dom'
import Lupa from '../Imagens/Lupa.png'
import '../Styles/NavBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars, faCircleXmark} from '@fortawesome/free-solid-svg-icons'

function Bar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }

  return (
    <div className='Bar'>
      
        <nav ref={navRef}>
          


          <label class="logo">TCC Store</label>
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/">Equipamentos</a></li>
            <li><a href="/">Objetivo</a></li>
            <li><a href="/">Público</a></li>
            <li><a href="/">Bibliografia</a></li>
          </ul>

          <button onClick={showNavbar}> <FontAwesomeIcon icon={faBars} /> </button>
          <button onClick={showNavbar}><FontAwesomeIcon icon={faCircleXmark} /> </button>
        </nav>
    </div>
    
  )
}


export default Bar