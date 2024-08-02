let aprovados = 0; 

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