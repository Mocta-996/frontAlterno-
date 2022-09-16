import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  URI = 'http://localhost:5000';
  constructor(private http: HttpClient ) { }

  // iniciar sesion 
  login(dato: any) {
    console.log("datos", dato)
    return this.http.post(`${this.URI}/login`, dato);

  }
  // registrar usuario
  registrarUsuario(data: any) {
    console.log(data)
    return this.http.post(`${this.URI}/registro`, data);
  }

  // subir imagen o archivo
  subirImagen(file:any) {
    return this.http.post(`${this.URI}/upload`, file);
  }
  // verificar usuario si existe
  
  verificarUsuario(data: any) {
    //console.log(data)
    return this.http.post(`${this.URI}/verificarUsuario`,data);
  }

  // guardar archivo
  guardarArchivo(data: any) {
    return this.http.post(`${this.URI}/Archivo`, data);
  }

  listaArchivosUsuario(data: any) {
    //console.log(data)
    return this.http.post(`${this.URI}/listararchivo`,data);
  }


}


interface verificar_usuario {
  Usuario: string,
  Correo: string
}
