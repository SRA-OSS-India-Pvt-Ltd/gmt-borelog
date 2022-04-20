/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable quote-props */
import { Router } from '@angular/router';
import { AndroidDatabaseService } from './../../database/android-database.service';
import { ToastService } from './../../services/toast.service';
import { Component, OnInit } from '@angular/core';
import { Constants } from 'src/app/common/constants';
import { HttpcallsService } from 'src/app/services/httpcalls.service';
import { Platform } from '@ionic/angular';


@Component({
  selector: 'app-organization',
  templateUrl: './organization.page.html',
  styleUrls: ['./organization.page.scss'],
})
export class OrganizationPage implements OnInit {
orgName: any;
orgAddrs: any;
orgLogo: any;
projName: any;
clientName: any;
projLocation: any;
packageList: any = [];
sectionList: any = [];
chainageListExample1: any = [];

package: any;
subAencyList: any =[];
subAgency: any;
subAgencyId: any;
sections: any;
sectionId: any;

subAencyListValues: any =[];
subAgencyAddress: any;
subAgencyLogo: any;

layer1List: any = [];
isimg = false;
  constructor(public toastService: ToastService,
    public androiDatabase: AndroidDatabaseService,
    public router: Router,
    public httpService: HttpcallsService,
    public platform: Platform
    ) {
    this.orgName = Constants.orgName;
    this.orgAddrs = Constants.orgAddre;
    this.orgLogo = Constants.orgLogo;
    this.projName = Constants.projectName;
    this.clientName = Constants.clentName;
    this.projLocation = Constants.projectLocation;

    this.packageList = Constants.packageList;
    this.subAencyList = Constants.subAgencyList;

  }

  ngOnInit() {
  }
  packageChange($event){
   this.package = $event.target.value;
   console.log($event.target.value);


   if(this.package === '1' ){
    this.sectionList =[{"section_id":'1',"project_id":"1","package_id":"1","section_name":"Section1"},
    {"section_id":"4","project_id":"1","package_id":"1","section_name":"Section2"},
    {"section_id":"5","project_id":"1","package_id":"1","section_name":"Section3"},
    {"section_id":"6","project_id":"1","package_id":"1","section_name":"Section4"},
    {"section_id":"7","project_id":"1","package_id":"1","section_name":"Section5"},
    {"section_id":"8","project_id":"1","package_id":"1","section_name":"Section6"},
    {"section_id":"9","project_id":"1","package_id":"1","section_name":"Section7"},
    {"section_id":"10","project_id":"1","package_id":"1","section_name":"Section8"}];
  }else if(this.package === '2'){
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
  }else if(this.package === '3'){

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
  subAgencyChange($event){
    this.subAencyListValues = [$event.target.value];
    console.log('array', this.subAencyListValues);
    if(this.subAencyListValues.length>0){
      this.isimg = true;
      this.subAgencyId = this.subAencyListValues[0].sa_id;

      this.subAgency = this.subAencyListValues[0].sa_name;
      this.subAgencyAddress = this.subAencyListValues[0].sa_address;
      this.subAgencyLogo = this.subAencyListValues[0].sa_logo;



    }


  }
  moveToNext(){
    this.router.navigate(['boreholeinformation']);
  }
  validation(){
    if(this.package === undefined){
      this.toastService.presentError('Please Select Package');
    }else if(this.subAgency === undefined){
      this.toastService.presentError('Please Select SubAgencyName');

    }else if(this.package === ''){
      this.toastService.presentError('Please Select Package');
    }else if(this.subAgency === ''){
      this.toastService.presentError('Please Select SubAgencyName');

    }else if(this.sectionId === ''){
      this.toastService.presentError('Please Select Section');

    }else if(this.sectionId === undefined){
     this.toastService.presentError('Please Select Section');

    }
    else{
      this.adding();
    }
  }

  addDatabase(){
    if(Constants.laYer1Id === ''){
      this.selected(this.sectionId);

      this.androiDatabase.addLayer1Details(this.package,this.sectionId,this.subAgencyId,this.subAgencyAddress,this.subAgencyLogo,
        Constants.userId,Constants.orgId,Constants.projectId,this.subAgencyId,this.sectionId);
        this.getLayer1LastId();

      this.router.navigate(['boreholeinformation']);


    }else{
      this.selected(this.sectionId);

      this.androiDatabase.updateLayer1(this.package,this.sections,this.subAgencyId,
        this.subAgencyAddress,this.subAgencyLogo,Constants.laYer1Id,this.sectionId);

        this.getLayer1();

    }


  }
  getLayer1LastId() {

    this.androiDatabase.getLastId().then((data) => {
      this.layer1List = [];
      console.log('size',data.rows.length);
      if (data.rows.length > 0) {
        for (let i = 0; i < data.rows.length; i++) {
          this.layer1List.push(data.rows.item(i));
        }
        console.log('layer1List',this.layer1List);
        Constants.laYer1Id = this.layer1List[0].Id;


      }
    });
  }

  submitWeb(){

    console.log('webid',Constants.webbhid);
      if(Constants.webbhid === ''){
        console.log('ifffffffffffffff');
       this.httpService.submitLayer1('',1,Constants.userId,Constants.orgId,Constants.projectId,
      this.package,'',this.subAgencyId,this.sectionId).subscribe((response: any)=>{
       console.log('response',response);

       if(response.error === true){
         this.toastService.presentError(response.msg);
       }else{

        this.httpService.getAllChainagesBySectionID(this.sectionId).subscribe((response34: any)=>{
          console.log('response34',response34);
          if(response34.error === false){
            Constants.chainagesBySectionIDList = response34.data;

            Constants.webbhid= response.data.bh_id;
            console.log('webbhid',Constants.webbhid);
            this.toastService.presentSuccess(response.msg);
            this.router.navigate(['boreholeinformation']);

          }
        });


       }

      });
      }else{
      console.log('elseeeeee');

      this.httpService.submitLayer1(Constants.webbhid,1,Constants.userId,Constants.orgId,Constants.projectId,
        this.package,'',this.subAgencyId,this.sectionId).subscribe((response: any)=>{
         console.log('response',response);
         if(response.error === true){
          this.toastService.presentError(response.msg);
        }else{

         this.toastService.presentSuccess(response.msg);
           this.getWebData();
        }
        });


    }


  }


  selected(item){
    console.log('selected items : ',item);

     Constants.chaingeListAndroid11 = Constants.chaingeListAndroid.filter((user: any)=>user.chainage.includes(item));
     console.log('chainageListExample1 : ',Constants.chaingeListAndroid11);

  }




  adding(){
   this. platform.ready().then(() => {
      if (this.platform.is('android')) {
      this.addDatabase();

      }else{

         this.submitWeb();
      }


  });

  }

  getWebData(){
    this.layer1List = [];

     this.httpService.getBoredetails(Constants.webbhid).subscribe((response: any)=>{
      this.layer1List = response.data;
      console.log('list',this.layer1List);
      if(this.layer1List[0].struct_type === ''){
       this.router.navigate(['boreholeinformation']);

       }else{
        this.router.navigate(['web2']);

       }


     });
   }

   getLayer1() {
    this.androiDatabase.getLayer1ById(Constants.laYer1Id).then((data) => {
      this.layer1List = [];
      console.log('size',data.rows.length);
      if (data.rows.length > 0) {
        for (let i = 0; i < data.rows.length; i++) {
          this.layer1List.push(data.rows.item(i));
        }
        console.log('layer1List',this.layer1List[0].struct_type);
        if(this.layer1List[0].type_of_structure === 'null' ||
        this.layer1List[0].type_of_structure === null ||
        this.layer1List[0].type_of_structure === 'undefined' ||
        this.layer1List[0].type_of_structure === undefined ){
          this.router.navigate(['boreholeinformation']);

          Constants.webbhid = Constants.laYer1Id;
          }else{
            this.router.navigate(['update2']);
            Constants.webbhid = Constants.laYer1Id;

          }

      }
    });
  }
}
