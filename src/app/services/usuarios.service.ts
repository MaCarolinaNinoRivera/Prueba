import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import { Observable } from 'rxjs';
import axios from "axios";
let headers =  {
  "Content-Type":"application/json"
}

@Injectable({
  providedIn: 'root'
})

export class UsuarioServicie {
  myAppUrl = 'http://localhost:63272/';
  myApiUrl = 'api/Usuarios/';
  list: Usuario[];
  constructor(private http: HttpClient){ }

  gettUsuario(){
    return this.http.get(this.myAppUrl + this.myApiUrl + 'retornarUsuarios').toPromise()
      .then(data => {
        console.log("REspuesta ", data);

        this.list = data as Usuario[];
      });
  }

  gettUsuarioRegistrado(usuario: Usuario){
    return axios.post(this.myAppUrl + this.myApiUrl + 'retornarUsuariosRegistrados',usuario,{headers})
  }

  postUsuario(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>(this.myAppUrl + this.myApiUrl + 'retornarUsuarios', usuario);
  }
}
