import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
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
            this.router.navigate(['home']);
          },
        },
        {
          text: 'No',
        },
      ],
    });
    alert.present();
  }

}
