import { ToastService } from './../services/toast.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Constants } from '../common/constants';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public postData = {
    employeeid: '',
    epassword: '',
  };

  constructor(public router: Router,
    public toastSer: ToastService) {}
  callloginservice(){
    if(this.postData.employeeid.length<=0){
      this.toastSer.presentError('Please Give the Username');
    }else if(this.postData.epassword.length <=0){
      this.toastSer.presentError('Please Give the Password');

    }else{
      Constants.loginUserName = this.postData.employeeid;
      Constants.loginPassword = this.postData.epassword;
      this.postData.employeeid = '';
      this.postData.epassword = '';
      this.router.navigate(['sidemenu']);
    }
  }

}
