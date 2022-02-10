import { HttpcallsService } from 'src/app/services/httpcalls.service';
import { Platform } from '@ionic/angular';
import { Constants } from 'src/app/common/constants';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ToastService } from 'src/app/services/toast.service';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';

@Component({
  selector: 'app-web2',
  templateUrl: './web2.page.html',
  styleUrls: ['./web2.page.scss'],
})
export class Web2Page implements OnInit {
  boreholeNumber: any;
  boreholeLocation: any;
  boreholeChainage: any;
  detailsOfDrillingBit: any;
  detailsOdCoreBarrel: any;
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

  constructor(public toastSer: ToastService,
    private geolocation: Geolocation,
    public router: Router,
    public platform: Platform,
    public httpService: HttpcallsService) {
      this.ref = 'IS 1892; IS 2131; IS 2132';
      this.date = new Date().toISOString();
      this.getLayer1();
    }

  ngOnInit() {
  }

  getLayer1() {
    this.layer1List = [];
this.httpService.getBoredetails(Constants.webbhid).subscribe((response: any)=>{
 this.layer1List = response.data;


        console.log('layer1List',this.layer1List);
        if(this.layer1List.length>0){

         this.typeOfStructure = this.layer1List[0].struct_type;
         this.boreholeNumber = this.layer1List[0].bh_no;
         this.boreholeLocation = this.layer1List[0].bh_location;
         this.latitude = this.layer1List[0].bh_lat;
         this.longitude = this.layer1List[0].bh_lon;
         this.boreholeChainage = this.layer1List[0].bh_chainage;
         this.date = this.layer1List[0].bh_start_date;
         this.rl = this.layer1List[0].bh_rl;
         this.waterTable = this.layer1List[0].water_table_rl;
         this.typeOfRig = this.layer1List[0].type_of_rig;
         this.typeOfDrill = this.layer1List[0].type_of_drilling;
         this.circulationFluid = this.layer1List[0].circulation_fluid;
         this.orientation = this.layer1List[0].drill_orientation;
         this.boreholeDia = this.layer1List[0].bh_dia;
         this.boreholeCasingDia = this.layer1List[0].casing_dia;
         this.casingDepth = this.layer1List[0].casing_depth;
         this.detailsOfDrillingBit = this.layer1List[0].drilling_bit;
         this.detailsOdCoreBarrel = this.layer1List[0].core_barrel;


        }

    });
  }

  detailDrillinBitChange($event){
    this.detailDrillinBitChange = $event.target.value;
    console.log($event.target.value);

  }
  detailOfCoreBarrel($event){
    this.detailsOdCoreBarrel= $event.target.value;
    console.log($event.target.value);

  }

  updateLayer2(){

      this.httpService.submitLayer2(Constants.webbhid,2,this.typeOfStructure,this.boreholeNumber,
        this.boreholeLocation,this.boreholeChainage,this.latitude,this.longitude,this.date,
        this.rl,this.waterTable,this.typeOfRig,this.typeOfDrill,this.circulationFluid,
        this.orientation,this.boreholeDia,this.boreholeCasingDia,this.casingDepth,
        this.detailsOfDrillingBit,this.detailsOdCoreBarrel).subscribe((response: any)=>{
         console.log('response',response);
         this.toastSer.presentSuccess(response.msg);
         if(this.layer1List[0].drill_depth_from === ''){
         this.router.navigate(['logginginformation']);
         }else{
          this.router.navigate(['web3']);

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
   onClick(){
    if(this.layer1List[0].drill_depth_from === ''){
      this.router.navigate(['logginginformation']);
      }else{
       this.router.navigate(['web3']);

      }

   }

}