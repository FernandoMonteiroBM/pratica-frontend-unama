import React, { useState } from "react";
import "./FormularioCadastro.css"

function FormularioCadastro({aoEnviar}) {
  const [email, setEmail] = useState("");
  const [emailC, setEmailc] = useState("");
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviar({nome, sobrenome, cpf, email, emailC});
      }}
    >
      <label>E-mail</label>
      <input
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        id="email"
      />
      <label >Confirme seu e-mail</label>
      <input
        value={emailC}
        onChange={(event) => {
          setEmailc(event.target.value);
        }}
        id="emailC"
      />
      <label>Nome</label>
      <input
        value={nome}
        onChange={(event) => {
          setNome(event.target.value);
        }}
        id="nome"
        
      />
      <label>Sobrenome</label>
      <input
        className="input-padrao"
        value={sobrenome}
        onChange={(event) => {
          setSobrenome(event.target.value);
        }}
        id="sobrenome"
      />
      <label>cpf</label>
      <input
        value={cpf}
        onChange={(event) => {
          setCpf(event.target.value);
        }}
        id="CPF"
      />
      <button type="submit">
        Cadastrar
      </button>
    </form>
  );
}

export default FormularioCadastro;
