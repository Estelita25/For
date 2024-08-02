function calcularMedia() {
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