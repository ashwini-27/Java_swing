import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {Facebook} from '@ionic-native/facebook'
import { IonicStorageModule } from '@ionic/storage';
import firebase from 'firebase';

import { AngularFireAuthModule } from 'angularfire2/auth';
//import { AuthProvider } from '../providers/auth-provider';



import {FirstPage} from '../pages/first/first'

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Firebase } from '@ionic-native/firebase';
import {AngularFireModule} from 'angularfire2'
const config = {
  apiKey:"AIzaSyACS_aAdBuU2IUZrpS9qzoCiIEpevMYwJ4",
  authDomain:"chat-2793a.firebaseapp.com",
  databaseURL:"https://chat-2793a.firebaseio.com",
  projectId:"chat-2793a",
  storageBucket:"chat-2793a.appspot.com",
  messagingSenderId:"1078483615596"
};
import {ChatgroupPage} from '../pages/chatgroup/chatgroup';
@NgModule({
  declarations: [
    MyApp,
    HomePage,ChatgroupPage,FirstPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,ChatgroupPage,FirstPage
  ],
  providers: [
    StatusBar,Facebook,
    SplashScreen,Firebase,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
