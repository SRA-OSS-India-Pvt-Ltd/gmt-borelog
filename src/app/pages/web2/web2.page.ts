/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/dot-notation */
import { AlertController } from '@ionic/angular';
/* eslint-disable @typescript-eslint/naming-convention */
import { HttpcallsService } from 'src/app/services/httpcalls.service';
import { Platform } from '@ionic/angular';
import { Constants } from 'src/app/common/constants';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { ToastService } from 'src/app/services/toast.service';
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import * as watermark from 'watermarkjs';
import { CompleteTestServiceService } from './../../services/complete-test-service.service';
import { AutoCompleteComponent, AutoCompleteStyles } from 'ionic4-auto-complete';

@Component({
  selector: 'app-web2',
  templateUrl: './web2.page.html',
  styleUrls: ['./web2.page.scss'],
})
export class Web2Page implements OnInit {
  @ViewChild('previewimage') waterMarkImage: ElementRef;
  @ViewChild('searchbar')searchbar: AutoCompleteComponent;
  @Input() public styles = new AutoCompleteStyles();

  boreholeNumber: any;

  detailsOfDrillingBit: any;
  detailsOdCoreBarrel: any;
  rl: any;
  today: any;
  typeOfRig: any;
  chainage: any;
  chainageId: any;
  drillBitOther: any;

  orientation: any;
  boreholeDia: any;
  boreholeCasingDia: any;
  casingDepth: any;
  rigOther: any;
  typeOfStructure: any;
  ref: any;
  isch= true;
  typeOfCrossing: any;
  typeOfBridge: any;
  layer1List: any = [];
  chaingeList: any;
  selectedItem: any;
  isCasingDiaOther = false;
  date: any;
  casingDiaOther: any;
  isInclined = false;
  angleWithHorizontal: any;
  isDrillOther = false;
  isRigOther = false;
  options1: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
  };
  gelleryOptions: CameraOptions = {
    quality: 100,
    sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
    destinationType: this.camera.DestinationType.DATA_URL,
    allowEdit: true,
  };

  originalImage = null;
  originalImage1 = null;
  originalImage2 = null;
  base64Image1 = null;

  blobImage = null;
  blobImage1 = null;
  blobImage2 = null;

  locationCordinates: any;
  loadingLocation: boolean;
  utmz: any;
   str = `Multiline string.
  foo.
  bar.`;

  string3 ='';
  aboveEquator = false;
   llres: any = [];
   resarr: any = [];
    xy: any=[];
    smb: any;
    sma: any;
    uTMScaleFactor: any;
    smEccSquared: any;
    ep2: any;
    nu2: any;
    t: any;
    n: any;
    tmp: any;
    t2: any;
    l: any;
    l3coef: any;
    l4coef: any;
    l5coef: any;
    l6coef: any;
    l7coef: any;
    l8coef: any;
    alpha: any;
    beta: any;
    gamma: any;
    delta: any;

    epsilon: any;
    result: any;
    cmeridian: any;
    utm_data: any = [];
    easting: any;
    northing: any;
    base64Image: any;
    latitude: any;
    longitude: any;
  constructor(
    public toastSer: ToastService,
    private geolocation: Geolocation,
    public router: Router,
    public platform: Platform,
    public httpService: HttpcallsService,
    public camera: Camera,
    public alertCtrl: AlertController,
    public completeTestService: CompleteTestServiceService


  ) {
    this.ref = 'IS 1892; IS 2131; IS 2132';
    this.date = new Date().toISOString();
    this.getLayer1();
   // this.getLatLong();
    this.chaingeList = Constants.chainagesBySectionIDList;
    console.log('chaingeList', this.chaingeList);
  }

  ngOnInit() {}

  getLayer1() {
    this.layer1List = [];
    this.httpService
      .getBoredetails(Constants.webbhid)
      .subscribe((response: any) => {
        this.layer1List = response.data;

        console.log('layer1List', this.layer1List);
        if (this.layer1List.length > 0) {
          this.boreholeNumber = this.layer1List[0].bh_no;
          this.chainage = this.layer1List[0].chainage;
          this.chainageId = this.layer1List[0].chainage_id;
          this.easting = this.layer1List[0].easting;
          this.northing = this.layer1List[0].northing;

          this.typeOfStructure = this.layer1List[0].type_of_structure;
          this.typeOfCrossing = this.layer1List[0].type_of_crossing;
          this.typeOfBridge = this.layer1List[0].type_of_bridge;

          this.date = this.layer1List[0].bh_start_date;

          this.rl = this.layer1List[0].bh_rl;
          this.typeOfRig = this.layer1List[0].type_of_rig;

          this.rigOther = this.layer1List[0].type_of_rig_other;

          this.orientation = this.layer1List[0].drill_orientation;
          this.boreholeDia = this.layer1List[0].bh_dia;
          this.boreholeCasingDia = this.layer1List[0].casing_dia;
          this.casingDepth = this.layer1List[0].casing_depth;
          this.detailsOfDrillingBit = this.layer1List[0].drilling_bit;
          this.drillBitOther = this.layer1List[0].drilling_bit_other;
          this.detailsOdCoreBarrel = this.layer1List[0].core_barrel;

           if(this.layer1List[0].drill_orientation === 'Inclined'){
            this.isInclined = true;
          }else{
            this.isInclined = false;
          }
          this.waterMarkImage.nativeElement.src= this.layer1List[0].borehole_pic;
        }
      });
  }

  selected(item) {
    console.log('selected items : ', item);
    this.selectedItem = this.chaingeList.filter((user: any) =>
      user.chainage.includes(item)
    );
    console.log('selected item : ', this.selectedItem);

    if (this.selectedItem.length > 0) {

      this.typeOfBridge = this.selectedItem[0].type_of_bridge;
      this.typeOfCrossing = this.selectedItem[0].type_of_crossing;
      this.typeOfStructure = this.selectedItem[0].type_of_structure;
      this.chainageId = this.selectedItem[0].chainage_id;
      this.boreholeNumber = this.selectedItem[0].bhno;

      console.log('typeOfStructure : ', this.typeOfStructure);
    }
  }

  boreholeDiaChange($event){
    console.log($event.target.value);
    this.boreholeDia = $event.target.value;

  }
  casingDiaChange($event){
    console.log($event.target.value);
    this.boreholeCasingDia = $event.target.value;
    if(this.boreholeCasingDia === 'Other'){
      this.isCasingDiaOther = true;
    }else{
      this.isCasingDiaOther = false;
    }
  }


  detailDrillinBitChange($event) {
    this.detailsOfDrillingBit = $event.target.value;
    console.log($event.target.value);
    if (this.detailsOfDrillingBit === 'Other') {
      this.isDrillOther = true;
    } else {
      this.isDrillOther = false;
    }
  }

  detailOfCoreBarrel($event) {
    this.detailsOdCoreBarrel = $event.target.value;
    console.log($event.target.value);
  }

  updateLayer2() {
    this.httpService
      .submitLayer2(
        Constants.webbhid,
        2,
        this.boreholeNumber,
        this.chainage,
        this.chainageId,
        this.easting,
        this.northing,
        this.latitude,
        this.longitude,
        this.typeOfCrossing,
        this.typeOfStructure,
        this.typeOfBridge,
        this.date,
        this.rl,
        this.typeOfRig,
        this.rigOther,
        this.orientation,
        this.boreholeDia,
        this.boreholeCasingDia,
        this.casingDepth,
        this.detailsOfDrillingBit,
        this.drillBitOther,
        this.detailsOdCoreBarrel,
        this.angleWithHorizontal,
        this.waterMarkImage.nativeElement.src
      )
      .subscribe((response: any) => {
        console.log('response', response);
        if (response.error === true) {
          this.toastSer.presentError(response.msg);
        } else {
          this.toastSer.presentSuccess(response.msg);
          this.getWebBoreItrations();
          // if (this.layer1List[0].drill_depth_from === '') {
          //   this.router.navigate(['logginginformation']);
          // } else {
          //   this.router.navigate(['web3']);
          // }
        }
      });
  }
  typeOfStructureChange($event) {
    this.typeOfStructure = $event.target.value;
    console.log('typeOfStructure: ', this.typeOfStructure);
  }

  getValue($event){
    this.isch = false;
    console.log($event.target.value);
    this.chainage = $event.target.value;
    console.log('chhhhh',this.chainage);

    this.selectedItem = this.chaingeList.filter((user: any) =>
    user.chainage.includes($event.target.value)
  );


  console.log('selected item : ', this.selectedItem);

  if (this.selectedItem.length > 0) {
    // this.easting = this.selectedItem[0].easting;
    // this.northing = this.selectedItem[0].northing;
    this.typeOfBridge = this.selectedItem[0].type_of_bridge;
    this.typeOfCrossing = this.selectedItem[0].type_of_crossing;
    this.typeOfStructure = this.selectedItem[0].type_of_structure;
    this.chainageId = this.selectedItem[0].chainage_id;
    this.boreholeNumber = this.selectedItem[0].bhno;

    console.log('typeOfStructure : ', this.typeOfStructure);
    this.getLatLong();


  }

  }
  validation() {
    console.log('typeOfStuct', this.typeOfStructure);
    if (this.typeOfStructure === '') {
      this.toastSer.presentError('Please Enter Type of Structure');
    } else if (this.boreholeNumber === '') {
      this.toastSer.presentError('Please Enter Borehole Number');
    } else if (this.easting === '') {
      this.toastSer.presentError('Please Enter Latitude');
    } else if (this.northing === '') {
      this.toastSer.presentError('Please Enter northing');
    } else if (this.chainage === '') {
      this.toastSer.presentError('Please Enter Borehole Chainage');
    } else if (this.date === '') {
      this.toastSer.presentError('Please Enter Borehole Start Date');
    } else if (this.rl === 0) {
      this.toastSer.presentError(
        'Please Enter Proper Borehole RL (m), it should not be zero'
      );
    } else if (this.typeOfRig === '') {
      this.toastSer.presentError('Please Select Method of Drilling');
    } else if (this.typeOfRig === 'Other' && this.rigOther === '') {
      this.toastSer.presentError('Please Enter Other for Method of Drilling');
    } else if (this.orientation === '') {
      this.toastSer.presentError('Please Select Drilling Orientation');
    } else if (this.boreholeCasingDia === '') {
      this.toastSer.presentError('Please Enter Casing Dia');
    } else if (this.detailsOfDrillingBit === '') {
      this.toastSer.presentError('Please Select the Details of Drilling Bit*');
    } else if (this.detailsOdCoreBarrel === '') {
      this.toastSer.presentError('Please Select the Details of Core Barrel');
    } else if (
      this.orientation === 'Inclined' &&
      this.angleWithHorizontal === ''
    ) {
      this.toastSer.presentError('Please enter angle with horizontal');
    } else if (this.typeOfRig === 'Other' && this.rigOther === '') {
      this.toastSer.presentError('Please Enter Other for Method of Drilling');
    } else if (
      this.detailsOfDrillingBit === 'Other' &&
      this.drillBitOther === ''
    ) {
      this.toastSer.presentError('Please Enter Other for Method of Drilling');
    } else if (this.typeOfRig === 'Other' && this.rigOther === null) {
      this.toastSer.presentError('Please Enter Other for Method of Drilling');
    } else if (
      this.detailsOfDrillingBit === 'Other' &&
      this.drillBitOther === null
    ) {
      this.toastSer.presentError('Please Enter Other for Method of Drilling');
    } else if (this.typeOfRig === 'Other' && this.rigOther === undefined) {
      this.toastSer.presentError('Please Enter Other for Method of Drilling');
    } else if (
      this.detailsOfDrillingBit === 'Other' &&
      this.drillBitOther === undefined
    ) {
      this.toastSer.presentError('Please Enter Other for Method of Drilling');
    }else if (this.boreholeCasingDia === 'Other' && this.casingDiaOther === null) {
      this.toastSer.presentError('Please Enter Other for Casing Dia');
    }else if (this.boreholeCasingDia === 'Other' && this.casingDiaOther === undefined) {
      this.toastSer.presentError('Please Enter Other for Casing Dia');
    }else if (this.boreholeCasingDia === 'Other' && this.casingDiaOther === '') {
      this.toastSer.presentError('Please Enter Other for Casing Dia');
    }else if (
      this.waterMarkImage.nativeElement.src === null ||
      this.waterMarkImage.nativeElement.src === ''
    ) {
      this.toastSer.presentError('please upload Borehole Picture');
    }
     else {
      this.updateLayer2();
    }
  }



  getResopnseWithDates() {}
  rigChange($event) {
    console.log($event.target.value);

    this.typeOfRig = $event.target.value;
    if (this.typeOfRig === 'Other') {
      this.isRigOther = true;
    } else {
      this.isRigOther = false;
    }
  }

  oriantionChange($event) {
    console.log($event.target.value);

    this.orientation = $event.target.value;
    if (this.orientation === 'Inclined') {
      this.isInclined = true;
    } else {
      this.isInclined = false;
      this.angleWithHorizontal = '';
    }
  }

  gettingData() {
    this.platform.ready().then(() => {
      if (this.platform.is('android')) {
        this.getLayer1();
      } else {
        this.getWebData();
      }
    });
  }

  getWebData() {
    this.layer1List = [];

    this.httpService
      .getBoredetails(Constants.laYer1Id)
      .subscribe((response: any) => {
        this.layer1List = response.data;
      });
  }
  onClick() {
    this.getWebBoreItrations();
    // if (this.layer1List[0].drill_depth_from === '') {
    //   this.router.navigate(['logginginformation']);
    // } else {
    //   this.router.navigate(['web3']);
    // }
  }

  getWebBoreItrations() {
    this.httpService
      .getAllBoreIterations(Constants.webbhid)
      .subscribe((response: any) => {
        console.log('response', response);
        if (response.error === false) {
          this.router.navigate(['iterations']);

        }else{
          this.router.navigate(['logginginformation']);

        }
      });
  }

  getLatLong() {
    this.loadingLocation = true;

    this.geolocation
      .getCurrentPosition()
      .then((resp) => {
        console.log(resp);
        this.locationCordinates = resp.coords;
        this.loadingLocation = false;
        this.latitude = this.locationCordinates.latitude;
        this.longitude = this.locationCordinates.longitude;

this.showPosition(this.locationCordinates.latitude,this.locationCordinates.longitude);

      })
      .catch((error) => {
        this.loadingLocation = false;
        console.log('Error getting location', error);
      });
  }

  watermarkImage() {


    watermark([this.blobImage])
      .image(


        watermark.text.center(this.string3,
          '20px Arial',
          '#F5A905',
          0.8)




        )
      .then((img) => {
        this.waterMarkImage.nativeElement.src = img.src;
      });
  }

  watermarkImage1() {
    watermark([this.blobImage1])
      .image(
        watermark.text.center(this.string3,
          '20px Arial',
          '#F5A905',
          0.8)
      )
      .then((img) => {
        this.waterMarkImage.nativeElement.src = img.src;

        console.log('Base 64 of one :', img.src);
      });
  }



  takeSnap() {
    this.camera.getPicture(this.options1).then(
      (imageData) => {
        this.originalImage = 'data:image/jpeg;base64,' + imageData;

        fetch(this.originalImage)
          .then((res) => res.blob())
          .then((blob) => {
            this.blobImage = blob;
            this.watermarkImage();
          });
      },
      (error) => {
        console.log(error);
      }
    );
  }
  openGallery() {
    this.camera.getPicture(this.gelleryOptions).then(
      (imgData) => {
        console.log('image data =>  ', imgData);
        this.base64Image = 'data:image/jpeg;base64,' + imgData;
        fetch(this.base64Image)
          .then((res) => res.blob())
          .then((blob) => {
            this.blobImage1 = blob;
            this.watermarkImage1();
          });
      },
      (err) => {
        console.log(err);
      }
    );
  }



  async imageSelection() {
    const alert = await this.alertCtrl.create({
      header: 'Choose Type',
      buttons: [
        {
          text: 'Camera',
          handler: (redc) => {
            this.takeSnap();
          },
        },
        {
          text: 'Gallery',
          handler: (redc) => {
            this.openGallery();
          },
        },
      ],
    });
    alert.present();
  }



   ll2utm(lat,lon){
		//console.log(lat+','+lon)
		 this.utmz = 1 + Math.floor((lon+180)/6);//calculate utm zone
		console.log('zone: '+this.utmz);
		const zone = '44';
		//compute values
		const result = this.latLonToUTMXY(this.degree2radian(lat),this.degree2radian(lon),zone);
		this.aboveEquator = false;
		if(lat >0){
			this.aboveEquator = true;
		}

		this.resarr = [];
		this.resarr['x'] = result[0];
		this.resarr['y'] = result[1];
		this.resarr['zone'] = zone;
		this.resarr['aboveEquator'] = this.aboveEquator;

		this.llres['attr'] = this.resarr;
		console.log(this.llres['attr']);

		return this.llres['attr'];
}

 showPosition(lat, lon) {
  this.utm_data = [];
	this.utm_data = this.ll2utm(lat, lon);
  this.easting = Math.round(this.utm_data.x * 100) / 100;
  this.northing = Math.round(this.utm_data.y * 100) /100;
  console.log('utm data',this.utm_data.x);
  console.log('chainage',this.chainage);

  this.string3 = `UTM:`+this.easting + `,`+ this.northing + `
  Date:`+this.date+ `
  Chainage:`+this.chainage +`
  Bhno:`+this.boreholeNumber;

  console.log('string3',this.string3);


 }


 latLonToUTMXY(lat, lon, zone){
   this.xy = this.mapLatLonToXY (lat, lon, this.uTMCentralMeridian(zone));
  //console.log("result="+xy);
/* Adjust easting and northing for UTM system. */
this.uTMScaleFactor = 0.9996;
this.xy[0] = this.xy[0] * this.uTMScaleFactor + 500000.0;
  this.xy[1] = this.xy[1] * this.uTMScaleFactor;
  if (this.xy[1] < 0.0){
    this.xy[1] = this.xy[1] + 10000000.0;
  }
  return this.xy;
}

 mapLatLonToXY(phi, lambda, lambda0){
  this.xy=[];

  this.smb = 6356752.314;
  this.sma = 6378137.0;
  this.uTMScaleFactor = 0.9996;
  this.smEccSquared = .00669437999013;
  this.ep2 = (Math.pow (this.sma, 2.0) - Math.pow (this.smb, 2.0)) / Math.pow (this.smb, 2.0);
  this.nu2 = this.ep2 * Math.pow (Math.cos (phi), 2.0);
  this.n = Math.pow (this.sma, 2.0) / (this.smb * Math.sqrt (1 + this.nu2));
  this.t = Math.tan (phi);
  this.t2 = this.t * this.t;
  this.tmp = (this.t2 * this.t2 * this.t2) - Math.pow (this.t, 6.0);
  this.l = lambda - lambda0;
  this.l3coef = 1.0 - this.t2 + this.nu2;
  this.l4coef = 5.0 - this.t2 + 9 * this.nu2 + 4.0 * (this.nu2 * this.nu2);
  this.l5coef = 5.0 - 18.0 * this.t2 + (this.t2 * this.t2) + 14.0 * this.nu2- 58.0 * this.t2 * this.nu2;
  this.l6coef = 61.0 - 58.0 * this.t2 + (this.t2 * this.t2) + 270.0 * this.nu2- 330.0 * this.t2 * this.nu2;
  this.l7coef = 61.0 - 479.0 * this.t2 + 179.0 * (this.t2 * this.t2) - (this.t2 * this.t2 * this.t2);
  this.l8coef = 1385.0 - 3111.0 * this.t2 + 543.0 * (this.t2 * this.t2) - (this.t2 * this.t2 * this.t2);
  this.xy[0] = this.n * Math.cos (phi) * this.l
            + (this.n / 6.0 * Math.pow (Math.cos (phi), 3.0) * this.l3coef * Math.pow (this.l, 3.0))
            + (this.n / 120.0 * Math.pow (Math.cos (phi), 5.0) * this.l5coef * Math.pow (this.l, 5.0))
            + (this.n / 5040.0 * Math.pow (Math.cos (phi), 7.0) * this.l7coef * Math.pow (this.l, 7.0));
  this.xy[1] = this.arcLengthOfMeridian (phi)
            + (this.t / 2.0 * this.n * Math.pow (Math.cos (phi), 2.0) * Math.pow (this.l, 2.0))
            + (this.t / 24.0 * this.n * Math.pow (Math.cos (phi), 4.0) * this.l4coef * Math.pow (this.l, 4.0))
            + (this.t / 720.0 * this.n * Math.pow (Math.cos (phi), 6.0) * this.l6coef * Math.pow (this.l, 6.0))
            + (this.t / 40320.0 * this.n * Math.pow (Math.cos (phi), 8.0) * this.l8coef * Math.pow (this.l, 8.0));
  return this.xy;
}

 arcLengthOfMeridian(phi){
  this.smb = 6356752.314;
  this.sma = 6378137.0;
  this.uTMScaleFactor = 0.9996;
  this.smEccSquared = .00669437999013;
  this.n = (this.sma - this.smb) / (this.sma + this.smb);
  this.alpha = ((this.sma + this.smb) / 2.0)
    * (1.0 + (Math.pow (this.n, 2.0) / 4.0) + (Math.pow (this.n, 4.0) / 64.0));
  this.beta = (-3.0 * this.n / 2.0) + (9.0 * Math.pow (this.n, 3.0) / 16.0)
           + (-3.0 * Math.pow (this.n, 5.0) / 32.0);
  this.gamma = (15.0 * Math.pow (this.n, 2.0) / 16.0)
            + (-15.0 * Math.pow (this.n, 4.0) / 32.0);
  this.delta = (-35.0 * Math.pow (this.n, 3.0) / 48.0)
            + (105.0 * Math.pow (this.n, 5.0) / 256.0);
  this.epsilon = (315.0 * Math.pow (this.n, 4.0) / 512.0);
  this.result = this.alpha* (phi + (this.beta * Math.sin (2.0 * phi))
            + (this.gamma * Math.sin (4.0 * phi))
            + (this.delta * Math.sin (6.0 * phi))
      + (this.epsilon * Math.sin (8.0 * phi)));
  return this.result;
}

 degree2radian(deg){
  const pi = 3.14159265358979;
  return deg/180.0*pi;
}

 uTMCentralMeridian(zone){
this.cmeridian = this.degree2radian(-183.0 + (zone * 6.0));
return parseFloat(this.cmeridian);
}


}
