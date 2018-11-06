import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheet } from 'ionic-angular';
import { ActionSheetPage } from '../action-sheet/action-sheet';

/**
 * Generated class for the UiComponentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ui-components',
  templateUrl: 'ui-components.html',
})
export class UiComponentsPage {
  uiComponents: Array<{title:string, note:string, icon:string, component:any}>;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams) {
      this.uiComponents = [
        {
          title: 'Action Sheet', 
          note: 'Se desliza hacia arriba, desde la parte inferior de la pantalla',
          icon: 'flask',
          component: ActionSheetPage
        }

      ];

  }

  uiComponentTapped(event, uiComponent) {
    this.navCtrl.push(uiComponent.component, {title: uiComponent.title});
  }  

}
