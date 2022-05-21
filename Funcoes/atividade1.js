const alunos = [
	{
		nome: 'João',
		nota: 5,
		turma: '1B',
	},
	{
		nome: 'Sofia',
		nota: 9,
		turma: '1B',
	},
	{
		nome: 'Paulo',
		nota: 6,
		turma: '2C',
	},
    {
        nome: 'Miguel',
        nota: 4,
        turma: '2c'
    }
];

function alunosAprovados (arr, media){
    let aprovados =[];

    for (let i = 0; i < arr.length; i++){

       const {nota, nome} = arr[i];

        if(nota >= media) {
            aprovados.push(nome);
        }
    }
    return aprovados
}
function alunosReprovados (arr, media){
    let reprovados =[];

    for (let i = 0; i < arr.length; i++){

       const {nota, nome} = arr[i];

        if(nota < media) {
            reprovados.push(nome);
        }
    }
    return reprovados
}

console.log('alunos aprovados',alunosAprovados (alunos, 5))
console.log('alunos reprovados', alunosReprovados (alunos, 5))