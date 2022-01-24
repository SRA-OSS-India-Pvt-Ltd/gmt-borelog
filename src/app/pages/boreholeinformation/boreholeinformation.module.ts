import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BoreholeinformationPageRoutingModule } from './boreholeinformation-routing.module';

import { BoreholeinformationPage } from './boreholeinformation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BoreholeinformationPageRoutingModule
  ],
  declarations: [BoreholeinformationPage]
})
export class BoreholeinformationPageModule {}
