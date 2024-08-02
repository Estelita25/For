let numero = prompt("Digite um número inteiro:"); 

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
