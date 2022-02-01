import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Update3PageRoutingModule } from './update3-routing.module';

import { Update3Page } from './update3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Update3PageRoutingModule
  ],
  declarations: [Update3Page]
})
export class Update3PageModule {}
