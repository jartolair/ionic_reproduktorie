import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


import { ReproductorPage } from '../reproductor/reproductor';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
  
})
export class HomePage {

  canciones:any[];    //array de canciones
  banda:string;       //variables para inputs
  titulo:string;      //  "         "
  

  //constructor de home. 
      // crea las tres canciones por defecto
  constructor(public navCtrl: NavController, public navParams: NavParams) { 

    this.canciones=["Rammstein - Ich Tu Dir Weh","FFDP - Cold","Green Valley - Estamos Ready"];     

  }

  // pasar la cancion al reproductor, tambien el array para hacer playlist 
  cancionElegida(cancion){

  	this.navCtrl.push(ReproductorPage, {
      cancion: cancion, canciones: this.canciones
    });

  }


  // cojer los valores de lis input para añadir una cancion en el array
      // vaciar los input
  crear_cancion(){
    this.canciones.push(this.banda+" - "+this.titulo);
    this.banda='';
    this.titulo='';
  }





}
