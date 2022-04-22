import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YettosubmitPageRoutingModule } from './yettosubmit-routing.module';

import { YettosubmitPage } from './yettosubmit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YettosubmitPageRoutingModule
  ],
  declarations: [YettosubmitPage]
})
export class YettosubmitPageModule {}
