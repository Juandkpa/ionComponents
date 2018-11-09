import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SlidesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-slides',
  templateUrl: 'slides.html',
})
export class SlidesPage {
  uiComponentInfo: {note:string, path:string};
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams) {
      this.uiComponentInfo = navParams.get('info');
    }
  slides = [
    {
      title: "That's a Slide Component!",
      description: "Slides make it easy to create galleries, tutorials, and page-based layouts. Slides take a number of configuration options on the <b>ion-slides</b> component. For more information, Check out the",
      image: "https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2015/09/18/14425752089963.jpg",
    },
    {
      title: "What is Ionic?",
      description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
      image: "https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2015/09/18/14425752089963.jpg",
    },
    {
      title: "What is Ionic Cloud?",
      description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
      image: "https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2015/09/18/14425752089963.jpg",
    }
  ];
  //constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  //ionViewDidLoad() {
  //  console.log('ionViewDidLoad SlidesPage');
  //}
