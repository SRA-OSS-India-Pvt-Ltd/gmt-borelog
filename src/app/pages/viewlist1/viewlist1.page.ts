import { ToastService } from './../../services/toast.service';
import { Router } from '@angular/router';
import { Constants } from 'src/app/common/constants';
import { AndroidDatabaseService } from './../../database/android-database.service';
import { Component, OnInit } from '@angular/core';
import { HttpcallsService } from 'src/app/services/httpcalls.service';


@Component({
  selector: 'app-viewlist1',
  templateUrl: './viewlist1.page.html',
  styleUrls: ['./viewlist1.page.scss'],
})
export class Viewlist1Page implements OnInit {
  layer1List: any = [];
  project: any;
  constructor(public androidDatabase: AndroidDatabaseService,
    public router: Router,
    public httpService: HttpcallsService,
    public toastser: ToastService) {
    this.getSubmittedBoredata();
    this.project = 'DFCCIL';

  }

  ngOnInit() {
  }
  getSubmittedBoredata(){
    this.layer1List = [];
    this.httpService.getSubmittedBoredata(Constants.userId,Constants.usertype).subscribe((response: any)=>{
      this.layer1List = response.data;
      console.log('data',this.layer1List);
    });
  }
  onClick(){
    this.router.navigate(['admindashbord']);
  }
  moving(bhid: any){


        Constants.laYer1Id = bhid;
        this.router.navigate(['nonedit1']);

      }

open(url: any){
  window.open(url);
}



}
