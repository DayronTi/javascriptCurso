//FUNÇÔES CONSTRUTORAS
//Servem para criar novos objetos
//Faz muitas coisas automáticas como: Criar objetos, retornar objetos
// Construtora -> Pessoa (new) => Sempre que criarmos um objeto em uma função construtra sera acrescendido a palavra new(Criando nova pessoa) por exemplo

function Pessoa(nome, sobrenome) {
    //Quando uma função é construtora o corpo da função ja é considerada um objeto pelo javascript
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = () => {
        console.log(this.nome + ': sou um método');
    }
}
//Isso é considerado um molde de pessoa, ainda não existe nem ma pessoa

const p1 = new Pessoa('Luiz', 'Otávio');
const p2 = new Pessoa('Maria', 'Oliveira');
//Dessa forma criamos dois tipos de pessoas.
//A palavra NEW cria um novo 'objeto vazio' e faz o 'this apontar pra ele mesmo' e 'retorna implicitamente o objeto para a const ou var'

//p2.metodo(); Chama a pessoa e o metodo que ela realiza