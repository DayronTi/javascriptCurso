//Função especializada em capturar o evento de submit do fomuláario
const form = document.querySelector('#formulario')

form.addEventListener('submit', function (e) { //esse trecho adicion um ouvinte de eventos ao formulario
    e.preventDefault();  //Faz com que o evento do formulario nao carregue a pagina
    const inputPeso = e.target.querySelector('#input-peso'); //capturamos os dados do input peso
    const inputAltura = e.target.querySelector('#input-altura'); //capturamos os dados do inpt altura
    
    
    const peso = Number(inputPeso.value) //converter os inputs pra number
    const altura = Number(inputAltura.value)

    if (!peso) {   //Se peso for falso ele para a função e imprime a msg abaixo
        setResultado('Peso inválido', false)
        return; // O return faz a função parar
    } 

    if (!altura) {   //Se altura for falso ele para a função e imprime a msg abaixo
        setResultado('Altura inválida', false) //ele tambem salva o valor falso, uma vez que fica salvo o valor falso e podemos mencionar como um class
        return;
    } 

    const imc = getImc(peso, altura);  //calculo de imc, criamos uma função espacífica
    const nivelImc = getNivelImc(imc) //calculo do encontro do nivel na tabela de imc

    const msg = `Seu IMC é ${imc} (${nivelImc}).`;


    setResultado(msg, true);

}); 

//Função pra calcular o nivel de imc dentor da tabela
function getNivelImc(imc) {
    //criamos um array pra obter todos os valores 
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade Grau 1', 'Obesidade Grau 2', 'Obesidade Grau 3'];
    // e baseado no imc como parametro iremos fazer algo

    if (imc >= 39.9) return nivel[5]
    if (imc >= 34.9) return nivel[4]
    if (imc >= 29.9) return nivel[3]
    if (imc >= 24.9) return nivel[2]
    if (imc >= 18.5) return nivel[1]
    if (imc < 18.5) return nivel[0]
}

//Função de cálculo de IMC 
function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

//Função especializada em criar parágrafos 
function criaP (className) {
    const p = document.createElement('p'); //cria um parágrafo
    return p;
}

//Função especializada em colocar o HTML dentro da div
function setResultado (msg, isValid) {
    const resultado = document.querySelector('#resultado'); //Faz o link com a div mencionada por id
    resultado.innerHTML = ''; //Limpa a div
    
    const p = criaP();

    if (isValid) {
        p.classList.add('paragrafo-resultado'); //adiciona o paragrafo criado a classe "paragrafo-resultado"
    } else {
        p.classList.add('bad'); // adiciona o paragrafo criado a classe "bad"
    }

    p.innerHTML = msg
    resultado.appendChild(p);

}

    