function calcularSomaArray(array) {
    let soma = 0;
    for (let i = 0; i < array.length; i++) {
        soma += array[i];
    }

    return soma;
}
let numeros = [5, 10, 15, 20];
let somaDosNumeros = calcularSomaArray(numeros);
console.log("A soma dos elementos do array é:", somaDosNumeros);