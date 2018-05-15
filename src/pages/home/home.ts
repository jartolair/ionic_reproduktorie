import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


import { ReproductorPage } from '../reproductor/reproductor';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
  
})
export class HomePage {
  canciones:any[];
banda:string;
    titulo:string; 
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.canciones=["Rammstein - Ich Tu Dir Weh","FFDP - Cold","Green Valley - Estamos Ready"];
    if (navParams.get('canciones')!=null){
      this.canciones=navParams.get('canciones');
    }
  }


  cancionElegida(cancion){
  	this.navCtrl.push(ReproductorPage, {
      cancion: cancion, canciones: this.canciones
    });
  }

  crear_cancion(){
    this.canciones.push(this.banda+" - "+this.titulo);
    this.banda='';
    this.titulo='';
  }





}
