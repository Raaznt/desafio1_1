class Vertice {
  #x;
  #y;

  constructor(x, y) {
    this.#x = x;
    this.#y = y;
  }

  getX() { 
    return this.#x;
  }

  getY() {
    return this.#y;
  }

  toString() {
    return `(${this.#x},${this.#y})`;
  }

  move(x, y) {
    this.#x = x;
    this.#y = y;
  }

  static distancia(obj1, obj2) {
    var diffX, diffY, dist;
    try {
      if((obj1 instanceof Vertice) && (obj2 instanceof Vertice)) {
        diffX = obj1.getX() - obj2.getX();
        diffY = obj1.getY() - obj2.getY();
        dist = Math.sqrt((diffX ** 2) + (diffY ** 2));
        return dist;
      } else {
        throw("Argumento informado nao e instancia de Vertice");
      }
    } catch (err) {
      console.log(err);
    }
  }

  static equals(obj1, obj2) {
    try {
      if((obj1 instanceof Vertice) && (obj2 instanceof Vertice)) {
        return (obj1.getX() === obj2.getX()) && (obj1.getY() === obj2.getY());
      } else {
        throw new TypeError("Argumento informado nao e instancia de Vertice");
      }
    } catch (err) {
      console.log(err);
    }
  }
}

export {Vertice};

