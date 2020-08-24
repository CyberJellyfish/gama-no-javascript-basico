console.log('Jacascript carregado');

function validaCPF(cpf){
    return true;
}

function validacao(){
    console.log('Iniciando validação CPF');

    var cpf = document.getElementById('cpf_digitado').value;
    console.log('cpf');

    var resultadoValidacao = validaCPF(cpf);

    if (resultadoValidacao){
        document.getElementById('success').style.display = 'block';
    }
}


