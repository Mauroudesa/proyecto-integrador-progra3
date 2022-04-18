import React from 'react'
import Form from './Form'
import logo from '../img/TMDB.png';

function Header(props) {
  return (
    <header className='header'>
       <section >
            <img className="logo" src={logo} alt='The Movie Data Base'/>
            </section>
            <section >
                
                <Form classname = "buscador" filtrar={props.filtrar}/>
            </section>
        
        </header>
  )
}
export default Header