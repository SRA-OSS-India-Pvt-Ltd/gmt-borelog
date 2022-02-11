import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Nonedit1PageRoutingModule } from './nonedit1-routing.module';

import { Nonedit1Page } from './nonedit1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Nonedit1PageRoutingModule
  ],
  declarations: [Nonedit1Page]
})
export class Nonedit1PageModule {}
