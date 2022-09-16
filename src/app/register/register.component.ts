// import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service';
import { DomSanitizer } from '@angular/platform-browser';
import {
    Component,
    OnInit,
    ViewChild,
    ElementRef,
    Renderer2,
    HostListener,
} from "@angular/core";
@Component({
    selector: "app-register",
    templateUrl: "./register.component.html",
    styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
    @ViewChild("aForm") aForm: ElementRef;

    passmessageAlert = "";
    UsernamemessageAlert= "";
    Password2 = "";
    imgURL: any;
    verificar = false;
    public previsualizacion: string;
    public archivos: any = []
    public loading: boolean
    
    public datosUsuario: datos = {
        Nombre: "",
        Usuario: "",
        Pass: "",
        Correo: "",
        Fotografia: null,
    };

    constructor(private _servicio : ApiService,private sanitizer: DomSanitizer) {}
    // verificar que la contraseña no sea nulo  y que coincida con la segunda contraseña
    checkpass() {
        this.passmessageAlert = "";
        if (this.datosUsuario.Pass.length == 0) {
            this.passmessageAlert = "Password must not be empty ";
        } else if (this.Password2 != this.datosUsuario.Pass) {
            this.passmessageAlert = "Password must be the same";
        } else {
            return;
        }
    }


    // verificar que el usuario o correo no exista aun 
    checkif() { 
      this.UsernamemessageAlert=''  
      this._servicio.verificarUsuario ({ usuario: this.datosUsuario.Usuario, correo:this.datosUsuario.Correo}).subscribe(
        (res:any)=>{
          const {estado} = res;
          if (estado == 1){
            window.alert("El correo / Username ya existen, Ingrese otras credenciales");
            return false;
          }else {
            console.log("agregado con exito")
            return true;
            
          } 
        }
        )
        window.alert("Ocurrio un error, intente mas tarde");
        return false;
    }

    Register(){
      console.log("registrar usuario");
      //this.verificar = this.checkif()
      this._servicio
          .registrarUsuario({
              nombre: this.datosUsuario.Nombre,
              usuario: this.datosUsuario.Usuario,
              pass: this.datosUsuario.Pass,
              correo: this.datosUsuario.Correo,
              fotografia: this.datosUsuario.Fotografia,
          })
          .subscribe((res: any) => {
              console.log(res);
              const { estado } = res;
              if (estado == 1) {
                  window.alert("Usuario Registrado");
                  window.location.replace("/login");
                  this.clearFile();
                  return true;
              } else {
                  window.alert("Ocurrio un error, intente mas tarde");
                  this.clearFile();
                  return false;
              }
          });

      
    }

  
    subirFoto(){
      
      this._servicio.subirImagen (
            this.datosUsuario.Fotografia
          )
          .subscribe((res: any) => {
              console.log(res);
              
          });      
    }

    subirArchivo(): any {
      try {
        const formularioDeDatos = new FormData();
        this.archivos.forEach(archivo => {
          formularioDeDatos.append('file', archivo)
        })
        this._servicio.subirImagen( formularioDeDatos)
          .subscribe((res: any) => {
            const {url} = res
            this.datosUsuario.Fotografia =url;
          }, () => {
            alert('Error');
          })
      } catch (e) {
        console.log('ERROR', e);
  
      }
    }

    ngOnInit(): void {}

  capturarFile(event): any {
      const archivoCapturado = event.target.files[0]
      this.extraerBase64(archivoCapturado).then((imagen: any) => {
        this.previsualizacion = imagen.base;  
      })
      this.archivos.push(archivoCapturado)
      // 
      // console.log(event.target.files);
      this.subirArchivo();
  
    }
    extraerBase64 = async ($event: any) => new Promise((resolve, reject) => {
      try {
        const unsafeImg = window.URL.createObjectURL($event);
        const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
        const reader = new FileReader();
        reader.readAsDataURL($event);
        reader.onload = () => {
          resolve({
            base: reader.result
          });
        };
        reader.onerror = error => {
          resolve({
            base: null
          });
        };
  
      } catch (e) {
        return null;
      }
    })

    clearFile(): any {
      this.previsualizacion = '';
      this.archivos = [];
    }
  

}



interface datos {
    Nombre: string,
    Usuario: string,
    Pass: string,
    Correo: string,
    Fotografia: File
}


