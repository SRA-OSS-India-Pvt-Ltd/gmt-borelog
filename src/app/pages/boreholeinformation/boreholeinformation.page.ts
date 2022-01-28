import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';



import { AndroidDatabaseService } from './../../database/android-database.service';
import { ToastService } from './../../services/toast.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boreholeinformation',
  templateUrl: './boreholeinformation.page.html',
  styleUrls: ['./boreholeinformation.page.scss'],
})
export class BoreholeinformationPage implements OnInit {
  boreholeNumber: any;
  boreholeLocation: any;
  boreholeChainage: any;
  boreholeCoordinates: any;

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

  date: any;
  constructor(public toastSer: ToastService,
    public androidDatabase: AndroidDatabaseService,
    private geolocation: Geolocation) {
    this.ref = 'IS 1892; IS 2131; IS 2132';
   this.date = new Date().toISOString();

  }

  ngOnInit() {
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
  }

  validation(){
    if(this.typeOfStructure === undefined){
      this.toastSer.presentError('Please Enter Type of Structure');
    }else if(this.boreholeNumber === undefined){
      this.toastSer.presentError('Please Enter Borehole Number');

    }else if(this.boreholeLocation === undefined ){
      this.toastSer.presentError('Please Enter Borehole Number');

    }else if(this.boreholeChainage === undefined ){
      this.toastSer.presentError('Please Enter Borehole Chainage');

    }else if(this.boreholeCoordinates === undefined ){
      this.toastSer.presentError('Please Enter Borehole Coordinates');

    }else if(this.date === undefined ){
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
      this.toastSer.presentError('Please Select Casing Dia');

    }else if(this.casingDepth === undefined ){
      this.toastSer.presentError('Please Select Casing Depth');

    }else{
      this.addDatabase();
    }
  }

  addDatabase(){
    this.androidDatabase.addBoreLogData('','','','',this.ref,this.typeOfStructure,this.boreholeNumber,
    this.boreholeLocation,this.boreholeChainage,this.circulationChange,this.boreholeNumber,this.date,this.rl,
    this.waterTable,this.typeOfRig,this.typeOfDrill,this.circulationFluid,this.drillChange,this.boreholeDia,
    this.boreholeCasingDia,this.casingDepth,'','','','','','','','','','','','','','','','','','','','','','',
    '','','','','','','','','','','','','','','','','',);
  }

}
