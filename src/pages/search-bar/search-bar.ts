import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the SearchBarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search-bar',
  templateUrl: 'search-bar.html',
})
export class SearchBarPage {
  uiComponentInfo: {note:string, path:string};
  searchQuery: string ='';
  items: string[];
  constructor(
    public navCtrl: NavController,
    
    public navParams: NavParams) {
      this.uiComponentInfo = navParams.get('info');
      this.initializeItems();
  }

  initializeItems(){
    this.items = ['Bogotá', 'Medellín','Cartagena'];
  }

  getItems(ev: any) {
    //reset items back to all of the items
    this.initializeItems();
    //Set val to the value of the searchBar
    const val = ev.target.value;
    //if the value is an empty string don´t filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchBarPage');
  }

}
