import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ChatgroupPage} from '../chatgroup/chatgroup';
import {Facebook} from '@ionic-native/facebook';
import * as  firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
//import { AngularFireAuthModule } from 'angularfire2/auth';
import { auth } from 'firebase/app';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  username="";
  passcode=null;
  mobile=null;
  constructor(public navCtrl: NavController,public facebook:Facebook,public af:AngularFireAuth) {
    
  }
  


  
  
  /*
  {
    return this.fb.login(['email', 'public_profile']).then(res =>{
    const facebookCredential = firebase.auth.FacebookAuthProvider.credential
    (res.authResponse.accessToken);
    this.af.app.auth().signInWithCredential(facebookCredential).then(()=>{
    observer.next();
    }).catch(error => {
    //console.log(error);
    observer.error(error);
    });
    });
    }*/


/*

Login(){
    this.af.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
   .then(res => {
   })
   }
  */ 


 /*Login(): Promise<any> {
  return this.facebook.login(['email'])
    .then( response => {
      const facebookCredential = firebase.auth.FacebookAuthProvider
        .credential(response.authResponse.accessToken);

      firebase.auth().signInWithCredential(facebookCredential)
        .then( success => { 
          console.log("Firebase success: " + JSON.stringify(success)); 
        });

    }).catch((error) => { console.log(error) });
}*/






  Login(): Promise<any> {



    return this.facebook.login(['email'])
      .then( response => {
        alert(response);
        const facebookCredential = firebase.auth.FacebookAuthProvider.credential(response.authResponse.accessToken);
  alert('facebook credential'+facebookCredential);


        this.af.auth.signInWithCredential(facebookCredential)
          .then( success => { 
            alert("Firebase success: " + JSON.stringify(success)); 
          }).catch(err=>{
            alert(JSON.stringify(err));
          });
  
      }).catch((error) => { alert((JSON.stringify(error))); });
  }
Logout()
  {
    this.facebook.logout();
  }
  next(){
    //alert('clicked on next');

    if(/^[a-zA-Z0-9]+$/.test(this.username)&&(this.mobile.length==10)){
      //alert('user accecpatable');
      this.navCtrl.push(ChatgroupPage,{username:this.username});
    }
    else{
      alert('user unacceptabe');
    }

  }
  
      }
  

