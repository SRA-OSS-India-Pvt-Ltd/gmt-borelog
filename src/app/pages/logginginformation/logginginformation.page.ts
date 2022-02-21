/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable radix */
import { Router } from '@angular/router';
import { Constants } from 'src/app/common/constants';
import { AndroidDatabaseService } from './../../database/android-database.service';
import { ToastService } from './../../services/toast.service';
import { Component, OnInit } from '@angular/core';
import { HttpcallsService } from 'src/app/services/httpcalls.service';
import { Platform } from '@ionic/angular';


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
isSoil = false;
isRock = false;
one = false;
two = false;
three = false;
four = false;
oneB = false;
twoB = false;
threeB = false;
fourB = false;
bhid: any;
rockDepthTo: any;
rockDepthFrom: any;
sptstatus: any;

  constructor(public toastSer: ToastService,
    public androidDatabase: AndroidDatabaseService,
    public router: Router,
    public httpService: HttpcallsService,
    public platform: Platform
) {
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

  strataChange($event){
  this.typeOfstrata= $event.target.value;
  console.log($event.target.value);
  if(this.typeOfstrata === 'Soil'){
  this.isSoil = true;
  this.isRock = false;
  this.rockDepthFrom = '',
  this.rockDepthTo = '';
  this.rockSample = '';
  this.runLength = '';
  this.runTime = '';
  this.waterLoss = '';
  this.allRockPiecesLenth = '';
  this.rockPicesLengthgrze = '';
  this.rockSamplColor = '';
  this.typeOfWeathering = '';
  this.typeOfRock = '';
  this.cr='';
  this.rqd = '';


  }else if(this.typeOfstrata === 'Rock'){
    this.isSoil = false;
    this.isRock = true;
    this.isSPTDepth = false;
    this.isUDSepth = false;
    this.isdsDepth = false;
    this.typeOfsample = '';
    this.soilSampleColor = '';
    this.typeOfSoil = '';
    this.densityConsistace = '';
    this.visualClassification = '';

    this.dsDepthFrom = '';
    this.dsDepthTo = '';
    this.sptDepthFrom = '';
    this.sptDepthTo = '';
    this.udsDepthFrom = '';
    this.udsDepthTo = '';
    this.first = '';
    this.second = '';
    this.third = '';
    this.total = '';
    this.firstB = '';
    this.secondB = '';
    this.thirdB = '';
    this.totalB = '';
    this.isCohesion = false;
    this.isCohessive = false;





  }
  }
  sampleChange($event){
    this.typeOfsample= $event.target.value;
    console.log($event.target.value);
    if(this.typeOfsample === 'DS'){
      this.isdsDepth = true;
      this.isSPTDepth = false;
      this.isUDSepth = false;
      this.first = '';
      this.second = '';
      this.third = '';
      this.total = '';
      this.firstB = '';
      this.secondB = '';
      this.thirdB = '';
      this.totalB = '';
      this.sptDepthFrom = '';
      this.sptDepthTo = '';
      this.udsDepthFrom = '';
      this.udsDepthTo = '';

    }else if(this.typeOfsample === 'SPT'){
      this.isdsDepth = false;
      this.isSPTDepth = true;
      this.isUDSepth = false;
      this.dsDepthFrom = '';
      this.dsDepthTo = '';
      this.udsDepthFrom = '';
      this.udsDepthTo = '';


    }else if(this.typeOfsample === 'UDS'){
      this.isdsDepth = false;
      this.isSPTDepth = false;
      this.isUDSepth = true;
      this.dsDepthFrom = '';
      this.dsDepthTo = '';
      this.first = '';
      this.second = '';
      this.third = '';
      this.total = '';
      this.firstB = '';
      this.secondB = '';
      this.thirdB = '';
      this.totalB = '';
      this.sptDepthFrom = '';
      this.sptDepthTo = '';


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
   this.densityConsistace =$event.target.value;
   console.log($event.target.value);
  }
  densityConsiChange1($event){
    this.densityConsistace =$event.target.value;
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
    if(this.allRockPiecesLenth !== undefined && this.runLength !== undefined &&
     this.allRockPiecesLenth !== 0 && this.runLength !== 0){
    this.cr= this.allRockPiecesLenth/this.runLength;
    }
    if(this.rockPicesLengthgrze !== undefined && this.runLength !== undefined &&
     this.rockPicesLengthgrze !== 0 && this.runLength !== 0){
     this.rqd= this.rockPicesLengthgrze/this.runLength;
     }

  }
 weatheringChange($event){
     this.typeOfWeathering = $event.target.value;
     console.log($event.target.value);

   }
   validation(){
     if(this.drillingFrom === undefined){
       this.toastSer.presentError('Please Enter  Drilling From');
     }else if(this.drillingTo === undefined){
      this.toastSer.presentError('Please Enter  Drilling To');

     }else if(this.typeOfstrata === undefined){
      this.toastSer.presentError('Please Select  Type of Strata');
     }else if(this.drillingFrom === ''){
      this.toastSer.presentError('Please Enter  Drilling From');
    }else if(this.drillingTo === ''){
     this.toastSer.presentError('Please Enter  Drilling To');

    }else if(this.typeOfstrata === ''){
     this.toastSer.presentError('Please Select  Type of Strata');


     }else if(this.drillingFrom === null){
      this.toastSer.presentError('Please Enter  Drilling From');
    }else if(this.drillingTo === null){
     this.toastSer.presentError('Please Enter  Drilling To');

    }else if(this.typeOfstrata === null){
     this.toastSer.presentError('Please Select  Type of Strata');

    }else if(this.drillingFrom === 0){
      this.toastSer.presentError('Please Enter  Drilling From, It should not  Zero');
    }else if(this.drillingTo === 0){
     this.toastSer.presentError('Please Enter  Drilling To,It should not  Zero');

    }
    else if(this.typeOfstrata === 'Soil'){

       if(this.typeOfsample === undefined){
        this.toastSer.presentError('Please Select  Type of Sample');

       }else if(this.typeOfsample === 'DS' && this.dsDepthFrom === undefined){
        this.toastSer.presentError('Please Enter  Ds Depth From');

       }else if(this.typeOfsample === 'DS' && this.dsDepthTo === undefined){
        this.toastSer.presentError('Please Enter  Ds Depth To');

       }else if(this.typeOfsample === 'SPT' && this.sptDepthFrom === undefined){
        this.toastSer.presentError('Please Enter  SPT Depth From');

       }else if(this.typeOfsample === 'SPT' && this.sptDepthTo === undefined){
        this.toastSer.presentError('Please Enter  SPT Depth To');

       }else if(this.typeOfsample === 'SPT' && this.first === undefined){
        this.toastSer.presentError('Please Enter  Penetration From First');
       }else if(this.typeOfsample === 'SPT' && this.second === undefined){
        this.toastSer.presentError('Please Enter  Penetration From Second');
       }else if(this.typeOfsample === 'SPT' && this.third === undefined){
        this.toastSer.presentError('Please Enter  Penetration From Third');

       }else if(this.typeOfsample === 'SPT' && this.firstB === undefined){
        this.toastSer.presentError('Please Enter  Blows - N From First');

       }else if(this.typeOfsample === 'SPT' && this.secondB === undefined){
        this.toastSer.presentError('Please Enter  Blows - N From Second');

       }else if(this.typeOfsample === 'SPT' && this.thirdB === undefined){
        this.toastSer.presentError('Please Enter  Blows - N From Third');

       }else if(this.typeOfsample === 'UDS' && this.udsDepthFrom === undefined){
        this.toastSer.presentError('Please Enter  UDS Depth From');

       }else if(this.typeOfsample === 'UDS' && this.udsDepthTo === undefined){
        this.toastSer.presentError('Please Enter  UDS Depth To');
      }else if(this.soilSampleColor === undefined){
        this.toastSer.presentError('Please Enter   Soil Sample Color');

       }else if(this.typeOfSoil === undefined){
        this.toastSer.presentError('Please Enter   Type Of soil');

       }else if( this.densityConsistace === undefined){
        this.toastSer.presentError('Please Enter  Density / Consistency');
       }else if( this.visualClassification === undefined){
        this.toastSer.presentError('Please Enter  Visual Classification of Sample');
       }
       else if(this.typeOfsample === ''){
        this.toastSer.presentError('Please Select  Type of Sample');

       }else if(this.typeOfsample === 'DS' && this.dsDepthFrom === ''){
        this.toastSer.presentError('Please Enter  Ds Depth From');

       }else if(this.typeOfsample === 'DS' && this.dsDepthTo === ''){
        this.toastSer.presentError('Please Enter  Ds Depth To');

       }else if(this.typeOfsample === 'SPT' && this.sptDepthFrom === ''){
        this.toastSer.presentError('Please Enter  SPT Depth From');

       }else if(this.typeOfsample === 'SPT' && this.sptDepthTo === ''){
        this.toastSer.presentError('Please Enter  SPT Depth To');

       }else if(this.typeOfsample === 'SPT' && this.first === ''){
        this.toastSer.presentError('Please Enter  Penetration From First');
       }else if(this.typeOfsample === 'SPT' && this.second === ''){
        this.toastSer.presentError('Please Enter  Penetration From Second');
       }else if(this.typeOfsample === 'SPT' && this.third === ''){
        this.toastSer.presentError('Please Enter  Penetration From Third');

       }else if(this.typeOfsample === 'SPT' && this.firstB === ''){
        this.toastSer.presentError('Please Enter  Blows - N From First');

       }else if(this.typeOfsample === 'SPT' && this.secondB === ''){
        this.toastSer.presentError('Please Enter  Blows - N From Second');

       }else if(this.typeOfsample === 'SPT' && this.thirdB === ''){
        this.toastSer.presentError('Please Enter  Blows - N From Third');

       }else if(this.typeOfsample === 'UDS' && this.udsDepthFrom === ''){
        this.toastSer.presentError('Please Enter  UDS Depth From');

       }else if(this.typeOfsample === 'UDS' && this.udsDepthTo === ''){
        this.toastSer.presentError('Please Enter  UDS Depth To');
         }else if(this.soilSampleColor === ''){
        this.toastSer.presentError('Please Enter   Soil Sample Color');

       }else if(this.typeOfSoil === ''){
        this.toastSer.presentError('Please Select   Type Of soil');

       }else if( this.densityConsistace === ''){
        this.toastSer.presentError('Please Enter  Density / Consistency');
       }else if( this.visualClassification === ''){
        this.toastSer.presentError('Please Enter  Visual Classification of Sample');
       }
       else if(this.typeOfsample === null){
        this.toastSer.presentError('Please Select  Type of Sample');

       }else if(this.typeOfsample === 'DS' && this.dsDepthFrom === null){
        this.toastSer.presentError('Please Enter  Ds Depth From');

       }else if(this.typeOfsample === 'DS' && this.dsDepthTo === null){
        this.toastSer.presentError('Please Enter  Ds Depth To');

       }else if(this.typeOfsample === 'SPT' && this.sptDepthFrom === null){
        this.toastSer.presentError('Please Enter  SPT Depth From');

       }else if(this.typeOfsample === 'SPT' && this.sptDepthTo === null){
        this.toastSer.presentError('Please Enter  SPT Depth To');

       }else if(this.typeOfsample === 'SPT' && this.first === null){
        this.toastSer.presentError('Please Enter  Penetration From First');
       }else if(this.typeOfsample === 'SPT' && this.second === null){
        this.toastSer.presentError('Please Enter  Penetration From Second');
       }else if(this.typeOfsample === 'SPT' && this.third === null){
        this.toastSer.presentError('Please Enter  Penetration From Third');

       }else if(this.typeOfsample === 'SPT' && this.firstB === null){
        this.toastSer.presentError('Please Enter  Blows - N From First');

       }else if(this.typeOfsample === 'SPT' && this.secondB === null){
        this.toastSer.presentError('Please Enter  Blows - N From Second');

       }else if(this.typeOfsample === 'SPT' && this.thirdB === null){
        this.toastSer.presentError('Please Enter  Blows - N From Third');

       }else if(this.typeOfsample === 'UDS' && this.udsDepthFrom === null){
        this.toastSer.presentError('Please Enter  UDS Depth From');

       }else if(this.typeOfsample === 'UDS' && this.udsDepthTo === null){
        this.toastSer.presentError('Please Enter  UDS Depth To');
         }else if(this.soilSampleColor === null){
        this.toastSer.presentError('Please Enter   Soil Sample Color');

       }else if(this.typeOfSoil === null){
        this.toastSer.presentError('Please Select   Type Of soil');

       }else if( this.densityConsistace === null){
        this.toastSer.presentError('Please Enter  Density / Consistency');
       }else if( this.visualClassification === null){
        this.toastSer.presentError('Please Enter  Visual Classification of Sample');
       }else if(this.typeOfsample === 'DS' && this.dsDepthFrom === 0){
        this.toastSer.presentError('Please Enter  Ds Depth From, It should not  Zero');

       }else if(this.typeOfsample === 'DS' && this.dsDepthTo === 0){
        this.toastSer.presentError('Please Enter  Ds Depth To,It should not  Zero');

       }else if(this.typeOfsample === 'SPT' && this.sptDepthFrom === 0){
        this.toastSer.presentError('Please Enter  SPT Depth From,It should not  Zero');

       }else if(this.typeOfsample === 'SPT' && this.sptDepthTo === 0){
        this.toastSer.presentError('Please Enter  SPT Depth To,It should not  Zero');

       }else if(this.typeOfsample === 'SPT' && this.first === 0){
        this.toastSer.presentError('Please Enter  Penetration From First,It should not  Zero');
       }else if(this.typeOfsample === 'SPT' && this.second === 0){
        this.toastSer.presentError('Please Enter  Penetration From Second,It should not  Zero');
       }else if(this.typeOfsample === 'SPT' && this.third === 0){
        this.toastSer.presentError('Please Enter  Penetration From Third,It should not  Zero');

       }else if(this.typeOfsample === 'SPT' && this.firstB === 0){
        this.toastSer.presentError('Please Enter  Blows - N From First,It should not  Zero');

       }else if(this.typeOfsample === 'SPT' && this.secondB === 0){
        this.toastSer.presentError('Please Enter  Blows - N From Second,It should not  Zero');

       }else if(this.typeOfsample === 'SPT' && this.thirdB === 0){
        this.toastSer.presentError('Please Enter  Blows - N From Third,It should not  Zero');

       }else if(this.typeOfsample === 'UDS' && this.udsDepthFrom === 0){
        this.toastSer.presentError('Please Enter  UDS Depth From,It should not  Zero');

       }else if(this.typeOfsample === 'UDS' && this.udsDepthTo === 0){
        this.toastSer.presentError('Please Enter  UDS Depth To,It should not  Zero');
      }
       else if(this.typeOfsample === 'DS'){
         this.rockDepthFrom ='';
         this.rockDepthTo = '';
          this.first = '';
          this.second = '';
          this.third = '';
          this.total = '';
          this.firstB = '';
          this.secondB = '';
          this.thirdB = '';
          this.totalB = '';
          this.sptDepthFrom = '';
          this.sptDepthTo = '';
          this.udsDepthFrom = '';
          this.udsDepthTo = '';
          this.sptstatus = '';

          console.log('ds');

          this.rockSample = '';
          this.runLength = '';
          this.runTime = '';
          this.waterLoss = '';
          this.allRockPiecesLenth = '';
          this.rockPicesLengthgrze = '';
          this.rockSamplColor = '';
          this.typeOfWeathering = '';
          this.typeOfRock = '';
          this.cr='';
          this.rqd = '';
          this.adding();

         }else if(this.typeOfsample === 'SPT'){
          this.rockDepthFrom ='';
          this.rockDepthTo = '';

          this.dsDepthFrom = '';
          this.dsDepthTo = '';
          this.udsDepthFrom = '';
          this.udsDepthTo = '';
          console.log('spt');

          this.rockSample = '';
          this.runLength = '';
          this.runTime = '';
          this.waterLoss = '';
          this.allRockPiecesLenth = '';
          this.rockPicesLengthgrze = '';
          this.rockSamplColor = '';
          this.typeOfWeathering = '';
          this.typeOfRock = '';
          this.cr='';
          this.rqd = '';
          this.adding();

         }else if(this.typeOfsample === 'UDS'){
          this.rockDepthFrom ='';
          this.rockDepthTo = '';

          this.dsDepthFrom = '';
          this.dsDepthTo = '';
          this.sptDepthFrom = '';
          this.sptDepthTo = '';
          this.first = '';
          this.second = '';
          this.third = '';
          this.total = '';
          this.firstB = '';
          this.secondB = '';
          this.thirdB = '';
          this.sptstatus = '';

          this.totalB = '';
          console.log('uds');


          this.rockSample = '';
          this.runLength = '';
          this.runTime = '';
          this.waterLoss = '';
          this.allRockPiecesLenth = '';
          this.rockPicesLengthgrze = '';
          this.rockSamplColor = '';
          this.typeOfWeathering = '';
          this.typeOfRock = '';
          this.cr='';
          this.rqd = '';
          this.adding();


         }

     }else if(this.typeOfstrata === 'Rock'){
       if( this.rockSample === undefined){
        this.toastSer.presentError('Please Enter  Type of Sample (If Rock)');
       }
       else if( this.rockDepthFrom === undefined){
        this.toastSer.presentError('Please Enter  Rock depth from');

       }else if( this.rockDepthTo === undefined){
        this.toastSer.presentError('Please Enter  Rock depth to');

       }
       else if( this.runLength === undefined){
        this.toastSer.presentError('Please Enter  Run Length');

       }else if( this.runTime === undefined){
        this.toastSer.presentError('Please Enter  Run Time');

       }else if( this.waterLoss === undefined){
        this.toastSer.presentError('Please Enter  Water Loss');

       }else if( this.allRockPiecesLenth === undefined){
        this.toastSer.presentError('Please Enter  All Rock Pieces lengths');

       }else if( this.rockPicesLengthgrze === undefined){
        this.toastSer.presentError('Please Enter  Rock Pieces length >10 cm');

       }else if( this.rockSamplColor === undefined){
        this.toastSer.presentError('Please Enter  Rock Sample Color');

       }else if( this.typeOfWeathering === undefined){
        this.toastSer.presentError('Please Select  Type of Weathering');

       }else if( this.typeOfRock === undefined){
        this.toastSer.presentError('Please Enter  Type of Rock');

       }else  if( this.rockSample === ''){
        this.toastSer.presentError('Please Enter  Type of Sample (If Rock)');
       }
       else if( this.rockDepthFrom === ''){
        this.toastSer.presentError('Please Enter  Rock depth from');

       }else if( this.rockDepthTo === ''){
        this.toastSer.presentError('Please Enter  Rock depth to');

       }
       else if( this.runLength === ''){
        this.toastSer.presentError('Please Enter  Run Length');

       }else if( this.runTime === ''){
        this.toastSer.presentError('Please Enter  Run Time');

       }else if( this.waterLoss === ''){
        this.toastSer.presentError('Please Enter  Water Loss');

       }else if( this.allRockPiecesLenth === ''){
        this.toastSer.presentError('Please Enter  All Rock Pieces lengths');

       }else if( this.rockPicesLengthgrze === ''){
        this.toastSer.presentError('Please Enter  Rock Pieces length >10 cm');

       }else if( this.rockSamplColor === ''){
        this.toastSer.presentError('Please Enter  Rock Sample Color');

       }else if( this.typeOfWeathering === ''){
        this.toastSer.presentError('Please Select  Type of Weathering');

       }else if( this.typeOfRock === ''){
        this.toastSer.presentError('Please Enter  Type of Rock');

       }else  if( this.rockSample === null){
        this.toastSer.presentError('Please Enter  Type of Sample (If Rock)');
       }
       else if( this.rockDepthFrom === null){
        this.toastSer.presentError('Please Enter  Rock depth from');

       }else if( this.rockDepthTo === null){
        this.toastSer.presentError('Please Enter  Rock depth to');

       }
       else if( this.runLength === null){
        this.toastSer.presentError('Please Enter  Run Length');

       }else if( this.runTime === null){
        this.toastSer.presentError('Please Enter  Run Time');

       }else if( this.waterLoss === null){
        this.toastSer.presentError('Please Enter  Water Loss');

       }else if( this.allRockPiecesLenth === null){
        this.toastSer.presentError('Please Enter  All Rock Pieces lengths');

       }else if( this.rockPicesLengthgrze === null){
        this.toastSer.presentError('Please Enter  Rock Pieces length >10 cm');

       }else if( this.rockSamplColor === null){
        this.toastSer.presentError('Please Enter  Rock Sample Color');

       }else if( this.typeOfWeathering === null){
        this.toastSer.presentError('Please Select  Type of Weathering');

       }else if( this.typeOfRock === null){
        this.toastSer.presentError('Please Enter  Type of Rock');

       } else if( this.rockDepthFrom === 0){
        this.toastSer.presentError('Please Enter  Rock depth from, it Should Not a Zero');

       }else if( this.rockDepthTo === 0){
        this.toastSer.presentError('Please Enter  Rock depth to,it Should Not a Zero');

       }else if( this.runLength === 0){
        this.toastSer.presentError('Please Enter  Run Length,it Should Not a Zero');

       }else if( this.runTime === 0){
        this.toastSer.presentError('Please Enter  Run Time,it Should Not a Zero');

       }else if( this.waterLoss === 0){
        this.toastSer.presentError('Please Enter  Water Loss,it Should Not a Zero');

       }else if( this.allRockPiecesLenth === 0){
        this.toastSer.presentError('Please Enter  All Rock Pieces lengths,it Should Not a Zero');

       }else if( this.rockPicesLengthgrze === 0){
        this.toastSer.presentError('Please Enter  Rock Pieces length >10 cm,it Should Not a Zero');

       }else{
         this.typeOfsample = '';
        this.soilSampleColor = '';
        this.typeOfSoil = '';
        this.densityConsistace = '';
        this.visualClassification = '';

        this.dsDepthFrom = '';
        this.dsDepthTo = '';
        this.sptDepthFrom = '';
        this.sptDepthTo = '';
        this.udsDepthFrom = '';
        this.udsDepthTo = '';
        this.first = '';
        this.second = '';
        this.third = '';
        this.total = '';
        this.firstB = '';
        this.secondB = '';
        this.thirdB = '';
        this.totalB = '';
        this.sptstatus = '';


        this.adding();
      }
     }



 }

 moveToNext(){

 }
 addDatabse(){
   this.androidDatabase.updateLayer3(this.drillingFrom,this.drillingTo,this.typeOfstrata,
    this.typeOfsample,this.dsDepthFrom,this.dsDepthTo,this.sptDepthFrom,this.sptDepthTo,
    this.udsDepthFrom,this.udsDepthTo,this.soilSampleColor,this.typeOfSoil,this.densityConsistace,
    this.visualClassification,
    this.rockSample, this.runLength,this.runTime,this.waterLoss,this.allRockPiecesLenth,
    this.rockPicesLengthgrze,this.cr,this.rqd,this.rockSamplColor,
    this.typeOfWeathering,this.typeOfRock,Constants.laYer1Id,this.first,
    this.second,this.third,this.total,this.firstB,this.secondB,this.thirdB,this.totalB,
    this.rockDepthFrom,this.rockDepthTo,this.sptstatus);

   // this.router.navigate(['layer4']);
   this.getLayer1();

  }
  totalCount(){
    if(this.second !== undefined && this.third !== undefined){
      this.total = parseInt(this.second) + parseInt(this.third);

    }
    if(this.secondB !== undefined && this.thirdB !== undefined){
      this.totalB = parseInt(this.secondB) + parseInt(this.thirdB);
    }


    if((this.firstB === 50 && this.first < 15) || (this.secondB === 50 && this.second < 15) || (this.thirdB === 50 && this.third < 15)  ){
      this.oneB = true;
      this.sptstatus = 'Refusal';
    }else if((this.firstB > 50 && this.first === 15) || (this.secondB > 50 && this.second === 15) || (this.thirdB > 50 && this.third === 15) ){
      this.oneB = true;
      this.sptstatus = 'Refusal';
    }else if(this. total === 30 && this.totalB > 100){
      this.oneB = true;
      this.sptstatus = 'Refusal';

    }else{
      this.oneB = false;
      this.sptstatus = '';

    }

  }

  submitweb(){
    this.httpService.submitLayer3(Constants.webbhid,3,this.drillingFrom,this.drillingTo,this.typeOfstrata,
      this.typeOfsample,this.dsDepthFrom,this.dsDepthTo,this.sptDepthFrom,this.sptDepthTo,
      this.first,this.firstB,
      this.second,this.secondB,
      this.third,this.thirdB,
      this.total,this.totalB,this.sptstatus,
      this.udsDepthFrom,this.udsDepthTo,this.soilSampleColor,this.typeOfSoil,this.densityConsistace,
      this.visualClassification,this.rockSample, this.runLength,this.runTime,this.waterLoss,this.allRockPiecesLenth,
      this.rockPicesLengthgrze,this.cr,this.rqd,this.rockSamplColor,
      this.typeOfWeathering,this.typeOfRock,
      this.rockDepthFrom,this.rockDepthTo).subscribe((response: any)=>{

        if(response.error === true){
          this.toastSer.presentError(response.msg);
        }else{

        //  this.router.navigate(['layer4']);
      this.getWebData();
        }

      });
  }

  adding(){
    this. platform.ready().then(() => {
       if (this.platform.is('android')) {
       this.addDatabse();

       }else{
        //this.addDatabse();

        this.submitweb();
       }


   });
  }

  getWebData(){
    this.layer1List = [];

     this.httpService.getBoredetails(Constants.webbhid).subscribe((response: any)=>{
      this.layer1List = response.data;
      console.log('list',this.layer1List);
      if(this.layer1List[0].depth_termination === ''){
        this.router.navigate(['layer4']);

      }else{
        this.router.navigate(['update4']);

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
        if(this.layer1List[0].depth_termination === ''){
          this.router.navigate(['layer4']);

        }else{
          this.router.navigate(['update4']);

        }

      }
    });
  }

}
