import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatgroupPage } from './chatgroup';

@NgModule({
  declarations: [
    ChatgroupPage,
  ],
  imports: [
    IonicPageModule.forChild(ChatgroupPage),
  ],
})
export class ChatgroupPageModule {}
