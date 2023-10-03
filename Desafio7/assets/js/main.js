function Calculadora() { //Cria uma função factory
    this.display = document.querySelector('.display');
    
    this.iniciar = () => {
        this.capturaCliques(); //O método 'inicia' busca por esse método
        this.capturaEnter(); // ou por esse
    };

    this.capturaCliques = () => { //Checa qual o botao foi selecionado
        document.addEventListener('click', e => {
            const el = e.target; //Pega o tarqet do evento, ou seja, qual o evento foi pressionado
            if (el.classList.contains('btn-num')) {
                this.addNumDisplay(el);
                //Se pressiona um numero, chama o método adicionar numeros ao display
            }
            if (el.classList.contains('btn-clear')) {
                this.clear();
                //e o botao for o clear, chama o método clear
            }
            if (el.classList.contains('btn-del')) {
                this.del();
                //Se o botao for o del chama o método del.
            }
            if (el.classList.contains('btn-eq')) {
                this.realizaConta();
                //Se o botao for eq chama o metodo realiza conta
            }
        });
    };

    this.addNumDisplay = (el) => { //Método adiciona numeros ao display
        this.display.value += el.innerText; //adicionao que ta no display o que mais for digitado
        this.display.focus(); //Tira o foco do botao que foi clicado pela ultima vez e adiciona o foco ao display
    };


    this.clear = () => {
        this.display.value = ''; //Fala que o display ta vazio
        this.display.focus(); //Retoma o foco ao display
    };

    this.del = () => {
        this.display.value = this.display.value.slice(0, -1); //Transforma o valor do display nele mesmo menos um elemento
        this.display.focus(); //Retoma o foco ao display
    };

    this.realizaConta = () => {
        try {
            const conta = eval(this.display.value); //Avalie o que ta no display como código javascript

            if(!conta) { //Se nao for conta ou a conta for falsa
                alert('conta invalida');
                return;
            }

            this.display.value = conta //Se tudo ir bem adiciona o valor da conta ao display
        } catch(erro) {
            alert('Conta Inválida!');
            return;
        }
    };

    this.capturaEnter = () => {
        document.addEventListener('keyup', e => { //KEYUP - Quando o botao é solto
            if (e.keyCode !== 13) return; //Captura o codigo da tecla enter
            this.realizaConta(); //chama a função realiza conta e acontece tudo de novo
        });
    };


}

const calculadora = new Calculadora(); //Usa o meu moldepra criar um novo objeto de calculadora 
//ou seja, cria uma instancia.
calculadora.iniciar(); //Tudo começa pelo método inicia