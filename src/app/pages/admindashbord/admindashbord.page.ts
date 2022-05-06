import { AndroidDatabaseService } from 'src/app/database/android-database.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AlertController, Platform } from '@ionic/angular';
import { Constants } from 'src/app/common/constants';

@Component({
  selector: 'app-admindashbord',
  templateUrl: './admindashbord.page.html',
  styleUrls: ['./admindashbord.page.scss'],
})
export class AdmindashbordPage implements OnInit {
  empName: any;
  constructor(public router: Router,
    public alertCtrl: AlertController,
    public platform: Platform,
    public androidDatabase: AndroidDatabaseService
    ) {
      this.empName = Constants.userName;

     }

  ngOnInit() {
  }
  movetoList(){
    this.router.navigate(['viewlist1']);

  }
  logOut(){
    this.callalert();
  }
  async callalert() {
    const alert = await this.alertCtrl.create({
      header: 'Log out',
      subHeader: 'Are you sure want to logout ?',
      buttons: [
        {
          text: 'Yes',
          handler: (redc) => {
            this. platform.ready().then(() => {
              if (this.platform.is('android')) {
                this.deleteTabledata();
                this.router.navigate(['home']);

              }else{
                this.router.navigate(['home']);

              }
            });
          },
        },
        {
          text: 'No',
        },
      ],
    });
    alert.present();
  }

  gotosample(){
    this.router.navigate(['samplescreen']);
  }

  deleteTabledata(){
    this.androidDatabase.deleteChlist();
    this.androidDatabase.deleteSections();
    this.androidDatabase.deleteSubagency();
    this.androidDatabase.deleteUSer();


  }

}
