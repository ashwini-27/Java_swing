import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { user } from '../allusers/userobj'
import { ChatgroupPage } from '../chatgroup/chatgroup';

/**
 * Generated class for the AllusersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-allusers',
  templateUrl: 'allusers.html',
})
export class AllusersPage {

  userslist;
username="jfbbgng";
imgurl="bfbcbcfc";
  uidself;
  uidsecond;
  users:Array<user>=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,public af:AngularFireDatabase) {

    this.username=navParams.get('un');
    this.imgurl=navParams.get('ig');
    this.uidself=navParams.get('id');
    
      af.list('users').valueChanges().subscribe(res=>{
         
        this.userslist=res;
        this.users=[];
        for(var j in this.userslist){
         //var sub_key = j;
         var sub_val = this.userslist[j];
         //console.log(sub_val);
         this.users.push(new user(sub_val));
       }
       
        });
      }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AllusersPage');
  }
  userchat(seconduser:any)
  {


          this.navCtrl.push(ChatgroupPage,{
            other:seconduser,category:'u2u'
          });

    //this.navCtrl.push(FirstPage,{username:this.username,imgurl:this.imgurl,id:this.uid});
        // this.uidsecond=seconduser.uid;
        // if(this.uidsecond>this.uidself){
          
        // }
        // //now get chats with each other and merge them
  }

}
