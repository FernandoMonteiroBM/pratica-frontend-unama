import React, { useState } from "react";
import RadioButton from "../buttonComponents/RadioButton";
import "./FormularioCadastro.css";

function FormularioCadastro({ aoEnviar }) {
  const [email, setEmail] = useState("");
  const [emailC, setEmailc] = useState("");
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviar({ nome, sobrenome, cpf, email, emailC });
      }}
    >
      <div className="formulario">
        <h1 className="input-padrao-texto">Formulário de cadastro</h1>
        <label className="input-padrao-texto">E-mail</label>
        <input
          className="input-padrao"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          id="email"
        />
        <label className="input-padrao-texto">Confirme seu e-mail</label>
        <input
          className="input-padrao"
          value={emailC}
          onChange={(event) => {
            setEmailc(event.target.value);
          }}
          id="emailC"
        />
        <label className="input-padrao-texto">Nome</label>
        <input
          className="input-padrao"
          value={nome}
          onChange={(event) => {
            setNome(event.target.value);
          }}
          id="nome"
        />
        <label className="input-padrao-texto">Sobrenome</label>
        <input
          className="input-padrao"
          value={sobrenome}
          onChange={(event) => {
            setSobrenome(event.target.value);
          }}
          id="sobrenome"
        />
        <label className="input-padrao-texto">cpf</label>
        <input
          className="input-padrao"
          value={cpf}
          onChange={(event) => {
            setCpf(event.target.value);
          }}
          id="CPF"
        />
        <RadioButton/>
        <button type="submit" className="input-padrao-botao">
          Cadastrar
        </button>
      </div>
    </form>
  );
}

export default FormularioCadastro;
