import React, { Component } from 'react'

 class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {valor: ""};
            
        }

    
    evitarSubmit(event) {
        event.preventDefault();
    }
    controlarCambios(event){
        this.setState({valor:event.target.value}, this.props.filtrar(this.state.valor));
    }
  render() {
    return (
        <form onSubmit={(event)=>this.evitarSubmit(event)} className='search' action="">
        <input  onChange={(event)=>this.controlarCambios(event)} value={this.state.valor} className='buscador' type="text" name="search" id="" placeholder="Search"/>
        <button type="submit"><i class="fa fa-search" aria-hidden="true"></i></button>
        </form>
    )
  }
}
export default Form