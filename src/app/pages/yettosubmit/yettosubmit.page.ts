import { Platform } from '@ionic/angular';
import { Constants } from 'src/app/common/constants';
import { ToastService } from './../../services/toast.service';
import { HttpcallsService } from 'src/app/services/httpcalls.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-yettosubmit',
  templateUrl: './yettosubmit.page.html',
  styleUrls: ['./yettosubmit.page.scss'],
})
export class YettosubmitPage implements OnInit {
  bhidlist: any =[];
  bhidss: any;
  date5: any;

  constructor(public router: Router,
    public httpser: HttpcallsService,
    private toastSer: ToastService,
    public platform: Platform) {
      this.bhidlist = Constants.yetbhidList;
      this.date5 = new Date().toISOString();

    }

  ngOnInit() {
  }
  bhidChange($event){
    console.log($event.target.value);
    this.bhidss = $event.target.value;
  }

  submit(){
    if(this.bhidss === undefined){
      this.toastSer.presentError('Please select Bh Number');
    }else if(this.date5 === undefined){
      this.toastSer.presentError('Please select Sample Date');

    }else{

      this. platform.ready().then(() => {
        if (this.platform.is('android')) {
          if(window.navigator.connection.type === 'none'){
            this.toastSer.presentError('Please check your internet connection');

          }else{

            this.httpser.submitSampleStatus(Constants.userId,this.bhidss,this.date5).
            subscribe((response: any)=>{
              console.log('response',response);
              if(response.error === false){
                this.toastSer.presentSuccess(response.msg);
                this.router.navigate(['samplescreen']);

              }else{
                this.toastSer.presentError(response.msg);

              }

            });
          }
        }else{
          this.httpser.submitSampleStatus(Constants.userId,this.bhidss,this.date5).
          subscribe((response: any)=>{
            console.log('response',response);
            if(response.error === false){
              this.toastSer.presentSuccess(response.msg);
              this.router.navigate(['samplescreen']);

            }else{
              this.toastSer.presentError(response.msg);

            }

          });

        }

      });




    }
  }
  onClick(){
    this.router.navigate(['samplescreen']);
  }
}
