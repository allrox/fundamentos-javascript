// Definindo um objeto denominado cliente
const cliente = {
    nome:"Alexandre",
    idade: 37,
    cpf:"123456789-88",
    email:"allrox@outlook.com"
}

const chaves = ["nome","idade","cpf","email"]
// Método para exibir o conteúdo de um parâmetro do vetor
// através de seu índice
// console.log(cliente[chaves[0]]


// Método para exibir o conteúdo de uma array
// Após definida a variável info, o vetor é percorrido 
// encontrando e retornando cada parâmetro do objeto
chaves.forEach(info=>console.log(cliente[info]))