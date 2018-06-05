import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Facebook} from '@ionic-native/facebook';
import firebase from 'firebase';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public facebook:Facebook) {

  }
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
  
      }
  

