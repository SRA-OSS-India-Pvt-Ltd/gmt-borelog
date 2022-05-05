import { ToastService } from 'src/app/services/toast.service';
import { HttpcallsService } from 'src/app/services/httpcalls.service';

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
  section: any;
  sectionId: any;
  pid: any;
  boreHoles: any;
  subAgency: any;
  layer1List: any = [];
  subAgencyId: any;
  constructor(
    public router: Router,
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

    getWebData(){
      this.layer1List = [];

       this.httpService.getBoredetails(Constants.laYer1Id).subscribe((response: any)=>{
        this.layer1List = response.data;
        console.log('list',this.layer1List);
        this.boreHoles = this.layer1List[0].no_of_bh;
        this.section = this.layer1List[0].section_name;
        this.sectionId =this.layer1List[0].section_id;




        if(this.layer1List[0].org_id === '1'){
          this.orgName = 'Aarvee Associates';
          this.orgAddrs = 'Hyderabad';
          this.orgLogo = Constants.imageUrl+'/images\/aarvee-icon.png';
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

        this.subAgency =this.layer1List[0].sa_name;
        this.subAgencyLogo =this.layer1List[0].sa_logo;

      });
     }

    onClick(){
      this.router.navigate(['nonedit2']);
      Constants.webbhid = Constants.laYer1Id;
      Constants.webbhid = Constants.laYer1Id;

    }

  }
