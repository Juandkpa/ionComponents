import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheet } from 'ionic-angular';
import { ActionSheetPage } from '../action-sheet/action-sheet';
import { AlertPage } from '../alert/alert';
import { FabsPage } from '../fabs/fabs';
import { SearchBarPage } from '../search-bar/search-bar'
import { SegmentPage } from '../segment/segment'
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
  uiComponents: Array<{title:string, note:string, icon:string, component:any, path:string}>;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams) {
      this.uiComponents = [
        {
          title: 'Action Sheet', 
          note: 'Se desliza hacia arriba, desde la parte inferior de la pantalla y muestra un conjunto de opciones, con la habilidad de aceptar o cancelar una acción.',
          icon: 'flask',
          component: ActionSheetPage,
          path: 'action-sheets'
        },
        {
          title: 'Alert',
          note : 'Alertas son una magnifica forma de ofrecer al usuario la posibilidad de escoger una acción o una lista de ellas.',
          icon : 'flask',
          component : AlertPage,
          path: 'alert'
        },
        {
          title: 'FABs',
          note : 'Tienen forma de círculo que representa una acción promovida. Cuando se presiona, puede contener más acciones relacionadas..',
          icon : 'flask',
          component : FabsPage,
          path: 'fabs'
        },
        {
          title: 'Search Bar',
          note: 'Barra de búsqueda en la página',
          icon: 'search',
          component: SearchBarPage,
          path: 'search-bar'
        },
        
        {
          title: 'Segment',
          note: 'Pestañas de navegación',
          icon: 'bookmarks',
          component: SegmentPage,
          path: 'segment'
        }
      ];

  }

  uiComponentTapped(event, uiComponent) {
    this.navCtrl.push(uiComponent.component, {info:{note: uiComponent.note, path: uiComponent.path}});
  }

}
