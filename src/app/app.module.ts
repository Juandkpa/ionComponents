import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { UiComponentsPage } from '../pages/ui-components/ui-components';
import { ActionSheetPage } from '../pages/action-sheet/action-sheet';
import { AlertPage } from '../pages/alert/alert';
import { FabsPage } from '../pages/fabs/fabs';
import { UiComponentNoteComponent } from '../components/ui-component-note/ui-component-note';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    UiComponentsPage,
    ActionSheetPage,
    AlertPage,
    FabsPage,
    UiComponentNoteComponent
  ],    
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],          
  bootstrap: [IonicApp],  
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    UiComponentsPage,    
    ActionSheetPage,
    AlertPage,
    FabsPage,
    UiComponentNoteComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}