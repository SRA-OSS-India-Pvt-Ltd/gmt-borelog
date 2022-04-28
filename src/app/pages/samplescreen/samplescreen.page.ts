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


    this.sectionList = Constants.sectionListService.filter((user: any) =>
    user.package_id.includes(this.package));
    console.log('sectionList',this.sectionList);

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

      this.package = null;
      this.sectionId = null;




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

      this.package = null;
      this.sectionId = null;







     }

  }
}
