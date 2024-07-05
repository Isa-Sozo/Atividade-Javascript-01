function calcularMedia(nota1, nota2, nota3) {
    let media = (nota1 + nota2 + nota3) / 3;
    return media;
}

let nota1 = 7.5;
let nota2 = 8.0;
let nota3 = 6.5;

let mediaDasNotas = calcularMedia(nota1, nota2, nota3);
console.log("A média das três notas é:", mediaDasNotas);