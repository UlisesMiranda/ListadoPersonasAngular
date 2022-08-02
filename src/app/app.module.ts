import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PersonaComponent } from './personas/persona/persona.component';
import { FormularioComponent } from './personas/formulario/formulario.component';
import { LoggingService } from './LoggingService.service';
import { PersonasService } from './persona.service';
import { AppRoutingModule } from './app-routing.module';
import { PersonasComponent } from './personas/personas.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { LoginService } from './login/login.service';
import { LoginGuardianService } from './login/login-guardian.service';

@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    FormularioComponent,
    PersonasComponent,
      LoginComponent,
      ErrorComponent
   ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
  ],
  providers: [LoggingService, PersonasService, DataService, LoginService, LoginGuardianService],
  bootstrap: [AppComponent]
})
export class AppModule { }
