//Estrutura de tratamento de erros

//  try {
//      // É executada quando não ha erros
//  } catch (e) {
//      // É executada quando ha erros
//  } finally {
//      //Sempre 
//  }

function mostrarHora(data) {
    if (data && !(data instanceof Date)) {                      //se data recebido e data diferente de um instancia de date
        throw new TypeError('Esperando instancia de Date.');    //retorna um erro do tipo esperando um instancia de dta
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', { 
        hour: '2-digit', // Faz com que as horas tenham dois digitos
        minute: '2-digit', //Respectivamente para todos os tipos de dados
        second: '2-digit', 
        hour12: false //Transforma as horas em 24 horas
    });
}

try {
    const data = new Date('01-01-1970 12:58:12');
    const hora = mostrarHora(11);
    console.log(hora);
} catch(e) {
    //Tratar erro
} finally {
    console.log('Tenha um Bom dia.')
}

