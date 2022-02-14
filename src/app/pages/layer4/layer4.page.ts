import { Router } from '@angular/router';
import { AndroidDatabaseService } from 'src/app/database/android-database.service';
import { ToastService } from './../../services/toast.service';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import SignaturePad from 'signature_pad';
import { Constants } from 'src/app/common/constants';
import { HttpcallsService } from 'src/app/services/httpcalls.service';
import { Platform } from '@ionic/angular';


@Component({
  selector: 'app-layer4',
  templateUrl: './layer4.page.html',
  styleUrls: ['./layer4.page.scss'],
})
export class Layer4Page implements  AfterViewInit {

  @ViewChild('canvas') canvasEl:  ElementRef;
  @ViewChild('canvas1') canvasEl1:  ElementRef;
  @ViewChild('canvas2') canvasEl2:  ElementRef;

signaturePad;
signaturePad1;
signaturePad2;
signatureImg: string;
signatureImg1: string;
signatureImg2: string;
base641: any;
base642: any;
base643: any;

depthOfTermination: any;

date: any;
aarveRepresName: any;
subAgencyRepresentivaeName: any;
clientRepresNaame: any;
layer1List: any = [];
bhid: any;
  constructor(public toastSer: ToastService,
    public androidDatabase: AndroidDatabaseService,
    public router: Router,
    public httpService: HttpcallsService,
    public platform: Platform
) {
      this.date = new Date().toISOString();
      console.log('date',this.date);
      platform.ready().then(() => {
        if (this.platform.is('android')) {
          this.getLayer1LastId();

        }else{


        }


      });
         }
     ngAfterViewInit() {
      this.signaturePad = new SignaturePad(this.canvasEl.nativeElement);
      this.signaturePad1 = new SignaturePad(this.canvasEl1.nativeElement);
      this.signaturePad2 = new SignaturePad(this.canvasEl2.nativeElement);

    }

    startDrawing(event: Event) {
      console.log(event);
      // works in device not in browser

    }

    moved(event: Event) {
      // works in device not in browser
    }

    clearPad() {
      this.router.navigate(['viewlist']);

    }

    savePad() {
      this.base641 = this.signaturePad.toDataURL();
      this.signatureImg = this.base641;
      this.base642 = this.signaturePad1.toDataURL();
      this.signatureImg1 = this.base642;
      this.base643 = this.signaturePad2.toDataURL();
      this.signatureImg2 = this.base643;


    }
     validation(){
       if(this.depthOfTermination === undefined){
       this.toastSer.presentError('please give the Depth of Termination');
       }else if(this.date === undefined){
        this.toastSer.presentError('please give the Borehole End date');

       }else if(this.aarveRepresName === undefined){
        this.toastSer.presentError('please give the AARVEE Representative Name');

       }else if(this.signaturePad.toDataURL() === undefined){
        this.toastSer.presentError('please give the AARVEE Representative Signature');

       }else if(this.subAgencyRepresentivaeName === undefined){
        this.toastSer.presentError('please give the Sub Agency Representative Name');

       }else if(this.signaturePad1.toDataURL() === undefined){
        this.toastSer.presentError('please give the Sub Agency Representative Signature');

       }else if(this.clientRepresNaame === undefined){
        this.toastSer.presentError('please give the Client Representative Name');

       }else if(this.signaturePad2.toDataURL() === undefined){
        this.toastSer.presentError('please give the Client Representative Signature');

       }else{


          this.adding();
       }
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

    addDatabase(){
      this.base641 = this.signaturePad.toDataURL();
      this.signatureImg = this.base641;
      this.base642 = this.signaturePad1.toDataURL();
      this.signatureImg1 = this.base642;
      this.base643 = this.signaturePad2.toDataURL();
      this.signatureImg2 = this.base643;
     console.log(this.base641,this.base642,this.base643);
      this.androidDatabase.updateLayer4(this.depthOfTermination,this.date,
        this.aarveRepresName,this.base641,this.subAgencyRepresentivaeName,this.base642,this.clientRepresNaame,this.base643,
        Constants.laYer1Id);
        this.router.navigate(['viewlist']);
    }

    submitweb(){
      this.base641 = this.signaturePad.toDataURL();
      this.signatureImg = this.base641;
      this.base642 = this.signaturePad1.toDataURL();
      this.signatureImg1 = this.base642;
      this.base643 = this.signaturePad2.toDataURL();
      this.signatureImg2 = this.base643;

      this.httpService.submitLayer4(Constants.webbhid,4,this.depthOfTermination,this.date,
        this.aarveRepresName,this.base641,this.subAgencyRepresentivaeName,this.base642,
        this.clientRepresNaame,this.base643,'').subscribe((response: any)=>{
          console.log('response',response);
          this.toastSer.presentSuccess(response.msg);
          this.router.navigate(['viewlist']);

        });
    }
    clear1(){
      this.signaturePad.clear();
    }
    clear2(){
      this.signaturePad1.clear();
    }
    clear3(){
      this.signaturePad2.clear();
    }



    adding(){
      this. platform.ready().then(() => {
         if (this.platform.is('android')) {
         this.addDatabase();
         }else{
          this.submitweb();
         }
     });
    }

  }
