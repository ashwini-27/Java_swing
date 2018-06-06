import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {AngularFireDatabase} from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
/**
 * Generated class for the ChatgroupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chatgroup',
  templateUrl: 'chatgroup.html',
})
export class ChatgroupPage {
  message='';
  datas;
  item1:object;
  item:object[];
  item2:object;
  username='';
items:Observable<any[]>;
  constructor(public navCtrl: NavController, public navParams: NavParams,public db:AngularFireDatabase) {
 this.username=this.navParams.get('username');
 db.object('/chat/-LEFgZ_aMuvxwqnxsIhO').valueChanges().subscribe(res=>{
   console.log(res);
  this.item1=res;
 });
}
 /*this.items = db.object('/chat').valueChanges();
 console.log(this.items);
  }*/ 
  

sendmsg(){
  this.db.list('/chat').push({
    username:this.username,
    message:this.message
  });
  this.message="";
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatgroupPage');
   
  }

}
