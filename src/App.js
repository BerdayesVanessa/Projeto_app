
import React from "react";
import Lista from "./Lista";
import Cadatrar from "./Cadastrar"

export default class App extends React.Component {
  constructor(){
    super()

    this.state = {
      dadosPessoais: []
    }

    this.fetchdadosPessoais = this.fetchdadosPessoais.bind(this);
  }

  fetchdadosPessoais(){
    fetch("http://localhost:3001/dadosPessoais")
      .then((response) => response.json())
      .then((dadosPessoais) => this.setState({ dadosPessoais: dadosPessoais }));
  }

  componentDidMount(){
    this.fetchdadosPessoais()
  }

  render(){
  return (
    <div className="App">
      <Cadatrar cadastrarDadosPessoaCallback={this.fetchdadosPessoais} />
      <Lista dadosPessoais={this.state.dadosPessoais} fetchdadosPessoaisCallback={this.fetchdadosPessoais}/>
    </div>
  );
}
}