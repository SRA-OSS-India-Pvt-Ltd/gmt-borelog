import { Router } from '@angular/router';
import { Constants } from 'src/app/common/constants';
import { AndroidDatabaseService } from './../../database/android-database.service';
import { ToastService } from './../../services/toast.service';
import { Component, OnInit } from '@angular/core';

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
detailsOfDrillingBit: any;
detailsOdCoreBarrel: any;
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
  constructor(public toastSer: ToastService,
    public androidDatabase: AndroidDatabaseService,
    public router: Router) {
      this.getLayer1LastId();
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

  strataChange($event){
  this.typeOfstrata= $event.target.value;
  console.log($event.target.value);
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
   detailDrillinBitChange($event){
     this.detailDrillinBitChange = $event.target.value;
     console.log($event.target.value);

   }
   detailOfCoreBarrel($event){
     this.detailsOdCoreBarrel= $event.target.value;
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
   validation(){
     if(this.drillingFrom === undefined){
       this.toastSer.presentError('Please Give the Drilling From');
     }else if(this.drillingTo === undefined){
      this.toastSer.presentError('Please Give the Drilling To');

     }else if(this.typeOfstrata === undefined){
      this.toastSer.presentError('Please Give the Type of Strata');

     }else if(this.typeOfsample === undefined){
      this.toastSer.presentError('Please Give the Type of Sample');

     }else if(this.typeOfsample === 'DS' && this.dsDepthFrom === undefined){
      this.toastSer.presentError('Please Give the Ds Depth From');

     }else if(this.typeOfsample === 'DS' && this.dsDepthTo === undefined){
      this.toastSer.presentError('Please Give the Ds Depth To');

     }else if(this.typeOfsample === 'SPT' && this.sptDepthFrom === undefined){
      this.toastSer.presentError('Please Give the SPT Depth From');

     }else if(this.typeOfsample === 'SPT' && this.sptDepthTo === undefined){
      this.toastSer.presentError('Please Give the SPT Depth To');

     }else if(this.typeOfsample === 'SPT' && this.first === undefined){
      this.toastSer.presentError('Please Give the Penetration From First');

     }else if(this.typeOfsample === 'SPT' && this.second === undefined){
      this.toastSer.presentError('Please Give the Penetration From Second');

     }else if(this.typeOfsample === 'SPT' && this.third === undefined){
      this.toastSer.presentError('Please Give the Penetration From Third');

     }else if(this.typeOfsample === 'SPT' && this.firstB === undefined){
      this.toastSer.presentError('Please Give the Blows - N From First');

     }else if(this.typeOfsample === 'SPT' && this.secondB === undefined){
      this.toastSer.presentError('Please Give the Blows - N From Second');

     }else if(this.typeOfsample === 'SPT' && this.thirdB === undefined){
      this.toastSer.presentError('Please Give the Blows - N From Third');

     }else if(this.typeOfsample === 'UDS' && this.udsDepthFrom === undefined){
      this.toastSer.presentError('Please Give the UDS Depth From');

     }else if(this.typeOfsample === 'UDS' && this.udsDepthTo === undefined){
      this.toastSer.presentError('Please Give the UDS Depth To');

     }else if(this.soilSampleColor === undefined){
      this.toastSer.presentError('Please Give  the Soil Sample Color');

     }else if(this.typeOfSoil === undefined){
      this.toastSer.presentError('Please Select  the Type Of soil');

     }else if( this.densityConsiChange === undefined){
      this.toastSer.presentError('Please Give the Density / Consistency');

     }else if( this.visualClassification === undefined){
      this.toastSer.presentError('Please Give the Visual Classification of Sample');

     }else if( this.detailDrillinBitChange === undefined){
      this.toastSer.presentError('Please Give the Details of Drilling Bit*');

     }else if( this.detailsOdCoreBarrel === undefined){
      this.toastSer.presentError('Please Give the Details of Core Barrel');

     }else if( this.rockSample === undefined){
      this.toastSer.presentError('Please Give the Type of Sample (If Rock)');

     }else if( this.runLength === undefined){
      this.toastSer.presentError('Please Give the Run Length');

     }else if( this.runTime === undefined){
      this.toastSer.presentError('Please Give the Run Time');

     }else if( this.waterLoss === undefined){
      this.toastSer.presentError('Please Give the Water Loss');

     }else if( this.allRockPiecesLenth === undefined){
      this.toastSer.presentError('Please Give the All Rock Pieces lengths');

     }else if( this.rockPicesLengthgrze === undefined){
      this.toastSer.presentError('Please Give the Rock Pieces length >10 cm');

     }else if( this.rockSamplColor === undefined){
      this.toastSer.presentError('Please Give the Rock Sample Color');

     }else if( this.typeOfWeathering === undefined){
      this.toastSer.presentError('Please Give the Type of Weathering');

     }else if( this.typeOfWeathering === undefined){
      this.toastSer.presentError('Please Give the Type of Weathering');

     }else if( this.typeOfRock === undefined){
      this.toastSer.presentError('Please Give the Type of Weathering');

     }else{
      this.addDatabse();
    }


 }

 addDatabse(){
   this.androidDatabase.updateLayer3(this.drillingFrom,this.drillingTo,this.typeOfstrata,
    this.typeOfsample,this.dsDepthFrom,this.dsDepthTo,this.sptDepthFrom,this.sptDepthTo,
    this.udsDepthFrom,this.udsDepthTo,this.soilSampleColor,this.typeOfSoil,this.densityConsiChange,
    this.visualClassification,this.detailDrillinBitChange,this.detailsOdCoreBarrel,
    this.rockSample, this.runLength,this.runTime,this.waterLoss,this.allRockPiecesLenth,
    this.rockPicesLengthgrze,this.cr,this.rqd,this.rockSamplColor,
    this.typeOfWeathering,this.typeOfRock,Constants.laYer1Id,this.first,
    this.second,this.third,this.total,this.firstB,this.secondB,this.thirdB,this.totalB);

    this.router.navigate(['viewlist']);
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

}
