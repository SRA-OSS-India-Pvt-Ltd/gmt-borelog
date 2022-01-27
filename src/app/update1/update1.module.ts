import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Update1PageRoutingModule } from './update1-routing.module';

import { Update1Page } from './update1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Update1PageRoutingModule
  ],
  declarations: [Update1Page]
})
export class Update1PageModule {}
