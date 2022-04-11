import React from 'react'
import Form from './Form'

function Header(props) {
  return (
    <header className='header'>
       
            <h1 className="logo">App</h1>
            <section >
                
                <Form classname = "buscador" filtrar={props.filtrar}/>
            </section>
        
        </header>
  )
}
export default Header