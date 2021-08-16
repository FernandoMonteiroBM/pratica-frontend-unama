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
  const [tipo, setTipo] = useState("");
  const [telefone, setTelefone] = useState("");
  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          aoEnviar({
            nome,
            sobrenome,
            cpf,
            email,
            emailC,
            genero,
            nascimento,
            tipo,
            telefone,
          });
        }}
      >
        <div className="formulario">
          <h1 className="input-padrao-texto">Formulário de cadastro</h1>
          <CampoInput
            id="email"
            textLabel="Email *"
            name="email"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            value={email}
            type="email"
          />
          <CampoInput
            id="emailC"
            textLabel="Confirme seu Email *"
            name="emailC"
            onChange={(event) => {
              setEmailc(event.target.value);
            }}
            value={emailC}
            type="email"
          />
          <CampoInput
            id="nome"
            textLabel="Nome *"
            name="nome"
            onChange={(event) => {
              setNome(event.target.value);
            }}
            value={nome}
            type="text"
          />
          <CampoInput
            id="sobrenome"
            textLabel="Sobrenome *"
            name="sobrenome"
            onChange={(event) => {
              setSobrenome(event.target.value);
            }}
            value={sobrenome}
            type="text"
          />
          <CampoInput
            id="cpf"
            textLabel="CPF *"
            name="cpf"
            onChange={(event) => {
              setCpf(event.target.value);
            }}
            value={cpf}
            type="text"
            mask="999.999.999-99"
            placeholder="___.___.___-__"
          />
        </div>

        <div className="genero-nascimento">
          <div className="formulario-botao">
            <label className="padrao-texto-genero">Genero</label>
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
            <CampoInput
              id="nascimento"
              textLabel="Data de Nascimento *"
              name="nascimento"
              onChange={(event) => {
                setNascimento(event.target.value);
              }}
              value={nascimento}
              type="text"
              mask="99/99/99"
              placeholder="dd/mm/aa"
            />
          </div>
        </div>
        <div className="tipo-cel-tel">
          <div className="tipo">
            <select
              name="tipo"
              id="tipo"
              value={tipo}
              onChange={(event) => {
                setTipo(event.target.value);
              }}
            >
              <option value="celular">Celular</option>
              <option value="fixo">Fixo</option>
            </select>
          </div>
          <div>
            <CampoInput
              id="telefone"
              textLabel="Telefone *"
              name="telefone"
              onChange={(event) => {
                setTelefone(event.target.value);
              }}
              value={telefone}
              type="text"
              mask={tipo==="celular" ? "(99)99999-9999" : "(99)9999-9999"}
              placeholder="(__)_____-____"
            />
          </div>
        </div>

        <div>
          <button type="submit" className="submit-padrao-botao">
            Cadastrar
          </button>
        </div>
      </form>
      <div className="resultados">
        <p>Email: </p>
        <span>{email}</span>
        <p>Nome: </p>
        <span>{nome + " " + sobrenome}</span>
        <p>{tipo} :</p>
        <span>{telefone}</span>
        <p>Data de Nascimento :</p>
        <span>{nascimento}</span>
        <p>Genero :</p>
        <span>{genero}</span>
      </div>
    </div>
  );
}

export default FormularioCadastro;
