import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Web4PageRoutingModule } from './web4-routing.module';

import { Web4Page } from './web4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Web4PageRoutingModule
  ],
  declarations: [Web4Page]
})
export class Web4PageModule {}
