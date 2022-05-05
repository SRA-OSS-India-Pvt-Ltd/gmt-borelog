/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable radix */
import { Router } from '@angular/router';
import { Constants } from 'src/app/common/constants';
import { AndroidDatabaseService } from './../../database/android-database.service';
import { ToastService } from './../../services/toast.service';
import { Component, OnInit } from '@angular/core';
import { HttpcallsService } from 'src/app/services/httpcalls.service';
import { Platform } from '@ionic/angular';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-logginginformation',
  templateUrl: './logginginformation.page.html',
  styleUrls: ['./logginginformation.page.scss'],
})
export class LogginginformationPage implements OnInit {
  drillingFrom: any;
  drillingTo: any;
  typeOfstrata: any;
  typeOfsample: any;
  isdsDepth = false;
  dsDepthFrom: any;

  isSPTDepth = false;
  sptDepthFrom: any;

  first: any;
  second: any = '';
  third: any = '';
  total: any;
  firstB: any ;
  secondB: any = '';
  thirdB: any = '';
  totalB: any;
  isUDSepth = false;
  udsDepthFrom: any;

  soilSampleColor: any;
  typeOfSoil: any;

  visualClassification: any;

  rockSample: any;
  runLength: any;
  runTime: string = '';
  waterLoss: string = '';


  cr: string = '';
  rqd: string = '';
  typeOfWeathering: any;
  rockSamplColor: any;

  layer1List: any = [];
  isSoil = false;
  isRock = false;
  one = false;
  two = false;
  three = false;
  four = false;
  oneB = false;
  twoB = false;
  threeB = false;
  fourB = false;
  bhid: any;
  rockDepthTo: any;
  rockDepthFrom: any;
  sptstatus: any;
  isColorShown = false;
  colorOther: string = '';
statra: any = [];
  constructor(
    public toastSer: ToastService,
    public androidDatabase: AndroidDatabaseService,
    public router: Router,
    public httpService: HttpcallsService,
    public platform: Platform,

    ) {

      this.statra = ['Soil','Rock'];

    platform.ready().then(() => {
      if (this.platform.is('android')) {
Constants.layer2flow === 'fromLog';
        this.getLayer1LastId();
      } else {
      }
    });
  }
  ionViewDidEnter(){
    Constants.layer2flow === 'fromLog';

    this.platform.ready().then(() => {
      if (this.platform.is('android')) {

      } else {
      }
    });

  }

  ngOnInit() {}
  getLayer1LastId() {
    this.androidDatabase.getLastId().then((data) => {
      this.layer1List = [];
      console.log('size', data.rows.length);
      if (data.rows.length > 0) {
        for (let i = 0; i < data.rows.length; i++) {
          this.layer1List.push(data.rows.item(i));
        }
        console.log('layer1List', this.layer1List);
        Constants.laYer1Id = this.layer1List[0].Id;
      }
    });
  }

  strataChange($event) {
    this.typeOfstrata = $event.target.value;
    console.log($event.target.value);
    if (this.typeOfstrata === 'Soil') {
      this.isSoil = true;
      this.isRock = false;
      this.rockDepthFrom = '',
      this.rockDepthTo = '';
      this.rockSample = '';
      this.waterLoss = '';

      this.rockSamplColor = '';
      this.typeOfWeathering = '';

      this.cr = '';
      this.rqd = '';
    } else if (this.typeOfstrata === 'Rock') {
      this.isSoil = false;
      this.isRock = true;
      this.isSPTDepth = false;
      this.isUDSepth = false;
      this.isdsDepth = false;
      this.typeOfsample = '';
      this.soilSampleColor = '';
      this.typeOfSoil = '';

      this.visualClassification = '';

      this.dsDepthFrom = '';

      this.sptDepthFrom = '';

      this.udsDepthFrom = '';

      this.first = '';
      this.second = '';
      this.third = '';
      this.total = '';
      this.firstB = '';
      this.secondB = '';
      this.thirdB = '';
      this.totalB = '';
    }
  }
  sampleChange($event) {
    this.typeOfsample = $event.target.value;
    console.log($event.target.value);
    if (this.typeOfsample === 'DS') {
      this.isdsDepth = true;
      this.isSPTDepth = false;
      this.isUDSepth = false;
      this.first = '';
      this.second = '';
      this.third = '';
      this.total = '';
      this.firstB = '';
      this.secondB = '';
      this.thirdB = '';
      this.totalB = '';
      this.sptDepthFrom = '';

      this.udsDepthFrom = '';
    } else if (this.typeOfsample === 'SPT') {
      this.isdsDepth = false;
      this.isSPTDepth = true;
      this.isUDSepth = false;
      this.dsDepthFrom = '';

      this.udsDepthFrom = '';
    } else if (this.typeOfsample === 'UDS') {
      this.isdsDepth = false;
      this.isSPTDepth = false;
      this.isUDSepth = true;
      this.dsDepthFrom = '';

      this.first = '';
      this.second = '';
      this.third = '';
      this.total = '';
      this.firstB = '';
      this.secondB = '';
      this.thirdB = '';
      this.totalB = '';
      this.sptDepthFrom = '';
    }
  }

  colorChange($event) {
    this.soilSampleColor = $event.target.value;
    console.log($event.target.value);
    if (this.soilSampleColor === 'Other') {
      this.isColorShown = true;
    } else {
      this.isColorShown = false;
    }
  }

  visualChange($event) {
    this.visualClassification = $event.target.value;
    console.log($event.target.value);
  }

  rockSamplechange($event) {
    this.rockSample = $event.target.value;
    console.log($event.target.value);
  }
  runLengthCalicualtion() {
    if (this.drillingFrom !== undefined && this.drillingTo !== undefined ) {
      if(this.drillingTo >= this.drillingFrom){
      this.runLength = this.drillingTo - this.drillingFrom;
    }
  }
  }
  weatheringChange($event) {
    this.typeOfWeathering = $event.target.value;
    console.log($event.target.value);
  }
  validation() {
    if (this.drillingFrom === undefined) {
      this.toastSer.presentError('Please Enter  Drilling From');
    } else if (this.drillingTo === undefined) {
      this.toastSer.presentError('Please Enter  Drilling To');
    }else if(this.drillingFrom> this.drillingTo){
      this.toastSer.presentError(' Drilling To should be greater than Drilling From ');

    }
     else if (this.typeOfstrata === undefined) {
      this.toastSer.presentError('Please Select  Type of Strata');
    } else if (this.drillingFrom === '') {
      this.toastSer.presentError('Please Enter  Drilling From');
    } else if (this.drillingTo === '') {
      this.toastSer.presentError('Please Enter  Drilling To');
    } else if (this.typeOfstrata === '') {
      this.toastSer.presentError('Please Select  Type of Strata');
    } else if (this.drillingFrom === null) {
      this.toastSer.presentError('Please Enter  Drilling From');
    } else if (this.drillingTo === null) {
      this.toastSer.presentError('Please Enter  Drilling To');
    } else if (this.typeOfstrata === null) {
      this.toastSer.presentError('Please Select  Type of Strata');
    } else if (this.drillingTo === 0) {
      this.toastSer.presentError(
        'Please Enter  Drilling To,It should not  Zero'
      );
    } else if (this.typeOfstrata === 'Soil') {
      if (this.typeOfsample === undefined) {
        this.toastSer.presentError('Please Select  Type of Sample');
      } else if (this.typeOfsample === 'DS' && this.dsDepthFrom === undefined) {
        this.toastSer.presentError('Please Enter  Ds Depth ');
      } else if (
        this.typeOfsample === 'SPT' &&
        this.sptDepthFrom === undefined
      ) {
        this.toastSer.presentError('Please Enter  SPT Depth ');
      } else if (this.typeOfsample === 'SPT' && this.first === undefined) {
        this.toastSer.presentError('Please Enter  Penetration From First');
      } else if (this.typeOfsample === 'SPT' && this.firstB === undefined) {
        this.toastSer.presentError('Please Enter  Blows - N From First');
      } else if (
        this.typeOfsample === 'UDS' &&
        this.udsDepthFrom === undefined
      ) {
        this.toastSer.presentError('Please Enter  UDS Depth ');
      } else if (this.soilSampleColor === undefined) {
        this.toastSer.presentError('Please Enter   Soil Sample Color');
      } else if (
        this.soilSampleColor === 'Other' &&
        this.colorOther === undefined
      ) {
        this.toastSer.presentError('Please Enter   Soil Sample Color Other');
      } else if (this.soilSampleColor === 'Other' && this.colorOther === '') {
        this.toastSer.presentError('Please Enter   Soil Sample Color Other');
      } else if (this.soilSampleColor === 'Other' && this.colorOther === null) {
        this.toastSer.presentError('Please Enter   Soil Sample Color Other');
      } else if (this.visualClassification === undefined) {
        this.toastSer.presentError(
          'Please Enter  Visual Classification of Sample'
        );
      } else if (this.typeOfsample === '') {
        this.toastSer.presentError('Please Select  Type of Sample');
      } else if (this.typeOfsample === 'DS' && this.dsDepthFrom === '') {
        this.toastSer.presentError('Please Enter  Ds Depth ');
      } else if (this.typeOfsample === 'SPT' && this.sptDepthFrom === '') {
        this.toastSer.presentError('Please Enter  SPT Depth ');
      } else if (this.typeOfsample === 'SPT' && this.first === '') {
        this.toastSer.presentError('Please Enter  Penetration From First');
      } else if (this.typeOfsample === 'SPT' && this.firstB === '') {
        this.toastSer.presentError('Please Enter  Blows - N From First');
      } else if (this.typeOfsample === 'UDS' && this.udsDepthFrom === '') {
        this.toastSer.presentError('Please Enter  UDS Depth ');
      } else if (this.soilSampleColor === '') {
        this.toastSer.presentError('Please Enter   Soil Sample Color');
      } else if (this.visualClassification === '') {
        this.toastSer.presentError(
          'Please Enter  Visual Classification of Sample'
        );
      } else if (this.typeOfsample === null) {
        this.toastSer.presentError('Please Select  Type of Sample');
      } else if (this.typeOfsample === 'DS' && this.dsDepthFrom === null) {
        this.toastSer.presentError('Please Enter  Ds Depth ');
      } else if (this.typeOfsample === 'SPT' && this.sptDepthFrom === null) {
        this.toastSer.presentError('Please Enter  SPT Depth ');
      } else if (this.typeOfsample === 'SPT' && this.first === null) {
        this.toastSer.presentError('Please Enter  Penetration From First');
      } else if (this.typeOfsample === 'SPT' && this.firstB === null) {
        this.toastSer.presentError('Please Enter  Blows - N From First');
      } else if (this.typeOfsample === 'UDS' && this.udsDepthFrom === null) {
        this.toastSer.presentError('Please Enter  UDS Depth ');
      } else if (this.soilSampleColor === null) {
        this.toastSer.presentError('Please Enter   Soil Sample Color');
      } else if (this.visualClassification === null) {
        this.toastSer.presentError(
          'Please Enter  Visual Classification of Sample'
        );
      } else if (this.typeOfsample === 'SPT' && this.sptDepthFrom === 0) {
        this.toastSer.presentError(
          'Please Enter  SPT Depth ,It should not  Zero'
        );
      } else if (this.typeOfsample === 'SPT' && this.first === 0) {
        this.toastSer.presentError(
          'Please Enter  Penetration From First,It should not  Zero'
        );
      } else if (this.typeOfsample === 'SPT' && this.firstB === 0) {
        this.toastSer.presentError(
          'Please Enter  Blows - N From First,It should not  Zero'
        );
      } else if (this.typeOfsample === 'UDS' && this.udsDepthFrom === 0) {
        this.toastSer.presentError(
          'Please Enter  UDS Depth ,It should not be  Zero'
        );
      } else if (this.typeOfsample === 'DS') {
        this.rockDepthFrom = '';
        this.rockDepthTo = '';
        this.first = '';
        this.second = '';
        this.third = '';
        this.total = '';
        this.firstB = '';
        this.secondB = '';
        this.thirdB = '';
        this.totalB = '';
        this.sptDepthFrom = '';

        this.udsDepthFrom = '';

        this.sptstatus = '';

        console.log('ds');

        this.rockSample = '';

        this.waterLoss = '';

        this.rockSamplColor = '';
        this.typeOfWeathering = '';

        this.cr = '';
        this.rqd = '';
        this.adding();
      } else if (this.typeOfsample === 'SPT') {
        this.rockDepthFrom = '';
        this.rockDepthTo = '';

        this.dsDepthFrom = '';

        this.udsDepthFrom = '';

        console.log('spt');

        this.rockSample = '';
        this.waterLoss = '';

        this.rockSamplColor = '';
        this.typeOfWeathering = '';

        this.cr = '';
        this.rqd = '';
        this.adding();
      } else if (this.typeOfsample === 'UDS') {
        this.rockDepthFrom = '';
        this.rockDepthTo = '';

        this.dsDepthFrom = '';

        this.sptDepthFrom = '';

        this.first = '';
        this.second = '';
        this.third = '';
        this.total = '';
        this.firstB = '';
        this.secondB = '';
        this.thirdB = '';
        this.sptstatus = '';

        this.totalB = '';
        console.log('uds');

        this.rockSample = '';
        this.waterLoss = '';

        this.rockSamplColor = '';
        this.typeOfWeathering = '';

        this.cr = '';
        this.rqd = '';
        this.adding();
      }
    } else if (this.typeOfstrata === 'Rock') {
      if (this.rockSample === undefined) {
        this.toastSer.presentError('Please Enter  Type of Sample (If Rock)');
      } else if (this.rockDepthFrom === undefined) {
        this.toastSer.presentError('Please Enter  Rock depth from');
      } else if (this.rockDepthTo === undefined) {
        this.toastSer.presentError('Please Enter  Rock depth to');
      } else if (this.rockSamplColor === undefined) {
        this.toastSer.presentError('Please Enter  Rock Sample Color');
      } else if (this.typeOfWeathering === undefined) {
        this.toastSer.presentError('Please Select  Type of Weathering');
      } else if (this.rockSample === '') {
        this.toastSer.presentError('Please Enter  Type of Sample (If Rock)');
      } else if (this.rockDepthFrom === '') {
        this.toastSer.presentError('Please Enter  Rock depth from');
      } else if (this.rockDepthTo === '') {
        this.toastSer.presentError('Please Enter  Rock depth to');
      } else if (this.rockSamplColor === '') {
        this.toastSer.presentError('Please Enter  Rock Sample Color');
      } else if (this.typeOfWeathering === '') {
        this.toastSer.presentError('Please Select  Type of Weathering');
      } else if (this.rockSample === null) {
        this.toastSer.presentError('Please Enter  Type of Sample (If Rock)');
      } else if (this.rockDepthFrom === null) {
        this.toastSer.presentError('Please Enter  Rock depth from');
      } else if (this.rockDepthTo === null) {
        this.toastSer.presentError('Please Enter  Rock depth to');
      } else if (this.rockSamplColor === null) {
        this.toastSer.presentError('Please Enter  Rock Sample Color');
      } else if (this.typeOfWeathering === null) {
        this.toastSer.presentError('Please Select  Type of Weathering');
      } else if (this.rockDepthTo === 0) {
        this.toastSer.presentError(
          'Please Enter  Rock depth to,it Should Not a Zero'
        );
      }else if (this.runLength === undefined) {
        this.toastSer.presentError(
          'Run depth should be some value'
        );
      }
       else {
         console.log('water loss',this.waterLoss);
         console.log('rqd',this.rqd);

        this.typeOfsample = '';
        this.soilSampleColor = '';

        this.visualClassification = '';

        this.dsDepthFrom = '';

        this.sptDepthFrom = '';

        this.udsDepthFrom = '';

        this.first = '';
        this.second = '';
        this.third = '';
        this.total = '';
        this.firstB = '';
        this.secondB = '';
        this.thirdB = '';
        this.totalB = '';
        this.sptstatus = '';
        this.colorOther = '';
        this.adding();


      }
    }
  }

  clearFields(){

    this.rockDepthFrom = '';
    this.rockDepthTo = '';
    this.first = '';
    this.second = '';
    this.third = '';
    this.total = '';
    this.firstB = '';
    this.secondB = '';
    this.thirdB = '';
    this.totalB = '';
    this.sptDepthFrom = '';

    this.udsDepthFrom = '';

    this.sptstatus = '';


    this.rockSample = '';
    this.runLength = '';
    this.runTime = '';
    this.waterLoss = '';

    this.rockSamplColor = '';
    this.typeOfWeathering = '';

    this.cr = '';
    this.rqd = '';
    this.typeOfsample = '';
    this.soilSampleColor = '';

    this.visualClassification = '';

    this.dsDepthFrom = '';

    this.sptDepthFrom = '';

    this.udsDepthFrom = '';

    this.first = '';
    this.second = '';
    this.third = '';
    this.total = '';
    this.firstB = '';
    this.secondB = '';
    this.thirdB = '';
    this.totalB = '';
    this.sptstatus = '';
    this.colorOther = '';
    this.typeOfstrata= undefined;
    this.typeOfsample = undefined;
    this.soilSampleColor = undefined;
    this.visualClassification= undefined;
    this.drillingFrom = '';
    this.drillingTo = '';
    this.isRock = false;
    this.isSoil = false;
    this.isSPTDepth = false;
    this.isUDSepth = false;
    this.isdsDepth = false;
    this.isColorShown = false;
    this.typeOfstrata = null;
    this.typeOfWeathering = null;
    this.rockSample = null;
    this.visualClassification = null;
    this.soilSampleColor = null;
    this.typeOfsample = null;

  }
  moveToNext() {}
  addDatabse() {




    this.androidDatabase.additerationData(
      Constants.laYer1Id,
      this.drillingFrom,
      this.drillingTo,
      this.typeOfstrata,
      this.typeOfsample,
      this.dsDepthFrom,
      this.sptDepthFrom,
      this.first,
      this.second,
      this.third,
      this.total,

      this.firstB,
      this.secondB,
      this.thirdB,
      this.totalB,
      this.sptstatus,
      this.udsDepthFrom,
      this.soilSampleColor,
      this.colorOther,
      this.visualClassification,
      this.rockSample,
      this.rockDepthFrom,
      this.rockDepthTo,
      this.runLength,
      this.runTime,
      this.waterLoss,
      this.cr,
      this.rqd,
      this.rockSamplColor,
      this.typeOfWeathering);
      this.clearFields();

      this.router.navigate(['iterations']);

     // this.getLayer1();
  }
  totalCount() {



    if (this.first !== undefined &&this.second !== undefined && this.third !== undefined
      && this.first !== '' &&this.second !== '' && this.third !== ''
      && this.first !== null &&this.second !== null && this.third !== null ) {
      this.total = parseInt(this.first)+parseInt(this.second) + parseInt(this.third);
    }else if(this.first !== undefined&&this.second !== undefined
      && this.first !== ''&&this.second !== ''
      && this.first !== null &&this.second !== null ){
      console.log('val',this.second);
      this.total = parseInt(this.first)+parseInt(this.second) ;

    }else if(this.first !== undefined &&this.third !== undefined
      && this.first !== '' &&this.third !== ''
      && this.first !== null &&this.third !== null ){
      console.log('2');
      this.total = parseInt(this.first)+parseInt(this.third) ;

    }else{
      this.total = parseInt(this.first);
    }




    if (this.firstB !== undefined &&this.secondB !== undefined && this.thirdB !== undefined
      && this.firstB !== '' &&this.secondB !== '' && this.thirdB !== ''
      && this.firstB !== null &&this.secondB !== null && this.thirdB !== null ) {
      this.totalB = parseInt(this.firstB)+parseInt(this.secondB) + parseInt(this.thirdB);
    }else if(this.firstB !== undefined&&this.secondB !== undefined
      && this.firstB !== ''&&this.secondB !== ''
      && this.firstB !== null &&this.secondB !== null ){
      console.log('val',this.secondB);
      this.totalB = parseInt(this.firstB)+parseInt(this.secondB) ;

    }else if(this.firstB !== undefined &&this.thirdB !== undefined
      && this.firstB !== '' &&this.thirdB !== ''
      && this.firstB !== null &&this.thirdB !== null ){
      console.log('2');
      this.totalB = parseInt(this.firstB)+parseInt(this.thirdB) ;

    }else{
      this.totalB = parseInt(this.firstB);
    }




    if (
      (this.firstB >= 50 && this.first < 15) ||
      (this.secondB >= 50 && this.second < 15) ||
      (this.thirdB >= 50 && this.third < 15)
    ) {
      this.oneB = true;
      this.sptstatus = 'Refusal';
    } else if (
      (this.firstB > 50 && this.first === 15) ||
      (this.secondB > 50 && this.second === 15) ||
      (this.thirdB > 50 && this.third === 15)
    ) {
      this.oneB = true;
      this.sptstatus = 'Refusal';
    } else if (this.total === 30 && this.totalB > 100) {
      this.oneB = true;
      this.sptstatus = 'Refusal';
    } else {
      this.oneB = false;
      this.sptstatus = '';
    }
  }

  submitweb() {
    if (this.soilSampleColor !== 'Other' && this.colorOther === undefined) {
      this.colorOther = '';
    }

    this.httpService
      .submitLayer3(
        Constants.webbhid,
        3,
        this.drillingFrom,
        this.drillingTo,
        this.typeOfstrata,
        this.typeOfsample,
        this.dsDepthFrom,
        this.sptDepthFrom,
        this.first,
        this.firstB,
        this.second,
        this.secondB,
        this.third,
        this.thirdB,
        this.total,
        this.totalB,
        this.sptstatus,
        this.udsDepthFrom,
        this.soilSampleColor,
        this.colorOther,
        this.visualClassification,
        this.rockSample,
        this.rockDepthFrom,
        this.rockDepthTo,
        this.runLength,
        this.runTime,
        this.waterLoss,
        this.cr,
        this.rqd,
        this.rockSamplColor,
        this.typeOfWeathering,
        ''
      )
      .subscribe((response: any) => {
        if (response.error === true) {
          this.toastSer.presentError(response.msg);
        } else {
          this.toastSer.presentSuccess(response.msg);
      this.clearFields();
            this.router.navigate(['iterations']);
          // this.getWebData();
        }
      });


  }

  adding() {
    this.platform.ready().then(() => {

      if (this.platform.is('android')) {
        this.addDatabse();
      } else {
        this.submitweb();
      }
    });
  }

  getWebData() {
    this.layer1List = [];

    this.httpService
      .getBoredetails(Constants.webbhid)
      .subscribe((response: any) => {
        this.layer1List = response.data;
        console.log('list', this.layer1List);
        Constants.chainge = this.layer1List[0].chainage;
        Constants.bhno = this.layer1List[0].bh_no;

        if (this.layer1List[0].depth_termination === '') {
          this.router.navigate(['layer4']);
        } else {
          this.router.navigate(['web4']);
        }
      });
  }

  getLayer1() {
    this.androidDatabase.getLayer1ById(Constants.laYer1Id).then((data) => {
      this.layer1List = [];
      console.log('size', data.rows.length);
      if (data.rows.length > 0) {
        for (let i = 0; i < data.rows.length; i++) {
          this.layer1List.push(data.rows.item(i));
        }
        console.log('layer1List', this.layer1List);
        if (
          this.layer1List[0].depth_termination === undefined ||
          this.layer1List[0].depth_termination === 'undefined' ||
          this.layer1List[0].depth_termination === null ||
          this.layer1List[0].depth_termination === 'null'
        ) {
          this.router.navigate(['layer4']);
        } else {
          this.router.navigate(['update4']);
        }
      }
    });
  }
}
