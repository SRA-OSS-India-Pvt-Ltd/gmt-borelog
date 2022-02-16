import { ToastService } from 'src/app/services/toast.service';
import { HttpcallsService } from 'src/app/services/httpcalls.service';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';

import { Constants } from 'src/app/common/constants';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-nonedit1',
  templateUrl: './nonedit1.page.html',
  styleUrls: ['./nonedit1.page.scss'],
})
export class Nonedit1Page implements OnInit {
  layer1Id: any;
  orgName: any;
  orgAddrs: any;
  orgLogo: any;
  projName: any;
  clientName: any;
  projLocation: any;
  package: any;
  packageList: any = [];
  subAencyList: any =[];
  subAencyListValues: any =[];
  subAgencyAddress: any;
  subAgencyLogo: any;
  boreHoles: any;
  subAgency: any;
  layer1List: any = [];
  subAgencyId: any;
  constructor(
    public router: Router,
    public platform: Platform,
    public httpService: HttpcallsService,
    public toastService: ToastService) {
      this.layer1Id = Constants.laYer1Id;
      this.orgName = Constants.orgName;
      this.orgAddrs = Constants.orgAddre;
      this.orgLogo = Constants.orgLogo;
      this.projName = Constants.projectName;
      this.clientName = Constants.clentName;
      this.projLocation = Constants.projectLocation;
      this.packageList = Constants.packageList;
      this.subAencyList = Constants.subAgencyList;
      this.getWebData();


    }

    packageChange($event){
      this.package = $event.target.value;
      console.log($event.target.value);
     }

    ngOnInit() {
    }
    subAgencyChange($event){
      this.subAencyListValues = [$event.target.value];
      console.log('array', this.subAencyListValues);
      if(this.subAencyListValues.length>0){
        this.subAgencyId = this.subAencyListValues[0].sa_id;

        this.subAgency = this.subAencyListValues[0].sa_name;
        this.subAgencyAddress = this.subAencyListValues[0].sa_address;
        this.subAgencyLogo = this.subAencyListValues[0].sa_logo;



      }
    }

     getWebData(){
      this.layer1List = [];

       this.httpService.getBoredetails(Constants.laYer1Id).subscribe((response: any)=>{
        this.layer1List = response.data;
        console.log('list',this.layer1List);
        this.boreHoles = this.layer1List[0].no_of_bh;
        if(this.layer1List[0].org_id === '1'){
          this.orgName = 'Aarvee Associates';
          this.orgAddrs = 'Hyderabad';
          this.orgLogo = 'http:\/\/sraossinc.net:7071\/borelogapi\/images\/aarvee-icon.png';
          this.projName ='DFCCIL';
          this.clientName = 'DFCCIL';
          this.projLocation = 'Hyderabad';
        }
         if(this.layer1List[0].package_id === '1'){
           console.log('pack');
           this.package = 'DFCCIL Package-1';
         }else if(this.layer1List[0].package_id === '2'){
          this.package = 'DFCCIL Package-2';
        }else if(this.layer1List[0].package_id === '3'){
          this.package = 'DFCCIL Package-3';
        }

         if(this.layer1List[0].sa_id === '1'){

  this.subAgencyId = '1';

  this.subAgency = 'SubAgency-1';
  this.subAgencyAddress = 'Hyderabad';
  this.subAgencyLogo = 'http://sraossinc.net:7071/borelogapi/images/subagency.png';
}else if(this.layer1List[0].sa_id === '2'){

  this.subAgencyId = '2';

  this.subAgency = 'SubAgency-2';
  this.subAgencyAddress = 'Hyderabad';
  this.subAgencyLogo = 'http://sraossinc.net:7071/borelogapi/images/subagency2.png';
}



       });
     }

    onClick(){
      this.router.navigate(['nonedit2']);
      Constants.webbhid = Constants.laYer1Id;
      Constants.webbhid = Constants.laYer1Id;

    }

  }
