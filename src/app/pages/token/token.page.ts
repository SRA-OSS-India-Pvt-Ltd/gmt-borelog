/* eslint-disable no-var */
import { AndroidDatabaseService } from 'src/app/database/android-database.service';
import { HttpcallsService } from 'src/app/services/httpcalls.service';
import { ToastService } from 'src/app/services/toast.service';
import { LoadingController, Platform } from '@ionic/angular';

import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-token',
  templateUrl: './token.page.html',
  styleUrls: ['./token.page.scss'],
})
export class TokenPage implements OnInit {
  token: any;
  tokenList: any;
  constructor(private httpClientSer: HttpcallsService,
    private router: Router,
    private toastSer: ToastService,
    private loadingController: LoadingController,
    private database: AndroidDatabaseService,

    private platform: Platform) {
      this.platform.ready().then(() => {
        if (this.platform.is('android')) {


          this.database.createDatabase();
          this.getTokenData();


        }else{
         router.navigate(['home']);
        }
      });
    }

  ngOnInit() {
  }
  ionViewDidEnter(){
    this.platform.ready().then(() => {
      if (this.platform.is('android')) {
        this.getTokenData();

      }
    });

   }

   getTokenData(){



    this.database.getToken().then((data: any) => {
      this.tokenList = [];
      //console.log('size',data.rows.length);
      if (data.rows.length > 0) {
        for (let i = 0; i < data.rows.length; i++) {
          this.tokenList.push(data.rows.item(i));
        }

         var userid =this.tokenList[0].userid;
         var username =this.tokenList[0].username;
         var usertype =this.tokenList[0].usertype;
         var tokenid = this.tokenList[0].tokenid;

        //console.log('userlength',this.tokenList[0].username.length);

        if(this.tokenList[0].username.length > 0){
          this.router.navigate(['home']);


        }
      }
    });
  }


  callTokenService(){
    if(this.token === undefined || this.token === null || this.token === ''){
     this.toastSer.presentError('Please enter token key');
    }else{
      this.autoLoader();
       this.httpClientSer.validateToken(this.token).subscribe((response: any)=>{
         //console.log('response',response);
         if(response.error === false){
          this.database.deleteToken();

           this.toastSer.presentSuccess(response.msg);

           this.database.addToken(response.data.user_id,response.data.user_name,response.data.user_type,response.data.tokenid);

           this.router.navigate(['home']);

         }else{
            this.toastSer.presentError(response.msg);
         }
       });
    }

  }
  autoLoader() {
    this.loadingController.create({
      spinner:'lines',
      message: 'checking Please wait..',
      duration: 2000
    }).then((response) => {
      response.present();
      response.onDidDismiss().then((response1) => {
        //console.log('Loader dismissed', response);
      });
    });
  }
}
