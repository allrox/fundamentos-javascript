// Definindo um objeto denominado cliente
const cliente = {
    nome:"Alexandre",
    idade: 37,
    cpf:"123456789-88",
    tel:["99999-9999","88888-8888"],
    email:"allrox@outlook.com",
    dependente: [{
        nome: "Maria",
        parentesco: "Esposa",
        nascimento: "11/08/1970"
    }]
}

// Utilizando o método .push para incrementar uma array
cliente.dependente.push({
    nome:"pedro",
    parentesco:"filho",
    nascimento:"12/08/2015"
})

// console.log(cliente)


// Localizando objetos no vetor utilizando métdo .filter
const dependenteMenor = cliente.dependente.filter(dependente => dependente.nascimento==="12/08/2015")

// Imprimindo o resultado do método .filter buscando o parâmetro .nome dentro da array 
console.log(dependenteMenor[0].nome)

// Ao imprimir o resultado do método .filter sem os parâmetros
// Será retornada a tupla do vetor
console.log(dependenteMenor)
