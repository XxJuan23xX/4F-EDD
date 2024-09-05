import Figura from './figura.js';

export default class Triangulo extends Figura {
    constructor(side1, side2, side3) {
        super();
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }

    calcularArea() {
        const s = (this.side1 + this.side2 + this.side3) / 2;
        return Math.sqrt(s * (s - this.side1) * (s - this.side2) * (s - this.side3));
    }

    calcularPerimetro() {
        return this.side1 + this.side2 + this.side3;
    }

    esValido() {
        return (this.side1 + this.side2 > this.side3) && (this.side1 + this.side3 > this.side2) && (this.side2 + this.side3 > this.side1);
    }

    tipoDeTriangulo() {
        if (this.side1 === this.side2 && this.side2 === this.side3) {
            return 'Equilátero';
        } else if (this.side1 === this.side2 || this.side1 === this.side3 || this.side2 === this.side3) {
            return 'Isósceles';
        } else {
            return 'Escaleno';
        }
    }
}
