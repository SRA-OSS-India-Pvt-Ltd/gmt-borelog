import { HttpcallsService } from 'src/app/services/httpcalls.service';
import { Router } from '@angular/router';

import { ToastService } from './../../services/toast.service';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import SignaturePad from 'signature_pad';
import { Constants } from 'src/app/common/constants';

@Component({
  selector: 'app-nonedit4',
  templateUrl: './nonedit4.page.html',
  styleUrls: ['./nonedit4.page.scss'],
})
export class Nonedit4Page implements AfterViewInit {
  @ViewChild('canvas') canvasEl:  ElementRef;
  @ViewChild('canvas1') canvasEl1:  ElementRef;
  @ViewChild('canvas2') canvasEl2:  ElementRef;
  @ViewChild('previewimage') waterMarkImage: ElementRef;
  @ViewChild('previewimage2') waterMarkImage2: ElementRef;
  @ViewChild('previewimagedep2') waterMarkImagedep2: ElementRef;
  @ViewChild('previewimagedep3') waterMarkImagedep3: ElementRef;
  @ViewChild('previewimagesamp2') waterMarkImagesamp2: ElementRef;
  @ViewChild('previewimagesamp3') waterMarkImagesamp3: ElementRef;


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
pdf: any;
waterTable: any;
constructor(public toastSer: ToastService,
    public httpService: HttpcallsService,
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
      this.layer1List = [];
      this.layer1List = [];
      this.httpService.getBoredetails(Constants.webbhid).subscribe((response: any)=>{
        this.layer1List = response.data;


        console.log('layer1List',this.layer1List);
        if(this.layer1List.length>0){
          this.waterTable = this.layer1List[0].water_table_rl;

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
         this.pdf = this.layer1List[0].pdfreport;
         this.waterMarkImage.nativeElement.src =
         this.layer1List[0].depth_termination_pic1;
         this.waterMarkImagedep2.nativeElement.src =
         this.layer1List[0].depth_termination_pic2;
         this.waterMarkImagedep3.nativeElement.src =
         this.layer1List[0].depth_termination_pic3;



         this.waterMarkImage2.nativeElement.src =
         this.layer1List[0].sample_pic1;

         this.waterMarkImagesamp2.nativeElement.src =
         this.layer1List[0].sample_pic2;
         this.waterMarkImagesamp3.nativeElement.src =
         this.layer1List[0].sample_pic3;




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

  submitweb(){
    this.router.navigate(['admindashbord']);
  }

  onClick(url: any){
    window.open(url);
  }


}
