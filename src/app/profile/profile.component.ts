import {ServicesService} from '../../services/services.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Component, OnInit, ViewChild, ElementRef, Renderer2, HostListener } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @ViewChild('aForm') aForm: ElementRef;

  constructor(private sanitizer: DomSanitizer,private servicio:ServicesService) { }
  Username=""
   FirstName =""
   LastName=""
  EMail="example@gmail.com"
  Age="0"
  Description="Nothing special"
  Datecreated=""
  LastNam=""


  Body    =""
 User="1"
 rol="1"
 estado="0"
 Password=""
 Password2=""
 file1:any
 imgURL: any;
 rutaarchivo=""
 UsernamemessageAlert=""
 booledit=true
 buttonupdate='hidden'
 Edittext='Edit'
 profilepic="./assets/imgs/profilepic.png";
 Edittype='success'
 Adress=""
 passmessageAlert=""

 Register( e){ 
  e.preventDefault()

  let data = {    
   
    LastNam: this.LastNam,
   
 }
 console.log('la respuesta->',data);

   
}
 Edit(e){
  e.preventDefault()
  if(this.buttonupdate=='hidden'){
    this.buttonupdate=''
    this.booledit=false
    this.Edittext='Cancel'
    this. Edittype='danger'

  }else{
    this.buttonupdate='hidden'
    this.booledit=true
    this.Edittext='Edit'
    this. Edittype='success'
    this.UsernamemessageAlert=" "

  }

}



checkpass(){ 
  this.passmessageAlert=""

  if(this.Password.length==0 )  { 
    this.passmessageAlert="Password must not be empty "
    return
  } 
  if(this.Password2!=this.Password)  { 
    this.passmessageAlert="Password must be the same"
  } 

 }
Update(e){


  e.preventDefault()
  var messagetodisplay ="Please correct these errors: "

  if(this.passmessageAlert.length==0)  { 
    this.DoUpdate()
  } 
  else 
  {
    messagetodisplay =messagetodisplay+" "+this.passmessageAlert
    this.servicio.message_2(messagetodisplay,"error","Some errors exists:") 

  }
} 
cargar() {


  var data1 = require('./user.json'); // forward slashes will depend on the file location

  this.cargar1(data1)
}
visiblehide=false
cargar1(data1) {
  var nemselected=  "Todos los Bancos"

 

    // var data =  JSON.parse(localStorage.getItem('ram')); 
     // console.log('la data7 es->',JSON.stringify(data));
     var data = data1;
     
     if(data){
      var years=[]
      console.log('la Usuario es->',data.Usuario);
      this.Username=data.Usuario
      this.FirstName=data.Nombre
      this.imgURL=data.profilepic

    }
  }
edited:false
  DoUpdate(){
  var sessionid = localStorage.getItem("sessionid");

  const Jsondata= {"username":this.Username,"FirstName":this.FirstName,"LastName": this.LastName,
  "EMail":this.EMail,"Adress": this.Adress,"Age":this.Age,"Description":this.Description,"Password": this.Password,
  "File":this.file1,"ImgURL":this.imgURL,"Sessionid":sessionid}
   console.log(Jsondata);

    this.servicio.postForm(Jsondata,'edituser').subscribe(msg=>{
    console.log('la respuesta->',msg);

  if(msg["boolerr"]!=null){

    if(msg["boolerr"]==false){
      this.servicio.message(msg["message"],"success")
      this.servicio.browse('dashboard');
    }else  this.servicio.messagew1(msg["message"],"error","Some problem occurred")
   

  }else        this.servicio.message("An error ocurred contacting the server  !! ","error")


   },err=>{
    this.servicio.message("An error ocurred contacting the server 2 !! ","error")

 }) 
 
}
 preview(files) {
  if (files.length === 0)
    return;

  var mimeType = files[0].type;
  // if (mimeType.match(/image\/*/) == null) {
   // this.message = "Only images are supported.";
  //  this.UsernamemessageAlert = "Only images are supported.";

    // return;  }

  this.file1=files[0]
  
  var reader = new FileReader();
 
  reader.readAsDataURL(files[0]); 

  // this._handleReaderLoaded(files[0])
  // this.rutaimage=files[0].name

  reader.onload = (_event) => { 
    this.imgURL = reader.result; 
    
  }
}
checkif(){ 
console.log('la Username->');
  this.UsernamemessageAlert=" Username cannot be changed "
  // ,r.target.value
}
ngOnInit(): void {
  this.cargar() 


}
  ngOnInit2(): void {
    var sessionid = localStorage.getItem("sessionid");
    var username = localStorage.getItem("username");
    const Jsondata= {"sessionid":sessionid,"username":username}
  

     this.servicio.postForm(Jsondata,'getuser').subscribe(msg1=>{
      console.log('msg1')
      console.log(msg1)

      if(msg1["boolerr"]!=null){
        if(msg1["boolerr"]==false){
          var msg=msg1["data"]
          this.Username=msg["Username"]
         this.FirstName=msg["FirstName"]
       
          this.Password=msg["Password"]
          this.Password2=msg["Password"]
  
          this.imgURL=this.sanitizer.bypassSecurityTrustResourceUrl(msg["avatar"])
  
          // this.imgURL="data:image/png;base64,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"
  
          console.log("avatar")
          console.log(msg["avatar"])
        }else  this.servicio.messagew(msg1["message"],"error","Some problem occurred")
      }else     this.servicio.message("An error ocurred contacting the server !! ","error")


     },err=>{
     console.log('hubo un error contactando al servero',err)
   }) 
  }

}
