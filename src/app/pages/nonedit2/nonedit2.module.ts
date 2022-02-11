import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Nonedit2PageRoutingModule } from './nonedit2-routing.module';

import { Nonedit2Page } from './nonedit2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Nonedit2PageRoutingModule
  ],
  declarations: [Nonedit2Page]
})
export class Nonedit2PageModule {}
