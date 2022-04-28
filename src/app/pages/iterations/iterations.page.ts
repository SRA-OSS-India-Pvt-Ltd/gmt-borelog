import { ToastService } from 'src/app/services/toast.service';
import { AndroidDatabaseService } from 'src/app/database/android-database.service';
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
  layer1List: any = [];
  countList: any = [];
  count: any;
  orderForm: any;
  isweb= false;
  isandroid = false;
  constructor(public httpService: HttpcallsService,
    public platform: Platform,
    public router: Router,
    public androidDatabase: AndroidDatabaseService,
    public toastService: ToastService) {
    this.platform.ready().then(() => {
      if (this.platform.is('android')) {
        this.isandroid = true;
        this.isweb = false;

        this.getANdroidIterations();
      } else {
        this.isandroid = false;
        this.isweb = true;


        this.getWebBoreItrations();
      }
    });
  }

  ngOnInit() {}

  ionViewDidEnter(){


    this.platform.ready().then(() => {
      if (this.platform.is('android')) {
        this.isandroid = true;
        this.isweb = false;


        this.getANdroidIterations();
      } else {
        this.isandroid = false;
        this.isweb = true;



        this.getWebBoreItrations();
      }
    });

  }

  getWebBoreItrations() {
    this.httpService
      .getAllBoreIterations(Constants.webbhid)
      .subscribe((response: any) => {
        console.log('response', response);
        if (response.error === false) {
          this.iterationList = response.data;
        }
      });
  }


  getANdroidIterations() {
    this.androidDatabase.getIteraions(Constants.laYer1Id).then((data) => {
      this.iterationList = [];
      console.log('size',data.rows.length);
      if (data.rows.length > 0) {
        for (let i = 0; i < data.rows.length; i++) {
          this.iterationList.push(data.rows.item(i));
        }
        console.log('iterationList',this.iterationList);

      }
    });
  }




  moving(iterationId: any,sno: any) {
    this.platform.ready().then(() => {
      if (this.platform.is('android')) {
        this.moveToAndroidIterationsById(iterationId);
      } else {
        this.moveToWebIterationsByID(iterationId,sno);
      }
    });

  }

  moveToWebIterationsByID(iterationId: any,sno: any){
    Constants.iterationId = iterationId;
    Constants.sno = sno;
    this.router.navigate(['web3']);

  }
  moveToAndroidIterationsById(iterationId: any){
    Constants.iterationId = iterationId;
    Constants.sno = iterationId;
    this.router.navigate(['update3']);

  }

  moveToLayer3(){

    this.platform.ready().then(() => {
      if (this.platform.is('android')) {
        this.getIterationCount();
      } else {

        this.router.navigate(['logginginformation']);
          }
    });


  }


  moveToLayer4(){
    this.platform.ready().then(() => {
      if (this.platform.is('android')) {
        this.androidLayer4();
      } else {
        this.webLayer4();
      }
    });


  }
  webLayer4(){
this.layer1List = [];
    this.httpService
      .getBoredetails(Constants.webbhid)
      .subscribe((response: any) => {
        this.layer1List = response.data;
        if(response.error === false){
          Constants.chainge = this.layer1List[0].chainage;
          Constants.bhno = this.layer1List[0].bh_no;


        if(this.layer1List[0].depth_termination === ''){
          this.router.navigate(['layer4']);

        }else{
          this.router.navigate(['web4']);

        }
      }

      });





  }

  androidLayer4() {


    this.androidDatabase.getLayer1ById(Constants.laYer1Id).then((data) => {
      this.layer1List = [];
      console.log('size',data.rows.length);
      if (data.rows.length > 0) {
        for (let i = 0; i < data.rows.length; i++) {
          this.layer1List.push(data.rows.item(i));
        }
        console.log('layer1List',this.layer1List);
        if(this.layer1List.length>0){
          Constants.chainge = this.layer1List[0].chainage;
          Constants.bhno = this.layer1List[0].bh_no;

          if(this.layer1List[0].depth_termination === 'null'
          ||this.layer1List[0].depth_termination === 'undefined'
          || this.layer1List[0].depth_termination === null
          || this.layer1List[0].depth_termination === undefined){
            this.router.navigate(['layer4']);

          }else{


            this.router.navigate(['update4']);

          }

        }
      }


  });
}



getIterationCount() {


  this.androidDatabase.getIterationCount(Constants.laYer1Id).then((data) => {
    this.countList = [];
    console.log('size',data.rows.length);
    if (data.rows.length > 0) {
      for (let i = 0; i < data.rows.length; i++) {
        this.countList.push(data.rows.item(i));
      }
      console.log('countList',this.countList);
      this.count = this.countList[0].drill_depth_from;
      console.log('count',this.count);
      console.log('count',this.count);

      if(this.count < Constants.iterationCpunt){


        this.router.navigate(['logginginformation']);
          }else{


           // this.router.navigate(['logginginformation']);

        this.toastService.presentError('You already added '+Constants.iterationCpunt+'Iterations');
      }

    }
  });
}
}
