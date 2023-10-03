function zeroEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

const data = new Date()
const diaSemana = data.getDay();
const dia = data.getDate()+1;
const mes = data.getMonth();
const ano = data.getFullYear();
const hora = zeroEsquerda(data.getHours());
const minutos = zeroEsquerda(data.getMinutes());
    
function diaSemanaTexto(diaSemana) {
    let diaSemanaTexto;
    switch(diaSemana) {
    case 0:
        diaSemanaTexto = 'Domingo';
        return diaSemanaTexto;
    case 1:
        diaSemanaTexto = 'Segunda-feira';
        return diaSemanaTexto;
    case 2:
        diaSemanaTexto = 'Terça-feira';
        return diaSemanaTexto;
    case 3:
        diaSemanaTexto = 'Quarta-feira';
        return diaSemanaTexto;
    case 4:
        diaSemanaTexto = 'Quinta-feira';
        return diaSemanaTexto;
    case 5:
        diaSemanaTexto = 'Sexta-feira';
        return diaSemanaTexto;
    case 6:
        diaSemanaTexto = 'Sábado';
        return diaSemanaTexto;
    default:
        diaSemanaTexto = '';
        return diaSemanaTexto;
    }
}

function mesesDoAno(mes) {
    let mesesDoAnoTexto;
    switch(diaSemana) {
    case 0:
        mesesDoAnoTexto = 'Janeiro';
        return mesesDoAnoTexto;
    case 1:
        mesesDoAnoTexto = 'Fervereiro';
        return mesesDoAnoTexto;
    case 2:
        mesesDoAnoTexto = 'Março';
        return mesesDoAnoTexto;
    case 3:
        mesesDoAnoTexto = 'Abril';
        return mesesDoAnoTexto;
    case 4:
        mesesDoAnoTexto = 'Maio';
        return mesesDoAnoTexto;
    case 5:
        mesesDoAnoTexto = 'Junho';
        return mesesDoAnoTexto;
    case 6:
        mesesDoAnoTexto = 'Julho';
        return mesesDoAnoTexto;
    case 7:
        mesesDoAnoTexto = 'Agosto';
        return mesesDoAnoTexto;
    case 8:
        mesesDoAnoTexto = 'Setembro';
        return mesesDoAnoTexto;
    case 9:
        mesesDoAnoTexto = 'Outubro';
        return mesesDoAnoTexto;
    case 10:
        mesesDoAnoTexto = 'Novembro';
        return mesesDoAnoTexto;
    case 11:
        mesesDoAnoTexto = 'Dezembro';
        return mesesDoAnoTexto;
    default:
        mesesDoAnoTexto = '';
        return mesesDoAnoTexto;
    }
}

const anoTexto = mesesDoAno(mes)
const diasDaSemana = diaSemanaTexto(diaSemana);

const h1 = document.querySelector('.container h1');
h1.innerHTML = `${diasDaSemana}, ${dia} de ${anoTexto} de ${ano} [${hora}:${minutos}]`


