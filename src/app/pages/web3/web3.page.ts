/* eslint-disable radix */
import { HttpcallsService } from 'src/app/services/httpcalls.service';
import { Constants } from 'src/app/common/constants';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-web3',
  templateUrl: './web3.page.html',
  styleUrls: ['./web3.page.scss'],
})
export class Web3Page implements OnInit {
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
  isshow = false;
typeOfSoil: any;
isCohessive = false;
densityConsistace: any;
isCohesion = false;
visualClassification: any;
rockSample: any;
runLength: any;
runTime: any;
waterLoss: any;
oneB= false;
sptstatus: any;
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
  public httpService: HttpcallsService,
  public router: Router) {
    this.getLayer1();
  }

ngOnInit() {
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


  // strataChange($event){
  // this.typeOfstrata= $event.target.value;
  // console.log($event.target.value);
  // if(this.typeOfstrata === 'Soil'){
  // this.isSoil = true;
  // this.isRock = false;
  // }else if(this.typeOfstrata === 'Rock'){
  //   this.isSoil = false;
  //   this.isRock = true;
  //   this.isSPTDepth = false;
  //   this.isUDSepth = false;
  //   this.isdsDepth = false;


  // }
  // }

  // sampleChange($event){
  //   this.typeOfsample= $event.target.value;
  //   console.log($event.target.value);
  //   if(this.typeOfsample === 'DS'){
  //     this.isdsDepth = true;
  //     this.isSPTDepth = false;
  //     this.isUDSepth = false;
  //   }else if(this.typeOfsample === 'SPT'){
  //     this.isdsDepth = false;
  //     this.isSPTDepth = true;
  //     this.isUDSepth = false;

  //   }else if(this.typeOfsample === 'UDS'){
  //     this.isdsDepth = false;
  //     this.isSPTDepth = false;
  //     this.isUDSepth = true;

  //   }

  // }


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
      this.isCohesion = false;
      this.isCohessive = false;

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
     if(this.allRockPiecesLenth !== '' && this.runLength !== ''){
     this.cr= this.allRockPiecesLenth/this.runLength;
     }
     if(this.rockPicesLengthgrze !== '' && this.runLength !== ''){
      this.rqd= this.rockPicesLengthgrze/this.runLength;
      }

   }
   weatheringChange($event){
     this.typeOfWeathering = $event.target.value;
     console.log($event.target.value);

   }

   getLayer1() {
    this.layer1List = [];
this.httpService.getBoredetails(Constants.webbhid).subscribe((response: any)=>{
  this.layer1List = response.data;

        console.log('layer1List',this.layer1List);
        if(this.layer1List.length>0){

          if(this.layer1List[0].soil_spt_depth_status === 'Refusal'){
            this.isshow = true;

            this.oneB = true;
           }

         this.drillingFrom = this.layer1List[0].drill_depth_from;
         this.drillingTo = this.layer1List[0].drill_depth_to;
         this.typeOfstrata = this.layer1List[0].type_of_strata;
         if(this.typeOfstrata === 'Soil'){
          this.isSoil = true;
        }else{
          this.isRock = true;
        }

         this.typeOfsample = this.layer1List[0].type_of_sample;
         if(this.typeOfsample === 'DS'){
           this.isdsDepth = true;
         }else if(this.typeOfsample === 'SPT'){
           this.isSPTDepth = true;
         }else if(this.typeOfsample === 'UDS'){
           this.isUDSepth = true;
         }
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
         this.first = this.layer1List[0].soil_spt_penetration_1;
         this.second = this.layer1List[0].soil_spt_penetration_2;
         this.third = this.layer1List[0].soil_spt_penetration_3;
         this.total = this.layer1List[0].soil_spt_penetration_total;
         this.firstB = this.layer1List[0].soil_spt_blow_n_1;
         this.secondB = this.layer1List[0].soil_spt_blow_n_2;
         this.thirdB = this.layer1List[0].soil_spt_blow_n_3;
         this.totalB = this.layer1List[0].soil_spt_blow_n_total;
         console.log('spt',this.first,this.second,this.third,this.total,this.firstB);
         this.rockDepthFrom = this.layer1List[0].rock_depth_from;
         this.rockDepthTo = this.layer1List[0].rock_depth_to;
         this.sptstatus = this.layer1List[0].soil_spt_depth_status;
          if(this.layer1List[0].soil_type === 'Cohesive'){
            this.isCohessive = true;
          }else{
            this.isCohesion = true;
          }

         if(this.layer1List[0].soil_spt_penetration_1 === '0'){
           this. first = '';
         }
         if(this.layer1List[0].soil_spt_penetration_2 === '0'){
          this. second = '';
        }
        if(this.layer1List[0].soil_spt_penetration_3 === '0'){
          this. third = '';
        }
        if(this.layer1List[0].soil_spt_penetration_total === '0'){
          this. total = '';
        }
        if(this.layer1List[0].soil_spt_blow_n_1 === '0'){
          this. firstB = '';
        }
        if(this.layer1List[0].soil_spt_blow_n_2 === '0'){
          this. secondB = '';
        }
        if(this.layer1List[0].soil_spt_blow_n_3 === '0'){
          this. thirdB = '';
        }
        if(this.layer1List[0].soil_spt_blow_n_total === '0'){
          this. totalB = '';
        }
        console.log(this.sptstatus);



        }


    });
  }
  updateLayer3(){
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

        this.toastSer.presentSuccess(response.msg);
        if(this.layer1List[0].depth_termination === ''){
          this.router.navigate(['layer4']);

        }else{
          this.router.navigate(['web4']);

        }


      });

}
validation(){
  if(this.drillingFrom === ''){
    this.toastSer.presentError('Please Enter  Drilling From');
  }else if(this.drillingTo === ''){
   this.toastSer.presentError('Please Enter  Drilling To');

  }else if(this.typeOfstrata === ''){
   this.toastSer.presentError('Please Select  Type of Strata');

  }else if(this.drillingFrom === 0){
    this.toastSer.presentError('Please Enter  Drilling From, It should not be a Zero');
  }else if(this.drillingTo === 0){
   this.toastSer.presentError('Please Enter  Drilling To,It should not be a Zero');

  }else if(this.drillingFrom === null){
    this.toastSer.presentError('Please Enter  Drilling From');
  }else if(this.drillingTo === null){
   this.toastSer.presentError('Please Enter  Drilling To');

  }
  else if(this.typeOfstrata === 'Soil'){

    if(this.typeOfsample === ''){
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
    }else if(this.typeOfsample === 'DS' && this.dsDepthFrom === 0){
      this.toastSer.presentError('Please Enter  Ds Depth From, It should not be a Zero');

     }else if(this.typeOfsample === 'DS' && this.dsDepthTo === 0){
      this.toastSer.presentError('Please Enter  Ds Depth To,It should not be a Zero');

     }else if(this.typeOfsample === 'SPT' && this.sptDepthFrom === 0){
      this.toastSer.presentError('Please Enter  SPT Depth From,It should not be a Zero');

     }else if(this.typeOfsample === 'SPT' && this.sptDepthTo === 0){
      this.toastSer.presentError('Please Enter  SPT Depth To,It should not be a Zero');

     }else if(this.typeOfsample === 'SPT' && this.first === 0){
      this.toastSer.presentError('Please Enter  Penetration From First,It should not be a Zero');
     }else if(this.typeOfsample === 'SPT' && this.second === 0){
      this.toastSer.presentError('Please Enter  Penetration From Second,It should not be a Zero');
     }else if(this.typeOfsample === 'SPT' && this.third === 0){
      this.toastSer.presentError('Please Enter  Penetration From Third,It should not be a Zero');

     }else if(this.typeOfsample === 'SPT' && this.firstB === 0){
      this.toastSer.presentError('Please Enter  Blows - N From First,It should not be a Zero');

     }else if(this.typeOfsample === 'SPT' && this.secondB === 0){
      this.toastSer.presentError('Please Enter  Blows - N From Second,It should not be a Zero');

     }else if(this.typeOfsample === 'SPT' && this.thirdB === 0){
      this.toastSer.presentError('Please Enter  Blows - N From Third,It should not be a Zero');

     }else if(this.typeOfsample === 'UDS' && this.udsDepthFrom === 0){
      this.toastSer.presentError('Please Enter  UDS Depth From,It should not be a Zero');

     }else if(this.typeOfsample === 'UDS' && this.udsDepthTo === 0){
      this.toastSer.presentError('Please Enter  UDS Depth To,It should not be a Zero');
    }
    else if(this.typeOfsample === 'DS' && this.dsDepthFrom === null){
      this.toastSer.presentError('Please Enter  Ds Depth From');

     }else if(this.typeOfsample === 'DS' && this.dsDepthTo === null ){
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
       this.updateLayer3();

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
       this.updateLayer3();

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
       this.updateLayer3();


      }

  }else if(this.typeOfstrata === 'Rock'){
    if( this.rockSample === ''){
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

     }
     else if( this.rockDepthFrom === null){
      this.toastSer.presentError('Please Enter  Rock depth from');

     }else if( this.rockDepthTo === null ){
      this.toastSer.presentError('Please Enter  Rock depth to');

     }else if( this.runLength === null){
      this.toastSer.presentError('Please Enter  Run Length');

     }else if( this.runTime === null){
      this.toastSer.presentError('Please Enter  Run Time');

     }else if( this.waterLoss === null){
      this.toastSer.presentError('Please Enter  Water Loss');

     }else if( this.allRockPiecesLenth === null){
      this.toastSer.presentError('Please Enter  All Rock Pieces lengths');

     }else if( this.rockPicesLengthgrze === null){
      this.toastSer.presentError('Please Enter  Rock Pieces length >10 cm');

     }
    else{
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

     this.updateLayer3();
   }
  }



}


onClick(){
  if(this.layer1List[0].depth_termination === ''){
    this.router.navigate(['layer4']);

  }else{
    this.router.navigate(['web4']);

  }

}
}
