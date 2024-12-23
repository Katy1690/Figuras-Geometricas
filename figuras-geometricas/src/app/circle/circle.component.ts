import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Circle } from '../models/figuras';
import { FormsModule } from '@angular/forms';
import { IonCard, IonCardHeader, IonCardTitle } from "@ionic/angular/standalone";

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule],
  template: `
    <ion-card>
      <ion-card-header>Círculo</ion-card-header>
      <ion-card-content>Formulario para calcular el perímetro del círculo</ion-card-content>
    </ion-card>
  `,
})
export class CircleComponent {
  radio: number = 0;
  resultado: string | null = null;

  calcularPerimetro() {
      const circulo = new Circle(this.radio);
      this.resultado = `El perímetro del círculo es: ${circulo.calcularPerimetro().toFixed(2)}`;
    }
  }
