import { Component, OnInit } from "@angular/core";
import { LegendItem, ChartType } from "../lbd/lbd-chart/lbd-chart.component";
import * as Chartist from "chartist";
import { ChangeDetectorRef } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ServicesService } from "../../services/services.service";
import { Router } from "@angular/router";
import { ApiService } from "../../services/api.service";
//import {MatDialog, MatDialogConfig} from "@angular/material";

@Component({
    selector: "app-promedio",
    templateUrl: "./promedio.component.html",
    styleUrls: ["./promedio.component.css"],
})
export class PromedioComponent implements OnInit {
    private isLogged: boolean;
    private dataUser: any;
    public archivos: any = [];
    public guardararchivo: SubirArchivo = {
        archivo: "",
        dir: "",
        tipo: 0,
        user: 0,
    };
    // archivos publicos
    public archivosPublicos: any = [];
    // archivos privados
    public archivosPrivados: any = [];
    // almaecna el pass
    private password: "";

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

    // --------------------------------- SECCION DE GUARDAR ARCHiVOS ------------------------------
    // obtener tipo archivo
    tipoArchivo(tipo: any) {
        this.guardararchivo.tipo = tipo;
    }

    capturarFile(event): any {
        this.archivos = [];
        const archivoCapturado = event.target.files[0];
        this.archivos.push(archivoCapturado);
        console.log(event.target.files);
        if (this.guardararchivo.archivo == "") {
            this.guardararchivo.archivo  = archivoCapturado.name;
        }
        this.subirArchivo();
    }

    subirArchivo(): any {
        try {
            const formularioDeDatos = new FormData();
            this.archivos.forEach((archivo) => {
                formularioDeDatos.append("file", archivo);
            });
            this._servicio.subirImagen(formularioDeDatos).subscribe(
                (res: any) => {
                    const { url } = res;
                    this.guardararchivo.dir = url; 
                    console.log(this.guardararchivo)                  
                    //this.guardararchivo.dir = url;
                },
                () => {
                    alert("Error");
                }
            );
        } catch (e) {
            console.log("ERROR", e);
        }
    }

    guardarFile() {
        this.guardararchivo.user = this.dataUser.idUser;
        // verificar la direccion
        if (this.guardararchivo.archivo == "") {
            alert("Ingrese el nombre de un archivo");
            return;

        }
        // verificar si las contraseñas son iguales
        if (this.password != this.dataUser.Pass) {
            alert("Las contraseñas no coinciden, vuela a ingresar su contraseña");
            return;
        }
        console.log(this.guardararchivo)
        this._servicio.guardarArchivo(this.guardararchivo).subscribe(
            (res: any) => {
                console.log(res);
                //this.clearFile();
                const {estado} = res;
                if (estado == 1 ){
                    alert("Archivo guardado con exito");
                }
                else{
                    alert("Error al guardar el archivo, intente mas tarde");
                }
                
            },
            (err: any) => {
                console.log(err);
            }
        );
    }

    // --------------------------------- SECCION DE CARGA DE ARCHIVOS ------------------------------
    listaArchivos(){
        this._servicio.listaArchivosUsuario({iduser:this.dataUser.idUser}).subscribe(
            (res: any) => {
                console.log(res);
                const {archivo} = res;
                if (archivo.length > 0){
                    this.archivosPrivados  =archivo.filter(arch =>arch.Tipo = 0);
                    this.archivosPublicos =  archivo.filter(arch =>arch.Tipo = 1);
                
                }
                //this.archivosPublicos = res.archivosPublicos;
                //this.archivosPrivados = res.archivosPrivados;
            },
            (err: any) => {
                console.log(err);
            }
        );
    }
}

interface SubirArchivo {
    archivo: string;
    dir: string;
    tipo: Number;
    user: Number;
}
// console.log(' this.banks.length es->',this.banks.length);
