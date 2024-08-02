//questão 1
//o comando for é uma ferramenta fundamental para repetir operações em programação, economizando a necessidade de escrever o mesmo código várias vezes e permitindo a execução de tarefas repetitivas de forma eficiente.

//questão2
//o comando for define o início de uma repetição por meio de uma estrutura específica que inclui três partes dentro dos parênteses.
//for (inicialização; condição; iteração) 

//questão 3
// O for determina o fim da execução por meio da condição especificada na sua estrutura

//questão 4
//a alteração do valor em cada repetição ocorre através da parte de iteração da estrutura do loop

//questão5
/*for (let i=0; i <10 ; i++){
    console.log("Testando uma frase!!")
}*/

//questão6
/*for (let i=1; i <5 ; i++){
    console.log(i)
}
*/

//questão7
/*for (let i=0; i <10 ; i++){
   
    if( i == 3){
        break;
    }
    console.log(i)
    }
*/

//questão 8
/*for (let i=0; i <10 ; i++){
   
    if( i == 2){
        continue;
    }
    console.log(i)
    }
*/

//questão 9
/*let nomes = ["ana", "Maria", "Estelita", "João", "Pedro"]

for (let n of nomes){
    console.log(n)
}
*/

//questão 10
/*for (let i = 1; i <= 10; i++) {
    console.log(i);
}
    */

//questão 11
/*for (let i = 10; i >= 1; i--) {
    console.log(i);
}
*/

//questão 12
/* let soma = 0;

for (let i = 1; i <= 100; i++) {
    soma += i;  
}

console.log("A soma dos números de 1 a 100 é:", soma);
*/

// questão 13
/*for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
*/

// questão 14
/* let produto = 1; 

for (let i = 1; i <= 5; i++) {
    produto *= i; 
}

console.log("O produto dos números de 1 a 5 é:", produto);
*/

//questão 15
/* const numero = 7;

for (let i = 1; i <= 10; i++) {
    const resultado = numero * i;
    console.log(`${numero} x ${i} = ${resultado}`);
}
*/

//questão 16
/* function calcularMedia() {
    let soma = 0; 

    for (let i = 1; i <= 5; i++) {
        let nota = parseFloat(prompt(`Digite a nota ${i}:`)); 
        while (isNaN(nota) || nota < 0 || nota > 10) { 
            nota = parseFloat(prompt(`Entrada inválida. Digite a nota ${i} (de 0 a 10):`));
        }
        soma += nota; 
    }

    const media = soma / 5; 
    console.log(`A média das 5 notas é: ${media.toFixed(2)}`); 
}
    */

// questão 17
/*
for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}
*/

//quetão 18
/* let numeros = []; 

for (let i = 0; i < 10; i++) {
    let numero = parseFloat(prompt(`Digite o número ${i + 1}:`)); 
    while (isNaN(numero)) { 
        numero = parseFloat(prompt(`Entrada inválida. Digite o número ${i + 1}:`));
    }
    numeros.push(numero); 
}

let maior = numeros[0];
let menor = numeros[0];

for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maior) {
        maior = numeros[i];
    }
    if (numeros[i] < menor) {
        menor = numeros[i];
    }
}

console.log(`O maior valor digitado é: ${maior}`);
console.log(`O menor valor digitado é: ${menor}`);
*/

// questão 19
/* for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {  // Verifica se o número é ímpar
        console.log(i); 
    }
}
    */

// questão 20
/* let aprovados = 0; 

for (let i = 1; i <= 5; i++) {
    let nota = parseFloat(prompt(`Digite a nota do aluno ${i}:`)); 
    while (isNaN(nota) || nota < 0 || nota > 10) { 
        nota = parseFloat(prompt(`Entrada inválida. Digite a nota do aluno ${i} (de 0 a 10):`));
    }
    if (nota >= 7) { 
        aprovados++; 
    }
}

console.log(`Número de alunos aprovados: ${aprovados}`);
*/

// questão 22
/* let numero = parseInt(prompt("Digite um número inteiro positivo:"), 10); 

while (isNaN(numero) || numero <= 0) {
    numero = parseInt(prompt("Entrada inválida. Digite um número inteiro positivo:"), 10);
}

console.log(`Divisores de ${numero}:`);
for (let i = 1; i <= numero; i++) {
    if (numero % i === 0) { 
        console.log(i);
    }
}
*/

// questão 23
/* let soma = 0; 
const totalPessoas = 5; 

for (let i = 1; i <= totalPessoas; i++) {
    let altura = parseFloat(prompt(`Digite a altura da pessoa ${i} em metros:`)); 
    while (isNaN(altura) || altura <= 0) { 
        altura = parseFloat(prompt(`Entrada inválida. Digite a altura da pessoa ${i} em metros:`));
    }
    soma += altura; 
}

let media = soma / totalPessoas;

console.log(`A média das alturas das ${totalPessoas} pessoas é: ${media.toFixed(2)} metros`);
*/

// questão 25
/* let numero = prompt("Digite um número inteiro:"); 

while (isNaN(numero) || !Number.isInteger(parseFloat(numero))) {
    numero = prompt("Entrada inválida. Digite um número inteiro:");
}

numero = numero.toString();
let somaPares = 0; 

for (let i = 0; i < numero.length; i++) {
    let digito = parseInt(numero[i], 10); 
    if (digito % 2 === 0 && digito !== 0) { 
        somaPares += digito; 
    }
}

console.log(`A soma dos dígitos pares é: ${somaPares}`);
*/

