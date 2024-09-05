export default class Figura {
    constructor() {
        if (new.target === Figura) {
            throw new Error("La clase Figura es abstracta y no puede ser instanciada directamente.");
        }
    }

    calcularArea() {
        throw new Error("El método calcularArea() debe ser implementado.");
    }

    calcularPerimetro() {
        throw new Error("El método calcularPerimetro() debe ser implementado.");
    }

    static isNegative(value) {
        return value < 0;
    }
}
