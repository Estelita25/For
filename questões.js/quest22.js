let numero = parseInt(prompt("Digite um número inteiro positivo:"), 10); 

while (isNaN(numero) || numero <= 0) {
    numero = parseInt(prompt("Entrada inválida. Digite um número inteiro positivo:"), 10);
}

console.log(`Divisores de ${numero}:`);
for (let i = 1; i <= numero; i++) {
    if (numero % i === 0) { 
        console.log(i);
    }
}