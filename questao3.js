import { question } from "readline-sync";
import { Poligono } from "./poligono.js";
import { Vertice } from "./vertice.js";

let n = question("Numero de pontos a informar: ");
let vertices = [];
let i = 0;

do { 
  console.log("Criando vertice ");
  let x = Number(question('Coordenada x: '));
  let y = Number(question('Coordenada y: '));
  console.log();
  const v = new Vertice(x, y);
  vertices.push(v);
  i++;
} while (i < n); 

const p = new Poligono(...vertices);

console.log("Perimetro: ", p.perimetro());
console.log("Quantidade: ", p.qtdVertices());
p.addVertice(new Vertice(2,2));
console.log("Quantidade: ", p.qtdVertices());
