// Definindo um objeto denominado cliente
const cliente = {
    nome:"Alexandre",
    idade: 37,
    cpf:"123456789-88",
    tel:["99999-9999","88888-8888"],
    email:"allrox@outlook.com",
    dependente: [
        {
            nome: "Maria",
            parentesco: "Esposa",
            nascimento: "11/08/1970"
        }
    ],

    saldo:0,

    extrato:function(cliente){
        console.log("Saldo atual: R$",this.saldo)
    },

    // Método para somar um valor ao saldo
    depositar:function(valor)
    {
        this.saldo += valor
        console.log(`Depósito de R$ ${valor} realizado.`)
    },

    // Método para subtrair um valor do saldo
    sacar:function(valor)
    {
        if( valor <= this.saldo ){
            this.saldo -= valor
            console.log(`Saque de R$ ${valor} realizado.`)
        } else {
            console.log(`Cliente sem limite para o saque de R$ ${valor}.`)
        }
    }
}

// Imprime o saldo inicial
// console.log(cliente.saldo)

console.log(cliente)

// Função para exibir o saldo disponível
cliente.extrato()

// Realiza operações de depoósito e saque
cliente.depositar(1800)
cliente.sacar(800)

// Função para exibir o saldo disponível
cliente.extrato()