// Definindo um objeto denominado cliente
const cliente = {
    nome:"Alexandre Rocha",
    idade: 37,
    cpf:"123456789-88",
}

console.log(`O cliente ${cliente.nome} tem ${cliente.idade}.`)
console.log(`Os 3 primeiros número do CPF do cliente são`,(cliente.cpf.substring(0,3)),`.***.***-**`)