function contarPalavrasUnicas(frase) {
    let palavras = frase.split(' ');
    let palavrasUnicas = new Set(palavras);
    return palavrasUnicas.size;
}
let frase = "Esta é uma frase exemplo, com algumas palavras repetidas. Frase exemplo com palavras únicas.";
let numeroPalavrasUnicas = contarPalavrasUnicas(frase);
console.log("Número de palavras únicas na frase:", numeroPalavrasUnicas);