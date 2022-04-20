import React, { Component } from 'react'
import Cards from './Cards'
import './Cards.css'
import './Main.css'

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
        orientacion: "column", 
        }
    }

    cambiarEsquema(){
        if (this.state.orientacion === "column") {
          this.setState({ 
            orientacion:"row"
          }) 
        }
        else{
          this.setState({
            orientacion: "column"
          })
        }
      }




    render() { 
        console.log(this.state.datos);
  return (
    
      
    //this.state.results.length > 0 ?
      <div className> 
         <div> <button className='botonsito' onClick={() => this.cambiarEsquema()}> Cambiar Esquema </button> </div> 

        <button className="botonsito2" onClick={()=>this.props.agregarMas()}>Cargar más tarjetas</button>

        

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