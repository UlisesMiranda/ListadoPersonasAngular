import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { LoginGuardianService } from './login/login-guardian.service';
import { LoginComponent } from './login/login.component';
import { FormularioComponent } from './personas/formulario/formulario.component';
import { PersonasComponent } from './personas/personas.component';

const routes: Routes = [
  {path: '', component: PersonasComponent, canActivate:[LoginGuardianService]},
  {path: 'personas', component: PersonasComponent, canActivate:[LoginGuardianService], children: [
    {path: 'agregar', component: FormularioComponent},
    {path: ':id', component: FormularioComponent}
  ]},
  {path: 'login', component: LoginComponent},
  {path: '**', component: ErrorComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(
    routes
  )],
  exports:[RouterModule]
})
export class AppRoutingModule { }
