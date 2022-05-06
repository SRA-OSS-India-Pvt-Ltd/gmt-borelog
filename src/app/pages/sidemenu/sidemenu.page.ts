import { Constants } from 'src/app/common/constants';
import { AndroidDatabaseService } from './../../database/android-database.service';
import { ToastService } from './../../services/toast.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AlertController, MenuController } from '@ionic/angular';
import { Platform } from '@ionic/angular';


@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.page.html',
  styleUrls: ['./sidemenu.page.scss'],
})
export class SidemenuPage implements OnInit {
empName: any;
  constructor(private router: Router,
    private menu: MenuController,
    public platform: Platform,
    public alertCtrl: AlertController,
    public toaseSer: ToastService,
    public androidDatabase: AndroidDatabaseService
    ) {
      Constants.webbhid = '';
      Constants.laYer1Id = '';

      platform.ready().then(() => {
        if (this.platform.is('android')) {
         this.androidDatabase.createDatabase();

        }else{

        }


    });
    this.empName = Constants.userName;

    }

  ngOnInit() {
    Constants.webbhid = '';
    Constants.laYer1Id = '';

  }
  ionViewDidEnter(){
    Constants.webbhid = '';
    Constants.laYer1Id = '';

  }

  openSideNav() {
    this.menu.enable(true, 'menu-content');
    this.menu.open('menu-content');
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
  moveToOrganization(){
    this.router.navigate(['organization']);
    this.menu.close();

  }
  moveto(){
    this.router.navigate(['boreholeinformation']);
    this.menu.close();

  }
  loggongInfo(){
   this.router.navigate(['logginginformation']);
   this.menu.close();

  }
  layer4(){
    this.router.navigate(['layer4']);
    this.menu.close();

  }
  movetoLayer1(){
    this.router.navigate(['organization']);
  //  this.router.navigate(['layer4']);

  }
  movetoList(){
    this.router.navigate(['viewlist']);

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
