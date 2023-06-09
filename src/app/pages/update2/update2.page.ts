/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/dot-notation */
import { HttpcallsService } from 'src/app/services/httpcalls.service';
import { Platform, AlertController, PopoverController } from '@ionic/angular';
import { Constants } from 'src/app/common/constants';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AndroidDatabaseService } from 'src/app/database/android-database.service';
import { ToastService } from 'src/app/services/toast.service';
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import * as watermark from 'watermarkjs';
import { AutoCompleteComponent,  AutoCompleteStyles } from 'ionic4-auto-complete';
import { CompleteTestServiceService } from './../../services/complete-test-service.service';
import { DatePipe } from '@angular/common';
import { AndroidPermissions } from '@awesome-cordova-plugins/android-permissions/ngx';
import { LocationAccuracy } from '@awesome-cordova-plugins/location-accuracy/ngx';

@Component({
  selector: 'app-update2',
  templateUrl: './update2.page.html',
  styleUrls: ['./update2.page.scss'],
})
export class Update2Page implements OnInit {
  @ViewChild('previewimage') waterMarkImage: ElementRef;
  @ViewChild('previewimage2') waterMarkImage2: ElementRef;
  @ViewChild('previewimage3') waterMarkImage3: ElementRef;

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
  isch = true;
  typeOfCrossing: any;
  typeOfBridge: any;
  layer1List: any = [];
  chaingeList: any;
  selectedItem: any;
  isCasingDiaOther = false;
  isbhOther = false;

  date: any;
  isInclined = false;
  angleWithHorizontal: any;
  isDrillOther = false;
  isRigOther = false;
  casingDiaOther: any;
  bhdiaOther: any;
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
  countList: any =[];
  count: any;
  blobImage = null;
  blobImage1 = null;
  blobImage2 = null;
  item56: any;
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
    latitude: any;
    longitude: any;
    epsilon: any;
    result: any;
    cmeridian: any;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    utm_data: any = [];
    iterationList: any = [];
    countList1: any = [];
    easting: any;
    northing: any;
    base64Image: any;
    joindate: any;

    itemboreholepic2: any;
blobImagepic2: any;

itemboreholepic3: any;
blobImagepic3: any;

originalImage2pic: any;
originalImage3pic: any;

blobImagepic33: any;
blobImagepic22: any;

base64Image2: any;
blobImage12: any;


base64Image3: any;
blobImage13: any;

base64Image31: any;
base64Image312: any;

blobImage131: any;
blobImage132: any;


count1: any;

image1: any;
image2: any;
image3: any;
  constructor(public toastSer: ToastService,
    public androidDatabase: AndroidDatabaseService,
    private geolocation: Geolocation,
    public router: Router,
    public platform: Platform,
    public httpService: HttpcallsService,
    public camera: Camera,
    public alertCtrl: AlertController,
    public completeTestService: CompleteTestServiceService,
    public popoverController: PopoverController,

    private datePipe: DatePipe,
    private androidPermissions: AndroidPermissions,
    private locationAccuracy: LocationAccuracy,



) {
      this.ref = 'IS 1892; IS 2131; IS 2132';
      this.date = new Date().toISOString();
      this.joindate =new Date().toLocaleString();

      this.chaingeList = Constants.chaingeListAndroid11;
      console.log('chaingeList', this.chaingeList);
       this.getLatLong();
      this.getLayer1();

    }



  ngOnInit() {
  }

  ionViewDidEnter(){
    this.getLatLong();
    this.getLayer1();

  }

  validation() {
    console.log('typeOfStuct', this.typeOfStructure);
     if (this.chainage === '') {
      this.toastSer.presentError('Please Enter Chainage');
    }else if (this.boreholeNumber === '') {
      this.toastSer.presentError('Please Enter Chainage');
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
    } else if (this.detailsOfDrillingBit === '') {
      this.toastSer.presentError('Please Select the Details of Drilling Bit*');
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
      this.toastSer.presentError('Please Enter Other for Details of Drilling Bit');
    } else if (this.typeOfRig === 'Other' && this.rigOther === null) {
      this.toastSer.presentError('Please Enter Other for Method of Drilling');
    } else if (
      this.detailsOfDrillingBit === 'Other' &&
      this.drillBitOther === null
    ) {
      this.toastSer.presentError('Please Enter Other for Details of Drilling Bit');
    } else if (this.typeOfRig === 'Other' && this.rigOther === undefined) {
      this.toastSer.presentError('Please Enter Other for Method of Drilling');
    } else if (
      this.detailsOfDrillingBit === 'Other' &&
      this.drillBitOther === undefined
    ) {
      this.toastSer.presentError('Please Enter Other for Details of Drilling Bit');
    } else if (this.boreholeCasingDia === 'Other' && this.casingDiaOther === null) {
      this.toastSer.presentError('Please Enter Other for Casing Dia');
    }else if (this.boreholeCasingDia === 'Other' && this.casingDiaOther === undefined) {
      this.toastSer.presentError('Please Enter Other for Casing Dia');
    }else if (this.boreholeCasingDia === 'Other' && this.casingDiaOther === '') {
      this.toastSer.presentError('Please Enter Other for Casing Dia');
    }
    else if (this.boreholeDia === 'Other' && this.bhdiaOther === null) {
      this.toastSer.presentError('Please Enter Other for Casing Dia');
    }else if (this.boreholeDia === 'Other' && this.bhdiaOther === undefined) {
      this.toastSer.presentError('Please Enter Other for Casing Dia');
    }else if (this.boreholeDia === 'Other' && this.bhdiaOther === '') {
      this.toastSer.presentError('Please Enter Other for Casing Dia');
    }
    else if (
      this.waterMarkImage.nativeElement.src === null ||
      this.waterMarkImage.nativeElement.src === ''
    ) {
      this.toastSer.presentError('please upload Borehole Picture');
    }
    else {
      this.updateLayer2();
    }
  }

  onClick(){
   this. getWebBoreItrations();

}


getValue($event){
this.isch = false;
  console.log($event.target.value);
  this.chainage = $event.target.value;

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
getWebBoreItrations() {

  this.router.navigate(['iterations']);


  this.androidDatabase.getIterationCount(Constants.laYer1Id).then((data) => {
    this.countList1 = [];
    console.log('size',data.rows.length);
    if (data.rows.length > 1) {
      for (let i = 0; i < data.rows.length; i++) {
        this.countList1.push(data.rows.item(i));
      }
      console.log('countList',this.countList1);
      this.count1 = this.countList1[0].drill_depth_from;
      console.log('count',this.count1);

     if(this.count1>0){
      this.router.navigate(['iterations']);

     }else{
      this.router.navigate(['logginginformation']);

     }









       }
        });

}

regDateSettings() {
  if(this.date !== undefined && this.date!== null && this.date !== ''){
     //console.log('popovere3');
     this.closePopover('pop2');

   }

}
async closePopover(id: string) {
const popover = await this.popoverController.getTop();
if (popover) {
  if (popover.id === id) {
    await this.popoverController.dismiss();
  }
}
}
  getLayer1() {
    this.androidDatabase.getLayer1ById(Constants.laYer1Id).then((data) => {
      this.layer1List = [];
      console.log('size',data.rows.length);
      if (data.rows.length > 0) {
        for (let i = 0; i < data.rows.length; i++) {
          this.layer1List.push(data.rows.item(i));
        }
        console.log('layer1List',this.layer1List);
        if(this.layer1List.length>0){


          this.boreholeNumber = this.layer1List[0].bh_no;

          this.chainage = this.layer1List[0].chainage;
          this.chainageId = this.layer1List[0].chainage_id;

          this.easting = this.layer1List[0].easting;
          this.northing = this.layer1List[0].northing;

          console.log('eastinggg',this.layer1List[0].easting);
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

          this.bhdiaOther = this.layer1List[0].bh_dia_other;
          this.casingDiaOther = this.layer1List[0].casing_dia_other;


          if(this.layer1List[0].drill_orientation === 'Inclined'){
            this.isInclined = true;
            this.angleWithHorizontal = this.layer1List[0].angle_horizontal;
          }else{
            this.isInclined = false;
            this.angleWithHorizontal = '';
          }
          this.bhdiaOther = this.layer1List[0].bh_dia_other;
          this.casingDiaOther = this.layer1List[0].casing_dia_other;

          if(this.layer1List[0].bh_dia === 'Other'){
            this.isbhOther = true;
          }else{
            this.isbhOther = false;

          }
          if(this.layer1List[0].casing_dia === 'Other'){
            this.isCasingDiaOther = true;
          }else{
            this.isCasingDiaOther = false;

          }

          this.waterMarkImage.nativeElement.src= this.layer1List[0].borehole_pic1;
          this.waterMarkImage2.nativeElement.src= this.layer1List[0].borehole_pic2;
          this.waterMarkImage3.nativeElement.src= this.layer1List[0].borehole_pic3;

          this.image1= this.layer1List[0].borehole_pic1;
          this.image2= this.layer1List[0].borehole_pic2;
          this.image3= this.layer1List[0].borehole_pic3;
          if(this.layer1List[0].borehole_pic2 === ''){
            this.waterMarkImage2.nativeElement.src= '';
          }
          if(this.layer1List[0].borehole_pic3 === ''){
            this.waterMarkImage3.nativeElement.src= '';
          }


          console.log('beforeUpdateSecId',Constants.beforeUpdateSecId);
console.log('editSectinId',this.layer1List[0].section_id);

          if(Constants.beforeUpdateSecId === this.layer1List[0].section_id){

          }else{



            this.typeOfBridge = '';
            this.typeOfCrossing = '';
            this.typeOfStructure = '';
            this.chainageId = '';
            this.boreholeNumber = '';
            this.chainage = '';



          }


        }

      }
    });
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
  detailOfCoreBarrel($event){
    this.detailsOdCoreBarrel= $event.target.value;
    console.log($event.target.value);


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


  updateLayer2(){


    this.androidDatabase.getChainageCount(Constants.package,Constants.section,this.chainage).then((data) => {
      this.countList = [];
      console.log('data size',data.rows.length);
      if (data.rows.length > 0) {
        for (let i = 0; i < data.rows.length; i++) {
          this.countList.push(data.rows.item(i));
        }
        console.log('countList',this.countList);
        this.count = this.countList[0].bh_no;

        if(this.count>2){
          this.toastSer.presentError('Duplicate Chainage Exist');

        }else{



    this.androidDatabase.updateLayer2(this.ref,this.boreholeNumber,
      this.easting,this.northing,this.latitude,this.longitude,
      this.chainage,this.chainageId,
      this.typeOfCrossing,'',this.typeOfBridge,
      this.date,
      this.rl,this.typeOfRig,
      this.rigOther,
      this.orientation,
      this.boreholeDia,
      this.bhdiaOther,
      this.boreholeCasingDia,
      this.casingDiaOther,
      this.casingDepth,Constants.laYer1Id,
      this.detailsOfDrillingBit,
      this.drillBitOther,
      this.detailsOdCoreBarrel,
      this.angleWithHorizontal,
      this.waterMarkImage.nativeElement.src,
      this.waterMarkImage2.nativeElement.src ,
      this.waterMarkImage3.nativeElement.src );
      this.getWebBoreItrations();



        }
      }
    });











  }
  typeOfStructureChange($event){
    this.typeOfStructure = $event.target.value;
    console.log('typeOfStructure: ',this.typeOfStructure);
  }
  getIterationlist(){
    this.androidDatabase.getIteraions(Constants.laYer1Id).then((data) => {

      console.log('size',data.rows.length);
      if (data.rows.length > 0) {
        this.router.navigate(['iterations']);

      }else{
        this.router.navigate(['logginginformation']);


      }
    });

  }

boreholeDiaChange($event){
  console.log($event.target.value);
  this.boreholeDia = $event.target.value;
  if(this.boreholeDia === 'Other'){
    this.isbhOther = true;
  }else{
    this.isbhOther = false;
  }


}

  getResopnseWithDates(){}
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

  gettingData(){
    this. platform.ready().then(() => {
       if (this.platform.is('android')) {
       this.getLayer1();

       }else{
        this.getWebData();

      }


   });

  }

  getWebData(){
    this.layer1List = [];

     this.httpService.getBoredetails(Constants.laYer1Id).subscribe((response: any)=>{
      this.layer1List = response.data;

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


  xy78(coffee, metrics, context) {
    return 28;

  };
  y63(coffee, metrics, context) {
    return 63;
  };
  y83(coffee, metrics, context) {
    return 73;
  };

  y103(coffee, metrics, context) {
    return 83;
  };

  y123(coffee, metrics, context) {
    return 93;
  };

  y143(coffee, metrics, context) {
    return 103;
  };



  y631(coffee, metrics, context) {
    return 63;
  };
  y831(coffee, metrics, context) {
    return 73;
  };

  y1031(coffee, metrics, context) {
    return 83;
  };

  y1231(coffee, metrics, context) {
    return 93;
  };

  y1431(coffee, metrics, context) {
    return 103;
  };
  watermarkImage() {


    watermark([this.blobImage])
    .image(watermark.text.atPos(this.xy78,this.y63,'Chainage: '+this.chainage, '10px bold', '#FF0000', 0))
    .load('assets/images/2.png')
  .image(watermark.text.atPos(this.xy78,this.y83,'Bhno: '+this.boreholeNumber, '10px bold', '#FF0000', 0, 48))
  .load('assets/images/2.png')
  .image(watermark.text.atPos(this.xy78,this.y103,'Date: '+this.joindate, '10px bold', '#FF0000', 0, 48))
  .load('assets/images/2.png')
  .image(watermark.text.atPos(this.xy78,this.y123,'Easting- '+this.easting, '10px bold', '#FF0000', 0, 48))
  .load('assets/images/2.png')
  .image(watermark.text.atPos(this.xy78,this.y143,'Northing- '+this.northing, '10px bold', '#FF0000', 0, 48))

      .then((img) => {
        this.waterMarkImage.nativeElement.src = img.src;
      });
  }



  watermarkImage1() {
    watermark([this.blobImage1])
    .image(watermark.text.atPos(this.xy78,this.y631,'Chainage: '+this.chainage, '10px bold', '#FF0000', 0))
    .load('assets/images/2.png')
  .image(watermark.text.atPos(this.xy78,this.y831,'Bhno: '+this.boreholeNumber, '10px bold', '#FF0000', 0, 48))
  .load('assets/images/2.png')
  .image(watermark.text.atPos(this.xy78,this.y1031,'Date: '+this.joindate, '10px bold', '#FF0000', 0, 48))
  .load('assets/images/2.png')
  .image(watermark.text.atPos(this.xy78,this.y1231,'Easting- '+this.easting, '10px bold', '#FF0000', 0, 48))
  .load('assets/images/2.png')
  .image(watermark.text.atPos(this.xy78,this.y1431,'Northing- '+this.northing, '10px bold', '#FF0000', 0, 48))
    // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
    .then((img)=> {
      console.log('Base 64 of one :', img.src);

      //  document.getElementById('lower-left').appendChild(img);

        this.waterMarkImage.nativeElement.src = img.src;

      });
  }


  watermarkImagepic2() {


    watermark([this.blobImagepic2])
    .image(watermark.text.atPos(this.xy78,this.y63,'Chainage: '+this.chainage, '10px bold', '#FF0000', 0))
    .load('assets/images/2.png')
  .image(watermark.text.atPos(this.xy78,this.y83,'Bhno: '+this.boreholeNumber, '10px bold', '#FF0000', 0, 48))
  .load('assets/images/2.png')
  .image(watermark.text.atPos(this.xy78,this.y103,'Date: '+this.joindate, '10px bold', '#FF0000', 0, 48))
  .load('assets/images/2.png')
  .image(watermark.text.atPos(this.xy78,this.y123,'Easting- '+this.easting, '10px bold', '#FF0000', 0, 48))
  .load('assets/images/2.png')
  .image(watermark.text.atPos(this.xy78,this.y143,'Northing- '+this.northing, '10px bold', '#FF0000', 0, 48))


  .then((img)=> {
    console.log('Base 64 of one :', img);

  //document.getElementById('lower-left').appendChild(img);


        this.waterMarkImage2.nativeElement.src = img.src;
      });
  }





    watermarkImage2pic2() {
      watermark([this.blobImage131])
      .image(watermark.text.atPos(this.xy78,this.y631,'Chainage: '+this.chainage, '10px bold', '#FF0000', 0))
      .load('assets/images/2.png')
    .image(watermark.text.atPos(this.xy78,this.y831,'Bhno: '+this.boreholeNumber, '10px bold', '#FF0000', 0, 48))
    .load('assets/images/2.png')
    .image(watermark.text.atPos(this.xy78,this.y1031,'Date: '+this.joindate, '10px bold', '#FF0000', 0, 48))
    .load('assets/images/2.png')
    .image(watermark.text.atPos(this.xy78,this.y1231,'Easting- '+this.easting, '10px bold', '#FF0000', 0, 48))
    .load('assets/images/2.png')
    .image(watermark.text.atPos(this.xy78,this.y1431,'Northing- '+this.northing, '10px bold', '#FF0000', 0, 48))
      // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
      .then((img)=> {
        console.log('Base 64 of one :', img.src);

        //  document.getElementById('lower-left').appendChild(img);

          this.waterMarkImage2.nativeElement.src = img.src;

        });
    }


    watermarkImagepic3() {


      watermark([this.blobImagepic3])
      .image(watermark.text.atPos(this.xy78,this.y63,'Chainage: '+this.chainage, '10px bold', '#FF0000', 0))
      .load('assets/images/2.png')
    .image(watermark.text.atPos(this.xy78,this.y83,'Bhno: '+this.boreholeNumber, '10px bold', '#FF0000', 0, 48))
    .load('assets/images/2.png')
    .image(watermark.text.atPos(this.xy78,this.y103,'Date: '+this.joindate, '10px bold', '#FF0000', 0, 48))
    .load('assets/images/2.png')
    .image(watermark.text.atPos(this.xy78,this.y123,'Easting- '+this.easting, '10px bold', '#FF0000', 0, 48))
    .load('assets/images/2.png')
    .image(watermark.text.atPos(this.xy78,this.y143,'Northing- '+this.northing, '10px bold', '#FF0000', 0, 48))


    .then((img)=> {
      console.log('Base 64 of one :', img);

    //document.getElementById('lower-left').appendChild(img);


          this.waterMarkImage3.nativeElement.src = img.src;
        });
    }





      watermarkImage2pic3() {
        watermark([this.blobImage132])
        .image(watermark.text.atPos(this.xy78,this.y631,'Chainage: '+this.chainage, '10px bold', '#FF0000', 0))
        .load('assets/images/2.png')
      .image(watermark.text.atPos(this.xy78,this.y831,'Bhno: '+this.boreholeNumber, '10px bold', '#FF0000', 0, 48))
      .load('assets/images/2.png')
      .image(watermark.text.atPos(this.xy78,this.y1031,'Date: '+this.joindate, '10px bold', '#FF0000', 0, 48))
      .load('assets/images/2.png')
      .image(watermark.text.atPos(this.xy78,this.y1231,'Easting- '+this.easting, '10px bold', '#FF0000', 0, 48))
      .load('assets/images/2.png')
      .image(watermark.text.atPos(this.xy78,this.y1431,'Northing- '+this.northing, '10px bold', '#FF0000', 0, 48))
        // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
        .then((img)=> {
          console.log('Base 64 of one :', img.src);

          //  document.getElementById('lower-left').appendChild(img);

            this.waterMarkImage3.nativeElement.src = img.src;

          });
      }




  snap(){
    const options: CameraOptions = {
      quality: 100,
      targetHeight: 320,
      targetWidth: 320,
      destinationType: this.camera.DestinationType.FILE_URI,
      sourceType: this.camera.PictureSourceType.CAMERA,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true

    };

    this.camera.getPicture(options).then((imgFileUri) => {
     // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
     this.item56 = (<any>window).Ionic.WebView.convertFileSrc(imgFileUri);

     fetch(this.item56)
     .then((res) => res.blob())
     .then((blob) => {
       this.blobImage = blob;
       this.watermarkImage();
     });

    }, (err) => {
     console.log(err);
    });

  }


  snap2(){
    const options: CameraOptions = {
      quality: 100,
      targetHeight: 320,
      targetWidth: 320,
      correctOrientation: true,

      destinationType: this.camera.DestinationType.FILE_URI,
      sourceType: this.camera.PictureSourceType.CAMERA,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(options).then((imgFileUri) => {
     // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
     this.itemboreholepic2 = (<any>window).Ionic.WebView.convertFileSrc(imgFileUri);

     fetch(this.itemboreholepic2)
     .then((res) => res.blob())
     .then((blob) => {
       this.blobImagepic2 = blob;
       this.watermarkImagepic2();
     });

    }, (err) => {
     console.log(err);
    });

  }

  snap3(){
    const options: CameraOptions = {
      quality: 100,
      targetHeight: 320,
      targetWidth: 320,
      correctOrientation: true,

      destinationType: this.camera.DestinationType.FILE_URI,
      sourceType: this.camera.PictureSourceType.CAMERA,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(options).then((imgFileUri) => {
     // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
     this.itemboreholepic3 = (<any>window).Ionic.WebView.convertFileSrc(imgFileUri);

     fetch(this.itemboreholepic3)
     .then((res) => res.blob())
     .then((blob) => {
       this.blobImagepic3 = blob;
       this.watermarkImagepic3();
     });

    }, (err) => {
     console.log(err);
    });

  }



  takePhoto(sourceType1: number) {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      sourceType:sourceType1,
      targetHeight: 320,
      targetWidth: 320,

    };

    this.camera.getPicture(options).then((imageData) => {
       this.base64Image = 'data:image/jpeg;base64,' + imageData;
       fetch(this.base64Image)
       .then((res) => res.blob())
       .then((blob) => {
         this.blobImage1 = blob;
         this.watermarkImage1();
       });

    }, (err) => {
      // Handle error
    });
  }

  takePhoto2(sourceType1: number) {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      sourceType:sourceType1,
      targetHeight: 320,
      targetWidth: 320,

    };

    this.camera.getPicture(options).then((imageData) => {
       this.base64Image31 = 'data:image/jpeg;base64,' + imageData;
       fetch(this.base64Image31)
       .then((res) => res.blob())
       .then((blob) => {
         this.blobImage131 = blob;
         this.watermarkImage2pic2();
       });

    }, (err) => {
      // Handle error
    });
  }


  takePhoto3(sourceType1: number) {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      sourceType:sourceType1,
      targetHeight: 320,
      targetWidth: 320,

    };

    this.camera.getPicture(options).then((imageData) => {
       this.base64Image312 = 'data:image/jpeg;base64,' + imageData;
       fetch(this.base64Image312)
       .then((res) => res.blob())
       .then((blob) => {
         this.blobImage132 = blob;
         this.watermarkImage2pic3();
       });

    }, (err) => {
      // Handle error
    });
  }



  locationcheck(){
    this.getLatLong();

    if(this.easting === undefined || this.northing === undefined
      ||this.easting === null || this.northing === null||
      this.easting === '' || this.northing === ''){
        this.getLatLong();

     this.toastSer.presentError('Please Enter Easing and Northing');
    }else{
      this.imageSelection();
    }
  }


  async imageSelection() {
    this.getLatLong();
    const alert = await this.alertCtrl.create({
      header: 'Choose Type',
      buttons: [
        {
          text: 'Camera',
          handler: (redc) => {
            this.snap();
          },
        },
        {
          text: 'Gallery',
          handler: (redc) => {
            this.takePhoto(0);
          },
        },
      ],
    });
    alert.present();
  }

  locationcheck2(){
    this.getLatLong();

    if(this.easting === undefined || this.northing === undefined
      ||this.easting === null || this.northing === null||
      this.easting === '' || this.northing === ''){
        this.getLatLong();
        this.toastSer.presentError('Please Enter Easing and Northing');


    }else{
      this.imageSelection2();
    }
  }


  locationcheck3(){
    this.getLatLong();

    if(this.easting === undefined || this.northing === undefined
      ||this.easting === null || this.northing === null||
      this.easting === '' || this.northing === ''){
        this.getLatLong();
        this.toastSer.presentError('Please Enter Easing and Northing');


    }else{
      this.imageSelection3();
    }
  }



  async imageSelection2() {
    this.getLatLong();


    const alert = await this.alertCtrl.create({
      header: 'Choose Type',
      buttons: [
        {
          text: 'Camera',
          handler: (redc) => {

            this.snap2();

        },
        },
        {
          text: 'Gallery',
          handler: (redc) => {

            this.takePhoto2(0);

          },
        },
      ],
    });
    alert.present();
  }


  async imageSelection3() {
    this.getLatLong();


    const alert = await this.alertCtrl.create({
      header: 'Choose Type',
      buttons: [
        {
          text: 'Camera',
          handler: (redc) => {

            this.snap3();

        },
        },
        {
          text: 'Gallery',
          handler: (redc) => {

            this.takePhoto3(0);

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
