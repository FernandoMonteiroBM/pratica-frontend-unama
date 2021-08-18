import React, { useState } from "react";
import RadioButton from "../buttonComponents/RadioButton";
import validar from "../validar";
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
  const [tipo, setTipo] = useState("Celular");
  const [telefone, setTelefone] = useState("");
  const [errors, setErrors] = useState({});

  return (
    <div className="organizar">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setErrors(
            validar(
              email,
              emailC,
              nome,
              sobrenome,
              cpf,
              genero,
              nascimento,
              tipo,
              telefone
            )
          );
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
          <h2 className="input-padrao-texto">Formulário de Cadastro</h2>
          <CampoInput
            id="email"
            textLabel="Email *"
            error={errors.email}
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
            error={errors.emailC}
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
            error={errors.nome}
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
            error={errors.sobrenome}
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
            error={errors.cpf}
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

        <div className="tipo-cel-tel">
          <div className="tipo">
            <h3>Telefone</h3>
            <select
              name="tipo"
              id="tipo"
              value={tipo}
              onChange={(event) => {
                setTipo(event.target.value);
              }}
            >
              <option value="Celular">Celular</option>
              <option value="Fixo">Fixo</option>
            </select>
          </div>
          <div className="campo-telefone">
            <CampoInput
              id="telefone"
              textLabel=" *"
              error={errors.telefone}
              name="telefone"
              onChange={(event) => {
                setTelefone(event.target.value);
              }}
              value={telefone}
              type="text"
              mask={tipo === "celular" ? "(99)99999-9999" : "(99)9999-9999"}
              placeholder="(__)_____-____"
            />
          </div>
        </div>

        <div className="genero-nascimento">
          <div className="formulario-genero">
            <h3>Genero</h3>
            <RadioButton
              text="Masculino"
              value="Masculino"
              onChange={(event) => {
                setGenero(event.target.value);
              }}
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
              error={errors.nascimento}
              name="nascimento"
              onChange={(event) => {
                setNascimento(event.target.value);
              }}
              value={nascimento}
              type="text"
              mask="99/99/9999"
              placeholder="dd/mm/aaaa"
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
        <p>Email: {email === emailC}</p>
        <p>Nome: {nome + " " + sobrenome}</p>
        <p>Telefone {tipo} </p>
        <p>Seu Número: {telefone}</p>
        <p>CPF: {cpf}</p>
        <p>Data de Nascimento: {nascimento}</p>
        <p>Genero: {genero}</p>
      </div>
    </div>
  );
}

export default FormularioCadastro;
