import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EdititerationsPageRoutingModule } from './edititerations-routing.module';

import { EdititerationsPage } from './edititerations.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EdititerationsPageRoutingModule
  ],
  declarations: [EdititerationsPage]
})
export class EdititerationsPageModule {}
