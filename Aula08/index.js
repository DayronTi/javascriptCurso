function mostraHora() {
    // Cria um novo objeto de data, que representa a data e hora atuais.
    let data = new Date();

    // Converte a data e hora atual em uma string no formato de hora local
    // para o fuso horário "pt-BR" (Português do Brasil).
    // A opção 'hour12: false' garante que a hora seja exibida em formato de 24 horas.
    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

function funcaoInterval() {
    console.log(mostraHora());
}

setIntervalo(funcaoInterval, 1000);