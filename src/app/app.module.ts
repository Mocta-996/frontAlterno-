import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { NavbarModule } from './shared/navbar/navbar.module';
import { FooterModule } from './shared/footer/footer.module';
import { SidebarModule } from './sidebar/sidebar.module';
import {MaterialModule} from './material.module';

import { AppComponent } from './app.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './login/login.component';

import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import { MatInputModule } from '@angular/material/input';

import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatCardModule} from "@angular/material/card";
import { PromediosComponent } from '../promedios/promedios.component';
import { CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';
import { CreateComponent } from './create/create.component';
// import { AngularFireModule } from 'angularfire2';
import { environment } from '../environment/environment';
import { FirebaseService } from '../services/firebase.service';
// import { AngularFireStorageModule } from 'angularfire2/storage';
// import { AngularFirestoreModule } from 'angularfire2/firestore';
// import { AngularFireAuthModule } from 'angularfire2/auth';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

// SERVICIOS

import {ApiService } from '../services/api.service';
//import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    NavbarModule,
    FooterModule,
    SidebarModule,
    AppRoutingModule,
    BrowserModule,
    MatButtonModule,
    MatIconModule,
    MaterialModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule // storage
    //,MAT_DIALOG_DATA, MatDialogRef

    // AngularFireStorageModule,
    // AngularFireModule.initializeApp(environment.firebase),
    // AngularFirestoreModule,
    // AngularFireAuthModule

    // Md5
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],

  declarations: [
    AppComponent,
    AdminLayoutComponent,
    PromediosComponent,
    CreateComponent,
    RegisterComponent,
    ProfileComponent
  ],
  providers: [
    FirebaseService,
    ApiService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
