import React from 'react'
import Form from './Form'
import logo from '../img/TMDB.png';
import "./Header.css"

function Header(props) {
  return (
    <header className='header'>
      <h1 className='titulo1'> Universal Program</h1>
       <section >
       
      
            
            </section>
            <section >
                
                <Form classname = "buscador" filtrar={props.filtrar}/>
            </section>
        
        </header>
  )
}
export default Header