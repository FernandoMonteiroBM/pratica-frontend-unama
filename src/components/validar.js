function validar(email, emailC, nome, sobrenome, cpf, genero, nascimento, telefone, tipo) {
  let errors = {};
  if (!email) {
    errors.email = "Preencha esse campo";
  }
  if (!emailC) {
    errors.emailC = "Preencha esse campo";
  }
  if (!nome) {
    errors.nome = "Preencha esse campo";
  }
  if (!sobrenome) {
    errors.sobrenome = "Preencha esse campo";
  }
  if (!cpf) {
    errors.cpf = "Preencha esse campo";
  }
  if (!genero) {
    errors.genero = "Preencha esse campo";
  }
  if (!nascimento) {
    errors.nascimento = "Preencha esse campo";
  }
  if (!telefone) {
    errors.telefone = "Preencha esse campo";
  }
  if (!tipo) {
    errors.tipo = "Preencha esse campo";
  }
  return errors;
}
export default validar;
