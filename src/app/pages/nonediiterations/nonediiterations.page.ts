import { Constants } from 'src/app/common/constants';
import { ToastService } from 'src/app/services/toast.service';
import { Router } from '@angular/router';
import { HttpcallsService } from 'src/app/services/httpcalls.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nonediiterations',
  templateUrl: './nonediiterations.page.html',
  styleUrls: ['./nonediiterations.page.scss'],
})
export class NonediiterationsPage implements OnInit {
  iterationList: any = [];
  layer1List: any = [];
  countList: any = [];
  count: any;
  constructor(public httpService: HttpcallsService,
    public router: Router,

    public toastService: ToastService) {
      this.getWebBoreItrations();

  }

  ngOnInit() {}

  ionViewDidEnter(){
    this.getWebBoreItrations();

  }

  getWebBoreItrations() {
    this.httpService
      .getAllBoreIterations(Constants.webbhid)
      .subscribe((response: any) => {
        console.log('response', response);
        if (response.error === false) {
          this.iterationList = response.data;
        }
      });
  }








  moving(iterationId: any,sno: any) {
    this.moveToWebIterationsByID(iterationId,sno);

  }

  moveToWebIterationsByID(iterationId: any,sno: any){
    Constants.iterationId = iterationId;
    Constants.sno = sno;
    this.router.navigate(['nonedit3']);

  }





  moveToLayer4(){

    this.router.navigate(['nonedit4']);


  }


}
