import React, { Component } from 'react'
import Cards from './Cards'
import './Cards.css'
import './Main.css'

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
        orientacion: "row", 
        }
    }

    cambiarEsquema(){
        if (this.state.orientacion === "row") {
          this.setState({ 
            orientacion:"column"
          }) 
        }
        else{
          this.setState({
            orientacion: "row"
          })
        }
      }




    render() { 
        console.log(this.state.datos);
  return (
    
      
    //this.state.results.length > 0 ?
      <div className> 
         <div> <button onClick={() => this.cambiarEsquema()}> Cambiar Esquema </button> </div> 

        <button type="button" onClick={()=>this.props.agregarMas()}>Cargar más tarjetas</button>

        

            <section className={`card-container flex-${this.state.orientacion}`}>
                { 
                this.props.datos.map((element, index)=><Cards key={element.id+index} info={element} remover={(pepe)=> this.props.removerCarta(pepe)}/>)
                }
            </section>
        </div>
      //:
        //<p>Cargando...</p>
  )
}
}
export default Main