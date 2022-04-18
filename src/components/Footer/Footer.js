import React from 'react'
import logo from '../img/TMDB.png';
import "./Footer.css";

 function Footer() {
  return (
    <footer className='footer'>
            <ul className="team">
                <ul>Mauro Proto Cassina</ul>
                <br></br>
                <ul>Juan Ignacio Bedoian </ul>
                <br></br>
                <ul>Alan Geier</ul>
            </ul>
            <img className="tmdb" src={logo} alt='The Movie Data Base'/>
        </footer>
  )
}
export default Footer
