// Definindo um objeto denominado cliente
const cliente = {
    nome:"Alexandre",
    idade: 37,
    cpf:"123456789-88",
    tel:["99999-9999","88888-8888"],
    email:"allrox@outlook.com"
}

// Criando um novo objeto relacionado ao objeto cliente
cliente.dependente = {
    nome: "Maria",
    parentesco: "Esposa",
    nascimento: "11/08/1970"
}

console.log(cliente)

// Alterando um dos parâmetros do objeto dependente
cliente.dependente.nome = "Joana"

console.log(cliente)