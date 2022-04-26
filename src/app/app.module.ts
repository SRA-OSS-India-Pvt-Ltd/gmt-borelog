/* eslint-disable max-len */
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery/ngx';
import { DatePicker } from '@ionic-native/date-picker/ngx';

import { HttpClientModule } from '@angular/common/http';
import { SQLite } from '@ionic-native/sqlite/ngx';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { Network } from '@awesome-cordova-plugins/network/ngx';
import { Keyboard } from '@awesome-cordova-plugins/keyboard/ngx';
import { Camera } from '@awesome-cordova-plugins/camera/ngx';

import { File } from '@awesome-cordova-plugins/file/ngx';
import { DatePipe } from '@angular/common';





@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [HttpClientModule,BrowserModule, IonicModule.forRoot(), AppRoutingModule, ServiceWorkerModule.register('ngsw-worker.js', {
  enabled: environment.production,
  // Register the ServiceWorker as soon as the app is stable
  // or after 30 seconds (whichever comes first).
  registrationStrategy: 'registerWhenStable:30000'
})],
  providers: [DatePipe,File,Camera,Keyboard,Network,Geolocation,SQLite,Base64ToGallery,DatePicker,{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
