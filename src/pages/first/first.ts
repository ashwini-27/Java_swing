import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AllusersPage} from '../allusers/allusers'
import {GroupsPage} from '../groups/groups'
import {ChatsPage} from '../chats/chats'

/**
 * Generated class for the FirstPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-first',
  templateUrl: 'first.html'
})
export class FirstPage {

  username="";
  imgurl=" ";
  uid="";
  rootpara;
  chatsRoot = 'ChatsPage'
  groupsRoot = 'GroupsPage'
  allusersRoot = 'AllusersPage'


  constructor(public navCtrl: NavController,private navParams:NavParams) {

    this.username=this.navParams.get('username');
    this.imgurl=this.navParams.get('imgurl');
    this.uid=this.navParams.get('id');
    this.rootpara={ig:this.imgurl,id:this.uid,un:this.username}
  }

}
