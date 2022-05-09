import { ToastService } from './../../services/toast.service';
import { Router } from '@angular/router';
import { Constants } from 'src/app/common/constants';
import { AndroidDatabaseService } from './../../database/android-database.service';
import { Component, OnInit } from '@angular/core';
import { HttpcallsService } from 'src/app/services/httpcalls.service';
import { Platform, AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';




@Component({
  selector: 'app-viewlist',
  templateUrl: './viewlist.page.html',
  styleUrls: ['./viewlist.page.scss'],
})
export class ViewlistPage implements OnInit {
totalList: any =[];
layer1List: any = [];
iterationlist: any = [];
project: any;
disconnectSubscription: any;
 timeout: any;
 countList: any = [];
 count: any;
 isweb = false;
 isandroid = false;
  constructor(public androidDatabase: AndroidDatabaseService,
    public router: Router,
    public httpService: HttpcallsService,
    public platform: Platform,
    public toastser: ToastService,
    public loadingController: LoadingController,
    public alertCtrl: AlertController

    ) {
      this.autoLoader1();
    this.adding();
    this.project = 'DFCCIL';

  }

  ngOnInit() {
  }

  async alert(id: any,bhid: any) {

    const alert = await this.alertCtrl.create({
      header: 'Do you want to submit this borehole information to server ?',
      buttons: [
        {
          text: 'Yes',
          handler: (redc) => {
            this.datasubmit(id,bhid);
          },
        },
        {
          text: 'No',
          handler: (redc) => {

          },
        },
      ],
    });
    alert.present();
  }

  ionViewDidEnter(){
    this.adding();
    this.project = 'DFCCIL';

  }
  getLayer1() {
    this.androidDatabase.getLayer1(Constants.userId).then((data) => {
      this.layer1List = [];
      console.log('size',data.rows.length);
      if (data.rows.length > 0) {
        for (let i = 0; i < data.rows.length; i++) {
          this.layer1List.push(data.rows.item(i));
        }
        console.log('layer1List',this.layer1List);

      }
    });
  }
  open(url: any){
    window.open(url);
  }

  moveToUpdate(id: any,status: any){
    Constants.laYer1Id = id;
    this.router.navigate(['update1']);

  }
  moveToUpdate2(id: any){
    Constants.laYer1Id = id;
    this.router.navigate(['update2']);
  }
  moveToUpdate3(id: any){
    Constants.laYer1Id = id;
    this.router.navigate(['update3']);
  }

  moveToUpdate4(id: any){
    Constants.laYer1Id = id;
    this.router.navigate(['update4']);
  }
  submitboredata(id: any){
    Constants.mainBHID = id;
    this.autoLoader();

    this.androidDatabase.getLayer1ById(id).then((data) => {
      this.totalList = [];
      console.log('size',data.rows.length);
      if (data.rows.length > 0) {
        for (let i = 0; i < data.rows.length; i++) {
          this.totalList.push(data.rows.item(i));
        }
        console.log('totalList',this.totalList);

        this.httpService.submitboredata(
          this.totalList[0].user_id,
          this.totalList[0].org_id,
          this.totalList[0].project_id,
          this.totalList[0].Package,
          this.totalList[0].SubAgencyName,
          this.totalList[0].section_id,
          this.totalList[0].bh_no,
          this.totalList[0].chainage,
          this.totalList[0].chainage_id,
          this.totalList[0].easting,
          this.totalList[0].northing,
          this.totalList[0].latitude,
          this.totalList[0].longitude,
          this.totalList[0].type_of_crossing,
          this.totalList[0].type_of_structure,
          this.totalList[0].type_of_bridge,
          this.totalList[0].bh_start_date,
          this.totalList[0].bh_rl,
          this.totalList[0].type_of_rig,
          this.totalList[0].type_of_rig_other,
          this.totalList[0].drill_orientation,
          this.totalList[0].bh_dia,
          this.totalList[0].bh_dia_other,

          this.totalList[0].casing_dia,
          this.totalList[0].casing_dia_other,

          this.totalList[0].casing_depth,
          this.totalList[0].drilling_bit,
          this.totalList[0].drilling_bit_other,
          this.totalList[0].core_barrel,
          this.totalList[0].angle_horizontal,
          this.totalList[0].borehole_pic1,
          this.totalList[0].borehole_pic2,
          this.totalList[0].borehole_pic3,



          this.totalList[0].water_table_rl,

          this.totalList[0].depth_termination,
          this.totalList[0].bh_enddate,
          this.totalList[0].rv_rep_name,
          this.totalList[0].rv_rep_sign,

          this.totalList[0].sa_rep_name,
          this.totalList[0].sa_rep_sign,

          this.totalList[0].client_rep_name,
          this.totalList[0].client_rep_sign,

          this.totalList[0].modified_date,

          this.totalList[0].depth_termination_pic1,
          this.totalList[0].depth_termination_pic2,
          this.totalList[0].depth_termination_pic3,

          this.totalList[0].sample_pic1,
          this.totalList[0].sample_pic2,
          this.totalList[0].sample_pic3





          )
           .subscribe((response: any)=>{
           console.log('response',response);
           if(response.error === true){
            this.toastser.presentError(response.msg);


           }else{
           console.log('Idddddddd',id);
           this.androidDatabase.updatebhid(response.data.bh_id,id).then((res: any)=>{
            this.submitIterations(response.data.bh_id,id);

           });

           }


          });
        }
    });

  }

  autoLoader1() {
    this.loadingController.create({
      spinner:'lines',
      message: 'Loading, Please Wait ...',
      duration: 5000
    }).then((response) => {
      response.present();
      response.onDidDismiss().then((response1) => {
        console.log('Loader dismissed', response);
      });
    });
  }


  autoLoader() {
    this.loadingController.create({
      spinner:'lines',
      message: 'Uploading, Please Wait ...',
      duration: 35000
    }).then((response) => {
      response.present();
      response.onDidDismiss().then((response1) => {
        console.log('Loader dismissed', response);
      });
    });
  }


  submitIterations(bhid: any,id: any){
    this.androidDatabase.getIteraions(bhid).then((data) => {
      this.iterationlist = [];
      console.log('size',data.rows.length);
      if (data.rows.length > 0) {
        for (let i = 0; i < data.rows.length; i++) {
          this.iterationlist.push(data.rows.item(i));
        }
        console.log('iterationlist',this.iterationlist);
        this.httpService.submitboreiterations(bhid,this.iterationlist).subscribe((res: any)=>{
          console.log('responseIte: '+res.data);
          if(res.error === true){
            this.toastser.presentError(res.msg);

           }else{
           console.log('Idddddddd',bhid);
           this.toastser.presentSuccess(res.msg);
           this.androidDatabase.deleteRowbyId(id);
           this.androidDatabase.deleteRowbyIdIter(bhid);

           this.router.navigate(['sidemenu']);
           }

        });

      }
    });

  }

   myFunction() {
    this.timeout = setTimeout(this.alertFunc, 30000);
  }

   alertFunc() {
     this.toastser.presentError('Please check your internet Connection');
  }

  getPendingBoredata(){
    this.layer1List = [];
    this.httpService.getPendingBoredata(Constants.userId).subscribe((response: any)=>{
      this.layer1List = response.data;
    });
  }
  adding(){
    this. platform.ready().then(() => {
       if (this.platform.is('android')) {
         this.isandroid = true;
         this.isweb = false;
       this.getLayer1();

       }else{
this.isandroid = false;
this.isweb = true;
         this.getPendingBoredata();
       }


   });

   }


   datasubmit(id: any,bhid: any){




    this. platform.ready().then(() => {
      if (this.platform.is('android')) {
        if(window.navigator.connection.type === 'none'){
          this.toastser.presentError('Please check your internet connection');

         }else{
           this.getIterationCount(id);

         }


      }else{
             this.autoLoader();
        this.httpService.submitall('all',bhid).subscribe((response: any)=>{
          console.log('respons',response);
          if(response.error === true){
            this.toastser.presentError(response.msg);

           }else{

          this.toastser.presentSuccess(response.msg);
          this.router.navigate(['sidemenu']);
           }

        });
     }


  });


   }


   moving(id: any,bhid: any,bhstatus: any){
    this. platform.ready().then(() => {
       if (this.platform.is('android')) {
       this.moveToUpdate(id,bhstatus);

       }else{

        Constants.laYer1Id = bhid;
        if(bhstatus === '0'){
        this.router.navigate(['web1']);
        }else{
          this.router.navigate(['nonedit1']);

        }

      }


   });

   }
   onClick(){
     this.router.navigate(['sidemenu']);
   }


   moveToLayer3(id: any,bhid: any){
    this. platform.ready().then(() => {
       if (this.platform.is('android')) {

        this.moveToAndroidIterations(id);
       }else{

        this.moveToWebIterations(bhid);



      }


   });

   }


   moveToWebIterations(bhid: any){

    Constants.webbhid = bhid;


    this.router.navigate(['iterations']);

  }
  moveToAndroidIterations(bhid: any){

    Constants.laYer1Id = bhid;


    this.router.navigate(['iterations']);

  }



  getIterationCount(id: any) {


    this.androidDatabase.getIterationCount(id).then((data) => {
      this.countList = [];
      console.log('size',data.rows.length);
      if (data.rows.length > 0) {
        for (let i = 0; i < data.rows.length; i++) {
          this.countList.push(data.rows.item(i));
        }
        console.log('countList',this.countList);
        this.count = this.countList[0].drill_depth_from;
        console.log('count',this.count);
        console.log('count',this.count);

        if(this.count >0){


          this.submitboredata(id);
            }else{




          this.toastser.presentError('No iterations added for this borehole. Unable to submit');
        }

      }
    });
  }
}
