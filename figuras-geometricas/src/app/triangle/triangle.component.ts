import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Triangle } from '../models/figuras';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-triangle',
  templateUrl: './triangle.component.html',
  styleUrls: ['./triangle.component.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule],
})
export class TriangleComponent {
  lado1: number = 0;
  lado2: number = 0;
  lado3: number = 0;
  resultado: string | null = null;

  calcularPerimetro() {
      const triangulo = new Triangle(this.lado1, this.lado2, this.lado3);
      this.resultado = `El perímetro del triángulo es: ${triangulo.calcularPerimetro()}`;
    }
  }
