const nomeAluno = []
const nota1 = []
const nota2 = []
const media = []
let contador = 0, qtdAluno;

qtdAluno = Number(prompt("quantos alunos serão cadastrados"));
do {
    nomeAluno [contador] = prompt("qual é o seu nome");
    nota1 [contador] = Number(prompt("qual foi a nota do primeiro semestre"));
    nota2 [contador] = Number(prompt("qual foi a nota do segundo semestre"));
    media[contador] = (nota1[contador] + nota2[contador]) / 2; 
    contador++;
} while (contador!=qtdAluno);


alert("aqui está sua media" + media.toFixed(2))

contador = 0;
do {
    alert("Nome do aluno: " + nome[contador] + "Média" + media[contador]);
    contador++;
} while (contador!=qtdAluno);
