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
  countList: any = [];
  countListSec: any = [];
  countListSub: any = [];
  userList: any= [];
  count: any;
  countSec: any;
  countSubAg: any;
  constructor(public router: Router,
    public toastSer: ToastService,
   public httpService: HttpcallsService,
   public andridSer: AndroidDatabaseService,
   public platform: Platform,
   public loadingController: LoadingController) {
    this.platform.ready().then(() => {
      if (this.platform.is('android')) {
       this.andridSer.createDatabase();
       this.getUserData();

      }else{

      }


  });

   }


   ionViewDidEnter(){
    this.platform.ready().then(() => {
      if (this.platform.is('android')) {
        this.getUserData();

      }
    });

   }
   getUserData(){
    this.andridSer.getUser().then((data) => {
      this.userList = [];
      console.log('size',data.rows.length);
      if (data.rows.length > 0) {
        for (let i = 0; i < data.rows.length; i++) {
          this.userList.push(data.rows.item(i));
        }
        console.log('userType',this.userList[0].userType);
        Constants.userId =this.userList[0].userId;
        Constants.userName =this.userList[0].userName;
        Constants.usertype =this.userList[0].userType;
        Constants.orgId = this.userList[0].orgId;
        Constants.orgName = this.userList[0].orgName;
        Constants.orgAddre = this.userList[0].orgAddre;
        Constants.orgLogo = this.userList[0].orgLogo;
        Constants.projectId = this.userList[0].projectId;
        Constants.projectName = this.userList[0].projectName;
        Constants.clentName = this.userList[0].clentName;
        Constants.projectLocation = this.userList[0].projectLocation;
        Constants.iterationCpunt = this.userList[0].fields;


        if(this.userList[0].userType === 'staff'){
          this.router.navigate(['sidemenu']);
        }else if(this.userList[0].userType === 'admin'){
         this.router.navigate(['admindashbord']);

        }else{
          console.log('userTypeelse',this.userList[0].userType);

        }

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

      this. platform.ready().then(() => {
        if (this.platform.is('android')) {



          this.andridSer.getUser().then((data) => {
            this.userList = [];
            console.log('size',data.rows.length);
            if (data.rows.length > 0) {
              for (let i = 0; i < data.rows.length; i++) {
                this.userList.push(data.rows.item(i));
              }
              console.log('userType',this.userList[0].userType);
              Constants.userId =this.userList[0].userId;
              Constants.userName =this.userList[0].userName;
              Constants.usertype =this.userList[0].userType;

              if(this.userList[0].userType === 'staff'){
                this.router.navigate(['sidemenu']);
              }else if(this.userList[0].userType === 'admin'){
               this.router.navigate(['admindashbord']);

              }else{
                if(window.navigator.connection.type === 'none'){
                  this.toastSer.presentError('Please check your internet connection');
                }else{
                  this.serviceCall(this.postData.employeeid,this.postData.epassword);

                }
              }
            }else{
              if(window.navigator.connection.type === 'none'){
                this.toastSer.presentError('Please check your internet connection');
              }else{
                this.serviceCall(this.postData.employeeid,this.postData.epassword);

              }

            }
          });












        }else{
          this.serviceCall(this.postData.employeeid,this.postData.epassword);

        }
      });

    }
  }

  autoLoader() {
    this.loadingController.create({
      spinner:'lines',
      message: 'Loading required data. Please wait for a moment',
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
              this.andridSer.deleteChlist();
              this.andridSer.deleteSections();
              this.andridSer.deleteSubagency();
              this.andridSer.deletePackage();

              for (let i = 0; i < Constants.packageList.length; i++) {
                this.andridSer.addPackage(Constants.packageList[i].pkg_id,
                  Constants.packageList[i].pkg_name);
               }


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


          this. platform.ready().then(() => {
            if (this.platform.is('android')) {
              this.andridSer.addUser(response.data.user_id,
                response.data.user_name,
                response.data.user_type,
                response.data.org_id,
                response.data.org_name,
                response.data.org_address,
                response.data.org_logo,
                response.data.project_id,
                response.data.project_name,
                response.data.client_name,
                response.data.project_location,
                response.data.packages,
                response.data.iteration_cnt);


              if(response.data.user_type === 'staff'){
                this.autoLoader();


              this.httpService.getAllChainagesByUserID(response.data.user_id).subscribe((response34: any)=>{
                if(response34.error === false){
                  Constants.chaingeListAndroid = response34.data;
                  console.log('response34',Constants.chaingeListAndroid );


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




          }else{
          this.toastSer.presentError('Invalid Credentials');

        }
     });
  }

}
