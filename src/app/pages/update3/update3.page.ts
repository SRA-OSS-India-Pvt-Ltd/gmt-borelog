import { Constants } from 'src/app/common/constants';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AndroidDatabaseService } from 'src/app/database/android-database.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-update3',
  templateUrl: './update3.page.html',
  styleUrls: ['./update3.page.scss'],
})
export class Update3Page implements OnInit {
  drillingFrom: any;
  drillingTo: any;
  typeOfstrata: any;
  typeOfsample: any;
  isdsDepth = false;
  dsDepthFrom: any;
  dsDepthTo: any;
  isSPTDepth = false;
  sptDepthFrom: any;
  sptDepthTo: any;
  first: any;
  second: any;
  third: any;
  total: any;
  firstB: any;
  secondB: any;
  thirdB: any;
  totalB: any;
  isUDSepth = false;
  udsDepthFrom: any;
  udsDepthTo: any;
  soilSampleColor: any;
typeOfSoil: any;
isCohessive = false;
densityConsistace: any;
isCohesion = false;
visualClassification: any;
rockSample: any;
runLength: any;
runTime: any;
waterLoss: any;
allRockPiecesLenth: any;
rockPicesLengthgrze: any;
cr: any;
rqd: any;
typeOfWeathering: any;
rockSamplColor: any;
typeOfRock: any;
layer1List: any =[];
isRock = false;
rockDepthTo: any;
rockDepthFrom: any;
isSoil = false;

  constructor(public toastSer: ToastService,
    public androidDatabase: AndroidDatabaseService,
    public router: Router) {
      this.getLayer1();
    }

  ngOnInit() {
  }
  strataChange($event){
    this.typeOfstrata= $event.target.value;
    console.log($event.target.value);
    if(this.typeOfstrata === 'Soil'){
    this.isSoil = true;
    this.isRock = false;
    }else if(this.typeOfstrata === 'Rock'){
      this.isSoil = false;
      this.isRock = true;

    }
    }

    sampleChange($event){
      this.typeOfsample= $event.target.value;
      console.log($event.target.value);
      if(this.typeOfsample === 'DS'){
        this.isdsDepth = true;
        this.isSPTDepth = false;
        this.isUDSepth = false;
      }else if(this.typeOfsample === 'SPT'){
        this.isdsDepth = false;
        this.isSPTDepth = true;
        this.isUDSepth = false;

      }else if(this.typeOfsample === 'UDS'){
        this.isdsDepth = false;
        this.isSPTDepth = false;
        this.isUDSepth = true;

      }

    }
    typeOfSoilChange($event){
     this.typeOfSoil = $event.target.value;
     console.log($event.target.value);
     if(this.typeOfSoil === 'Cohesive'){
       this.isCohessive = true;
       this.isCohesion = false;

     }else{
       this.isCohesion = true;
       this.isCohessive = false;

     }
    }
    densityConsiChange($event){
     this.densityConsiChange =$event.target.value;
     console.log($event.target.value);
    }
    densityConsiChange1($event){
      this.densityConsiChange =$event.target.value;
      console.log($event.target.value);
     }
     visualChange($event){
       this.visualClassification = $event.target.value;
       console.log($event.target.value);

     }
     rockSamplechange($event){
       this.rockSample =$event.target.value;
       console.log($event.target.value);

     }
     crCaliculation(){
       if(this.allRockPiecesLenth !== undefined && this.runLength !== undefined){
       this.cr= this.allRockPiecesLenth/this.runLength;
       }
       if(this.rockPicesLengthgrze !== undefined && this.runLength !== undefined){
        this.rqd= this.rockPicesLengthgrze/this.runLength;
        }

     }
     weatheringChange($event){
       this.typeOfWeathering = $event.target.value;
       console.log($event.target.value);

     }
     totalCount(){
      if(this.second !== undefined && this.third !== undefined){
        this.total = this.second + this.third;
      }
    }
    totalCountB(){
      if(this.secondB !== undefined && this.thirdB !== undefined){
        this.totalB = this.secondB + this.thirdB;
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

           this.drillingFrom = this.layer1List[0].drill_depth_from;
           this.drillingTo = this.layer1List[0].drill_depth_to;
           this.typeOfstrata = this.layer1List[0].type_of_strata;
           this.typeOfsample = this.layer1List[0].type_of_sample;
           this.dsDepthFrom = this.layer1List[0].soil_ds_depth_from;
           this.dsDepthTo = this.layer1List[0].soil_ds_depth_to;
           this.sptDepthFrom = this.layer1List[0].soil_spt_depth_from;
           this.sptDepthTo = this.layer1List[0].soil_spt_depth_to;
           this.udsDepthFrom = this.layer1List[0].soil_uds_depth_from;
           this.udsDepthTo = this.layer1List[0].soil_uds_depth_to;
           this.soilSampleColor = this.layer1List[0].soil_sample_color;
           this.typeOfSoil = this.layer1List[0].soil_type;
           this.densityConsiChange = this.layer1List[0].soil_density;
           this.visualClassification = this.layer1List[0].soil_visual_classif;
           this.rockSample = this.layer1List[0].rock_sample_type;
           this.runLength = this.layer1List[0].rock_run_length;
           this.runTime = this.layer1List[0].rock_run_time;
           this.waterLoss = this.layer1List[0].rock_water_loss;
           this.allRockPiecesLenth = this.layer1List[0].rock_pieces_length;
           this.rockPicesLengthgrze = this.layer1List[0].rock_pieces_10;
           this.cr = this.layer1List[0].rock_cr;
           this.rqd = this.layer1List[0].rock_rqd;
           this.rockSamplColor = this.layer1List[0].rock_sample_color;
           this.typeOfWeathering = this.layer1List[0].rock_weathering;
           this.typeOfRock = this.layer1List[0].rock_type;
           this.first = this.layer1List[0].first;
           this.second = this.layer1List[0].second;
           this.third = this.layer1List[0].third;
           this.total = this.layer1List[0].total;
           this.firstB = this.layer1List[0].firstB;
           this.secondB = this.layer1List[0].secondB;
           this.thirdB = this.layer1List[0].thirdB;
           this.totalB = this.layer1List[0].totalB;
           this.rockDepthFrom = this.layer1List[0].rock_depth_from;
           this.rockDepthTo = this.layer1List[0].rock_depth_to;

          }

        }
      });
    }
    updateLayer3(){
      this.androidDatabase.updateLayer3(this.drillingFrom,this.drillingTo,this.typeOfstrata,
        this.typeOfsample,this.dsDepthFrom,this.dsDepthTo,this.sptDepthFrom,this.sptDepthTo,
        this.udsDepthFrom,this.udsDepthTo,this.soilSampleColor,this.typeOfSoil,this.densityConsiChange,
        this.visualClassification,
        this.rockSample, this.runLength,this.runTime,this.waterLoss,this.allRockPiecesLenth,
        this.rockPicesLengthgrze,this.cr,this.rqd,this.rockSamplColor,
        this.typeOfWeathering,this.typeOfRock,Constants.laYer1Id,this.first,
        this.second,this.third,this.total,this.firstB,this.secondB,this.thirdB,this.totalB,this.rockDepthFrom,
        this.rockDepthTo);
        }


}
