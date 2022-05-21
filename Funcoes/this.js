function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
    nome: "Maria",
    idade: 26,
};
const pessoa2 = {
    nome: "Levi",
    idade: 30,
};
const animal = {
    nome: "Pudim",
    idade: 2,
    raca: "Pug",
};

// console.log (calculaIdade.call(pessoa1,30))
console.log (calculaIdade.apply(pessoa2,[30]))

