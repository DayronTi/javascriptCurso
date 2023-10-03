const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'section', texto: 'Frase 3'},
    {tag: 'footer', texto: 'Frase 4'},
];

const container = document.querySelector('.container');
const div = document.createElement('div'); //criei uma div

for(let i = 0; i < elementos.length; i++ ) { //Faço um laço for pra ele percorrer toda o array
    let { tag, texto } = elementos[i]; //Uso a atribuiçao por estruturaçao, para atribuir cada elemento que é percorrido a tag
    let tagCriada = document.createElement(tag); //Constante responsavel pela criaçao de tags
    let textoCriado = document.createTextNode(texto);

    tagCriada.appendChild(textoCriado);
    div.appendChild(tagCriada); //adiciona essa tag filha na div, mas a div ainda nao ta no document
}

container.appendChild(div); //Adiciona a div dentro do container 