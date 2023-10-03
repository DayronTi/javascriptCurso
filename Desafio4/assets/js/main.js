function getTimeSecond(segundos) { //recebe os segundos
    const data = new Date(segundos * 1000); //cria a data baseada nos segundos
    return data.toLocaleTimeString('pt-BR', { //Converter a hora para dois algarismos juntos
        hour12: false, //transforma as horas para 24hrs
        timeZone: 'GMT' //inicia as horas em 00
    });
}


const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let timer;

function iniciaRelogio() {
    timer = setInterval(function() {
        segundos++;
        relogio.innerHTML = getTimeSecond(segundos); //A gente joga essa funcao dentro da primeira pra poder formatar os segundos
    }, 1000);
}

iniciar.addEventListener('click', function(event) { //A funçao de evento sera executada quando o elemento "iniciar" for clicado
    relogio.classList.remove('pausado');
    clearInterval(timer);
    iniciaRelogio();
}); 

pausar.addEventListener('click', function(event) {
    relogio.classList.add('pausado');
    clearInterval(timer);
});

zerar.addEventListener('click', function(event) {
    relogio.classList.remove('pausado');
    clearInterval(timer);
    relogio.innerHTML = '00:00:00'
    segundos = 0;
});

