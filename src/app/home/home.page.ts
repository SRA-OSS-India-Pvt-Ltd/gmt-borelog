import { LoadingController } from '@ionic/angular';
/* eslint-disable @typescript-eslint/prefer-for-of */
import { Platform } from '@ionic/angular';
import { AndroidDatabaseService } from 'src/app/database/android-database.service';

/* eslint-disable no-var */
import { HttpcallsService } from './../services/httpcalls.service';
import { ToastService } from './../services/toast.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Constants } from '../common/constants';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public postData = {
    employeeid: '',
    epassword: '',
  };

  constructor(public router: Router,
    public toastSer: ToastService,
   public httpService: HttpcallsService,
   public andridSer: AndroidDatabaseService,
   public platform: Platform,
   public loadingController: LoadingController) {
    platform.ready().then(() => {
      if (this.platform.is('android')) {
       this.andridSer.createDatabase();

      }else{

      }


  });

   }
  callloginservice(){
    if(this.postData.employeeid.length<=0){
      this.toastSer.presentError('Please enter  Username');
    }else if(this.postData.epassword.length <=0){
      this.toastSer.presentError('Please enter  Password');

    }else{
      Constants.loginUserName = this.postData.employeeid;
      Constants.loginPassword = this.postData.epassword;

      this.serviceCall(this.postData.employeeid,this.postData.epassword);






    }
  }

  autoLoader() {
    this.loadingController.create({
      spinner:'lines',
      message: 'Loading, Please Wait ...',
      duration: 30000
    }).then((response) => {
      response.present();
      response.onDidDismiss().then((response1) => {
        console.log('Loader dismissed', response);
      });
    });
  }

  serviceCall(userid: any, password: any){
     this.httpService.logionService(userid,password).subscribe((response: any)=>{
        if(response.error === false){

          this.httpService.getAllChainages().subscribe((response34: any)=>{
            if(response34.error === false){
              Constants.chaingeListAndroid = response34.data;
              console.log('response34',Constants.chaingeListAndroid );
              this. platform.ready().then(() => {
                if (this.platform.is('android')) {
                  this.autoLoader();

                  this.andridSer.deleteChlist();
                  this.andridSer.deleteSections();
                  this.andridSer.deleteSubagency();

                  for (let i = 0; i < Constants.chaingeListAndroid.length; i++) {
                      this.andridSer.addChlist(Constants.chaingeListAndroid[i].bhno,
                        Constants.chaingeListAndroid[i].bridgeno,
                        Constants.chaingeListAndroid[i].chainage,
                        Constants.chaingeListAndroid[i].chainage_id,
                        Constants.chaingeListAndroid[i].easting,
                        Constants.chaingeListAndroid[i].northing,
                        Constants.chaingeListAndroid[i].package_id,
                        Constants.chaingeListAndroid[i].section_id,
                        Constants.chaingeListAndroid[i].type_of_bridge,
                        Constants.chaingeListAndroid[i].type_of_crossing,
                        Constants.chaingeListAndroid[i].type_of_structure);
                  }

                }
              });



             console.log('response',response.data);
              Constants.userId = response.data.user_id;
              Constants.userName = response.data.user_name;
              Constants.orgId = response.data.org_id;
              Constants.orgName = response.data.org_name;
              Constants.orgAddre = response.data.org_address;
              Constants.orgLogo = response.data.org_logo;
              Constants.projectId = response.data.project_id;
              Constants.projectName = response.data.project_name;
              Constants.clentName = response.data.client_name;
              Constants.projectLocation = response.data.project_location;
              Constants.packageList = response.data.packages;

              Constants.subAgencyList = response.data.subagencies;
              Constants.usertype = response.data.user_type;
              Constants.iterationCpunt = response.data.iteration_cnt;
              Constants.sectionListService = response.data.sections;



            Constants.subagenctList = response.data.subagencies;


          this. platform.ready().then(() => {
            if (this.platform.is('android')) {
              for (let i = 0; i < Constants.sectionListService.length; i++) {
                this.andridSer.addSections(Constants.sectionListService[i].package_id,
                  Constants.sectionListService[i].project_id,
                  Constants.sectionListService[i].section_id,
                  Constants.sectionListService[i].section_name);
              }
              for (let i = 0; i < Constants.subagenctList.length; i++) {
                this.andridSer.addSubagencies(Constants.subagenctList[i].pkg_id,
                  Constants.subagenctList[i].sa_id,
                  Constants.subagenctList[i].sa_logo,
                  Constants.subagenctList[i].sa_name,
                  Constants.subagenctList[i].section_id);
               }

            }
          });




             this.postData.employeeid = '';
             this.postData.epassword = '';
             if(Constants.usertype === 'staff'){
             this.router.navigate(['sidemenu']);
             }else{
              this.router.navigate(['admindashbord']);

             }


            }
           });
          }else{
          this.toastSer.presentError('Invalid Credentials');

        }
     });
  }

}
