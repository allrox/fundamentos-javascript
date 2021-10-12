// Definindo um objeto denominado cliente
const cliente = {
    nome:"Alexandre",
    idade: 37,
    cpf:"123456789-88",
    tel:["99999-9999","88888-8888"],
    email:"allrox@outlook.com",
    // dependente: [
    //     {
    //         nome: "Maria",
    //         parentesco: "Esposa",
    //         nascimento: "11/08/1970"
    //     }
    // ],

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

// Função para avaliar se é recomendável a oferta de seguro ao cliente
//  com base na existência de dependentes.
function ofertarSeguro(objeto){
    const ofertarSeguro = Object.keys(objeto);
    if(ofertarSeguro.includes("dependente")){
        console.log(`É recomendável a oferta de seguro para ${objeto.nome}`);
    } else {
        console.log(`O cliente ${objeto.nome} não possui dependentes e está fora do perfil para oferta de seguro.`)
    }
}

// Aplicando a função com o cliente
ofertarSeguro(cliente)


// Métodos de exibição de objetos

// Object.values
console.log(Object.values(cliente))

// Object.entries
console.log(Object.entries(cliente))