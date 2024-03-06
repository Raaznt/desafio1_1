import {question} from "readline-sync";
import {Vertice} from "./vertice.js";


let i = 0;
let vertices = [];

do { 
  console.log("Criando vertice ");
  let x = Number(question('Coordenada x: '));
  let y = Number(question('Coordenada y: '));
  console.log();
  vertices[i] = new Vertice(x, y);
  i++;
} while (i < 3);


let dist = Vertice.distancia(vertices[0], vertices[1]);
let isEqual = Vertice.equals(vertices[1], vertices[2]);
const v = vertices[1];

console.log("Distancia entre os vertices 1 e 2: ", dist);
isEqual ? console.log("Vertices 2 e 3 sao iguais") : console.log("Vertices 2 e 3 nao sao iguais");
console.log(`Antes da chamada a move() x = ${v.getX()}, y = ${v.getY()}`);
v.move(9, 4);
console.log(`Depois da chamada a move() x = ${v.getX()}, y = ${v.getY()}`); 