import Triangulo from './triangulo.js';
import Circulo from './circulo.js';
import Figura from './figura.js';
import Cuadrado from './cuadrado.js';
import Rectangulo from './rectangulo.js';

class CalculadoraFiguras {
    constructor() {
        this.figura = null;
    }

    setShape(shape) {
        const dropdownBtn = document.querySelector('.dropdown-btn');
        dropdownBtn.textContent = shape + " ";
        const span = document.createElement("span");
        span.classList.add("dropdown-arrow");
        span.textContent = "▼";
        dropdownBtn.appendChild(span);

        const shapeValue = shape.toLowerCase();
        let inputs = '';

        switch (shapeValue) {
            case 'rectángulo':
                inputs = `
                    <label for="width">Ancho:</label>
                    <input type="number" id="width" step="0.01" required>
                    <label for="height">Altura:</label>
                    <input type="number" id="height" step="0.01" required>
                `;
                break;
            case 'cuadrado':
                inputs = `
                    <label for="side">Lado:</label>
                    <input type="number" id="side" step="0.01" required>
                `;
                break;
            case 'círculo':
                inputs = `
                    <label for="radius">Radio:</label>
                    <input type="number" id="radius" step="0.01" required>
                `;
                break;
            case 'triángulo':
                inputs = `
                    <label for="side1">Lado 1:</label>
                    <input type="number" id="side1" step="0.01" required>
                    <label for="side2">Lado 2:</label>
                    <input type="number" id="side2" step="0.01" required>
                    <label for="side3">Lado 3:</label>
                    <input type="number" id="side3" step="0.01" required>
                `;
                break;
        }

        document.getElementById('inputs').innerHTML = inputs;
    }

    calculate() {
        const shape = document.querySelector('.dropdown-btn').textContent.trim().split(' ')[0].toLowerCase();
        let result = '';

        switch (shape) {
            case 'rectángulo':
                const width = parseFloat(document.getElementById('width').value);
                const height = parseFloat(document.getElementById('height').value);
                if (Figura.isNegative(width) || Figura.isNegative(height)) {
                    result = "No se aceptan valores negativos.";
                } else if (width && height) {
                    const rect = new Rectangulo(width, height);
                    if (rect.esCuadrado()) {
                        result = "Las medidas no corresponden a un rectángulo. Es un cuadrado.";
                    } else {
                        result = `Área: ${rect.calcularArea()} cm2, Perímetro: ${rect.calcularPerimetro()} cm`;
                    }
                } else {
                    result = "Por favor ingresa medidas válidas.";
                }
                break;
            case 'cuadrado':
                const side = parseFloat(document.getElementById('side').value);
                if (Figura.isNegative(side)) {
                    result = "No se aceptan valores negativos.";
                } else if (side) {
                    const cuadrado = new Cuadrado(side);
                    result = `Área: ${cuadrado.calcularArea()} cm2, Perímetro: ${cuadrado.calcularPerimetro()} cm`;
                } else {
                    result = "Por favor ingresa una medida válida.";
                }
                break;
            case 'círculo':
                const radius = parseFloat(document.getElementById('radius').value);
                if (Figura.isNegative(radius)) {
                    result = "No se aceptan valores negativos.";
                } else if (radius) {
                    const circulo = new Circulo(radius);
                    result = `Área: ${circulo.calcularArea().toFixed(2)} cm2, Perímetro: ${circulo.calcularPerimetro().toFixed(2)} cm`;
                } else {
                    result = "Por favor ingresa un radio válido.";
                }
                break;
            case 'triángulo':
                const side1 = parseFloat(document.getElementById('side1').value);
                const side2 = parseFloat(document.getElementById('side2').value);
                const side3 = parseFloat(document.getElementById('side3').value);
                if (Figura.isNegative(side1) || Figura.isNegative(side2) || Figura.isNegative(side3)) {
                    result = "No se aceptan valores negativos.";
                } else if (side1 && side2 && side3) {
                    const triangulo = new Triangulo(side1, side2, side3);
                    if (triangulo.esValido()) {
                        result = `Área: ${triangulo.calcularArea().toFixed(2)} cm2, Perímetro: ${triangulo.calcularPerimetro().toFixed(2)} cm, Tipo: ${triangulo.tipoDeTriangulo()}`;
                    } else {
                        result = "Las medidas no corresponden a un triángulo válido.";
                    }
                } else {
                    result = "Por favor ingresa medidas válidas.";
                }
                break;
            default:
                result = "Por favor selecciona una figura.";
                break;
        }

        document.getElementById('result').innerText = result;
    }
}

const calculadoraFiguras = new CalculadoraFiguras();
window.calculadoraFiguras = calculadoraFiguras; 
