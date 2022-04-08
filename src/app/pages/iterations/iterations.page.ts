import { Router } from '@angular/router';
import { HttpcallsService } from 'src/app/services/httpcalls.service';
import { Component, OnInit } from '@angular/core';
import { Constants } from 'src/app/common/constants';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-iterations',
  templateUrl: './iterations.page.html',
  styleUrls: ['./iterations.page.scss'],
})
export class IterationsPage implements OnInit {
  iterationList: any = [];
  constructor(public httpService: HttpcallsService,
    public platform: Platform,
    public router: Router) {
    this.platform.ready().then(() => {
      if (this.platform.is('android')) {
      } else {
        this.getWebBoreItrations();
      }
    });
  }

  ngOnInit() {}

  ionViewDidEnter(){
    this.platform.ready().then(() => {
      if (this.platform.is('android')) {
      } else {
        this.getWebBoreItrations();
      }
    });

  }

  getWebBoreItrations() {
    this.httpService
      .getAllBoreIterations(Constants.iteratinbhid)
      .subscribe((response: any) => {
        console.log('response', response);
        if (response.error === false) {
          this.iterationList = response.data;
        }
      });
  }
  moving(iterationId: any) {
    this.platform.ready().then(() => {
      if (this.platform.is('android')) {
      } else {
        this.moveToIterations(iterationId);
      }
    });

  }

  moveToIterations(iterationId: any,){
    Constants.iterationId = iterationId;
    this.router.navigate(['web3']);

  }
  moveToLayer3(){
    Constants.webbhid = Constants.iteratinbhid;
    this.router.navigate(['logginginformation']);

  }
}
