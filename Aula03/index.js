//Quando não mencionamos que determinada parte de umcódgo está em um determinado escopo, ele fica no escopo global e isso pode gerar problemas de convegencia com outros códigos de escopo global.


//coloco dentro do escopo de uma função pra não entrar em conflito com outra
function meuEscopo () {
    const form = document.querySelector(".form");  //ligo o form do js com o form do html pela class utilzando o query selector
    const resultado = document.querySelector('.res') // Ligo o resultado do js com o res do html atraves do query selector

    const pessoas = [];  //crio o array

    function recebeEventoForm (evento) { // funçao de evento, define a ação que o evento tera
        evento.preventDefault();  //tira o padrao do google que é atualizar a págna


        //crio uma const para cada variável pra ligar o html ao javascript
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        //Quando as variaveis estao cheias é adcionado ao array pessoa automáticamente
        pessoas.push({

            //cria os objetos
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });

        console.log(pessoas); //mostra o array no console do google

        resultado.innerHTML += `<p>${nome.value}` + `${sobrenome.value} ${peso.value} ${altura.value}</p>`; //mostra o array na janela do google
    }

    form.addEventListener('submit', recebeEventoForm); //responsável por criar o evento que a página terá quando der submit
}

meuEscopo(); //rodar a função