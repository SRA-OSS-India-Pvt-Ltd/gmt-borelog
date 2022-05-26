/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/dot-notation */
import { AlertController } from '@ionic/angular';
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable max-len */
import { Router } from '@angular/router';
import { AndroidDatabaseService } from 'src/app/database/android-database.service';
import { ToastService } from './../../services/toast.service';
import { AfterViewInit, Component, ElementRef, ViewChild, enableProdMode } from '@angular/core';
import SignaturePad from 'signature_pad';
import { Constants } from 'src/app/common/constants';
import { HttpcallsService } from 'src/app/services/httpcalls.service';
import { Platform } from '@ionic/angular';
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import * as watermark from 'watermarkjs';
import { DatePipe } from '@angular/common';
import { AndroidPermissions } from '@awesome-cordova-plugins/android-permissions/ngx';
import { LocationAccuracy } from '@awesome-cordova-plugins/location-accuracy/ngx';

@Component({
  selector: 'app-layer4',
  templateUrl: './layer4.page.html',
  styleUrls: ['./layer4.page.scss'],
})
export class Layer4Page implements AfterViewInit {
  @ViewChild('canvas') canvasEl: ElementRef;
  @ViewChild('canvas1') canvasEl1: ElementRef;
  @ViewChild('canvas2') canvasEl2: ElementRef;
  @ViewChild('previewimage') waterMarkImage: ElementRef;
  @ViewChild('previewimage2') waterMarkImage2: ElementRef;

  @ViewChild('previewimagedep2') waterMarkImagedep2: ElementRef;
  @ViewChild('previewimagedep3') waterMarkImagedep3: ElementRef;
  @ViewChild('previewimagesamp2') waterMarkImagesamp2: ElementRef;
  @ViewChild('previewimagesamp3') waterMarkImagesamp3: ElementRef;



  signaturePad;
  signaturePad1;
  signaturePad2;
  signatureImg: string;
  signatureImg1: string;
  signatureImg2: string;
  base641: any;
  base642: any;
  base643: any;
  startDate: any;

  depthOfTermination: any;

  date1: any;
  aarveRepresName: any;
  subAgencyRepresentivaeName: string = '';
  clientRepresNaame: string = '';
  layer1List: any = [];
  bhid: any;
  base64Image: any;

  latitude: any;
  longitude: any;

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
     item56: any;
     item561: any;
    epsilon: any;
    result: any;
    cmeridian: any;
    utm_data: any = [];
    easting: any;
    northing: any;
    chainge: any;
    bhno: any;
    waterTable: any;
    joindate: any;

    snaDep2: any;
    blobSnapDep2: any;

    originalImagetakeDep2: any;

    base64ImageDep2: any;
    blobImagetakeDep2: any;

    base64ImageGalDep2: any;
    blobImage1Galdep2: any;


    snaDep3: any;
    blobSnapDep3: any;

    originalImagetakeDep3: any;

    base64ImageDep3: any;
    blobImagetakeDep3: any;

    base64ImageGalDep3: any;
    blobImage1Galdep3: any;


    snaSamp2: any;
    blobSnapSamp2: any;

    originalImagetakeSamp2: any;

    base64ImageSamp2: any;
    blobImagetakeSamp2: any;

    base64ImageGalSamp2: any;
    blobImage1GalSamp2: any;


    snaSamp3: any;
    blobSnapSamp3: any;

    originalImagetakeSamp3: any;

    base64ImageSamp3: any;
    blobImagetakeSamp3: any;

    base64ImageGalSamp3: any;
    blobImage1GalSamp3: any;



  constructor(
    public toastSer: ToastService,
    public androidDatabase: AndroidDatabaseService,
    public router: Router,
    public httpService: HttpcallsService,
    public platform: Platform,
    public camera: Camera,
    private geolocation: Geolocation,
    public alertCtrl: AlertController,
    private datePipe: DatePipe,
    private androidPermissions: AndroidPermissions,
    private locationAccuracy: LocationAccuracy,

  ) {
    this.getLatLong();
    this.date1 = new Date().toISOString();
    this.joindate =new Date().toLocaleString();

    console.log('date1', this.date1);
    console.log('str',this.str);
    this.chainge = Constants.chainge;
    this.bhno = Constants.bhno;
    platform.ready().then(() => {
      if (this.platform.is('android')) {
        this.getLayer1LastId();
        this.getLayer1();
      } else {
        this.getLayer1Web();
      }

    });
  }

  ionViewDidEnter(){
    this.getLatLong();
   this.platform.ready().then(() => {
      if (this.platform.is('android')) {
        this.getLayer1LastId();
        this.getLayer1();
      } else {
        this.getLayer1Web();

      }
    });


  }

  getLayer1Web() {
    this.layer1List = [];
    this.httpService
      .getBoredetails(Constants.webbhid)
      .subscribe((response: any) => {
        this.layer1List = response.data;

        console.log('layer1List', this.layer1List);
        if (this.layer1List.length > 0) {
          this.startDate = this.layer1List[0].bh_start_date;
        }
      });
  }



  ngAfterViewInit() {
    this.signaturePad = new SignaturePad(this.canvasEl.nativeElement);
    this.signaturePad1 = new SignaturePad(this.canvasEl1.nativeElement);
    this.signaturePad2 = new SignaturePad(this.canvasEl2.nativeElement);
  }

  startDrawing(event: Event) {
    console.log(event);
    // works in device not in browser
  }

  moved(event: Event) {
    // works in device not in browser
  }

  clearPad() {
    this.router.navigate(['viewlist']);
  }

  validation() {
     if(this.waterTable === null){
      this.toastSer.presentError('please Enter the Depth of Water Table RL ');

    }else if(this.waterTable === ''){
      this.toastSer.presentError('please Enter the Depth of Water Table RL ');

    }else if(this.waterTable === 0){
      this.toastSer.presentError('please Enter the Depth of Water Table RL ');

    }else if(this.waterTable === undefined){
      this.toastSer.presentError('please Enter the Depth of Water Table RL ');

    }
   else if (this.depthOfTermination === undefined) {
      this.toastSer.presentError('please Enter the Depth of Termination');
    } else if (this.date1 === undefined) {
      this.toastSer.presentError('please Enter the Borehole End date');
    } else if (this.aarveRepresName === undefined) {
      this.toastSer.presentError('please Enter the AARVEE Representative Name');
    } else if (
      this.signaturePad.toDataURL() ===
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACWCAYAAABkW7XSAAAAAXNSR0IArs4c6QAABGJJREFUeF7t1AEJAAAMAsHZv/RyPNwSyDncOQIECEQEFskpJgECBM5geQICBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAgQdWMQCX4yW9owAAAABJRU5ErkJggg=='
    ) {
      this.toastSer.presentError(
        'please Enter the AARVEE Representative Signature'
      );
    }  else if (this.depthOfTermination === '') {
      this.toastSer.presentError('please Enter the Depth of Termination');
    }
    else if (this.date1 === '') {
      this.toastSer.presentError('please Enter the Borehole End date');
    } else if (this.aarveRepresName === '') {
      this.toastSer.presentError('please Enter the AARVEE Representative Name');
    } else if (this.depthOfTermination === null) {
      this.toastSer.presentError('please Enter the Depth of Termination');
    } else if (this.date1 === null) {
      this.toastSer.presentError('please Enter the Borehole End date');
    } else if (this.aarveRepresName === null) {
      this.toastSer.presentError('please Enter the AARVEE Representative Name');
    } else if (this.depthOfTermination === 0) {
      this.toastSer.presentError(
        'please Enter the Depth of Termination, It should not be zero'
      );
    } else if (
      this.waterMarkImage.nativeElement.src === null ||
      this.waterMarkImage.nativeElement.src === ''
    ) {
      this.toastSer.presentError('please upload  Depth Termination Picture');
    } else if (
      this.waterMarkImage2.nativeElement.src === null ||
      this.waterMarkImage2.nativeElement.src === ''
    ) {
      this.toastSer.presentError('please upload Sample Picture');
    } else {
      this.base641 = this.signaturePad.toDataURL();
      this.signatureImg = this.base641;
      this.base642 = this.signaturePad1.toDataURL();
      this.signatureImg1 = this.base642;
      this.base643 = this.signaturePad2.toDataURL();
      this.signatureImg2 = this.base643;

      console.log('signImg', this.signatureImg);
      console.log('base64', this.base641);
      this.adding();
    }
  }

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

  getLayer1() {
    this.androidDatabase.getLayer1ById(Constants.laYer1Id).then((data) => {
      this.layer1List = [];
      console.log('size', data.rows.length);
      if (data.rows.length > 0) {
        for (let i = 0; i < data.rows.length; i++) {
          this.layer1List.push(data.rows.item(i));
        }
        console.log('layer1List', this.layer1List);
        if (this.layer1List.length > 0) {

          this.startDate = this.layer1List[0].bh_start_date;
          this.easting = this.layer1List[0].easting;
          this.northing = this.layer1List[0].northing;

        }
      }
    });
  }

  addDatabase() {
    console.log(this.base641, this.base642, this.base643);
    this.androidDatabase.updateLayer4(
      this.waterTable,
      this.depthOfTermination,
      this.date1,
      this.aarveRepresName,
      this.base641,
      this.subAgencyRepresentivaeName,
      this.base642,
      this.clientRepresNaame,
      this.base643,
      Constants.laYer1Id,
      this.waterMarkImage.nativeElement.src,
      this.waterMarkImagedep2.nativeElement.src,
      this.waterMarkImagedep3.nativeElement.src,
      this.waterMarkImage2.nativeElement.src,
      this.waterMarkImagesamp2.nativeElement.src,
      this.waterMarkImagesamp3.nativeElement.src

    );
    this.router.navigate(['sidemenu']);
  }
  addDatabase1() {
    console.log(this.base641, this.base642, this.base643);
    this.androidDatabase.updateLayer4(
      this.waterTable,
      this.depthOfTermination,
      this.date1,
      this.aarveRepresName,
      this.base641,
      this.subAgencyRepresentivaeName,
      this.base642,
      this.clientRepresNaame,
      this.base643,
      Constants.laYer1Id,
      this.waterMarkImage.nativeElement.src,
      this.waterMarkImagedep2.nativeElement.src,
      this.waterMarkImagedep3.nativeElement.src,
      this.waterMarkImage2.nativeElement.src,
      this.waterMarkImagesamp2.nativeElement.src,
      this.waterMarkImagesamp3.nativeElement.src
    );
    this.router.navigate(['sidemenu']);
  }

  submitweb() {
    this.httpService
      .submitLayer4(
        Constants.webbhid,
        4,
        this.waterTable,
        this.depthOfTermination,
        this.date1,
        this.aarveRepresName,
        this.base641,
        this.subAgencyRepresentivaeName,
        this.base642,
        this.clientRepresNaame,
        this.base643,
        '',
        this.waterMarkImage.nativeElement.src,
        this.waterMarkImagedep2.nativeElement.src,
        this.waterMarkImagedep3.nativeElement.src,
        this.waterMarkImage2.nativeElement.src,
        this.waterMarkImagesamp2.nativeElement.src,
        this.waterMarkImagesamp3.nativeElement.src

      )
      .subscribe((response: any) => {
        console.log('response', response);
        if (response.error === true) {
          this.toastSer.presentError(response.msg);
        } else {
          this.toastSer.presentSuccess(response.msg);

          this.router.navigate(['sidemenu']);
        }
      });
  }
  submitweb1() {
    this.httpService
      .submitLayer4(
        Constants.webbhid,
        4,
        this.waterTable,
        this.depthOfTermination,
        this.date1,
        this.aarveRepresName,
        this.base641,
        this.subAgencyRepresentivaeName,
        this.base642,
        this.clientRepresNaame,
        this.base643,
        '',
        this.waterMarkImage.nativeElement.src,
        this.waterMarkImagedep2.nativeElement.src,
        this.waterMarkImagedep3.nativeElement.src,
        this.waterMarkImage2.nativeElement.src,
        this.waterMarkImagesamp2.nativeElement.src,
        this.waterMarkImagesamp3.nativeElement.src
        )
      .subscribe((response: any) => {
        console.log('response', response);
        this.toastSer.presentSuccess(response.msg);
        this.router.navigate(['sidemenu']);
      });
  }

  clear1() {
    this.signaturePad.clear();
  }
  clear2() {
    this.signaturePad1.clear();
  }
  clear3() {
    this.signaturePad2.clear();
  }

  adding() {
    this.platform.ready().then(() => {
      if (this.platform.is('android')) {
        this.addDatabase();
      } else {
        this.submitweb();
      }
    });
  }
  adding1() {
    this.platform.ready().then(() => {
      if (this.platform.is('android')) {
        this.addDatabase1();
      } else {
        this.submitweb1();
      }
    });
  }

  cameraClick() {
    this.camera.getPicture(this.options1).then(
      (imageData) => {
        // imageData is either a base64 encoded string or a file URI
        // If it's base64 (DATA_URL):
        this.base64Image = 'data:image/jpeg;base64,' + imageData;
        console.log('base64', this.base64Image);
      },
      (err) => {
        // Handle error
      }
    );
  }

  getLatLong() {
    this.loadingLocation = true;

    this.geolocation
      .getCurrentPosition()
      .then((resp) => {
        console.log(resp);
        this.locationCordinates = resp.coords;
        this.loadingLocation = false;

        console.log('lattttt: '+this.locationCordinates.latitude);
this.showPosition(this.locationCordinates.latitude,this.locationCordinates.longitude);

      })
      .catch((error) => {
        this.loadingLocation = false;
        console.log('Error getting location', error);
      });
  }

  xy78(coffee, metrics, context) {
    this.platform.ready().then(() => {

      if (this.platform.is('tablet')) {
        return 78;
      }else{
        return 28;

      }
    });
    };
  y63(coffee, metrics, context) {
    return 163;
  };
  y83(coffee, metrics, context) {
    return 173;
  };

  y103(coffee, metrics, context) {
    return 183;
  };

  y123(coffee, metrics, context) {
    return 193;
  };

  y143(coffee, metrics, context) {
    return 203;
  };



  y631(coffee, metrics, context) {
    return 115;
  };
  y831(coffee, metrics, context) {
    return 125;
  };

  y1031(coffee, metrics, context) {
    return 135;
  };

  y1231(coffee, metrics, context) {
    return 145;
  };

  y1431(coffee, metrics, context) {
    return 155;
  };


  watermarkImage() {


    watermark([this.blobImage])
    .image(watermark.text.atPos(this.xy78,this.y63,'Chainage: '+this.chainge, '10px bold', '#000000', 0))
    .load('assets/images/2.png')
  .image(watermark.text.atPos(this.xy78,this.y83,'Bhno: '+this.bhno, '10px bold', '#000000', 0, 48))
  .load('assets/images/2.png')
  .image(watermark.text.atPos(this.xy78,this.y103,'Date: '+this.joindate, '10px bold', '#000000', 0, 48))
  .load('assets/images/2.png')
  .image(watermark.text.atPos(this.xy78,this.y123,'Easting- '+this.easting, '10px bold', '#000000', 0, 48))
  .load('assets/images/2.png')
  .image(watermark.text.atPos(this.xy78,this.y143,'Northing- '+this.northing, '10px bold', '#000000', 0, 48))

    .then((img) => {
        this.waterMarkImage.nativeElement.src = img.src;
      });
  }

  watermarkImage1() {
    watermark([this.blobImage1])
    .image(watermark.text.atPos(this.xy78,this.y63,'Chainage: '+this.chainge, '10px bold', '#000000', 0))
    .load('assets/images/2.png')
  .image(watermark.text.atPos(this.xy78,this.y83,'Bhno: '+this.bhno, '10px bold', '#000000', 0, 48))
  .load('assets/images/2.png')
  .image(watermark.text.atPos(this.xy78,this.y103,'Date: '+this.joindate, '10px bold', '#000000', 0, 48))
  .load('assets/images/2.png')
  .image(watermark.text.atPos(this.xy78,this.y123,'Easting- '+this.easting, '10px bold', '#000000', 0, 48))
  .load('assets/images/2.png')
  .image(watermark.text.atPos(this.xy78,this.y143,'Northing- '+this.northing, '10px bold', '#000000', 0, 48))

    .then((img) => {
        this.waterMarkImage.nativeElement.src = img.src;

        console.log('Base 64 of one :', img.src);
      });
  }

  watermarkImage2() {
    watermark([this.blobImage2])
    .image(watermark.text.atPos(this.xy78,this.y63,'Chainage: '+this.chainge, '10px bold', '#000000', 0))
    .load('assets/images/2.png')
  .image(watermark.text.atPos(this.xy78,this.y83,'Bhno: '+this.bhno, '10px bold', '#000000', 0, 48))
  .load('assets/images/2.png')
  .image(watermark.text.atPos(this.xy78,this.y103,'Date: '+this.joindate, '10px bold', '#000000', 0, 48))
  .load('assets/images/2.png')
  .image(watermark.text.atPos(this.xy78,this.y123,'Easting- '+this.easting, '10px bold', '#000000', 0, 48))
  .load('assets/images/2.png')
  .image(watermark.text.atPos(this.xy78,this.y143,'Northing- '+this.northing, '10px bold', '#000000', 0, 48))

    .then((img) => {
        this.waterMarkImage2.nativeElement.src = img.src;
      });
  }


  watermarkImage3() {
    watermark([this.blobImage1])
    .image(watermark.text.atPos(this.xy78,this.y631,'Chainage: '+this.chainge, '5px bold', '#000000', 0))
    .load('assets/images/2.png')
  .image(watermark.text.atPos(this.xy78,this.y831,'Bhno: '+this.chainge, '5px bold', '#000000', 0, 48))
  .load('assets/images/2.png')
  .image(watermark.text.atPos(this.xy78,this.y1031,'Date: '+this.joindate, '5px bold', '#000000', 0, 48))
  .load('assets/images/2.png')
  .image(watermark.text.atPos(this.xy78,this.y1231,'Easting- '+this.easting, '5px bold', '#000000', 0, 48))
  .load('assets/images/2.png')
  .image(watermark.text.atPos(this.xy78,this.y1431,'Northing- '+this.northing, '5px bold', '#000000', 0, 48))
    // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
    .then((img)=> {
      console.log('Base 64 of one :', img.src);

      //  document.getElementById('lower-left').appendChild(img);

        this.waterMarkImage.nativeElement.src = img.src;

      });
  }

  watermarkImage4() {
    watermark([this.blobImage2])
    .image(watermark.text.atPos(this.xy78,this.y631,'Chainage: '+this.chainge, '5px bold', '#000000', 0))
    .load('assets/images/2.png')
  .image(watermark.text.atPos(this.xy78,this.y831,'Bhno: '+this.bhno, '5px bold', '#000000', 0, 48))
  .load('assets/images/2.png')
  .image(watermark.text.atPos(this.xy78,this.y1031,'Date: '+this.joindate, '5px bold', '#000000', 0, 48))
  .load('assets/images/2.png')
  .image(watermark.text.atPos(this.xy78,this.y1231,'Easting- '+this.easting, '5px bold', '#000000', 0, 48))
  .load('assets/images/2.png')
  .image(watermark.text.atPos(this.xy78,this.y1431,'Northing- '+this.northing, '5px bold', '#000000', 0, 48))

    .then((img) => {
        this.waterMarkImage2.nativeElement.src = img.src;
      });
  }


  watermarkImagesnapDep2() {


    watermark([this.blobSnapDep2])
    .image(watermark.text.atPos(this.xy78,this.y63,'Chainage: '+this.chainge, '10px bold', '#000000', 0))
    .load('assets/images/2.png')
  .image(watermark.text.atPos(this.xy78,this.y83,'Bhno: '+this.bhno, '10px bold', '#000000', 0, 48))
  .load('assets/images/2.png')
  .image(watermark.text.atPos(this.xy78,this.y103,'Date: '+this.joindate, '10px bold', '#000000', 0, 48))
  .load('assets/images/2.png')
  .image(watermark.text.atPos(this.xy78,this.y123,'Easting- '+this.easting, '10px bold', '#000000', 0, 48))
  .load('assets/images/2.png')
  .image(watermark.text.atPos(this.xy78,this.y143,'Northing- '+this.northing, '10px bold', '#000000', 0, 48))

    .then((img) => {
        this.waterMarkImagedep2.nativeElement.src = img.src;
      });
  }



  watermarkImage3takeDep2() {
    watermark([this.blobImagetakeDep2])
    .image(watermark.text.atPos(this.xy78,this.y631,'Chainage: '+this.chainge, '5px bold', '#000000', 0))
    .load('assets/images/2.png')
  .image(watermark.text.atPos(this.xy78,this.y831,'Bhno: '+this.chainge, '5px bold', '#000000', 0, 48))
  .load('assets/images/2.png')
  .image(watermark.text.atPos(this.xy78,this.y1031,'Date: '+this.joindate, '5px bold', '#000000', 0, 48))
  .load('assets/images/2.png')
  .image(watermark.text.atPos(this.xy78,this.y1231,'Easting- '+this.easting, '5px bold', '#000000', 0, 48))
  .load('assets/images/2.png')
  .image(watermark.text.atPos(this.xy78,this.y1431,'Northing- '+this.northing, '5px bold', '#000000', 0, 48))
    // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
    .then((img)=> {
      console.log('Base 64 of one :', img.src);

      //  document.getElementById('lower-left').appendChild(img);

        this.waterMarkImagedep2.nativeElement.src = img.src;

      });
  }


  watermarkImage1GalDep2() {
    watermark([this.blobImage1Galdep2])
    .image(watermark.text.atPos(this.xy78,this.y63,'Chainage: '+this.chainge, '10px bold', '#000000', 0))
    .load('assets/images/2.png')
  .image(watermark.text.atPos(this.xy78,this.y83,'Bhno: '+this.bhno, '10px bold', '#000000', 0, 48))
  .load('assets/images/2.png')
  .image(watermark.text.atPos(this.xy78,this.y103,'Date: '+this.joindate, '10px bold', '#000000', 0, 48))
  .load('assets/images/2.png')
  .image(watermark.text.atPos(this.xy78,this.y123,'Easting- '+this.easting, '10px bold', '#000000', 0, 48))
  .load('assets/images/2.png')
  .image(watermark.text.atPos(this.xy78,this.y143,'Northing- '+this.northing, '10px bold', '#000000', 0, 48))

    .then((img) => {
        this.waterMarkImagedep2.nativeElement.src = img.src;

        console.log('Base 64 of one :', img.src);
      });
  }



  watermarkImagesnapDep3() {


    watermark([this.blobSnapDep3])
    .image(watermark.text.atPos(this.xy78,this.y63,'Chainage: '+this.chainge, '10px bold', '#000000', 0))
    .load('assets/images/2.png')
  .image(watermark.text.atPos(this.xy78,this.y83,'Bhno: '+this.bhno, '10px bold', '#000000', 0, 48))
  .load('assets/images/2.png')
  .image(watermark.text.atPos(this.xy78,this.y103,'Date: '+this.joindate, '10px bold', '#000000', 0, 48))
  .load('assets/images/2.png')
  .image(watermark.text.atPos(this.xy78,this.y123,'Easting- '+this.easting, '10px bold', '#000000', 0, 48))
  .load('assets/images/2.png')
  .image(watermark.text.atPos(this.xy78,this.y143,'Northing- '+this.northing, '10px bold', '#000000', 0, 48))

    .then((img) => {
        this.waterMarkImagedep3.nativeElement.src = img.src;
      });
  }



  watermarkImage3takeDep3() {
    watermark([this.blobImagetakeDep3])
    .image(watermark.text.atPos(this.xy78,this.y631,'Chainage: '+this.chainge, '5px bold', '#000000', 0))
    .load('assets/images/2.png')
  .image(watermark.text.atPos(this.xy78,this.y831,'Bhno: '+this.chainge, '5px bold', '#000000', 0, 48))
  .load('assets/images/2.png')
  .image(watermark.text.atPos(this.xy78,this.y1031,'Date: '+this.joindate, '5px bold', '#000000', 0, 48))
  .load('assets/images/2.png')
  .image(watermark.text.atPos(this.xy78,this.y1231,'Easting- '+this.easting, '5px bold', '#000000', 0, 48))
  .load('assets/images/2.png')
  .image(watermark.text.atPos(this.xy78,this.y1431,'Northing- '+this.northing, '5px bold', '#000000', 0, 48))
    // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
    .then((img)=> {
      console.log('Base 64 of one :', img.src);

      //  document.getElementById('lower-left').appendChild(img);

        this.waterMarkImagedep3.nativeElement.src = img.src;

      });
  }


  watermarkImage1GalDep3() {
    watermark([this.blobImage1Galdep3])
    .image(watermark.text.atPos(this.xy78,this.y63,'Chainage: '+this.chainge, '10px bold', '#000000', 0))
    .load('assets/images/2.png')
  .image(watermark.text.atPos(this.xy78,this.y83,'Bhno: '+this.bhno, '10px bold', '#000000', 0, 48))
  .load('assets/images/2.png')
  .image(watermark.text.atPos(this.xy78,this.y103,'Date: '+this.joindate, '10px bold', '#000000', 0, 48))
  .load('assets/images/2.png')
  .image(watermark.text.atPos(this.xy78,this.y123,'Easting- '+this.easting, '10px bold', '#000000', 0, 48))
  .load('assets/images/2.png')
  .image(watermark.text.atPos(this.xy78,this.y143,'Northing- '+this.northing, '10px bold', '#000000', 0, 48))

    .then((img) => {
        this.waterMarkImagedep3.nativeElement.src = img.src;

        console.log('Base 64 of one :', img.src);
      });
  }




  watermarkImagesnapSamp2() {


    watermark([this.blobSnapSamp2])
    .image(watermark.text.atPos(this.xy78,this.y63,'Chainage: '+this.chainge, '10px bold', '#000000', 0))
    .load('assets/images/2.png')
  .image(watermark.text.atPos(this.xy78,this.y83,'Bhno: '+this.bhno, '10px bold', '#000000', 0, 48))
  .load('assets/images/2.png')
  .image(watermark.text.atPos(this.xy78,this.y103,'Date: '+this.joindate, '10px bold', '#000000', 0, 48))
  .load('assets/images/2.png')
  .image(watermark.text.atPos(this.xy78,this.y123,'Easting- '+this.easting, '10px bold', '#000000', 0, 48))
  .load('assets/images/2.png')
  .image(watermark.text.atPos(this.xy78,this.y143,'Northing- '+this.northing, '10px bold', '#000000', 0, 48))

    .then((img) => {
        this.waterMarkImagesamp2.nativeElement.src = img.src;
      });
  }



  watermarkImage3takeSamp2() {
    watermark([this.blobImagetakeSamp2])
    .image(watermark.text.atPos(this.xy78,this.y631,'Chainage: '+this.chainge, '5px bold', '#000000', 0))
    .load('assets/images/2.png')
  .image(watermark.text.atPos(this.xy78,this.y831,'Bhno: '+this.chainge, '5px bold', '#000000', 0, 48))
  .load('assets/images/2.png')
  .image(watermark.text.atPos(this.xy78,this.y1031,'Date: '+this.joindate, '5px bold', '#000000', 0, 48))
  .load('assets/images/2.png')
  .image(watermark.text.atPos(this.xy78,this.y1231,'Easting- '+this.easting, '5px bold', '#000000', 0, 48))
  .load('assets/images/2.png')
  .image(watermark.text.atPos(this.xy78,this.y1431,'Northing- '+this.northing, '5px bold', '#000000', 0, 48))
    // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
    .then((img)=> {
      console.log('Base 64 of one :', img.src);

      //  document.getElementById('lower-left').appendChild(img);

        this.waterMarkImagesamp2.nativeElement.src = img.src;

      });
  }


  watermarkImage1GalSamp2() {
    watermark([this.blobImage1GalSamp2])
    .image(watermark.text.atPos(this.xy78,this.y63,'Chainage: '+this.chainge, '10px bold', '#000000', 0))
    .load('assets/images/2.png')
  .image(watermark.text.atPos(this.xy78,this.y83,'Bhno: '+this.bhno, '10px bold', '#000000', 0, 48))
  .load('assets/images/2.png')
  .image(watermark.text.atPos(this.xy78,this.y103,'Date: '+this.joindate, '10px bold', '#000000', 0, 48))
  .load('assets/images/2.png')
  .image(watermark.text.atPos(this.xy78,this.y123,'Easting- '+this.easting, '10px bold', '#000000', 0, 48))
  .load('assets/images/2.png')
  .image(watermark.text.atPos(this.xy78,this.y143,'Northing- '+this.northing, '10px bold', '#000000', 0, 48))

    .then((img) => {
        this.waterMarkImagesamp2.nativeElement.src = img.src;

        console.log('Base 64 of one :', img.src);
      });
  }




  watermarkImagesnapSamp3() {


    watermark([this.blobSnapSamp3])
    .image(watermark.text.atPos(this.xy78,this.y63,'Chainage: '+this.chainge, '10px bold', '#000000', 0))
    .load('assets/images/2.png')
  .image(watermark.text.atPos(this.xy78,this.y83,'Bhno: '+this.bhno, '10px bold', '#000000', 0, 48))
  .load('assets/images/2.png')
  .image(watermark.text.atPos(this.xy78,this.y103,'Date: '+this.joindate, '10px bold', '#000000', 0, 48))
  .load('assets/images/2.png')
  .image(watermark.text.atPos(this.xy78,this.y123,'Easting- '+this.easting, '10px bold', '#000000', 0, 48))
  .load('assets/images/2.png')
  .image(watermark.text.atPos(this.xy78,this.y143,'Northing- '+this.northing, '10px bold', '#000000', 0, 48))

    .then((img) => {
        this.waterMarkImagesamp3.nativeElement.src = img.src;
      });
  }



  watermarkImage3takeSamp3() {
    watermark([this.blobImagetakeSamp3])
    .image(watermark.text.atPos(this.xy78,this.y631,'Chainage: '+this.chainge, '5px bold', '#000000', 0))
    .load('assets/images/2.png')
  .image(watermark.text.atPos(this.xy78,this.y831,'Bhno: '+this.chainge, '5px bold', '#000000', 0, 48))
  .load('assets/images/2.png')
  .image(watermark.text.atPos(this.xy78,this.y1031,'Date: '+this.joindate, '5px bold', '#000000', 0, 48))
  .load('assets/images/2.png')
  .image(watermark.text.atPos(this.xy78,this.y1231,'Easting- '+this.easting, '5px bold', '#000000', 0, 48))
  .load('assets/images/2.png')
  .image(watermark.text.atPos(this.xy78,this.y1431,'Northing- '+this.northing, '5px bold', '#000000', 0, 48))
    // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
    .then((img)=> {
      console.log('Base 64 of one :', img.src);

      //  document.getElementById('lower-left').appendChild(img);

        this.waterMarkImagesamp3.nativeElement.src = img.src;

      });
  }


  watermarkImage1GalSamp3() {
    watermark([this.blobImage1GalSamp3])
    .image(watermark.text.atPos(this.xy78,this.y63,'Chainage: '+this.chainge, '10px bold', '#000000', 0))
    .load('assets/images/2.png')
  .image(watermark.text.atPos(this.xy78,this.y83,'Bhno: '+this.bhno, '10px bold', '#000000', 0, 48))
  .load('assets/images/2.png')
  .image(watermark.text.atPos(this.xy78,this.y103,'Date: '+this.joindate, '10px bold', '#000000', 0, 48))
  .load('assets/images/2.png')
  .image(watermark.text.atPos(this.xy78,this.y123,'Easting- '+this.easting, '10px bold', '#000000', 0, 48))
  .load('assets/images/2.png')
  .image(watermark.text.atPos(this.xy78,this.y143,'Northing- '+this.northing, '10px bold', '#000000', 0, 48))

    .then((img) => {
        this.waterMarkImagesamp3.nativeElement.src = img.src;

        console.log('Base 64 of one :', img.src);
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

  takeSnap1() {
    this.camera.getPicture(this.options1).then(
      (imageData) => {
        this.originalImage2 = 'data:image/jpeg;base64,' + imageData;

        fetch(this.originalImage2)
          .then((res) => res.blob())
          .then((blob) => {
            this.blobImage2 = blob;
            this.watermarkImage2();
          });
      },
      (error) => {
        console.log(error);
      }
    );
  }

  snap1(){
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
     this.item561 = (<any>window).Ionic.WebView.convertFileSrc(imgFileUri);

     fetch(this.item561)
     .then((res) => res.blob())
     .then((blob) => {
       this.blobImage2 = blob;
       this.watermarkImage2();
     });

    }, (err) => {
     console.log(err);
    });

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




  openGallery1() {
    this.camera.getPicture(this.gelleryOptions).then(
      (imgData) => {
        console.log('image data =>  ', imgData);
        this.base64Image1 = 'data:image/jpeg;base64,' + imgData;
        fetch(this.base64Image1)
          .then((res) => res.blob())
          .then((blob) => {
            this.blobImage2 = blob;
            this.watermarkImage2();
          });
      },
      (err) => {
        console.log(err);
      }
    );
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
         this.watermarkImage3();
       });

    }, (err) => {
      // Handle error
    });
  }


  snapDep2(){
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
     this.snaDep2 = (<any>window).Ionic.WebView.convertFileSrc(imgFileUri);

     fetch(this.snaDep2)
     .then((res) => res.blob())
     .then((blob) => {
       this.blobSnapDep2 = blob;
       this.watermarkImagesnapDep2();
     });

    }, (err) => {
     console.log(err);
    });

  }


  takeSnapDep2() {
    this.camera.getPicture(this.options1).then(
      (imageData) => {
        this.originalImagetakeDep2 = 'data:image/jpeg;base64,' + imageData;

        fetch(this.originalImagetakeDep2)
          .then((res) => res.blob())
          .then((blob) => {
            this.blobSnapDep2 = blob;
            this.watermarkImagesnapDep2();
          });
      },
      (error) => {
        console.log(error);
      }
    );
  }

  takePhotoDep2(sourceType1: number) {
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
       this.base64ImageDep2 = 'data:image/jpeg;base64,' + imageData;
       fetch(this.base64ImageDep2)
       .then((res) => res.blob())
       .then((blob) => {
         this.blobImagetakeDep2 = blob;
         this.watermarkImage3takeDep2();
       });

    }, (err) => {
      // Handle error
    });
  }

  openGalleryDep2() {
    this.camera.getPicture(this.gelleryOptions).then(
      (imgData) => {
        console.log('image data =>  ', imgData);
        this.base64ImageGalDep2 = 'data:image/jpeg;base64,' + imgData;
        fetch(this.base64ImageGalDep2)
          .then((res) => res.blob())
          .then((blob) => {
            this.blobImage1Galdep2 = blob;
            this.watermarkImage1GalDep2();
          });
      },
      (err) => {
        console.log(err);
      }
    );
  }


  snapDep3(){
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
     this.snaDep3 = (<any>window).Ionic.WebView.convertFileSrc(imgFileUri);

     fetch(this.snaDep3)
     .then((res) => res.blob())
     .then((blob) => {
       this.blobSnapDep3 = blob;
       this.watermarkImagesnapDep3();
     });

    }, (err) => {
     console.log(err);
    });

  }



  takeSnapDep3() {
    this.camera.getPicture(this.options1).then(
      (imageData) => {
        this.originalImagetakeDep3 = 'data:image/jpeg;base64,' + imageData;

        fetch(this.originalImagetakeDep3)
          .then((res) => res.blob())
          .then((blob) => {
            this.blobSnapDep3 = blob;
            this.watermarkImagesnapDep3();
          });
      },
      (error) => {
        console.log(error);
      }
    );
  }

  takePhotoDep3(sourceType1: number) {
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
       this.base64ImageDep3 = 'data:image/jpeg;base64,' + imageData;
       fetch(this.base64ImageDep3)
       .then((res) => res.blob())
       .then((blob) => {
         this.blobImagetakeDep3 = blob;
         this.watermarkImage3takeDep3();
       });

    }, (err) => {
      // Handle error
    });
  }

  openGalleryDep3() {
    this.camera.getPicture(this.gelleryOptions).then(
      (imgData) => {
        console.log('image data =>  ', imgData);
        this.base64ImageGalDep3 = 'data:image/jpeg;base64,' + imgData;
        fetch(this.base64ImageGalDep3)
          .then((res) => res.blob())
          .then((blob) => {
            this.blobImage1Galdep3 = blob;
            this.watermarkImage1GalDep3();
          });
      },
      (err) => {
        console.log(err);
      }
    );
  }




  snapSamp2(){
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
     this.snaSamp2 = (<any>window).Ionic.WebView.convertFileSrc(imgFileUri);

     fetch(this.snaSamp2)
     .then((res) => res.blob())
     .then((blob) => {
       this.blobSnapSamp2 = blob;
       this.watermarkImagesnapSamp2();
     });

    }, (err) => {
     console.log(err);
    });

  }



  takeSnapSamp2() {
    this.camera.getPicture(this.options1).then(
      (imageData) => {
        this.originalImagetakeSamp2 = 'data:image/jpeg;base64,' + imageData;

        fetch(this.originalImagetakeSamp2)
          .then((res) => res.blob())
          .then((blob) => {
            this.blobSnapSamp2 = blob;
            this.watermarkImagesnapSamp2();
          });
      },
      (error) => {
        console.log(error);
      }
    );
  }

  takePhotoSamp2(sourceType1: number) {
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
       this.base64ImageSamp2 = 'data:image/jpeg;base64,' + imageData;
       fetch(this.base64ImageSamp2)
       .then((res) => res.blob())
       .then((blob) => {
         this.blobImagetakeSamp2 = blob;
         this.watermarkImage3takeSamp2();
       });

    }, (err) => {
      // Handle error
    });
  }

  openGallerySamp2() {
    this.camera.getPicture(this.gelleryOptions).then(
      (imgData) => {
        console.log('image data =>  ', imgData);
        this.base64ImageGalSamp2 = 'data:image/jpeg;base64,' + imgData;
        fetch(this.base64ImageGalSamp2)
          .then((res) => res.blob())
          .then((blob) => {
            this.blobImage1GalSamp2 = blob;
            this.watermarkImage1GalSamp2();
          });
      },
      (err) => {
        console.log(err);
      }
    );
  }





  snapSamp3(){
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
     this.snaSamp3 = (<any>window).Ionic.WebView.convertFileSrc(imgFileUri);

     fetch(this.snaSamp3)
     .then((res) => res.blob())
     .then((blob) => {
       this.blobSnapSamp3 = blob;
       this.watermarkImagesnapSamp3();
     });

    }, (err) => {
     console.log(err);
    });

  }



  takeSnapSamp3() {
    this.camera.getPicture(this.options1).then(
      (imageData) => {
        this.originalImagetakeSamp3 = 'data:image/jpeg;base64,' + imageData;

        fetch(this.originalImagetakeSamp3)
          .then((res) => res.blob())
          .then((blob) => {
            this.blobSnapSamp3 = blob;
            this.watermarkImagesnapSamp3();
          });
      },
      (error) => {
        console.log(error);
      }
    );
  }

  takePhotoSamp3(sourceType1: number) {
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
       this.base64ImageSamp3 = 'data:image/jpeg;base64,' + imageData;
       fetch(this.base64ImageSamp3)
       .then((res) => res.blob())
       .then((blob) => {
         this.blobImagetakeSamp3 = blob;
         this.watermarkImage3takeSamp3();
       });

    }, (err) => {
      // Handle error
    });
  }

  openGallerySamp3() {
    this.camera.getPicture(this.gelleryOptions).then(
      (imgData) => {
        console.log('image data =>  ', imgData);
        this.base64ImageGalSamp3 = 'data:image/jpeg;base64,' + imgData;
        fetch(this.base64ImageGalSamp3)
          .then((res) => res.blob())
          .then((blob) => {
            this.blobImage1GalSamp3 = blob;
            this.watermarkImage1GalSamp3();
          });
      },
      (err) => {
        console.log(err);
      }
    );
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
       this.base64Image1 = 'data:image/jpeg;base64,' + imageData;
       fetch(this.base64Image1)
       .then((res) => res.blob())
       .then((blob) => {
         this.blobImage2 = blob;
         this.watermarkImage4();
       });

    }, (err) => {
      // Handle error
    });
  }

  locationcheck(){
    this.getLatLong();


    if( this.easting === undefined || this.northing === undefined){
        this.getLatLong();
        this.platform.ready().then(() => {

          if (this.platform.is('android')) {
            this.toastSer.presentError('Please Turn on GPS..');

          }else{
            this.toastSer.presentError('Please Enter Easing and Northing');
          }
        });
    }else{
      this.imageSelection();
    }
  }

  locationcheck2(){
    this.getLatLong();

    if(this.easting === undefined || this.northing === undefined){
        this.getLatLong();

        this.platform.ready().then(() => {

          if (this.platform.is('android')) {
            this.toastSer.presentError('Please Turn on GPS..');

          }else{
            this.toastSer.presentError('Please Enter Easing and Northing');
          }
        });
    }else{
      this.imageSelection2();
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

            this.platform.ready().then(() => {
              if (this.platform.is('android')) {
                this.snap();
              } else {

                this.takeSnap();
              }

          });
          },
        },
        {
          text: 'Gallery',
          handler: (redc) => {

            this.platform.ready().then(() => {
              if (this.platform.is('android')) {
                this.takePhoto(0);
              } else {

                this.openGallery();
              }

          });

          },
        },
      ],
    });
    alert.present();
  }

  async imageSelection2() {
    this.getLatLong();
    const alert = await this.alertCtrl.create({
      header: 'Choose Type',
      buttons: [
        {
          text: 'Camera',
          handler: (redc) => {

            this.platform.ready().then(() => {
              if (this.platform.is('android')) {
                this.snap1();
              } else {


                this.takeSnap1();
              }

          });

          },
        },
        {
          text: 'Gallery',
          handler: (redc) => {
            this.platform.ready().then(() => {
              if (this.platform.is('android')) {
                this.takePhoto2(0);
              } else {

                this.openGallery1();
              }

          });

          },
        },
      ],
    });
    alert.present();
  }

  locationcheckDep2(){
    this.getLatLong();


    if( this.easting === undefined || this.northing === undefined){
        this.getLatLong();
        this.platform.ready().then(() => {

          if (this.platform.is('android')) {
            this.toastSer.presentError('Please Turn on GPS..');

          }else{
            this.toastSer.presentError('Please Enter Easing and Northing');
          }
        });
    }else{
      this.imageSelectionDep2();
    }
  }



  async imageSelectionDep2() {
    this.getLatLong();
    const alert = await this.alertCtrl.create({
      header: 'Choose Type',
      buttons: [
        {
          text: 'Camera',
          handler: (redc) => {

            this.platform.ready().then(() => {
              if (this.platform.is('android')) {
                this.snapDep2();
              } else {

                this.takeSnapDep2();
              }

          });
          },
        },
        {
          text: 'Gallery',
          handler: (redc) => {

            this.platform.ready().then(() => {
              if (this.platform.is('android')) {
                this.takePhotoDep2(0);
              } else {

                this.openGalleryDep2();
              }

          });

          },
        },
      ],
    });
    alert.present();
  }


  locationcheckDep3(){
    this.getLatLong();


    if( this.easting === undefined || this.northing === undefined){
        this.getLatLong();
        this.platform.ready().then(() => {

          if (this.platform.is('android')) {
            this.toastSer.presentError('Please Turn on GPS..');

          }else{
            this.toastSer.presentError('Please Enter Easing and Northing');
          }
        });
    }else{
      this.imageSelectionDep3();
    }
  }


  async imageSelectionDep3() {
    this.getLatLong();
    const alert = await this.alertCtrl.create({
      header: 'Choose Type',
      buttons: [
        {
          text: 'Camera',
          handler: (redc) => {

            this.platform.ready().then(() => {
              if (this.platform.is('android')) {
                this.snapDep3();
              } else {

                this.takeSnapDep3();
              }

          });
          },
        },
        {
          text: 'Gallery',
          handler: (redc) => {

            this.platform.ready().then(() => {
              if (this.platform.is('android')) {
                this.takePhotoDep3(0);
              } else {

                this.openGalleryDep3();
              }

          });

          },
        },
      ],
    });
    alert.present();
  }


  locationcheckSamp2(){
    this.getLatLong();


    if( this.easting === undefined || this.northing === undefined){
        this.getLatLong();
        this.platform.ready().then(() => {

          if (this.platform.is('android')) {
            this.toastSer.presentError('Please Turn on GPS..');

          }else{
            this.toastSer.presentError('Please Enter Easing and Northing');
          }
        });
    }else{
      this.imageSelectionsnap2();
    }
  }


  async imageSelectionsnap2() {
    this.getLatLong();
    const alert = await this.alertCtrl.create({
      header: 'Choose Type',
      buttons: [
        {
          text: 'Camera',
          handler: (redc) => {

            this.platform.ready().then(() => {
              if (this.platform.is('android')) {
                this.snapSamp2();
              } else {

                this.takeSnapSamp2();
              }

          });
          },
        },
        {
          text: 'Gallery',
          handler: (redc) => {

            this.platform.ready().then(() => {
              if (this.platform.is('android')) {
                this.takePhotoSamp2(0);
              } else {

                this.openGallerySamp2();
              }

          });

          },
        },
      ],
    });
    alert.present();
  }



  locationcheckSamp3(){
    this.getLatLong();


    if( this.easting === undefined || this.northing === undefined){
        this.getLatLong();
        this.platform.ready().then(() => {

          if (this.platform.is('android')) {
            this.toastSer.presentError('Please Turn on GPS..');

          }else{
            this.toastSer.presentError('Please Enter Easing and Northing');
          }
        });
    }else{
      this.imageSelectionsnap3();
    }
  }


  async imageSelectionsnap3() {
    this.getLatLong();
    const alert = await this.alertCtrl.create({
      header: 'Choose Type',
      buttons: [
        {
          text: 'Camera',
          handler: (redc) => {

            this.platform.ready().then(() => {
              if (this.platform.is('android')) {
                this.snapSamp3();
              } else {

                this.takeSnapSamp3();
              }

          });
          },
        },
        {
          text: 'Gallery',
          handler: (redc) => {

            this.platform.ready().then(() => {
              if (this.platform.is('android')) {
                this.takePhotoSamp3(0);
              } else {

                this.openGallerySamp3();
              }

          });

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

skipnow(){
this.router.navigate(['viewlist']);

}




}
