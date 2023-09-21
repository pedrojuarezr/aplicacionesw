import { Component } from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/database';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  direccion:any;
  nombre:string = '';
  colonia:any;
  constructor() {}

async guardarformulario(){
  const databaseRef = firebase.database().ref('/formulario');
  const datos = {
    direccion: this.direccion,
    nombre: this.nombre,
    colonia: this.colonia,
  };
  databaseRef.child(this.nombre).set(datos).then(()=>{
    console.log('subido exitosamnete!');
  })
}
}

