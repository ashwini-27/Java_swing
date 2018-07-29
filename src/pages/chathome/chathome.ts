import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AngularFireDatabase} from 'angularfire2/database';
import { user } from '../allusers/userobj';
/**
 * Generated class for the ChathomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chathome',
  templateUrl: 'chathome.html',
})
export class ChathomePage {
  userslist;
  uidself;
  uidsecond;
  users:Array<user>=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,public af:AngularFireDatabase) {


//this.uidself=this.navCtrl.get('uid');

  af.list('users').valueChanges().subscribe(res=>{
     
    this.userslist=res;
    this.users=[];
    for(var j in this.userslist){
     //var sub_key = j;
     var sub_val = this.userslist[j];
     //console.log(sub_val);
     this.users.push(sub_val);
   }
   
    });
  }
  userchat(seconduser:any)
  {
        this.uidsecond=seconduser.uid;
        //now get chats with each other and merge them
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChathomePage');
  }

}
