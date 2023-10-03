let numeroEscolhido = Number(prompt("Escolha um número qualquer: "))
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');


numeroTitulo.innerHTML = numeroEscolhido;
texto.innerHTML += `A raiz quadrada desse número é: ${numeroEscolhido ** 0.5}`;
texto.innerHTML += `<p>${numeroEscolhido} é um número inteiro?  ${Number.isInteger(numeroEscolhido)}. </p>` ;
texto.innerHTML += `<p>é NaN? ${Number.isNaN(numeroEscolhido)}. </p>` ;
texto.innerHTML += `<p>Arredondando pra baixo: ${Math.floor(numeroEscolhido)}. </p>`;
texto.innerHTML += `<p>Arredondando pra cima: ${Math.ceil(numeroEscolhido)}. </p>`;
texto.innerHTML += `<p>Com duas casas decimais ${numeroEscolhido.toFixed(2)}. </p>`;
