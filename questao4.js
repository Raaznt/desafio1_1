import { question } from "readline-sync";
import { Aluno, Turma } from "./turma.js";

let i = 0;
const turma = new Turma();
const stringVazia = new RegExp(/^\s*$/);

let n = Number(question("Quantidade de alunos a inserir: "));

do {
  const matricula = question("\nInforme matricula: ");
  const nome = question("Informe nome: ");
  const N1 = question("Informe nota N1: ");
  const N2 = question("Informe nota N2: ");
  const aluno = new Aluno(nome, matricula);
  if(!stringVazia.test(N1)) aluno.setP1(Number(N1));
  if(!stringVazia.test(N2)) aluno.setP2(Number(N2));
  turma.inserirAluno(aluno);
  i++;
} while(i < n);

turma.imprimirAlunos();