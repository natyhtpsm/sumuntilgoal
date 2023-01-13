// Name: Nathália Pimentel de Assis
//University: University of Brasilia
//Bachelor student in eletronic engineering course
//Date: November 4th 2022 


function somaAteMeta(inicio, meta) {
    let numeros = [];
    let soma = 0;
 
    for (let i = inicio + 1; soma < meta; i++) {
        numeros.push(i); //add coisa no final da string
        soma += i;
    }
    return numeros;
}

