import { HttpcallsService } from './../services/httpcalls.service';
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
    public toastSer: ToastService,
   public httpService: HttpcallsService) {}
  callloginservice(){
    if(this.postData.employeeid.length<=0){
      this.toastSer.presentError('Please enter  Username');
    }else if(this.postData.epassword.length <=0){
      this.toastSer.presentError('Please enter  Password');

    }else{
      Constants.loginUserName = this.postData.employeeid;
      Constants.loginPassword = this.postData.epassword;
       this.serviceCall(this.postData.employeeid,this.postData.epassword);
    }
  }
  serviceCall(userid: any, password: any){
     this.httpService.logionService(userid,password).subscribe((response: any)=>{
        if(response.error === false){
             console.log('response',response.data);
              Constants.userId = response.data.user_id;
              Constants.userName = response.data.user_name;
              Constants.orgId = response.data.org_id;
              Constants.orgName = response.data.org_name;
              Constants.orgAddre = response.data.org_address;
              Constants.orgLogo = response.data.org_logo;
              Constants.projectId = response.data.project_id;
              Constants.projectName = response.data.project_name;
              Constants.clentName = response.data.client_name;
              Constants.projectLocation = response.data.project_location;
              Constants.packageList = response.data.packages;
              Constants.subAgencyList = response.data.subagencies;
              Constants.usertype = response.data.user_type;


             this.postData.employeeid = '';
             this.postData.epassword = '';
             if(Constants.usertype === 'staff'){
             this.router.navigate(['sidemenu']);
             }else{
              this.router.navigate(['admindashbord']);

             }

        }else{
          this.toastSer.presentError('Invalid Credentials');

        }
     });
  }

}
