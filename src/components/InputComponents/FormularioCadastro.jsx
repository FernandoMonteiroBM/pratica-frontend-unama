import React, { useState } from "react";
import RadioButton from "../buttonComponents/RadioButton";
import CampoInput from "./CampoInput";
import "./FormularioCadastro.css";

function FormularioCadastro({ aoEnviar }) {
  const [email, setEmail] = useState("");
  const [emailC, setEmailc] = useState("");
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [genero, setGenero] = useState("");
  const [nascimento, setNascimento] = useState("");
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviar({ nome, sobrenome, cpf, email, emailC, genero });
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
        <label className="input-padrao-texto">CPF</label>
        <input
          className="input-padrao"
          value={cpf}
          onChange={(event) => {
            setCpf(event.target.value);
          }}
          id="CPF"
        />
      </div>

      <div className="genero-nascimento">
        <div className="formulario-botao">
          <label className="input-padrao-texto">Genero</label>
          <RadioButton
            text="Masculino"
            value="Masculino"
            onChange={(e) => setGenero("Masculino")}
            id="Genero"
          />
          <RadioButton
            text="Feminino"
            value="Feminino"
            onChange={(e) => setGenero("Feminino")}
            id="Genero"
          />
          <RadioButton
            text="Outro"
            value="Outro"
            onChange={(e) => setGenero("Outro")}
            id="Genero"
          />
        </div>
        <div className="formulario-nascimento">
          <label className="input-padrao-texto">Data de Nascimento</label>
          <input
            className="input-padrao"
            value={nascimento}
            onChange={(event) => {
              setNascimento(event.target.value);
            }}
            id="nascimento"
          />
        </div>
      </div>
      <div>
        <button type="submit" className="submit-padrao-botao">
          Cadastrar
        </button>
      </div>
    </form>
  );
}

export default FormularioCadastro;
