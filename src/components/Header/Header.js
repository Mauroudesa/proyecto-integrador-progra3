import React from 'react'


function Header() {
  return (
    <header className='header'>
       
            <h1 className="logo">App</h1>
            <section className='navegacion'>
                <i className="fas fa-th"></i>
                <i className="fas fa-align-justify"></i>
                <form className='search' action="">
                    <input className='buscador' type="text" name="search" id="" placeholder="Search"/>
                    <button type="submit"><i class="fa fa-search" aria-hidden="true"></i></button>
                    
                </form>
            </section>
        
        </header>
  )
}
export default Header