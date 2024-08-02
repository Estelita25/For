let soma = 0; 
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