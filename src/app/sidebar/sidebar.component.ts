import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTESLOGGED: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard',  icon: 'pe-7s-graph', class: '' },
  { path: '/user', title: 'Editar perfil',  icon:'pe-7s-user', class: '' },
  { path: '/profile', title: 'Mi perfil',  icon:'pe-7s-user', class: '' },    
  { path: '/promedio', title: 'Archivos del usuario',  icon:'pe-7s-news-paper', class: '' },   
];
export const ROUTESLOGOUT: RouteInfo[] = [
    { path: '/login', title: 'login',  icon:'pe-7s-news-paper', class: '' }, 
    { path: '/Register', title: 'Registrarse',  icon:'pe-7s-door-lock', class: '' },    
    
];


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  public isLogin: boolean;
  menuItems: any[];
  constructor() { }
  ngOnInit() {
    
    this.cambio()
    if (this.isLogin){
      this.menuItems = ROUTESLOGGED.filter(menuItem => menuItem);
    }else {
      this.menuItems = ROUTESLOGOUT.filter(menuItem => menuItem);
    }

  }
  cambio(){
    if (localStorage.length >0){
    this.isLogin=true  
  }
}
}
