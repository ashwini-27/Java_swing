import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ChatgroupPage} from '../chatgroup/chatgroup';
import {Facebook} from '@ionic-native/facebook';
import * as  firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import {parentuser} from '../home/ParentUser'
import {AngularFireDatabase} from 'angularfire2/database';
import { auth } from 'firebase/app';
import { jsonEval } from '@firebase/util';
import { JsonPipe } from '@angular/common';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 userauth;
  username="";
  passcode=null;
  mobile=null;
  constructor(public navCtrl: NavController,public facebook:Facebook,public af:AngularFireAuth,public db:AngularFireDatabase) {
       
  }
 user;
oauth;
ionViewDidLoad() {
  this.af.authState.subscribe(use => {
    this.oauth=use;
    if (use) {
     // alert('authstate'+JSON.stringify(use));
      
    this.navCtrl.push(ChatgroupPage);
    //this.next();
    }
  });
}

  Login(): Promise<any> {
    return this.facebook.login(['email'])
      .then( response => {
        const facebookCredential = firebase.auth.FacebookAuthProvider.credential(response.authResponse.accessToken);
        this.af.auth.signInWithCredential(facebookCredential)
          .then( success => { 
            parentuser.username=this.user.displayName;
            parentuser.imgurl=this.user.photoURL;
            alert('parent user:::'+parentuser.username+'\nimage url'+parentuser.imgurl);
            alert("Firebase success:\n object one " + JSON.stringify(success));
            this.user=success;
            if(this.user.lastLoginAt==this.user.createdAt){
                this.adduser();
            }
                this.navCtrl.push(ChatgroupPage);

          }).catch(err=>{
            alert(JSON.stringify(err));
          });
  
      }).catch((error) => { alert((JSON.stringify(error))); });
  }
Logout()
  {
    this.af.auth.signOut().then(res=>{
      alert('logged out succesfully')
    });
  }
  next(){

      alert(JSON.stringify(this.oauth));
        }

  adduser(){
    this.db.list('/users').push({
      id:this.user.uid,
      profile:this.user
}).then(res=>{
alert('user added into the users table\n'+res);
});
  }
  
      }
  

