//const nomes = ['Eduardo', 'Maria', 'joana']; //Array literal
//nomes.pop(); //remove do final
//nomes.push(); //Adiciona no final
//nomes.shift(); //Remove no inicio
//nomes.unshift();  //Adiciona no início, no indice 0 

//const fatiando = nomes.slice(1, 3); //A função slice consegue deividir o array em pedaços, nesse caso de 1 ate 3, ou seja 1 e 2
//console.log(fatiando); 

//=> Converter uma string em um array
//const nome = 'Bruno Dayron Tinoco Rocha';
//const nomes = nome.split(' '); //A const nome se transforma em um array, por meio da separação que foram de espaçose é salvo dentro do array nomes
//console.log(nomes);

//=> Converter um array em uma string
//const nomes = [ 'Bruno', 'Dayron', 'Tinoco', 'Rocha' ];
//const nome = nome.join(' '); //Cada nome é acrescendido no próximo separados por espaço 
//console.log(nome);

//=> Utilizando o splice
//
//               -5      -4        -3         -2        -1
//                0       1         2          3         4
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

//nomes.splice(índice, quantos quero apagar, elemento1, elemento2, elemento3);

//#const removidos = nomes.splice(4, 1) //Vai ate o indice 4 e remove 1 no final e salva o nome removido em outra variavel
//#const removidos = nomes.splice(-2, Number.MAX_VALUES); //O array apaga do indice -2 ate o maior indice do array, pode ser relacionado com o ifinito
const removidos = nomes.splice(3, 0, 'Luiz'); //Inicie do 3, remova 0 e adicione o elemento 'luiz' no indice 3
console.log(nomes)