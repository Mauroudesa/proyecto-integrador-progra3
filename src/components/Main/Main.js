import React, { Component } from 'react'
import Cards from './Cards'


class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    




    render() { 
        console.log(this.state.datos);
  return (
      
    //this.state.results.length > 0 ?
    <> 
        <button type="button" onClick={()=>this.props.agregarMas()}>Cargar más tarjetas</button>
            <section className="card-container">
                { 
                this.props.datos.map((element, index)=><Cards key={element.id+index} info={element} remover={(pepe)=> this.props.removerCarta(pepe)}/>)
                }
            </section>
        </>
      //:
        //<p>Cargando...</p>
  )
}
}
export default Main