let Pessoa = {
    nome: "João",
    peso: 70,
    altura: 1.75,
    calcularIMC: function() {
        let imc = this.peso / (this.altura * this.altura);
        return imc.toFixed(2); 
    }
};
console.log("Nome da pessoa:", Pessoa.nome);
console.log("Peso:", Pessoa.peso, "kg");
console.log("Altura:", Pessoa.altura, "m");
let imc = Pessoa.calcularIMC();
console.log("IMC:", imc);