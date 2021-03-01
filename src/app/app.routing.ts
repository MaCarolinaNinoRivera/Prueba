import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Roteo de las páginas
import { Login } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ErrorComponent } from './components/error/error.component';
 //Array de rutas
 const appRoutes: Routes = [
   {path: '', component: Login},
   {path: 'login', component: Login},
   {path: 'registro', component: RegistroComponent},
   {path: '**', component: ErrorComponent}//finalmente ruta de error
 ];

//Exportar el módulo para su uso en la aplicación
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
