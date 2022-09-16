import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private fireservice:FirebaseService ) { }
  Title=""
  Body    =""

  User="1"
  Datetoday=""

  rol="1"
  estado="0"
  fecharegistro=""
  create(){ 
    this.Datetoday = new Date().toISOString();
    // let data = {    
    //   Title: this.Title,
    //   Body: this.Body,
    //   Date: this.Datetoday

    // }
    //  this.fireservice.createTask(data)
    // console.log('la respuesta->',data);


    let data = {    
      Username: "luis",
      FirstName:  "cahabon semuc",
      LastName:  "rivera",
      EMail: "estructuras52@gmail.com",
      Adress: "df",
      Age:  "55",
      Description:  "nothin mather",
   }
     let myFirstPromise = this.fireservice.createTask(data)
  console.log("myFirstPromise! " + myFirstPromise)
   console.log("ddf! " + JSON.stringify(myFirstPromise)   )
   console.log("Ya! " )

     myFirstPromise.then((successMessage) => {
      // successMessage is whatever we passed in the resolve(...) function above.
      // It doesn't have to be a string, but if it is only a succeed message, it probably will be.
      console.log("Yay! " + successMessage)
    });
  }
  
  ngOnInit(): void {
  }

}
