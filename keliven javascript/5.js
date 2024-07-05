function gerarNumeroAleatorio(min, max) {
    return Math.random() * (max - min) + min;
}

let numeroAleatorio = gerarNumeroAleatorio(1, 10);
console.log("Número aleatório entre 1 e 10:", numeroAleatorio);
