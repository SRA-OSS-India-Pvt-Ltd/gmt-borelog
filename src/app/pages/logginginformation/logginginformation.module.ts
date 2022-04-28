import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogginginformationPageRoutingModule } from './logginginformation-routing.module';

import { LogginginformationPage } from './logginginformation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    LogginginformationPageRoutingModule
  ],
  declarations: [LogginginformationPage]
})
export class LogginginformationPageModule {}
