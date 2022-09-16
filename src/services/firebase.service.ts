import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
// import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(public afs: AngularFirestore) { }
  Datetoday=""

  createTask(value){
    return new Promise<any>((resolve, reject) => {
      // let currentUser = firebase.auth().currentUser;
      console.log('la value.Date->',value.Date);
      this.Datetoday = new Date().toISOString();

      this.afs.collection('data').doc('2').collection('posts').add({
        Title: value.Title,
        Body: value.Body,
        Datepost: this.Datetoday ,      

      })
      .then(
        res => resolve(res),
        err => reject(err)
      )
    })
  }
  
  createUser(value){
    return new Promise<any>((resolve, reject) => {
      // let currentUser = firebase.auth().currentUser;
      // console.log('la value.Date->',value.Date);
      this.Datetoday = new Date().toISOString();
       this.afs.collection('users').add({
      // this.afs.collection('data').doc('899').collection('posts').add({
        FirstName: value.FirstName,      
        LastName: value.LastName,
        Username: value.Username,
        Age: value.Age,
        Adress: value.Adress,
        Description: value.Description,
        EMail: value.EMail,
        Datepost: this.Datetoday ,      
        Password: value.Password,
      })
      .then(
        res => resolve(res),
        err => reject(err)
      )
    })
  }

  dblist: AngularFirestoreCollection<any>;

  Getusercollection(value){
    this.dblist = this.afs.collection<any>('users', ref => {
      return ref.where("Username","==",value.Username);
    });
  }

}
