import { Component } from "react"
import React from 'react'
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
    let u = "https://image.tmdb.org/t/p/w500"
    let i = `${this.props.info.poster_path}`;
    let fotosCompletas = u+i
  return (
    <article>
        <button onClick={() => this.props.removerCarta(this.props.info.id)}className="boton"></button>
    <main>
        <img src={`${fotosCompletas}`} alt=""/>
        <h3>{this.props.info.title}</h3>
        <p className="description">{this.props.info.release_date}</p>
        <section className="aditional-info">
        <p>{this.props.info.overview}</p>
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