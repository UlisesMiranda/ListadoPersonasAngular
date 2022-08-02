import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private loginService: LoginService ){}

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyChznZPZe-3LQMn0x4_CyBeO-Pxw6-sZUE",
      authDomain: "listado-personas-fb596.firebaseapp.com",

    })
  }

  titulo = 'Listado de Personas';

  isAutenticado(){
    return this.loginService.isAutenticado()
  }

  salir(){
    this.loginService.logout()
  }

}
