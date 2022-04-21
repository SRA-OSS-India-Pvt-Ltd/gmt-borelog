import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Update2PageRoutingModule } from './update2-routing.module';

import { Update2Page } from './update2.page';
import { AutoCompleteModule } from 'ionic4-auto-complete';

@NgModule({
  imports: [
    AutoCompleteModule,
    CommonModule,
    FormsModule,
    IonicModule,
    Update2PageRoutingModule
  ],
  declarations: [Update2Page]
})
export class Update2PageModule {}
