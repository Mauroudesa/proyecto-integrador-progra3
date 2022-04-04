import { Component } from "react"
import React from 'react'
import App from "../../App"
//! https://image.tmdb.org/t/p/w500 +{this.props.info.backdrop_path}


class Cards extends Component {
    constructor(props) {
        super(props)
        this.state = {
            datos: [],
            error: ""
        }
    }


  render(){ 
      //! En este paso declaro 3 variable tmdb que contiene la url donde se almacenan las imagenes de tmdb otra donde llamo a las imagenes de la api que antes solicite y por ultimo una que las concatena asi el resultado es la imagen de la api
    let tmdb = "https://image.tmdb.org/t/p/w500"
    let apiTmdb = `${this.props.info.poster_path}`;
    let fotosCompletas = tmdb + apiTmdb
  return (
    <article className="hola">
        <button onClick={() => this.props.remover(this.props.info.id)}className="boton"></button>
    <main>
        
        <img src={`${fotosCompletas}`} alt=""/>
        <h3>{this.props.info.title}</h3>
        <p className="fecha">{this.props.info.release_date}</p>
        <section className="aditional-info">
        <p className="descripcion">{this.props.info.overview}</p>
        <p> Lenguaje: {this.props.info.original_language}</p>
        <p> Puntaje: {this.props.info.vote_average}</p>
        <p>Popularidad: {this.props.info.popularity}</p>
        </section>
        <a href="">Ver más</a>
        
    </main>
</article>
  )
}
}
export default Cards