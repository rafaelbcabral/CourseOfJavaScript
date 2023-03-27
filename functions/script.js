function soma(x = 1, y = 1) { // irá atribuir 1 e 1 caso não seja declarado nada posteriormente.
    const resultado = x + y;
    return resultado; // a partir do return nada mais é executado na função.
}

const resultado = soma(4, 2); // atribui os valores caso estes mesmos não tenham.
console.log(resultado); //executa o resultado no console.