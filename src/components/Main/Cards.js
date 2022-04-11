import { Component } from "react"
import React from 'react'
<<<<<<< HEAD
import App from "../../App"
import "./Cards.css"
=======

>>>>>>> 7d5b586ba210d7ceb82d36cf6448de6ab2e9cb23
//! https://image.tmdb.org/t/p/w500 +{this.props.info.backdrop_path}


class Cards extends Component {
    constructor(props) {
        super(props)
        this.state = {
          orientacion: "row",
            datos: [],
            error: "",
            showMore: false,
            btnMessage: 'Ver más'
        }
    }

<<<<<<< HEAD
// cambiarEsquema(){
//   if (this.state.orientacion === "row") {
//     this.setState({ 
//       orientacion:"column"
//     }) 
//   }
//   else{
//     this.setState({
//       orientacin: "row"
//     })
//   }
// }
=======
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
>>>>>>> 7d5b586ba210d7ceb82d36cf6448de6ab2e9cb23
  render(){ 
      //! En este paso declaro 3 variable tmdb que contiene la url donde se almacenan las imagenes de tmdb otra donde llamo a las imagenes de la api que antes solicite y por ultimo una que las concatena asi el resultado es la imagen de la api
    let tmdb = "https://image.tmdb.org/t/p/w500"
    let apiTmdb = `${this.props.info.poster_path}`;
    let fotosCompletas = tmdb + apiTmdb
  return (
     <article  className= 'card'>

     


        <button onClick={() => this.props.remover(this.props.info.id)}className="boton"></button>

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
        
        <button className='more' onClick={() => this.showMore()}>{this.state.btnMessage}</button>
            
        
    </main>
</article> 
  )
}
}
export default Cards