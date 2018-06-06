import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ChatgroupPage} from '../chatgroup/chatgroup';
/*import {Facebook} from '@ionic-native/facebook';
import firebase from 'firebase';




const config = {
  apiKey: "AIzaSyACS_aAdBuU2IUZrpS9qzoCiIEpevMYwJ4",
  authDomain: "chat-2793a.firebaseapp.com",
  databaseURL: "https://chat-2793a.firebaseio.com",
  projectId: "chat-2793a",
  storageBucket: "chat-2793a.appspot.com",
  messagingSenderId: "1078483615596"
};*/


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  username="";
  passcode=null;
  mobile=null;
  constructor(public navCtrl: NavController,/*public facebook:Facebook*/) {

    //firebase.initializeApp(config);
   
  
    
    
    
    
  }
  
  
  /*
  Login(): Promise<any> {
    return this.facebook.login(['email'])
      .then( response => {
        const facebookCredential = firebase.auth.FacebookAuthProvider
          .credential(response.authResponse.accessToken);
  
        firebase.auth().signInWithCredential(facebookCredential)
          .then( success => { 
            alert("Firebase success: " + JSON.stringify(success)); 
          });
  
      }).catch((error) => { alert((JSON.stringify(error))); });
  }
Logout()
  {
    this.facebook.logout();
  }*/
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
  

