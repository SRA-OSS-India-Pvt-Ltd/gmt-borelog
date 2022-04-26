import { Platform } from '@ionic/angular';
import { ToastService } from './../../services/toast.service';
import { HttpcallsService } from 'src/app/services/httpcalls.service';
import { Constants } from 'src/app/common/constants';
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable quote-props */
/* eslint-disable @typescript-eslint/naming-convention */
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-samplescreen',
  templateUrl: './samplescreen.page.html',
  styleUrls: ['./samplescreen.page.scss'],
})
export class SamplescreenPage implements OnInit {
  package: any;
  sectionId: any;
  sectionList: any = [];
  packageList: any = [];

  constructor(public router: Router,
    public httpService: HttpcallsService,
    public toastSer: ToastService,
    public platform: Platform) {
    this.packageList = Constants.packageList;

  }

  ngOnInit() {
  }

  onClick(){
    this.router.navigate(['sidemenu']);
  }
  packageChange($event){
    this.package = $event.target.value;
    console.log($event.target.value);


    if(this.package === '1' ){
     this.sectionList =[{"section_id":'1',"project_id":"1","package_id":"1","section_name":"Section1"},
     {"section_id":"4","project_id":"1","package_id":"1","section_name":"Section2"},
     {"section_id":"5","project_id":"1","package_id":"1","section_name":"Section3"},
     {"section_id":"6","project_id":"1","package_id":"1","section_name":"Section4"},
     {"section_id":"7","project_id":"1","package_id":"1","section_name":"Section5"},
     {"section_id":"8","project_id":"1","package_id":"1","section_name":"Section6"},
     {"section_id":"9","project_id":"1","package_id":"1","section_name":"Section7"},
     {"section_id":"10","project_id":"1","package_id":"1","section_name":"Section8"}];
   }else if(this.package === '2'){
     this.sectionList =[{"section_id":"2","project_id":"1","package_id":"2","section_name":"Section1"},
     {"section_id":"11","project_id":"1","package_id":"2","section_name":"Section2"},
     {"section_id":"12","project_id":"1","package_id":"2","section_name":"Section3"},
     {"section_id":"13","project_id":"1","package_id":"2","section_name":"Section4"},
     {"section_id":"14","project_id":"1","package_id":"2","section_name":"Section5"},
     {"section_id":"15","project_id":"1","package_id":"2","section_name":"Section6"},
     {"section_id":"16","project_id":"1","package_id":"2","section_name":"Section7"},
     {"section_id":"17","project_id":"1","package_id":"2","section_name":"Section8"},
     {"section_id":"18","project_id":"1","package_id":"2","section_name":"Section9"},
     {"section_id":"19","project_id":"1","package_id":"2","section_name":"Section10"},
     {"section_id":"20","project_id":"1","package_id":"2","section_name":"Section11"},
     {"section_id":"21","project_id":"1","package_id":"2","section_name":"Section12"},
     {"section_id":"22","project_id":"1","package_id":"2","section_name":"Section13"}];
   }else if(this.package === '3'){

     this.sectionList = [{"section_id":"3","project_id":"1","package_id":"3","section_name":"Section1"},
     {"section_id":"23","project_id":"1","package_id":"3","section_name":"Section2"},
     {"section_id":"24","project_id":"1","package_id":"3","section_name":"Section3"},
     {"section_id":"25","project_id":"1","package_id":"3","section_name":"Section4"},
     {"section_id":"26","project_id":"1","package_id":"3","section_name":"Section5"},
     {"section_id":"27","project_id":"1","package_id":"3","section_name":"Section6"},
     {"section_id":"28","project_id":"1","package_id":"3","section_name":"Section7"}];
   }
   }
   sectionChange($event){
    this.sectionId= $event.target.value;
   console.log($event.target.value);
  }

  yetToSubmit(){
    if(this.package === undefined){
     this.toastSer.presentError('Please select Package');
    }else if(this.sectionId === undefined){
      this.toastSer.presentError('Please select Section');

    }else{

      this. platform.ready().then(() => {
        if (this.platform.is('android')) {
          if(window.navigator.connection.type === 'none'){
            this.toastSer.presentError('Please check your internet connection');

           }else{

            this.httpService.getSampleStatus('1',this.package,this.sectionId,'yet_to_submit')
            .subscribe((response: any)=>{
              console.log('response',response);

              if(response.error === false){
                Constants.yetbhidList = response.data;
                this.router.navigate(['yettosubmit']);
              }else{
                this.toastSer.presentError(response.msg);

              }
            });
          }


        }else{
          this.httpService.getSampleStatus('1',this.package,this.sectionId,'yet_to_submit')
          .subscribe((response: any)=>{
            console.log('response',response);

            if(response.error === false){
              Constants.yetbhidList = response.data;
              this.router.navigate(['yettosubmit']);
            }else{
              this.toastSer.presentError(response.msg);

            }
          });

        }

      });




    }
  }
  submitted(){
    if(this.package === undefined){
      this.toastSer.presentError('Please select Package');
     }else if(this.sectionId === undefined){
       this.toastSer.presentError('Please select Section');

     }else{

      this. platform.ready().then(() => {
        if (this.platform.is('android')) {
          if(window.navigator.connection.type === 'none'){
            this.toastSer.presentError('Please check your internet connection');

          }else{
            this.httpService.getSampleStatus('1',this.package,this.sectionId,'submitted')
            .subscribe((response: any)=>{
              console.log('response',response);

              if(response.error === false){
                Constants.submitbhList = response.data;
                this.router.navigate(['submitted']);
              }else{
                this.toastSer.presentError(response.msg);
              }
            });

           }
        }else{
          this.httpService.getSampleStatus('1',this.package,this.sectionId,'submitted')
          .subscribe((response: any)=>{
            console.log('response',response);

            if(response.error === false){
              Constants.submitbhList = response.data;
              this.router.navigate(['submitted']);
            }else{
              this.toastSer.presentError(response.msg);
            }
          });

        }

      });






     }

  }
}
