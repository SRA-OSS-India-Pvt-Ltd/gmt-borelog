import { ToastService } from './../../services/toast.service';
import { Router } from '@angular/router';
import { Constants } from 'src/app/common/constants';
import { AndroidDatabaseService } from './../../database/android-database.service';
import { Component, OnInit } from '@angular/core';
import { HttpcallsService } from 'src/app/services/httpcalls.service';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-viewlist',
  templateUrl: './viewlist.page.html',
  styleUrls: ['./viewlist.page.scss'],
})
export class ViewlistPage implements OnInit {
totalList: any =[];
layer1List: any = [];
project: any;
  constructor(public androidDatabase: AndroidDatabaseService,
    public router: Router,
    public httpService: HttpcallsService,
    public platform: Platform,
    public toastser: ToastService) {
    this.adding();
    this.project = 'DFCCIL';
  }

  ngOnInit() {
  }
  getLayer1() {
    this.androidDatabase.getLayer1().then((data) => {
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
    this.androidDatabase.getLayer1ById(id).then((data) => {
      this.totalList = [];
      console.log('size',data.rows.length);
      if (data.rows.length > 0) {
        for (let i = 0; i < data.rows.length; i++) {
          this.totalList.push(data.rows.item(i));
        }
        console.log('totalList',this.totalList);
        this.httpService.submitboredata(this.totalList[0].user_id,this.totalList[0].org_id,this.totalList[0].project_id,
          this.totalList[0].Package,this.totalList[0].SubAgencyName,this.totalList[0].struct_type,
          this.totalList[0].bh_no,
          this.totalList[0].bh_location,this.totalList[0].bh_chainage,this.totalList[0].bh_lat,
          this.totalList[0].bh_lon,
          this.totalList[0].bh_start_date,this.totalList[0].bh_rl,this.totalList[0].water_table_rl,
          this.totalList[0].type_of_rig,
          this.totalList[0].type_of_drilling,this.totalList[0].circulation_fluid,
          this.totalList[0].drill_orientation,this.totalList[0].bh_dia,
          this.totalList[0].casing_dia,this.totalList[0].casing_depth,this.totalList[0].drill_depth_from,
          this.totalList[0].drill_depth_to,
          this.totalList[0].type_of_strata,this.totalList[0].type_of_sample,this.totalList[0].soil_ds_depth_from,
          this.totalList[0].soil_ds_depth_to,
          this.totalList[0].soil_spt_depth_from,this.totalList[0].soil_spt_depth_to,
          this.totalList[0].first,this.totalList[0].firstB,
          this.totalList[0].second,this.totalList[0].secondB,
          this.totalList[0].third,this.totalList[0].thirdB,
          this.totalList[0].total,this.totalList[0].totalB,
          this.totalList[0].soil_spt_depth_status,
          this.totalList[0].soil_uds_depth_from,
          this.totalList[0].soil_uds_depth_to,
          this.totalList[0].soil_sample_color,this.totalList[0].soil_type,
          this.totalList[0].soil_density,
          this.totalList[0].soil_visual_classif,this.totalList[0].drilling_bit,
          this.totalList[0].core_barrel,this.totalList[0].rock_sample_type,
          this.totalList[0].rock_run_length,this.totalList[0].rock_run_time,
          this.totalList[0].rock_water_loss,this.totalList[0].rock_pieces_length,
          this.totalList[0].rock_pieces_10,this.totalList[0].rock_cr,
          this.totalList[0].rock_rqd,this.totalList[0].rock_sample_color,
          this.totalList[0].rock_weathering,this.totalList[0].rock_type,
          this.totalList[0].depth_termination,this.totalList[0].bh_enddate,
          this.totalList[0].rv_rep_name,this.totalList[0].rv_rep_sign,
          this.totalList[0].sa_rep_name,this.totalList[0].sa_rep_sign,
          this.totalList[0].client_rep_name,this.totalList[0].client_rep_sign,
          this.totalList[0].modified_date,
          this.totalList[0].rock_depth_from,this.totalList[0].rock_depth_to,
          ).subscribe((response: any)=>{
           console.log('response',response);
           this.androidDatabase.deleteRowbyId(Constants.laYer1Id);

          });

      }
    });

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
       this.getLayer1();

       }else{
       // this.getLayer1();

        this.getPendingBoredata();
       }


   });

   }


   datasubmit(id: any,bhid: any){
    this. platform.ready().then(() => {
      if (this.platform.is('android')) {
      this.submitboredata(id);

      }else{

        this.httpService.submitall('all',bhid).subscribe((response: any)=>{
          console.log('respons',response);
          this.toastser.presentSuccess(response.msg);
          this.router.navigate(['sidemenu']);

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


}
