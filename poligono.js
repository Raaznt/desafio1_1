import { Vertice } from "./vertice.js";

class Poligono {
  #vertices;

  constructor(...params) {
    try {
      if(params.length < 3) {
        throw ("Vertices nao formam um poligono");
      } else {
        this.#vertices = [];
        for(let v of params) {
          this.#vertices.push(v);
        }
      }
    } catch (erro) {
      console.log(erro);
    }
  }

  addVertice(v) {
    try {
      if(v instanceof Vertice) {
        let encontrado = false;
        for(let i=0; (i<this.#vertices.length) && !encontrado; i++) {
          if(Vertice.equals(this.#vertices[i], v)) {
            encontrado = true;
          }
        }

        if(!encontrado) this.#vertices.push(v); 
      } else {
        throw ("Argumento informado nao e instancia de Vertice");
      }
    } catch(erro) {
      console.log(erro);
    }
  }

  perimetro() {
    var perimetro = 0;
    var v1, v2;
    for(let i=0; i<this.#vertices.length; i++) {
      if(i == this.#vertices.length - 1) {
        v1 = this.#vertices[i];
        v2 = this.#vertices[0];
        perimetro += Vertice.distancia(v1, v2);
      } else {
        v1 = this.#vertices[i];
        v2 = this.#vertices[i + 1];
        perimetro += Vertice.distancia(v1, v2);
      }
    }
    return perimetro;
  }

  qtdVertices = () => this.#vertices.length;
}

export {Poligono};