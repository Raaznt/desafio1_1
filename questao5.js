import { question } from "readline-sync";
import moment from "moment";

const expNome = new RegExp(/^(([A-Z]{1}[a-z]+)(\s([A-Z]{1}[a-z]+))*)$/);
const expCPF = new RegExp(/^\d{11}$/);
const expData = new RegExp(/^((0[1-9])|([12][0-9])|(3[01]))\/((0[1-9])|(1[0-2]))\/[0-9]{4}$/);
const expRenda = new RegExp(/^\d+\,[0-9]{2}$/);
const expEstadoCivil = new RegExp(/^[csvdCSVD]$/);

let nome, cpf, data, renda, estadoCivil, dependentes;

var valido = false;
do {
  nome = question("Nome: ");
  valido = expNome.test(nome) && (nome.length > 4);
  if(!valido) {
    console.log("Nome invalido. Deve conter pelo menos 5 caracteres"+
     " alfabéticos. Nome e sobrenome devem comecar com letras maiusculas.");
  }
} while(!valido);

do {
  cpf = question("CPF: ");
  valido = expCPF.test(cpf);
  if(!valido) {
    console.log("CPF invalido. Deve conter 11 digitos.");
  } else {
    cpf = cpf.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4');
  }
} while(!valido);

do {
  data = question("Data de Nascimento: ");
  valido = expData.test(data);
  let dataMoment = moment(data, "DD/MM/YYYY", true);
  valido = valido && dataMoment.isValid();
  if(!valido) {
    console.log("Data invalida. Data deve ter formato DD/MM/AAAA");
  } else {
    data = dataMoment.toDate();
  }
} while(!valido);

do {
  renda = question("Renda: ");
  valido = expRenda.test(renda);
  renda = renda.replace(",", ".");
  if(!valido) {
    console.log("Valor invalido. Informe valor numerico com virgula e duas casas decimais.");
  } else {
    renda = Number(renda).toFixed(2);
    
  }
} while(!valido);

do {
  estadoCivil = question("Estado civil: ");
  valido = expEstadoCivil.test(estadoCivil);
  if(!valido) {
    console.log("Estado invalido. Valores permitidos: c, s, v, d, C, S, V, D");
  }
} while(!valido);

do {
  dependentes = Number(question("Numero de dependentes: "));
  if(!isNaN(dependentes)){
    valido = (dependentes >= 0) && (dependentes < 11);
  } else {
    valido = false;
  }

  if(!valido) {
    console.log("Valor invalido. Valor informado deve ser um numero entre 0 e 10");
  }
} while(!valido);

console.log("Nome: ", nome);
console.log("CPF: ", cpf);
console.log("Data Nascimento: ", data.toLocaleDateString("pt-BR"));
console.log("Renda: ", renda);
console.log("Estado civil: ", estadoCivil);
console.log("Dependentes: ", dependentes);