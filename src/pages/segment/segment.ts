import { UiComponentNoteComponent } from './../../components/ui-component-note/ui-component-note';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SegmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-segment',
  templateUrl: 'segment.html',
})
export class SegmentPage {
  uiComponentInfo: {note:string,path:string};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.uiComponentInfo= navParams.get('info');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SegmentPage');
  }

}
