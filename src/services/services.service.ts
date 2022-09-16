import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import { LoginComponent } from '../app/login/login.component';
import { Router } from '@angular/router';
import { HomeComponent } from '../app/home/home.component';
import Swal from 'sweetalert2'
import {Md5} from 'ts-md5/dist/md5';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private router:Router,private http: HttpClient) { 
 // override the route reuse strategy
 


  }



  tomd5(newpass){
    const md5 = new Md5();
    let hash = Md5.hashStr(newpass);

    // return this.http.get(this.get_domain()+'/preguntas/'+id)
     return hash
 
   }
 

   browse(id){

    this.router.navigate(['/'+id]);

   }
  navegar(id){
    // return this.http.get(this.get_domain()+'/preguntas/'+id)
    // this.router.navigate(id);

    this.router.navigate(['/'+id]);

   }

   salir(){
    localStorage.clear();

   }
   message(a,type) {
 

    Swal.fire({
      title: 'Message',
      text: a,
      icon:type,
      confirmButtonText: 'Cool'
    })
  }

  messagew(a,type,msn) {
 

    Swal.fire({
      title: msn,
      text: a,
      icon:type,
      confirmButtonText: 'Cool'
    })
  }
  messagew1(a,type,msn) {
 

    Swal.fire({
      title: msn,
      text: a,
      icon:type,
      confirmButtonText: 'I understand'
    })
  }
  message_2(a,type,title1) {
 

    Swal.fire({
      title: title1,
      text: a,
      icon:type,
      confirmButtonText: 'Ok i will'
    })
  }
   navegarwithparamas(id,param){
    console.log('navegarwithparamase s->');

   
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
  }

  this.router.onSameUrlNavigation = 'reload';
   


    this.router.navigate(['/'+id], { state: { example: param} });


    // this.router.navigate(['/'+id]);

   

   }

   navegarwithparamas2(id,param,param2){
    console.log('navegarwithparamase s->');

   
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
  }

  this.router.onSameUrlNavigation = 'reload';
   

    this.router.navigate(['/'+id], { state: { example: param, example2: param2} });


    // this.router.navigate(['/'+id]);

   

   }
 
   getDataget(value){


  
  
    // return this.http.get(this.get_domain()+'/preguntas/'+id)
     return this.http.get(this.get_domain()+'/preguntas')
 
   }
  sendDataget(value,id){

    return this.http.get(this.get_domain()+'/'+value+'/'+id)
 
   }
 


   file1:any

   postForm(data:any,value){

      const header = new Headers({
        'Content-Type': 'application/json'
     });
  
  
  var params = JSON.stringify(data);
  let headers =  new HttpHeaders().set('Content-Type', 'application/json');
  const myheader = new HttpHeaders().set('Content-Type', 'application/json; charset=UTF-8');

  return this.http.post<string>(this.get_domain()+'/'+value, data);

  }
  postLogin8(data){

  
    // return this.http.post(this.get_domain()+'/login',data);

  //   this.http.post<any>(this.get_domain()+'/login', { codigo: 'bases2' ,password:'abc'}).subscribe(data => {
  //     console.log('la datapost es ->',JSON.stringify(data));

  // })


//  const formData = new FormData();
//     formData.append('codigo', 'bases2');
//     formData.append('password', 'abc');

//     this.http.post<any>(this.get_domain()+'/login', formData).subscribe(
//       (res) => console.log(res),
//       (err) => console.log(err)
//     );



  }
  get_domain() { 

    //return "https://learn-287403.uc.r.appspot.com"
    return "http://amazonregister:3000"

    
  }

}
