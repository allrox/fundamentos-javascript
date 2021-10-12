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

// Definindo uma variável de escopo local com 'let'
let relatorio="";

// Definindo um loop para exibição dos dados do cliente.
// Para 'info' em 'cliente': Se o tipo de dados em cliente[info] for igual a "object" ou "function"
// apenas prossiga, senão, a variável relatório receberá a estrutura que chama o nome da propriedade 
// seguido do respectivo valor
for ( let info in cliente )
{
    if(typeof cliente[info] === "object" || typeof cliente[info] === "function") {
        continue
    } else {        
        relatorio += `
        ${info}: ${cliente[info]}`
    }

}

console.log(relatorio)