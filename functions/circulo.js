import Figura from './figura.js';

export default class Circulo extends Figura {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    calcularArea() {
        return Math.PI * this.radius * this.radius;
    }

    calcularPerimetro() {
        return 2 * Math.PI * this.radius;
    }
}
