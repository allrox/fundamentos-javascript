// Definindo um objeto denominado cliente
const cliente = {
    nome:"Alexandre",
    idade: 37,
    cpf:"123456789-88",
    tel:["99999-9999","88888-8888"],
    email:"allrox@outlook.com"
}

cliente.tel.forEach(tel=>console.log(tel))