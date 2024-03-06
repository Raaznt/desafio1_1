import { Vertice } from "./vertice.js";
import { Triangulo } from "./triangulo.js";
import { question } from "readline-sync";



/* O usuario deve informar 3 conjuntos de 3 pontos
para formar 3 triangulos*/

let triangulos = [];
let j = 0;

do {
  let i = 0;
  let vertices = [];
  console.log(`Coordenadas para o triangulo ${j + 1}`);
  do { 
      console.log("Criando vertice ");
      let x = Number(question('Coordenada x: '));
      let y = Number(question('Coordenada y: '));
      console.log();
      vertices[i] = new Vertice(x, y);
      i++;
  } while (i < 3);

  const t = new Triangulo(...vertices);
  triangulos.push(t);
  j++;

} while (j < 3);

let t1 = triangulos[0];
let t2 = t1.clone();

if(Triangulo.equals(t2, t1)) {
  console.log("O triangulo e seu clone sao iguais.\n");
} else {
  console.log("O triangulo e seu clone nao sao iguais.\n");
}

for(let t of triangulos) {
  console.log("Area: ", t.area());
  console.log("Perimetro: ", t.perimetro());
  console.log("Tipo: ", t.tipo(), "\n");
}