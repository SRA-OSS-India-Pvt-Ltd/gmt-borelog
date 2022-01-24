import { Component, OnInit, ViewChild, HostListener, ElementRef, AfterViewInit } from '@angular/core';
import SignaturePad from 'signature_pad';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery/ngx';


@Component({
  selector: 'app-layer4',
  templateUrl: './layer4.page.html',
  styleUrls: ['./layer4.page.scss'],
})
export class Layer4Page implements OnInit, AfterViewInit {

  @ViewChild('canvas', { static: true }) signaturePadElement;
signaturePad;
depthOfTermination: any;
endDate: any;
date: any;
aarveRepresName: any;
subAgencyRepresentivaeName: any;
clientRepresNaame: any;
  constructor(private base64ToGallery: Base64ToGallery,
    private elementRef: ElementRef,) {
      this.date = new Date().toISOString();
      console.log('date',this.date);
      this.endDate = this.date;

     }
  ngOnInit(): void {
    this.init();
  }


  // eslint-disable-next-line @typescript-eslint/member-ordering
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.init();
  }

  init() {
    const canvas: any = this.elementRef.nativeElement.querySelector('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight - 140;
    if (this.signaturePad) {
      this.signaturePad.clear(); // Clear the pad on init
    }
  }

  public ngAfterViewInit(): void {
    this.signaturePad = new SignaturePad(this.signaturePadElement.nativeElement);
    this.signaturePad.clear();
    this.signaturePad.penColor = 'rgb(56,128,255)';
  }

  save(): void {
    const img = this.signaturePad.toDataURL();
    this.base64ToGallery.base64ToGallery(img).then(
      res => console.log('Saved image to gallery ', res),
      err => console.log('Error saving image to gallery ', err)
    );
  }

  isCanvasBlank(): boolean {
    if (this.signaturePad) {
      return this.signaturePad.isEmpty() ? true : false;
    }
  }

  clear() {
    this.signaturePad.clear();
  }

  undo() {
    const data = this.signaturePad.toData();
    if (data) {
      data.pop(); // remove the last dot or line
      this.signaturePad.fromData(data);
    }
  }

}
