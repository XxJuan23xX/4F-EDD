import Figura from './figura.js';

export default class Rectangulo extends Figura {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    calcularArea() {
        return this.width * this.height;
    }

    calcularPerimetro() {
        return (this.width + this.height) * 2;
    }

    esCuadrado() {
        return this.width === this.height;
    }
}
