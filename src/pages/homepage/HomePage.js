import React, { Component } from "react";
import "./HomePage.css";
import "../../components/InputComponents/FormularioCadastro.css"
import FormularioCadastro from "../../components/InputComponents/FormularioCadastro";
class App extends Component {
  render() {
    return (
      <div>
        <h1>Formulário de cadastro</h1>
        <FormularioCadastro aoEnviar={aoEnviarForm} validarCPF={validarCPF} />
      </div>
    );
  }
}

function aoEnviarForm(dados){
  console.log(dados);
}

function validarCPF(cpf){
  if(cpf.length !== 11){
    return {valido:false, texto:"CPF deve ter 11 digitos."}
  }else{
    return {valido:true, texto:""}
  }
}

export default App;
