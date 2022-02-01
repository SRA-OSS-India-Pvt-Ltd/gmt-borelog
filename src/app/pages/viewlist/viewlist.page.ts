import { Router } from '@angular/router';
import { Constants } from 'src/app/common/constants';
import { AndroidDatabaseService } from './../../database/android-database.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewlist',
  templateUrl: './viewlist.page.html',
  styleUrls: ['./viewlist.page.scss'],
})
export class ViewlistPage implements OnInit {
layer1List: any =[];
  constructor(public androidDatabase: AndroidDatabaseService,
    public router: Router) {
    this.getLayer1();
  }

  ngOnInit() {
  }
  getLayer1() {
    this.androidDatabase.getLayer1().then((data) => {
      this.layer1List = [];
      console.log('size',data.rows.length);
      if (data.rows.length > 0) {
        for (let i = 0; i < data.rows.length; i++) {
          this.layer1List.push(data.rows.item(i));
        }
        console.log('layer1List',this.layer1List);

      }
    });
  }
  moveToUpdate(id: any){
    Constants.laYer1Id = id;
    this.router.navigate(['update1']);
  }
  moveToUpdate2(id: any){
    Constants.laYer1Id = id;
    this.router.navigate(['update2']);
  }
  moveToUpdate3(id: any){
    Constants.laYer1Id = id;
    this.router.navigate(['update3']);
  }

}
