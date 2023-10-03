const paragrafos = document.querySelector('#paragrafos') //Link do javascript com a  div que se chama paragrafos
const ps = paragrafos.querySelectorAll('p'); //Lik do javascript com todos os paragrafos dentro da tag div

const estilosBody = getComputedStyle(document.body); //Constante criada para guardar todos os valores de todos os estilos do documento 
const backgroundColorBody = estilosBody.backgroundColor; //Constante que armazena somente o valor do backgound color 

for (let p of ps) { //for of pra percorrer todos os valores da div
    p.style.backgroundColor = backgroundColorBody // referencia do background da pagina com o backgrond dos paragrafos
    p.style.color = 'white' //referencia das cores da fonte com o branco
}

