import React from 'react'
import Form from './Form'

function Header() {
  return (
    <header className='header'>
       
            <h1 className="logo">App</h1>
            <section className='navegacion'>
                <i className="fas fa-th"></i>
                <i className="fas fa-align-justify"></i>
                <Form/>
            </section>
        
        </header>
  )
}
export default Header