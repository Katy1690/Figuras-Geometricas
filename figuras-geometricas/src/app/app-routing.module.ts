import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', loadComponent: () => import('./home/home.page').then(m => m.HomePage) },
    { path: 'circle', loadComponent: () => import('./circle/circle.component').then(m => m.CircleComponent) },
    { path: 'triangle', loadComponent: () => import('./triangle/triangle.component').then(m => m.TriangleComponent) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
