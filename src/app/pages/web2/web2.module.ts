import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Web2PageRoutingModule } from './web2-routing.module';

import { Web2Page } from './web2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Web2PageRoutingModule
  ],
  declarations: [Web2Page]
})
export class Web2PageModule {}
