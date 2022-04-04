import React, { Component } from 'react'
import Cards from './Cards'


class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            datos: [],
            error: ''
        }
    }

    componentDidMount() {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=65a3967c53df3743ec649c48f67fa287&language=en-US&page=1")
            .then((response) => response.json())
            .then((data) => this.setState({ datos: data.results }))
            .catch((error) => this.setState({ error: 'Ups, ocurrió un error inesperado' }))
               
    }
    removerCarta(cartaId) {
        // Aca quiero filtrar el array de provincias y setear el estado nuevamente 
        let resultados = this.state.datos.filter((dato) => dato.id !== cartaId)
        this.setState({
            datos: resultados
        })
    }




    render() { 
        console.log(this.state.datos);
  return (
      
    //this.state.results.length > 0 ?
    <> 
        <button type="button">Cargar más tarjetas</button>
            <section className="card-container">
                { 
                this.state.datos.map((element, index)=><Cards key={element.id+index} info={element} removerCarta={(cartaId)=> this.removerCarta(cartaId)}/>)
                }
            </section>
        </>
      //:
        //<p>Cargando...</p>
  )
}
}
export default Main