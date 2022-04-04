
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import React, { Component } from 'react'


class App extends Component {
  constructor(props) {
      super(props)
      this.state = {
          datos: [],
          datosInicial:[],
          error: ''
      }
  }

  componentDidMount() {
      fetch("https://api.themoviedb.org/3/movie/popular?api_key=65a3967c53df3743ec649c48f67fa287&language=en-US&page=1")
          .then((response) => response.json())
          .then((data) => this.setState({ datos: data.results }))
          //! then((data) => this.setState({ datos: data.results })) esto lo hacemos para volver a 0 los datos del buscador
          .catch((error) => this.setState({ error: 'Ups, ocurrió un error inesperado' }))
             
  }
  removerCarta(cartaId) {
      // Aca quiero filtrar el array de provincias y setear el estado nuevamente 
      let resultados = this.state.datos.filter((dato) => dato.id !== cartaId)
      this.setState({
          datos: resultados
      })
  }
filterPeliculas(peliculaName){
  let peliculasFiltradas = this.state.datos.filter((dato) => dato.title.toLowerCase().includes(peliculaName))
  this.setState({
    datos: peliculasFiltradas
})
}



  render() { 
    return (
    <>
    <body>
        <Header filtrar={(peliculaName)=>{this.filterPeliculas(peliculaName)}}/>
        <Main datos={this.state.datos} removerCarta={(cartaId)=> this.removerCarta(cartaId)}/>
        <Footer/>
    </body>
 </>
    );
}
}

export default App;
