import { Routes } from '@angular/router';
import { HomePageComponent } from './components/home/home-page/home-page.component';
import { ReservaComponent } from './components/reserva/reserva/reserva.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent }, // Página de registro
  { path: 'forgot-password', component: ForgotPasswordComponent }, // Página de recuperación de contraseña
  { path: 'home', component: HomePageComponent }, // Página principal
  { path: 'reserva', component: ReservaComponent }, // Componente de reserva
  { path: '**', redirectTo: '' }, // Redirección para rutas no válidas
];
