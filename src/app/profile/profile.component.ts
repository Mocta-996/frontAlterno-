import {ServicesService} from '../../services/services.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Component, OnInit, ViewChild, ElementRef, Renderer2, HostListener } from '@angular/core';
import { ApiService } from "../../services/api.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @ViewChild('aForm') aForm: ElementRef;
  private isLogged: boolean;
  private dataUser: any;
  public archivos: any = [];
  constructor(private _servicio: ApiService) {}

 
  ngOnInit(): void {
    this.logged();
    if (this.isLogged) {
        this.dataUser = JSON.parse(localStorage.getItem("token") || "{}");
        console.log(this.dataUser)
        this.listaArchivos();
    } else {
        localStorage.removeItem("token");
    }
}

// verificar que el usuario este logueado
// verificar inicio de sesion
logged() {
    if (localStorage.length > 0) {
        this.isLogged = true;
    } else {
        this.isLogged = false;
    }
}

// --------------------------------- SECCION DE CARGA DE ARCHIVOS de AMigos------------------------------
listaArchivos(){
  this._servicio.listaArchivosamigo({iduser:this.dataUser.idUser}).subscribe(
      (res: any) => {
          console.log(res);
          const {archivo} = res;
          console.log(archivo);
          if (archivo.length > 0){
            this.archivos = archivo;          
          }
        
      },
      (err: any) => {
          console.log(err);
      }
  );
}
 

}
