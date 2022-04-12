/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable quote-props */
import { ToastService } from 'src/app/services/toast.service';
import { HttpcallsService } from 'src/app/services/httpcalls.service';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';

import { Constants } from 'src/app/common/constants';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-web1',
  templateUrl: './web1.page.html',
  styleUrls: ['./web1.page.scss'],
})
export class Web1Page implements OnInit {
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
  pid: any;
  section: any;
  sectionId: any;
  sectionList: any = [];
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


      if(this.pid === '1' ){

        this.sectionList =[{"section_id":"1","project_id":"1","package_id":"1","section_name":"Section1"},
       {"section_id":"4","project_id":"1","package_id":"1","section_name":"Section2"},
       {"section_id":"5","project_id":"1","package_id":"1","section_name":"Section3"},
       {"section_id":"6","project_id":"1","package_id":"1","section_name":"Section4"},
       {"section_id":"7","project_id":"1","package_id":"1","section_name":"Section5"},
       {"section_id":"8","project_id":"1","package_id":"1","section_name":"Section6"},
       {"section_id":"9","project_id":"1","package_id":"1","section_name":"Section7"},
       {"section_id":"10","project_id":"1","package_id":"1","section_name":"Section8"}];
     }else if(this.pid === '2'){
       this.sectionList =[{"section_id":"2","project_id":"1","package_id":"2","section_name":"Section1"},
       {"section_id":"11","project_id":"1","package_id":"2","section_name":"Section2"},
       {"section_id":"12","project_id":"1","package_id":"2","section_name":"Section3"},
       {"section_id":"13","project_id":"1","package_id":"2","section_name":"Section4"},
       {"section_id":"14","project_id":"1","package_id":"2","section_name":"Section5"},
       {"section_id":"15","project_id":"1","package_id":"2","section_name":"Section6"},
       {"section_id":"16","project_id":"1","package_id":"2","section_name":"Section7"},
       {"section_id":"17","project_id":"1","package_id":"2","section_name":"Section8"},
       {"section_id":"18","project_id":"1","package_id":"2","section_name":"Section9"},
       {"section_id":"19","project_id":"1","package_id":"2","section_name":"Section10"},
       {"section_id":"20","project_id":"1","package_id":"2","section_name":"Section11"},
       {"section_id":"21","project_id":"1","package_id":"2","section_name":"Section12"},
       {"section_id":"22","project_id":"1","package_id":"2","section_name":"Section13"}];
     }else if(this.pid === '3'){

       this.sectionList = [{"section_id":"3","project_id":"1","package_id":"3","section_name":"Section1"},
       {"section_id":"23","project_id":"1","package_id":"3","section_name":"Section2"},
       {"section_id":"24","project_id":"1","package_id":"3","section_name":"Section3"},
       {"section_id":"25","project_id":"1","package_id":"3","section_name":"Section4"},
       {"section_id":"26","project_id":"1","package_id":"3","section_name":"Section5"},
       {"section_id":"27","project_id":"1","package_id":"3","section_name":"Section6"},
       {"section_id":"28","project_id":"1","package_id":"3","section_name":"Section7"}];
     }
     }
     sectionChange($event){
       this.sectionId= $event.target.value;
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

        if(this.layer1List[0].section_id === '1'){
          this.section = 'Section1';
          this.sectionId = 1;
        }else if(this.layer1List[0].section_id === '2'){
          this.section = 'Section1';
          this.sectionId = 2;

        }else if(this.layer1List[0].section_id === '3'){
          this.section = 'Section1';
          this.sectionId = 3;

        }else if(this.layer1List[0].section_id === '4'){
          this.section = 'Section2';
          this.sectionId = 4;

        }else if(this.layer1List[0].section_id === '5'){
          this.section = 'Section3';
          this.sectionId = 5;

        }else if(this.layer1List[0].section_id === '6'){
          this.section = 'Section4';
          this.sectionId = 6;

        }else if(this.layer1List[0].section_id === '7'){
          this.section = 'Section5';
          this.sectionId = 7;

        }else if(this.layer1List[0].section_id === '8'){
          this.section = 'Section6';
          this.sectionId = 8;

        }else if(this.layer1List[0].section_id === '9'){
          this.section = 'Section7';
          this.sectionId = 9;

        }else if(this.layer1List[0].section_id === '10'){
          this.section = 'Section8';
          this.sectionId = 10;

        }else if(this.layer1List[0].section_id === '11'){
          this.section = 'Section2';
          this.sectionId = 11;

        }else if(this.layer1List[0].section_id === '12'){
          this.section = 'Section3';
          this.sectionId = 12;

        }else if(this.layer1List[0].section_id === '13'){
          this.section = 'Section4';
          this.sectionId = 13;

        }else if(this.layer1List[0].section_id === '14'){
          this.section = 'Section5';
          this.sectionId = 14;

        }else if(this.layer1List[0].section_id === '15'){
          this.section = 'Section6';
          this.sectionId = 15;

        }else if(this.layer1List[0].section_id === '16'){
          this.section = 'Section7';
          this.sectionId = 16;

        }else if(this.layer1List[0].section_id === '17'){
          this.section = 'Section8';
          this.sectionId = 17;

        }else if(this.layer1List[0].section_id === '18'){
          this.section = 'Section9';
          this.sectionId = 18;

        }else if(this.layer1List[0].section_id === '19'){
          this.section = 'Section10';
          this.sectionId = 19;

        }else if(this.layer1List[0].section_id === '20'){
          this.section = 'Section11';
          this.sectionId = 20;

        }else if(this.layer1List[0].section_id === '21'){
          this.section = 'Section12';
          this.sectionId = 21;

        }else if(this.layer1List[0].section_id === '22'){
          this.section = 'Section13';
          this.sectionId = 22;

        }else if(this.layer1List[0].section_id === '23'){
          this.section = 'Section2';
          this.sectionId = 23;

        }else if(this.layer1List[0].section_id === '24'){
          this.section = 'Section3';
          this.sectionId = 24;

        }else if(this.layer1List[0].section_id === '25'){
          this.section = 'Section4';
          this.sectionId = 25;

        }else if(this.layer1List[0].section_id === '26'){
          this.section = 'Section5';
          this.sectionId = 26;

        }else if(this.layer1List[0].section_id === '27'){
          this.section = 'Section6';
          this.sectionId = 27;

        }else if(this.layer1List[0].section_id === '28'){
          this.section = 'Section7';
          this.sectionId = 28;

        }


         if(this.layer1List[0].package_id === '1'){
           console.log('pack');
           this.package = 'DFCCIL Package-1';
           this.pid = 1;

           this.sectionList =[{"section_id":"1","project_id":"1","package_id":"1","section_name":"Section1"},
           {"section_id":"4","project_id":"1","package_id":"1","section_name":"Section2"},
           {"section_id":"5","project_id":"1","package_id":"1","section_name":"Section3"},
           {"section_id":"6","project_id":"1","package_id":"1","section_name":"Section4"},
           {"section_id":"7","project_id":"1","package_id":"1","section_name":"Section5"},
           {"section_id":"8","project_id":"1","package_id":"1","section_name":"Section6"},
           {"section_id":"9","project_id":"1","package_id":"1","section_name":"Section7"},
           {"section_id":"10","project_id":"1","package_id":"1","section_name":"Section8"}];

          }else if(this.layer1List[0].package_id === '2'){
          this.package = 'DFCCIL Package-2';
          this.pid = 2;

          this.sectionList =[{"section_id":"2","project_id":"1","package_id":"2","section_name":"Section1"},
          {"section_id":"11","project_id":"1","package_id":"2","section_name":"Section2"},
          {"section_id":"12","project_id":"1","package_id":"2","section_name":"Section3"},
          {"section_id":"13","project_id":"1","package_id":"2","section_name":"Section4"},
          {"section_id":"14","project_id":"1","package_id":"2","section_name":"Section5"},
          {"section_id":"15","project_id":"1","package_id":"2","section_name":"Section6"},
          {"section_id":"16","project_id":"1","package_id":"2","section_name":"Section7"},
          {"section_id":"17","project_id":"1","package_id":"2","section_name":"Section8"},
          {"section_id":"18","project_id":"1","package_id":"2","section_name":"Section9"},
          {"section_id":"19","project_id":"1","package_id":"2","section_name":"Section10"},
          {"section_id":"20","project_id":"1","package_id":"2","section_name":"Section11"},
          {"section_id":"21","project_id":"1","package_id":"2","section_name":"Section12"},
          {"section_id":"22","project_id":"1","package_id":"2","section_name":"Section13"}];


        }else if(this.layer1List[0].package_id === '3'){
          this.package = 'DFCCIL Package-3';
          this.pid = 3;
          this.sectionList = [{"section_id":"3","project_id":"1","package_id":"3","section_name":"Section1"},
          {"section_id":"23","project_id":"1","package_id":"3","section_name":"Section2"},
          {"section_id":"24","project_id":"1","package_id":"3","section_name":"Section3"},
          {"section_id":"25","project_id":"1","package_id":"3","section_name":"Section4"},
          {"section_id":"26","project_id":"1","package_id":"3","section_name":"Section5"},
          {"section_id":"27","project_id":"1","package_id":"3","section_name":"Section6"},
          {"section_id":"28","project_id":"1","package_id":"3","section_name":"Section7"}];


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


     updateLayer1(){
      this.httpService.submitLayer1(Constants.laYer1Id,1,Constants.userId,Constants.orgId,Constants.projectId,
        this.pid,this.boreHoles,this.subAgencyId,this.sectionId).subscribe((response: any)=>{
         console.log('response',response);
         if(response.error === true){
          this.toastService.presentError(response.msg);

         }else{
        //  Constants.webbhid= response.data.bh_id;

        this.httpService.getAllChainagesBySectionID(this.sectionId).subscribe((response34: any)=>{
          console.log('response34',response34);
          if(response34.error === false){
            Constants.chainagesBySectionIDList = response34.data;
            this.toastService.presentSuccess(response.msg);
            console.log('structtype',this.layer1List[0].type_of_structure);
            if(this.layer1List[0].type_of_structure === ''){
             Constants.webbhid = Constants.laYer1Id;

            this.router.navigate(['boreholeinformation']);

            }else{
             this.router.navigate(['web2']);
             Constants.webbhid = Constants.laYer1Id;

            }
          }
        });


        }

        });
    }



    validation(){
      if(this.package === ''){
        this.toastService.presentError('Please Select Package');
      }else if(this.subAgency === ''){
        this.toastService.presentError('Please Select SubAgencyName');

      }
      else{
        this.updateLayer1();
      }
    }

    onClick(){


      if(this.layer1List[0].type_of_structure === ''){
        this.httpService.getAllChainagesBySectionID(this.sectionId).subscribe((response34: any)=>{
          console.log('response34',response34);
          if(response34.error === false){
            Constants.chainagesBySectionIDList = response34.data;
            this.router.navigate(['boreholeinformation']);
            Constants.webbhid = Constants.laYer1Id;

          }
        });


      }else{
        this.httpService.getAllChainagesBySectionID(this.sectionId).subscribe((response34: any)=>{
          console.log('response34',response34);
          if(response34.error === false){
            Constants.chainagesBySectionIDList = response34.data;
            this.router.navigate(['web2']);
            Constants.webbhid = Constants.laYer1Id;

          }
        });



        }
    }

  }
