import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CircleComponent } from './circle/circle.component';

@NgModule({
  imports: [BrowserModule, IonicModule, FormsModule, CircleComponent],
  bootstrap: [],
})
export class AppModule { }
