import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import firebase from "firebase/app";
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
const firebaseConfig = {
  apiKey: "AIzaSyBqOQ77cHhGOGsvWPTKVUFmR8IY5kySR-0",
  authDomain: "aplicaciones-web-7e040.firebaseapp.com",
  projectId: "aplicaciones-web-7e040",
  storageBucket: "aplicaciones-web-7e040.appspot.com",
  messagingSenderId: "683753864855",
  appId: "1:683753864855:web:dae0ef191ec02d5cf3b3d2"
};
firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
