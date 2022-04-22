import { HttpcallsService } from 'src/app/services/httpcalls.service';

import { Constants } from 'src/app/common/constants';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { ToastService } from 'src/app/services/toast.service';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';

@Component({
  selector: 'app-nonedit2',
  templateUrl: './nonedit2.page.html',
  styleUrls: ['./nonedit2.page.scss'],
})
export class Nonedit2Page implements OnInit {
  @ViewChild('previewimage') waterMarkImage: ElementRef;
  easting: any;
  northing: any;
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

  typeOfCrossing: any;
  typeOfBridge: any;
  layer1List: any = [];
  chaingeList: any;
  selectedItem: any;
  isCasingDiaOther = false;
  isbhOther = false;

  date: any;
  casingDiaOther: any;
  bhdiaOther: any;
  isInclined = false;
  angleWithHorizontal: any;
  isDrillOther = false;
  isRigOther = false;

  constructor(public toastSer: ToastService,
    private geolocation: Geolocation,
    public router: Router,
    public httpService: HttpcallsService) {
      this.ref = 'IS 1892; IS 2131; IS 2132';
      this.date = new Date().toISOString();
      this.getLayer1();
    }

  ngOnInit() {
  }

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
          this.angleWithHorizontal = this.layer1List[0].angle_horizontal;
           if(this.layer1List[0].drill_orientation === 'Inclined'){
            this.isInclined = true;
          }else{
            this.isInclined = false;
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

          this.waterMarkImage.nativeElement.src= this.layer1List[0].borehole_pic;
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







  getResopnseWithDates(){}
  rigChange($event){
    console.log($event.target.value);

    this.typeOfRig =$event.target.value;
  }


  oriantionChange($event){
    console.log($event.target.value);

    this.orientation =$event.target.value;
  }

  gettingData(){

    this.getLayer1();


  }


  onClick(){

       this.router.navigate(['nonediiterations']);

   }

}
