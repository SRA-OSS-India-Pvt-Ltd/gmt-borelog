import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Update2PageRoutingModule } from './update2-routing.module';

import { Update2Page } from './update2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Update2PageRoutingModule
  ],
  declarations: [Update2Page]
})
export class Update2PageModule {}
