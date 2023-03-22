const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const alturaEmM = 1.80;
let imc; 
let anoNascimento;

imc = peso / (alturaEmM * alturaEmM);
anoNascimento = 2023 - 30;

console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg');

console.log(`tem ${alturaEmM} de altura e seu IMC é de ${imc}`); /* melhor maneira de colocar as frases junto com as const e let(var)
E isto se chama template strings */

console.log(nome, 'nasceu em', anoNascimento);

