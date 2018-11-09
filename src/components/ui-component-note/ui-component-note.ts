import { Component, Input } from '@angular/core';


/**
 * Generated class for the UiComponentNoteComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'ui-component-note',
  templateUrl: 'ui-component-note.html'
})
export class UiComponentNoteComponent {

  @Input() info: {note:string, path:string};  

  constructor(){}

}
