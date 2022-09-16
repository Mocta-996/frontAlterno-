import { Component, OnInit, ElementRef } from '@angular/core';
import { ROUTESLOGGED } from '../../sidebar/sidebar.component';
import { ROUTESLOGOUT } from '../../sidebar/sidebar.component';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';

@Component({
    // moduleId: module.id,
    selector: 'navbar-cmp',
    templateUrl: 'navbar.component.html'
})

export class NavbarComponent implements OnInit{
    private listTitles: any[];
    location: Location;
    private toggleButton: any;
    private sidebarVisible: boolean;
    private isLogged: boolean;
    private username : string;
    User: any;

    constructor(location: Location,  private element: ElementRef) {
      this.location = location;
          this.sidebarVisible = false;
          this.isLogged = false;
          this.username  =" ";
    }

    ngOnInit(){
        this.logged();
        if (this.isLogged){
            this.listTitles = ROUTESLOGGED.filter(listTitle => listTitle);
            this.User = JSON.parse(localStorage.getItem('token')||'{}');
            this.username = this.User.Usuario;
           
        }
        else {
            this.listTitles = ROUTESLOGOUT.filter(listTitle => listTitle);
        }
      
      const navbar: HTMLElement = this.element.nativeElement;
      this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
     
    }
    sidebarOpen() {
        const toggleButton = this.toggleButton;
        const body = document.getElementsByTagName('body')[0];
        setTimeout(function(){
            toggleButton.classList.add('toggled');
        }, 500);
        body.classList.add('nav-open');

        this.sidebarVisible = true;
    };
    sidebarClose() {
        const body = document.getElementsByTagName('body')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        body.classList.remove('nav-open');
    };
    sidebarToggle() {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        } else {
            this.sidebarClose();
        }
    };

    getTitle(){
      var titlee = this.location.prepareExternalUrl(this.location.path());
      if(titlee.charAt(0) === '#'){
          titlee = titlee.slice( 1 );
      }

      for(var item = 0; item < this.listTitles.length; item++){
          if(this.listTitles[item].path === titlee){
              return this.listTitles[item].title;
          }
      }
      return 'Dashboard';
    }

    cerrarSesion(){
        localStorage.removeItem('token');
    }
    // verificar inicio de sesion
    logged(){
        if (localStorage.length >0){
            this.isLogged=true;
         }
         else {
            this.isLogged=false;
         }
    }



}
