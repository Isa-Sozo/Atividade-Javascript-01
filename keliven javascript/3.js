function contarLetra(frase, letra) {
    frase = frase.toLowerCase();
    letra = letra.toLowerCase();

    let contador = 0;
    for (let i = 0; i < frase.length; i++) {
        if (frase[i] === letra) {
            contador++;
        }
    }

    return contador;
}
let frase = "Esta é uma frase de exemplo";
let letraProcurada = "e";
let quantidade = contarLetra(frase, letraProcurada);

console.log(`A letra '${letraProcurada}' aparece ${quantidade} vezes na frase.`);