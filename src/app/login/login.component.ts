
import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup, FormGroupDirective, NgForm, Validators,FormBuilder} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Router } from '@angular/router';
import {ApiService} from '../../services/api.service';


import { ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public datosUsuario: credenciales = {
    user: "",
    password: ""
  };
  constructor(private router:Router,private formBuilder: FormBuilder, private _servicio:ApiService) { }
  Login(){
    if (this.datosUsuario.user !="" && this.datosUsuario.password !=""){

      console.log(this.datosUsuario);
      // iniciar sesion 
      this._servicio.login(this.datosUsuario).subscribe(
        (res:any)=>{
          const {idUser} = res;
          if (idUser != 0){
            localStorage.setItem('token', JSON.stringify(res));
            //this.User = JSON.parse(localStorage.getItem('token')||'{}');
            //console.log("usuario encontrado" + res)
            //console.log(localStorage.getItem('token'))
            window.location.replace("/dashboard");
          }else {
            window.alert("Credenciales Incorrectas");
            
          } 
        }
        )

    }else if (this.datosUsuario.user =="") {
        window.alert("Usuario requerido");
    }else if (this.datosUsuario.password =="") {
      window.alert("Contraseña requerida");
    }
  }

  ngOnInit() {
  }
}


interface credenciales {
  user: string,
  password: string
}