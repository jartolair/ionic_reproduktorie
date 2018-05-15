import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ReproductorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reproductor',
  templateUrl: 'reproductor.html',
})
export class ReproductorPage {
  cancion: any;
  linkCancion: any;
  separador: string=' ';
  playlist: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.cancion = navParams.get('cancion');
		this.playlist = navParams.get('canciones');

    this.linkCancion=this.cancion.replace(this.separador, "+");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReproductorPage');
  }

  cancionElegida(cancion){
    this.cancion= cancion;
    this.linkCancion= this.cancion.replace(this.separador, "+");
  }
  
}
