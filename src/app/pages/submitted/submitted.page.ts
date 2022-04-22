import { Constants } from 'src/app/common/constants';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-submitted',
  templateUrl: './submitted.page.html',
  styleUrls: ['./submitted.page.scss'],
})
export class SubmittedPage implements OnInit {
sampleList: any =[];
  constructor(public router: Router) {
    this.sampleList = Constants.submitbhList;
   }

  ngOnInit() {
  }

  onClick(){
    this.router.navigate(['samplescreen']);
  }

}
