import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fabs',
  templateUrl: 'fabs.html',
})
export class FabsPage {
  uiComponentInfo: {note:string, path:string};
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams){
    this.uiComponentInfo = navParams.get('info');    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FabsPage');
  }

}