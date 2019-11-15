// 01: faça uma função que retorne se uma dada string contém a letra H nela

function retornarString(palavra) {
    const regex = /h/
    return regex.test(palavra)
}

const resultado = retornarString('baby shark')
console.log(resultado)

// 02: altere sua função para que ela aceite maiuscula e minuscula (case insensitive)

function retornarString2(palavra) {
    const regex = /h/i
    return regex.test(palavra)
}

const resultado2 = retornarString2('Howard')
console.log(resultado2)

// 03: altere sua função para que ela retorne se a string termina com "a" ou comece com "b", aceitando maiúscula e minúscula também

function retornarString3(palavra){
    const regex = /a$|^b/i
    return regex.test(palavra)
}

const resultado3 = retornarString3('Bacon')
console.log(resultado3)


// DESAFIO: altere sua função para verificar se a string contem números

function retornarString4(palavra){
    const regex = /\d/i
    return regex.test(palavra)
}

const resultado4 = retornarString4('4Fun')
console.log(resultado4)
