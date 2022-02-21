import { Router } from '@angular/router';
import { Constants } from 'src/app/common/constants';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { AndroidDatabaseService } from './../../database/android-database.service';
import { ToastService } from './../../services/toast.service';
import { Component, OnInit } from '@angular/core';
import { HttpcallsService } from 'src/app/services/httpcalls.service';
import { Platform } from '@ionic/angular';


@Component({
  selector: 'app-boreholeinformation',
  templateUrl: './boreholeinformation.page.html',
  styleUrls: ['./boreholeinformation.page.scss'],
})
export class BoreholeinformationPage implements OnInit {
  boreholeNumber: any;
  boreholeLocation: any;
  boreholeChainage: any;


  rl: any;
  waterTable: any;
  today: any;
  typeOfRig: any;
  typeOfDrill: any;
  circulationFluid: any;
  orientation: any;
  boreholeDia: any;
  boreholeCasingDia: any;
  casingDepth: any;

  typeOfStructure: any;
  ref: any;
  latitude: any;
  longitude: any;
  layer1List: any = [];

  date: any;
  angleWithHorizontal: any;
  isInclined = false;
  bhid: any;
  detailsOfDrillingBit: any;
  detailsOdCoreBarrel: any;
  constructor(public toastSer: ToastService,
    public androidDatabase: AndroidDatabaseService,
    private geolocation: Geolocation,
    public router: Router,
    public httpService: HttpcallsService,
    public platform: Platform
  ) {
    this.ref = 'IS 1892; IS 2131; IS 2132';
   this.date = new Date().toISOString();
   platform.ready().then(() => {
    if (this.platform.is('android')) {
      this.getLayer1LastId();

    }else{


    }


  });

  }

  ngOnInit() {
  }

  getLayer1LastId() {

    this.androidDatabase.getLastId().then((data) => {
      this.layer1List = [];
      console.log('size',data.rows.length);
      if (data.rows.length > 0) {
        for (let i = 0; i < data.rows.length; i++) {
          this.layer1List.push(data.rows.item(i));
        }
        console.log('layer1List',this.layer1List);
        Constants.laYer1Id = this.layer1List[0].Id;


      }
    });
  }

getLocations(){
  this.geolocation.getCurrentPosition().then((resp) => {
    this.latitude= resp.coords.latitude;
    this.longitude= resp.coords.longitude;
   }).catch((error) => {
     console.log('Error getting location', error);
   });
}


  getResopnseWithDates(){}
  rigChange($event){
    console.log($event.target.value);

    this.typeOfRig =$event.target.value;
  }
  drillChange($event){
    console.log($event.target.value);

    this.typeOfDrill =$event.target.value;
  }
  circulationChange($event){
    console.log($event.target.value);

    this.circulationFluid =$event.target.value;
  }
  oriantionChange($event){
    console.log($event.target.value);

    this.orientation =$event.target.value;
    if(this.orientation === 'Inclined'){
      this.isInclined = true;
    }else{
      this.isInclined = false;
      this.angleWithHorizontal = '';
    }
  }

  validation(){
    if(this.typeOfStructure === undefined){
      this.toastSer.presentError('Please Enter Type of Structure');
    }else if(this.boreholeNumber === undefined){
      this.toastSer.presentError('Please Enter Borehole Number');

    }else if(this.boreholeLocation === undefined ){
      this.toastSer.presentError('Please Enter Borehole Location');

    }else if(this.latitude === undefined ){
      this.toastSer.presentError('Please Enter Latitude');

    }else if(this.longitude === undefined ){
      this.toastSer.presentError('Please Enter longitude');

    }else if(this.boreholeChainage === undefined ){
      this.toastSer.presentError('Please Enter Borehole Chainage');

    }
    else if(this.date === undefined ){
      this.toastSer.presentError('Please Enter Borehole Start Date');

    }else if(this.rl === undefined ){
      this.toastSer.presentError('Please Enter Borehole RL (m)');

    }else if(this.waterTable === undefined ){
      this.toastSer.presentError('Please Enter Water Table RL (m)');

    }else if(this.typeOfRig === undefined ){
      this.toastSer.presentError('Please Select Type of Rig');

    }else if(this.typeOfDrill === undefined ){
      this.toastSer.presentError('Please Select Type of Drilling');

    }else if(this.circulationFluid === undefined ){
      this.toastSer.presentError('Please Select Circulation Fluid');

    }else if(this.orientation === undefined ){
      this.toastSer.presentError('Please Select Drilling Orientation');

    }else if(this.boreholeCasingDia === undefined ){
      this.toastSer.presentError('Please Enter Casing Dia');

    }else if(this.casingDepth === undefined ){
      this.toastSer.presentError('Please Enter Casing Depth');

    }else if( this.detailsOfDrillingBit === undefined){
      this.toastSer.presentError('Please Select the Details of Drilling Bit');
     }else if( this.detailsOdCoreBarrel === undefined){
      this.toastSer.presentError('Please Select the Details of Core Barrel');
     }else if(this.typeOfStructure === ''){
      this.toastSer.presentError('Please Enter Type of Structure');
    }else if(this.boreholeNumber === ''){
      this.toastSer.presentError('Please Enter Borehole Number');

    }else if(this.boreholeLocation === '' ){
      this.toastSer.presentError('Please Enter Borehole Location');

    }else if(this.latitude === '' ){
      this.toastSer.presentError('Please Enter Latitude');

    }else if(this.longitude === '' ){
      this.toastSer.presentError('Please Enter longitude');

    }else if(this.boreholeChainage === '' ){
      this.toastSer.presentError('Please Enter Borehole Chainage');

    }
    else if(this.date === '' ){
      this.toastSer.presentError('Please Enter Borehole Start Date');

    }else if(this.rl === '' ){
      this.toastSer.presentError('Please Enter Borehole RL (m)');

    }else if(this.waterTable === '' ){
      this.toastSer.presentError('Please Enter Water Table RL (m)');

    }else if(this.typeOfRig === '' ){
      this.toastSer.presentError('Please Select Type of Rig');

    }else if(this.typeOfDrill === '' ){
      this.toastSer.presentError('Please Select Type of Drilling');

    }else if(this.circulationFluid === '' ){
      this.toastSer.presentError('Please Select Circulation Fluid');

    }else if(this.orientation === '' ){
      this.toastSer.presentError('Please Select Drilling Orientation');

    }else if(this.boreholeCasingDia === '' ){
      this.toastSer.presentError('Please Enter Casing Dia');

    }else if(this.casingDepth === '' ){
      this.toastSer.presentError('Please Enter Casing Depth');

    }else if( this.detailsOfDrillingBit === ''){
      this.toastSer.presentError('Please Select the Details of Drilling Bit');
     }else if( this.detailsOdCoreBarrel === ''){
      this.toastSer.presentError('Please Select the Details of Core Barrel');
     }else if(this.typeOfStructure === null){
      this.toastSer.presentError('Please Enter Type of Structure');
    }else if(this.boreholeNumber === null){
      this.toastSer.presentError('Please Enter Borehole Number');

    }else if(this.boreholeLocation === null ){
      this.toastSer.presentError('Please Enter Borehole Location');

    }else if(this.latitude === null ){
      this.toastSer.presentError('Please Enter Latitude');

    }else if(this.longitude === null ){
      this.toastSer.presentError('Please Enter longitude');

    }else if(this.boreholeChainage === null ){
      this.toastSer.presentError('Please Enter Borehole Chainage');

    }
    else if(this.date === null ){
      this.toastSer.presentError('Please Enter Borehole Start Date');

    }else if(this.rl === null ){
      this.toastSer.presentError('Please Enter Borehole RL (m)');

    }else if(this.waterTable === null ){
      this.toastSer.presentError('Please Enter Water Table RL (m)');

    }
    else if(this.rl ===  0 ){
      this.toastSer.presentError('Please EnterProper Borehole RL (m), it should not be zero');

    }else if(this.waterTable === 0 ){
      this.toastSer.presentError('Please Enter Proper Water Table RL it should not be zero (m)');

    }else if(this.typeOfRig === null){
      this.toastSer.presentError('Please Select Type of Rig');

    }else if(this.typeOfDrill === null ){
      this.toastSer.presentError('Please Select Type of Drilling');

    }else if(this.circulationFluid === null ){
      this.toastSer.presentError('Please Select Circulation Fluid');

    }else if(this.orientation === null ){
      this.toastSer.presentError('Please Select Drilling Orientation');

    }else if(this.boreholeCasingDia === null ){
      this.toastSer.presentError('Please Enter Casing Dia');

    }else if(this.casingDepth === null ){
      this.toastSer.presentError('Please Enter Casing Depth');

    }else if( this.detailsOfDrillingBit === null){
      this.toastSer.presentError('Please Select the Details of Drilling Bit');
     }else if( this.detailsOdCoreBarrel === null){
      this.toastSer.presentError('Please Select the Details of Core Barrel');
     }else if( this.orientation === 'Inclined' && this.angleWithHorizontal === ''){
      this.toastSer.presentError('Please enter angle with horizontal');
     }
     else if( this.orientation === 'Inclined' && this.angleWithHorizontal === null){
      this.toastSer.presentError('Please enter angle with horizontal');
     }else if( this.orientation === 'Inclined' && this.angleWithHorizontal === undefined){
      this.toastSer.presentError('Please enter angle with horizontal');
     }
     else{
      this.adding();
    }
  }

  addDatabase(){
    this.androidDatabase.updateLayer2(this.ref,this.typeOfStructure,this.boreholeNumber,
      this.boreholeLocation,this.boreholeChainage,this.latitude,this.longitude,this.date,
      this.rl,this.waterTable,this.typeOfRig,this.typeOfDrill,this.circulationFluid,
      this.orientation,this.boreholeDia,this.boreholeCasingDia,this.casingDepth,Constants.laYer1Id,
      this.detailsOfDrillingBit,this.detailsOdCoreBarrel,this.angleWithHorizontal);
      //this.router.navigate(['logginginformation']);
      this.getLayer1();

  }
  submitWeb(){
    this.httpService.submitLayer2(Constants.webbhid,2,this.typeOfStructure,this.boreholeNumber,
      this.boreholeLocation,this.boreholeChainage,this.latitude,this.longitude,this.date,
      this.rl,this.waterTable,this.typeOfRig,this.typeOfDrill,this.circulationFluid,
      this.orientation,this.boreholeDia,this.boreholeCasingDia,this.casingDepth,
      this.detailsOfDrillingBit,this.detailsOdCoreBarrel,this.angleWithHorizontal).subscribe((response: any)=>{
       console.log('response',response);
       if(response.error === true){
        this.toastSer.presentError(response.msg);
      }else{

       this.toastSer.presentSuccess(response.msg);
     //  this.router.navigate(['logginginformation']);
     this.getWebData();
      }

      });

  }
  detailDrillinBitChange($event){
    this.detailsOfDrillingBit = $event.target.value;
    console.log($event.target.value);

  }
  detailOfCoreBarrel($event){
    this.detailsOdCoreBarrel= $event.target.value;
    console.log($event.target.value);

  }
  moveToNext(){
   this.router.navigate(['logginginformation']);
  }
  adding(){
    this. platform.ready().then(() => {
       if (this.platform.is('android')) {
       this.addDatabase();

       }else{
       //  this.addDatabase();

        this.submitWeb();
       }


   });
  }

  getWebData(){
    this.layer1List = [];

     this.httpService.getBoredetails(Constants.webbhid).subscribe((response: any)=>{
      this.layer1List = response.data;
      console.log('list',this.layer1List);
      if(this.layer1List[0].drill_depth_from === ''){
        this.router.navigate(['logginginformation']);
        }else{
         this.router.navigate(['web3']);

        }


     });
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
        if(this.layer1List[0].drill_depth_from === ''){
          this.router.navigate(['logginginformation']);
          }else{
           this.router.navigate(['web3']);

          }


      }
    });
  }

}
