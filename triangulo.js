import {Vertice} from "./vertice.js";

class Triangulo {
  #v1;
  #v2;
  #v3;

  constructor(v1, v2, v3) {
    try {

      var d12 = Vertice.distancia(v1, v2);
      var d13 = Vertice.distancia(v1, v3);
      var d23 = Vertice.distancia(v2, v3);

      if((d12 + d13 <= d23) || (d12 + d23 <= d13) || (d13 + d23 <= d12)) {
        throw ("ERRO: Vertices informados nao formam um triangulo");
      } else {
        this.#v1 = v1;
        this.#v2 = v2;
        this.#v3 = v3;
      }

    } catch (erro) {
      console.log(erro);
    } 
  }

  getV1 = () => this.#v1;

  getV2 = () => this.#v2;

  getV3 = () => this.#v3;
  
  static equals(obj1, obj2) {
    try {
      if((obj1 instanceof Triangulo) && (obj2 instanceof Triangulo)) {
        let predicado1 = Vertice.equals(obj1.#v1, obj2.#v1) ||
                          Vertice.equals(obj1.#v1, obj2.#v2) || 
                          Vertice.equals(obj1.#v1, obj2.#v3);
        let predicado2 = Vertice.equals(obj1.#v2, obj2.#v1) ||
                          Vertice.equals(obj1.#v2, obj2.#v2) || 
                          Vertice.equals(obj1.#v2, obj2.#v3);
        let predicado3 = Vertice.equals(obj1.#v3, obj2.#v1) ||
                          Vertice.equals(obj1.#v3, obj2.#v2) || 
                          Vertice.equals(obj1.#v3, obj2.#v3);
        return predicado1 && predicado2 && predicado3;
      } else {
        throw ("Argumento informado nao e instancia de Triangulo");
      }
    } catch (err) {
      console.log(err);
    }
  }

  perimetro() {
    var d12 = Vertice.distancia(this.#v1, this.#v2);
    var d13 = Vertice.distancia(this.#v1, this.#v3);
    var d23 = Vertice.distancia(this.#v2, this.#v3);

    return d12 + d13 + d23;
  }

  tipo() {
    var retorno = "escaleno";

    var d12 = Vertice.distancia(this.#v1, this.#v2);
    var d13 = Vertice.distancia(this.#v1, this.#v3);
    var d23 = Vertice.distancia(this.#v2, this.#v3);

    var p1 = (d12 === d13);
    var p2 = (d12 === d23);
    var p3 = (d23 === d13);

    if(!p1 && !p2 && !p3) retorno = "escaleno";

    if((!p1 && !p2 && p3) || (!p1 && p2 && !p3) || (p1 && !p2 && !p3)) retorno = "isosceles";

    if(p1 && p2 && p3) retorno = "equilatero";

    return retorno;
  }

  clone() {
    var v1 = new Vertice(this.#v1.getX(), this.#v1.getY());
    var v2 = new Vertice(this.#v2.getX(), this.#v2.getY());
    var v3 = new Vertice(this.#v3.getX(), this.#v3.getY());
    return new Triangulo(v1, v2, v3);
  }

  area() {
    var s = this.perimetro()/2;
    var a = Vertice.distancia(this.#v1, this.#v2);
    var b = Vertice.distancia(this.#v1, this.#v3);
    var c = Vertice.distancia(this.#v2, this.#v3);

    return s*(s-a)*(s-b)*(s-c);
  }
}

export {Triangulo};

