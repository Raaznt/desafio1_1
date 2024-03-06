import { question } from "readline-sync";

class Aluno {
  #nome;
  #matricula;
  #P1;
  #P2;

  constructor(nome, matricula) {
    this.#nome = nome;
    this.#matricula = matricula;
  }

  setP1(nota) {
    try{
      if(typeof nota !== "number") {
        throw ("Valor do argumento deve ser numerico");
      } else if(!isNaN(nota)){
        this.#P1 = nota;
      }
    } catch(erro) {
      console.log(erro);
    }
  }

  setP2(nota) {
    try {
      if(typeof nota !== "number") {
        throw ("Valor do argumento deve ser numerico");
      } else if(!isNaN(nota)){
        this.#P2 = nota;
      }
    } catch(erro) {
      console.log(erro);
    }
  }

  getP1 = () => this.#P1;

  getP2 = () => this.#P2;

  getMatricula = () => this.#matricula;

  getNome = () => this.#nome;

  calcularMedia() {

  }

  static equals(obj1, obj2) {
    try{
      if((obj1 instanceof Aluno) && (obj2 instanceof Aluno)) {
        let matricula1 = obj1.getMatricula();
        let matricula2 = obj2.getMatricula();
        return matricula1.localeCompare(matricula2) == 0;
      } else {
        throw ("Argumento nao e instancia de Aluno");
      }
    } catch(erro) {
      console.log(erro);
    }
  }
}

class Turma {
  #alunos;

  constructor() {
    this.#alunos = [];
  }

  inserirAluno(aluno) {
    try {
      if(aluno instanceof Aluno){
        let encontrado = false;
        for(let i=0; (i<this.#alunos.length) && !encontrado; i++) {
          if(Aluno.equals(this.#alunos[i], aluno)) {
            encontrado = true;
          }
        }
        if(!encontrado) this.#alunos.push(aluno);
      } else {
        throw ("Erro: Argumento nao e instancia de aluno");
      }
    } catch(erro) {
      console.log(erro);
    }
  }

  removerAluno(matricula) {
    for(let i=0; i<this.#alunos.length; i++) {
      let matriculaAluno = this.#alunos[i].getMatricula(); 
      if(matricula.localeCompare(matriculaAluno) == 0) this.#alunos.splice(i, 1);
    }
  }

  static #calcularMedia(aluno) {
    var NF = 0;
    const P1 = aluno.getP1();
    const P2 = aluno.getP2();

    if((typeof P1 === "undefined") && (typeof P2 !== "undefined")) {
      NF = P2/2; 
    } else if((typeof P2 === "undefined") && (typeof P1 !== "undefined")) {
      NF = P1/2;
    } else if((typeof P2 === "undefined") && (typeof P1 === "undefined")) {
      NF = 0;
    } else {
      NF = (P1 + P2)/2;
    }

    return NF;
  } 

  imprimirAlunos() {

    this.#alunos.sort((a, b) => a.getNome().localeCompare(b.getNome()));
    
    const cabecalho = 
    "---------------------------------------------\n" +
    "Matricula Nome                P1   P2   NF    \n"+
    "---------------------------------------------"
    console.log(cabecalho);
    for(let aluno of this.#alunos) {
      const matricula = (aluno.getMatricula() + "         ").slice(0, 9);
      const nome = (aluno.getNome() + Array(20).join(" ")).slice(0, 19);
      let P1 = aluno.getP1();
      let P2 = aluno.getP2();
      let NF = Turma.#calcularMedia(aluno);
      P1 = (typeof P1 === "undefined") ? "-" : P1.toFixed(1);
      P1 = (P1 + Array(4).join(" ")).slice(0, 4);
      P2 = (typeof P2 === "undefined") ? "-" : P2.toFixed(1);
      P2 = (P2 + Array(4).join(" ")).slice(0, 4);
      NF = (NF.toFixed(1) + Array(4).join(" ")).slice(0, 4);
      console.log(`${matricula} ${nome} ${P1} ${P2} ${NF}`);
    }
    console.log("---------------------------------------------");
  }
}

export {Turma, Aluno};