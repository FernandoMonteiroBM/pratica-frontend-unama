function validar(values){
    let errors={};
    if(!values.email){
        errors.email = "Preencha esse campo";
    }
    if(!values.emailC){
        errors.emailC = "Preencha esse campo";
    }
    if(!values.nome){
        errors.nome = "Preencha esse campo";
    }
    if(!values.sobrenome){
        errors.sobrenome = "Preencha esse campo";
    }
    if(!values.cpf){
        errors.cpf = "Preencha esse campo";
    }
    if(!values.genero){
        errors.genero = "Preencha esse campo";
    }
    if(!values.nascimento){
        errors.nascimento = "Preencha esse campo";
    }
    if(!values.telefone){
        errors.telefone = "Preencha esse campo";
    }
    if(!values.tipo){
        errors.tipo = "Preencha esse campo";
    }   
    return errors;
}
export default validar;