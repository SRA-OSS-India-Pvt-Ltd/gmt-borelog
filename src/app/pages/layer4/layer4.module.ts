import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Layer4PageRoutingModule } from './layer4-routing.module';

import { Layer4Page } from './layer4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Layer4PageRoutingModule
  ],
  declarations: [Layer4Page]
})
export class Layer4PageModule {}
