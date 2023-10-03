//const data = new Date();
//console.log(data.toString());

//criar uma funçao que coloque 0 à esquerda
function zeroEsquerda(num) {
    return num >= 10 ? num : `0${num}`;

}

function formatData (date) {
    const dia = zeroEsquerda(data.getDate());
    const mes = zeroEsquerda(data.getMonth() +1);
    const ano = zeroEsquerda(data.getFullYear());


    return `${dia}/${mes}/${ano}`
}

const data = new Date()
const dataBrasil = formatData()
console.log(dataBrasil);