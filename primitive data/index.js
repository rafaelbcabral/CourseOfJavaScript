// String, number, undefined , null, boolean, symbol

const nome = 'luiz'; // String
const nome1 = "luiz"; // String
const nome2 = `luiz`; // String

const num1 = 10; // number
const num2 = 10.52; //number

let nomeAluno; // undefined = não aponta para lugar nenhum na memória
const sobrenomeAluno = null; // Nulo = não aponta para lugar nenhum na memória
const aprovado = false; // boolean = true or false (logic)

// Abaixo, só para confimar os tipos deles

console.log(typeof nome, nome);
console.log(typeof nome1, nome1);
console.log(typeof nome2, nome2);


console.log(typeof  num1, num1);

console.log(typeof  num2, num2);


console.log(typeof  nomeAluno, nomeAluno);
console.log(typeof  sobrenomeAluno, sobrenomeAluno); // Bug do JavaScript dizer que o valor null é um objeto
console.log(typeof aprovado, aprovado);



