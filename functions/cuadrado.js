import Figura from './figura.js';

export default class Cuadrado extends Figura {
    constructor(side) {
        super();
        this.side = side;
    }

    calcularArea() {
        return this.side * this.side;
    }

    calcularPerimetro() {
        return 4 * this.side;
    }
}
