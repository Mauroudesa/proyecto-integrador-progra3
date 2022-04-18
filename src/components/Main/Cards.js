import { Component } from "react"
import React from 'react'
import App from "../../App"
import "./Cards.css"
import eliminate from '../img/Eliminar.jpg';

 //https://image.tmdb.org/t/p/w500 +{this.props.info.backdrop_path}


class Cards extends Component {
    constructor(props) {
        super(props)
        this.state = {
          orientacion: "row",
            datos: [],
            showMore: false,
            btnMessage: 'Ver más',
            error: ""
            
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
    showMore() {
      if(this.state.showMore) {
          this.setState({
              showMore: false,
              btnMessage: 'Ver más'
          })
      } else {
          this.setState({
              showMore: true,
              btnMessage: 'Ver menos'
          })
      }
  }
  render(){ 
      //! En este paso declaro 3 variable tmdb que contiene la url donde se almacenan las imagenes de tmdb otra donde llamo a las imagenes de la api que antes solicite y por ultimo una que las concatena asi el resultado es la imagen de la api
    let tmdb = "https://image.tmdb.org/t/p/w500"
    let apiTmdb = `${this.props.info.poster_path}`;
    let fotosCompletas = tmdb + apiTmdb
  return (
     <article  className= 'card'>

     


        <button onClick={() => this.props.remover(this.props.info.id)}className="boton"> <img className="eliminate" src={eliminate} alt='The Movie Data Base'/></button>

    <main  >
    

        <img src={`${fotosCompletas}`} alt=""/>
        <h3>{this.props.info.title}</h3>
        <p className="fecha">{this.props.info.release_date}</p>
        <section className="aditional-info">
        {
                    this.state.showMore ? 
                    <p className="descripcion">{this.props.info.overview}</p>
                    :
                        ''
                }
        <p> Lenguaje: {this.props.info.original_language}</p>
        <p> Puntaje: {this.props.info.vote_average}</p>
        <p>Popularidad: {this.props.info.popularity}</p>
        </section>
        <button className='more' onClick={() => this.showMore()}>{this.state.btnMessage} </button>
        
        
    </main>
</article> 
  )
}
}
export default Cards