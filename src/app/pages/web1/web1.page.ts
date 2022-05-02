/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable quote-props */
import { ToastService } from 'src/app/services/toast.service';
import { HttpcallsService } from 'src/app/services/httpcalls.service';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';

import { Constants } from 'src/app/common/constants';
import { Component, OnInit } from '@angular/core';
import { CompleteTestServiceService } from 'src/app/services/complete-test-service.service';

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
  subAgencyAddress: string = '';
  subAgencyLogo: any;
  boreHoles: any;
  subAgency: any;
  layer1List: any = [];
  subAgencyId: any;
  pid: any;
  section: any;
  sectionId: any;
  sectionList: any = [];
  selectedList: any = [];
  constructor(
    public router: Router,
    public platform: Platform,
    public httpService: HttpcallsService,
    public toastService: ToastService,
    public compleService: CompleteTestServiceService) {
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

      this.sectionList = Constants.sectionListService.filter((user: any) =>
      user.package_id.includes(this.package));

     }
     sectionChange($event){
       this.sectionId= $event.target.value;
      console.log($event.target.value);
      this.httpService.getSubAgency(Constants.projectId,this.package,this.sectionId)
      .subscribe((res: any)=>{
        console.log('res',res);
        if(res.error === false){

          this.subAgencyId = res.data.sa_id;

          this.subAgency = res.data.sa_name;
          this.subAgencyLogo = res.data.sa_logo;

        }
      });

     }

    ngOnInit() {
    }
    // subAgencyChange($event){
    //   this.subAencyListValues = [$event.target.value];
    //   console.log('array', this.subAencyListValues);
    //   if(this.subAencyListValues.length>0){
    //     this.subAgencyId = this.subAencyListValues[0].sa_id;

    //     this.subAgency = this.subAencyListValues[0].sa_name;
    //     this.subAgencyAddress = this.subAencyListValues[0].sa_address;
    //     this.subAgencyLogo = this.subAencyListValues[0].sa_logo;



    //   }
    // }

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
          this.section = 'Section5-A&B';
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
        else if(this.layer1List[0].section_id === '29'){
          this.section = 'Section5-C';
          this.sectionId = 29;

        }


         if(this.layer1List[0].package_id === '1'){
           console.log('pack');
           this.package = 'DFCCIL Package-1';
           this.pid = 1;
           this.sectionList = Constants.sectionListService.filter((user: any) =>
           user.package_id.includes(this.pid));

          }else if(this.layer1List[0].package_id === '2'){
          this.package = 'DFCCIL Package-2';
          this.pid = 2;
          this.sectionList = Constants.sectionListService.filter((user: any) =>
          user.package_id.includes(this.pid));


        }else if(this.layer1List[0].package_id === '3'){
          this.package = 'DFCCIL Package-3';
          this.pid = 3;
          this.sectionList = Constants.sectionListService.filter((user: any) =>
          user.package_id.includes(this.pid));



        }
        this.subAgency =this.layer1List[0].sa_name;
        this.subAgencyLogo =this.layer1List[0].sa_logo;



  //  if(this.layer1List[0].sa_id === '1'){

  // this.subAgencyId = '1';

  // this.subAgency = 'SubAgency-1';
  // this.subAgencyAddress = 'Hyderabad';
  // this.subAgencyLogo = Constants.imageUrl+'/images/subagency.png';
  // }else if(this.layer1List[0].sa_id === '2'){

  // this.subAgencyId = '2';

  // this.subAgency = 'SubAgency-2';
  // this.subAgencyAddress = 'Hyderabad';
  // this.subAgencyLogo = Constants.imageUrl+'/images/subagency2.png';
  //  }




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
            this.compleService.getChaingeList(this.sectionId);

            this.toastService.presentSuccess(response.msg);
            console.log('structtype',this.layer1List[0].type_of_structure);
            if(this.layer1List[0].type_of_structure === ''){
             Constants.webbhid = Constants.laYer1Id;

            this.router.navigate(['boreholeinformation']);

            }else{
             this.router.navigate(['web2']);
             Constants.webbhid = Constants.laYer1Id;

            }
          }else{
            this.toastService.presentError(response34.msg);

          }
        });


        }

        });
    }



    validation(){
      if(this.package === ''){
        this.toastService.presentError('Please Select Package');
      }else if(this.sectionId === ''){
        this.toastService.presentError('Please Select Section');

      }else if(this.subAgency === ''){
        this.toastService.presentError('Please Select SubAgency Name');

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

          }else{
            this.toastService.presentError(response34.msg);

          }
        });


      }else{
        this.httpService.getAllChainagesBySectionID(this.sectionId).subscribe((response34: any)=>{
          console.log('response34',response34);
          if(response34.error === false){
            Constants.chainagesBySectionIDList = response34.data;
            this.router.navigate(['web2']);
            Constants.webbhid = Constants.laYer1Id;

          }else{
            this.toastService.presentError(response34.msg);

          }
        });



        }
    }

  }
