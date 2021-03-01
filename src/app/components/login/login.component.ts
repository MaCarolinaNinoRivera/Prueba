import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuarioServicie } from 'src/app/services/usuarios.service';
import { Usuario } from 'src/app/models/usuario';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'mi-login',
  templateUrl: './login.component.html',
  providers: [],
})
export class Login implements OnInit {
  form: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private usuarioService: UsuarioServicie,
    private router:Router, private toastr: ToastrService){
    this.form = this.formBuilder.group({
      usuario: ['', [Validators.required]],
      contraseña: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
    });
  }

  ngOnInit(): void{
  }

  logearUsuario(){
    const usuario: Usuario = {
      usuarioregistrado: this.form.get('usuario').value,
      contraseña: this.form.get('contraseña').value,
      nombre: ''
    }
    this.usuarioService.gettUsuarioRegistrado(usuario).then((res) => {
      console.log("Respuesta ", res, "res.data.length ", res.data.length);
      if(res.data.length){
        this.router.navigate(['registro']);
      }
      else{
        this.toastr.error("Error!!!", "Usuario o contraseña errados");
      }
    }, err => {
      if (err.response.status == 401) {
        console.log("erro ", err);
      }
    });
  }
}
