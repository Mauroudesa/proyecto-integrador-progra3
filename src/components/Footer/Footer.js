import React from 'react'
import logo from '../img/TMDB.png';
import "./Footer.css";

 function Footer() {
  return (
    <footer className='footer'>
            <ul className="team">
                <li>Mauro Proto Cassina</li>
                <br></br>
                <li>Juan Ignacio Bedoian </li>
                <br></br>
                <li>Alan Geier</li>
            </ul>
            <img className="tmdb" src={logo} alt='The Movie Data Base'/>
        </footer>
  )
}
export default Footer
