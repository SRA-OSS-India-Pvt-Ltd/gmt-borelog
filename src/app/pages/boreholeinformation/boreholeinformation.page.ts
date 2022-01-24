import { formatDate } from '@angular/common';
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
  boreholeStartDate: any;
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
  startDate: any;
  constructor() {
    this.boreholeStartDate = new Date().toISOString();
    console.log('date',this.boreholeStartDate);
 }

  ngOnInit() {
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




}
