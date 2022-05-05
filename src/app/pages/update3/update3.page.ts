/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable radix */
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

  isSPTDepth = false;
  sptDepthFrom: any;

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

  soilSampleColor: any;
typeOfSoil: any;



visualClassification: any;

rockSample: any;
runLength: any;
runTime: string = '';
waterLoss: string = '';


cr: string = '';
rqd: string = '';
typeOfWeathering: any;
rockSamplColor: any;

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
isColorShown = false;
colorOther: any;
increme: number;
sno: any;

  constructor(public toastSer: ToastService,
    public androidDatabase: AndroidDatabaseService,
    public router: Router) {
      this.getLayer1();
    }

  ngOnInit() {
  }
  totalCount(){
    if (this.first !== undefined &&this.second !== undefined && this.third !== undefined
      && this.first !== '' &&this.second !== '' && this.third !== ''
      && this.first !== null &&this.second !== null && this.third !== null ) {
      this.total = parseInt(this.first)+parseInt(this.second) + parseInt(this.third);
    }else if(this.first !== undefined&&this.second !== undefined
      && this.first !== ''&&this.second !== ''
      && this.first !== null &&this.second !== null ){
      console.log('val',this.second);
      this.total = parseInt(this.first)+parseInt(this.second) ;

    }else if(this.first !== undefined &&this.third !== undefined
      && this.first !== '' &&this.third !== ''
      && this.first !== null &&this.third !== null ){
      console.log('2');
      this.total = parseInt(this.first)+parseInt(this.third) ;

    }else{
      this.total = parseInt(this.first);
    }




    if (this.firstB !== undefined &&this.secondB !== undefined && this.thirdB !== undefined
      && this.firstB !== '' &&this.secondB !== '' && this.thirdB !== ''
      && this.firstB !== null &&this.secondB !== null && this.thirdB !== null ) {
      this.totalB = parseInt(this.firstB)+parseInt(this.secondB) + parseInt(this.thirdB);
    }else if(this.firstB !== undefined&&this.secondB !== undefined
      && this.firstB !== ''&&this.secondB !== ''
      && this.firstB !== null &&this.secondB !== null ){
      console.log('val',this.secondB);
      this.totalB = parseInt(this.firstB)+parseInt(this.secondB) ;

    }else if(this.firstB !== undefined &&this.thirdB !== undefined
      && this.firstB !== '' &&this.thirdB !== ''
      && this.firstB !== null &&this.thirdB !== null ){
      console.log('2');
      this.totalB = parseInt(this.firstB)+parseInt(this.thirdB) ;

    }else{
      this.totalB = parseInt(this.firstB);
    }





    if((this.firstB >= 50 && this.first < 15) || (this.secondB >= 50 && this.second < 15)
     || (this.thirdB >= 50 && this.third < 15)  ){


      this.oneB = true;

      this.sptstatus = 'Refusal';
      console.log('Iff1');



    }else if((this.firstB > 50 && this.first === 15) || (this.secondB > 50 && this.second === 15) || (this.thirdB > 50 && this.third === 15) ){


      this.oneB = true;
      this.sptstatus = 'Refusal';
      console.log('Iff2');



    }else if(this. total === 30 && this.totalB > 100){


      this.oneB = true;
      this.sptstatus = 'Refusal';
      console.log('Iff3');


    }else{
      this.increme = this.increme+1;
      console.log('incre', this.increme);
      if(this.layer1List[0].soil_spt_depth_status === 'Refusal' &&  this.increme === 6){
        this.oneB = true;
      console.log(' iff4Refusalto');

      }else{
        this.oneB = false;
        this.sptstatus = '';
        console.log('Iff5');

      }



    }

  }





  colorChange($event){
    this.soilSampleColor = $event.target.value;
    console.log($event.target.value);
    if(this.soilSampleColor === 'Other'){
      this.isColorShown = true;
    }else{
      this.isColorShown = false;

    }

  }

  runLengthCalicualtion() {
    if (this.drillingFrom !== undefined && this.drillingTo !== undefined ) {
      if(this.drillingTo >= this.drillingFrom){
      this.runLength = this.drillingTo - this.drillingFrom;
    }
  }
  }
    visualChange($event){
       this.visualClassification = $event.target.value;
       console.log($event.target.value);

     }
     rockSamplechange($event){
       this.rockSample =$event.target.value;
       console.log($event.target.value);

     }

     weatheringChange($event){
       this.typeOfWeathering = $event.target.value;
       console.log($event.target.value);

     }



  validation(){
    if(this.drillingFrom === ''){
      this.toastSer.presentError('Please Enter  Drilling From');
    }else if(this.drillingTo === ''){
     this.toastSer.presentError('Please Enter  Drilling To');

    }else if(this.drillingFrom> this.drillingTo){
      this.toastSer.presentError(' Drilling To should be greater than Drilling From ');

    }
    else if(this.typeOfstrata === ''){
     this.toastSer.presentError('Please Select  Type of Strata');

    }else if(this.drillingTo === 0){
     this.toastSer.presentError('Please Enter  Drilling To,It should not be Zero');

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

      }
      else if(this.typeOfsample === 'SPT' && this.sptDepthFrom === ''){
       this.toastSer.presentError('Please Enter  SPT Depth From');

      }
      else if(this.typeOfsample === 'SPT' && this.first === ''){
       this.toastSer.presentError('Please Enter  Penetration From First');
      }else if(this.typeOfsample === 'SPT' && this.firstB === ''){
       this.toastSer.presentError('Please Enter  Blows - N From First');

      }else if(this.typeOfsample === 'UDS' && this.udsDepthFrom === ''){
       this.toastSer.presentError('Please Enter  UDS Depth From');

      }else if(this.soilSampleColor === ''){
       this.toastSer.presentError('Please Enter   Soil Sample Color');
      }else if(this.soilSampleColor === 'Other' && this.colorOther === undefined){
        this.toastSer.presentError('Please Enter   Soil Sample Color Other');

       }else if(this.soilSampleColor === 'Other' && this.colorOther === ''){
        this.toastSer.presentError('Please Enter   Soil Sample Color Other');

       }else if(this.soilSampleColor === 'Other' && this.colorOther === null){
        this.toastSer.presentError('Please Enter   Soil Sample Color Other');

       }
      else if(this.typeOfSoil === ''){
       this.toastSer.presentError('Please Select   Type Of soil');

      }else if( this.visualClassification === ''){
       this.toastSer.presentError('Please Enter  Visual Classification of Sample');
      }else if(this.typeOfsample === 'SPT' && this.sptDepthFrom === 0){
        this.toastSer.presentError('Please Enter  SPT Depth From,It should not be Zero');

       }else if(this.typeOfsample === 'SPT' && this.first === 0){
        this.toastSer.presentError('Please Enter  Penetration From First,It should not be Zero');
       }else if(this.typeOfsample === 'SPT' && this.firstB === 0){
        this.toastSer.presentError('Please Enter  Blows - N From First,It should not be Zero');

       }else if(this.typeOfsample === 'UDS' && this.udsDepthFrom === 0){
        this.toastSer.presentError('Please Enter  UDS Depth From,It should not be Zero');

       }

      else if(this.typeOfsample === 'DS' && this.dsDepthFrom === null){
        this.toastSer.presentError('Please Enter  Ds Depth From');

       }else if(this.typeOfsample === 'SPT' && this.sptDepthFrom === null){
        this.toastSer.presentError('Please Enter  SPT Depth From');

       }else if(this.typeOfsample === 'SPT' && this.first === null){
        this.toastSer.presentError('Please Enter  Penetration From First');
       }else if(this.typeOfsample === 'SPT' && this.firstB === null){
        this.toastSer.presentError('Please Enter  Blows - N From First');

       }else if(this.typeOfsample === 'UDS' && this.udsDepthFrom === null){
        this.toastSer.presentError('Please Enter  UDS Depth From');

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

         this.udsDepthFrom = '';

         console.log('ds');

         this.rockSample = '';
         this.runTime = '';
         this.waterLoss = '';

         this.rockSamplColor = '';
         this.typeOfWeathering = '';

         this.cr='';
         this.rqd = '';
         this.updateLayer3();

        }else if(this.typeOfsample === 'SPT'){
         this.rockDepthFrom ='';
         this.rockDepthTo = '';

         this.dsDepthFrom = '';

         this.udsDepthFrom = '';

         console.log('spt');

         this.rockSample = '';
         this.runTime = '';
         this.waterLoss = '';

         this.rockSamplColor = '';
         this.typeOfWeathering = '';

         this.cr='';
         this.rqd = '';
         this.updateLayer3();

        }else if(this.typeOfsample === 'UDS'){
         this.rockDepthFrom ='';
         this.rockDepthTo = '';

         this.dsDepthFrom = '';

         this.sptDepthFrom = '';

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
         this.runTime = '';
         this.waterLoss = '';

         this.rockSamplColor = '';
         this.typeOfWeathering = '';

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
      else if( this.rockSamplColor === ''){
       this.toastSer.presentError('Please Enter  Rock Sample Color');

      }else if( this.typeOfWeathering === ''){
       this.toastSer.presentError('Please Select  Type of Weathering');

      }
       else if( this.rockDepthTo === 0){
        this.toastSer.presentError('Please Enter  Rock depth to,it Should Not a Zero');

       }
       else if( this.rockDepthFrom === null){
        this.toastSer.presentError('Please Enter  Rock depth from');

       }else if( this.rockDepthTo === null ){
        this.toastSer.presentError('Please Enter  Rock depth to');

       }
      else{
        this.typeOfsample = '';
       this.soilSampleColor = '';
       this.colorOther = '';
       this.typeOfSoil = '';

       this.visualClassification = '';

       this.dsDepthFrom = '';

       this.sptDepthFrom = '';

       this.udsDepthFrom = '';

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


     getLayer1() {
      this.androidDatabase.getIterationsByid(Constants.iterationId).then((data) => {
        this.layer1List = [];
        console.log('size',data.rows.length);
        if (data.rows.length > 0) {
          for (let i = 0; i < data.rows.length; i++) {
            this.layer1List.push(data.rows.item(i));
          }
          console.log('layer1List',this.layer1List);
          if(this.layer1List.length>0){

            if(this.layer1List[0].soil_spt_depth_status === 'Refusal'){
              console.log('Iff block executed');
              this.increme = 0;
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
           this.dsDepthFrom = this.layer1List[0].soil_ds_depth;

           this.sptDepthFrom = this.layer1List[0].soil_spt_depth;

           this.udsDepthFrom = this.layer1List[0].soil_uds_depth;

           this.soilSampleColor = this.layer1List[0].soil_sample_color;
           this.colorOther = this.layer1List[0].soil_sample_color;
           this.visualClassification = this.layer1List[0].soil_visual_classif;
           this.rockSample = this.layer1List[0].rock_sample_type;
           this.runLength = this.layer1List[0].rock_run_length;
           this.runTime = this.layer1List[0].rock_run_time;
           this.waterLoss = this.layer1List[0].rock_water_loss;


           this.cr = this.layer1List[0].rock_cr;
           this.rqd = this.layer1List[0].rock_rqd;
           this.rockSamplColor = this.layer1List[0].rock_sample_color;
           this.typeOfWeathering = this.layer1List[0].rock_weathering;

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

        }
      });
    }
    updateLayer3(){
      this.androidDatabase.updateLayer3(Constants.iterationId,
        Constants.laYer1Id,
        this.drillingFrom,
        this.drillingTo,
        this.typeOfstrata,
        this.typeOfsample,
        this.dsDepthFrom,
        this.sptDepthFrom,
        this.first,
        this.second,
        this.third,
        this.total,
        this.firstB,
        this.secondB,
        this.thirdB,
        this.totalB,
        this.sptstatus,
        this.udsDepthFrom,
        this.soilSampleColor,
        this.colorOther,
        this.visualClassification,
        this.rockSample,
        this.rockDepthFrom,
        this.rockDepthTo,
        this.runLength,
        this.runTime,
        this.waterLoss,
        this.cr,
        this.rqd,
        this.rockSamplColor,
        this.typeOfWeathering);


        this.router.navigate(['iterations']);

        }


}
