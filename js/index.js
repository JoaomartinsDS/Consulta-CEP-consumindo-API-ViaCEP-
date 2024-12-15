
function pesquisaCep(){
    let cep = document.querySelector('#cep').value;
    console.log(cep)
    let url = 'https://viacep.com.br/ws/'+ cep + '/json/';
    fetch(url).then(function(response){
        response.json().then(function(data){
            console.log(data)
            mostrarEndereco(data)
        })
        
    })
}
function mostrarEndereco(dados){
    
    let resultado = document.querySelector('#resultado');
    resultado.innerHTML = `<p><strong>Endereço</strong>: ${dados.logradouro}</p>
                           <p><strong>Bairro</strong>: ${dados.bairro}</p>
                           <p><strong>Cidade</strong>: ${dados.localidade}</p>
                           <p><strong>Estado</strong>: ${dados.estado}</p>
    `
}

function limpaCep(){
    let resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
}




