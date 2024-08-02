let numeros = []; 

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