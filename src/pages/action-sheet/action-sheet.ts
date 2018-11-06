import { Component } from '@angular/core';
import { IonicPage, NavParams, NavController, ActionSheetController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-action-sheet',
  templateUrl: 'action-sheet.html',
})
export class ActionSheetPage {
  uiComponentInfo: {note:string, path:string};
  constructor(
    public navCtrl: NavController, 
    public actionSheetCtrl: ActionSheetController,
    public navParams: NavParams
  ) {
    this.uiComponentInfo = navParams.get('info');    
  }

  presentActionSheet() {
    const actionSheet = this.actionSheetCtrl.create({
      title: 'Modify your album',
      buttons: [
        {
          text: 'Destructive',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
          }
        },{
          text: 'Archive',
          handler: () => {
            console.log('Archive clicked');
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActionSheetPage');
  }

}
