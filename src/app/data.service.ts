import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from './persona.model';
import { LoggingService } from './LoggingService.service';
import { LoginService } from './login/login.service';

@Injectable()
export class DataService {

constructor(private httpClient: HttpClient, private loginService: LoginService) { }

  cargarPersonas(){
    const token = this.loginService.getIdToken()
    return this.httpClient.get<Persona[]>('https://listado-personas-fb596-default-rtdb.firebaseio.com/datos.json?auth=' + token)
  }

  guardarPersona(personas: Persona[]){
    const token = this.loginService.getIdToken()

    this.httpClient.put('https://listado-personas-fb596-default-rtdb.firebaseio.com/datos.json?auth=' + token, personas).subscribe(
      reponse => console.log("resultado guardar personas: " + reponse),
      error => console.log("error en guardar " + error)
    )
  }

  modificarPersona(index: number, persona: Persona) {
    const token = this.loginService.getIdToken()

    let url : string
    url = 'https://listado-personas-fb596-default-rtdb.firebaseio.com/datos/' + index + '.json?auth=' + token

    this.httpClient.put(url, persona).subscribe(
      response => console.log("resultado de modificar persona " + response),
      error => console.log("error en modificar persona "+ error)
    )
  }

  eliminarPersona(index: number) {
    const token = this.loginService.getIdToken()

    let url : string
    url = 'https://listado-personas-fb596-default-rtdb.firebaseio.com/datos/' + index + '.json?auth=' + token

    this.httpClient.delete(url).subscribe(
      response => console.log("resultado de eliminar persona " + response),
      error => console.log("error en eliminar persona "+ error)
    )
  }
}
