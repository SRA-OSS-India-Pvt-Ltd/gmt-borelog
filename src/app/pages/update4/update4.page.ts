import { Router } from '@angular/router';
import { AndroidDatabaseService } from 'src/app/database/android-database.service';
import { ToastService } from './../../services/toast.service';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import SignaturePad from 'signature_pad';
import { Constants } from 'src/app/common/constants';

@Component({
  selector: 'app-update4',
  templateUrl: './update4.page.html',
  styleUrls: ['./update4.page.scss'],
})
export class Update4Page implements AfterViewInit {
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

constructor(public toastSer: ToastService,
    public androidDatabase: AndroidDatabaseService,
    public router: Router) {
      this.getLayer1();
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
    this.signaturePad.clear();
    this.signaturePad1.clear();
    this.signaturePad2.clear();

  }

  savePad() {
    this.base641 = this.signaturePad.toDataURL();
    this.signatureImg = this.base641;
    this.base642 = this.signaturePad1.toDataURL();
    this.signatureImg1 = this.base642;
    this.base643 = this.signaturePad2.toDataURL();
    this.signatureImg2 = this.base643;


  }
  getLayer1() {
    this.androidDatabase.getLayer1ById(Constants.laYer1Id).then((data) => {
      this.layer1List = [];
      console.log('size',data.rows.length);
      if (data.rows.length > 0) {
        for (let i = 0; i < data.rows.length; i++) {
          this.layer1List.push(data.rows.item(i));
        }
        console.log('layer1List',this.layer1List);
        if(this.layer1List.length>0){

         this.depthOfTermination = this.layer1List[0].depth_termination;
         this.date = this.layer1List[0].bh_enddate;
         this.aarveRepresName = this.layer1List[0].rv_rep_name;
         this.base641 = this.layer1List[0].rv_rep_sign;
         this.subAgencyRepresentivaeName = this.layer1List[0].sa_rep_name;
         this.base642 = this.layer1List[0].sa_rep_sign;
         this.clientRepresNaame = this.layer1List[0].client_rep_name;
         this.base643 = this.layer1List[0].client_rep_sign;
         this.signaturePad.fromDataURL(this.base641);
         this.signaturePad1.fromDataURL(this.base642);
         this.signaturePad2.fromDataURL(this.base643);



        }

      }
    });
  }

  updateImg1(){
this.signaturePad.clear();
  }
  updateImg2(){
    this.signaturePad1.clear();

  }
  updateImg3(){
    this.signaturePad2.clear();

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


}