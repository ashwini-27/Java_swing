import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ChatsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chats',
  templateUrl: 'chats.html',
})
export class ChatsPage {
  username="vjhvhjhfh";
  imgurl="";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
    this.username=navParams.get('un');
    this.imgurl=navParams.get('ig');
   // this.uidself=navParams.get('id');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatsPage');
  }

}
