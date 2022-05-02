/* eslint-disable @typescript-eslint/no-inferrable-types */
import { CompleteTestServiceService } from './../../services/complete-test-service.service';
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable quote-props */
import { Router } from '@angular/router';
import { AndroidDatabaseService } from './../../database/android-database.service';
import { ToastService } from './../../services/toast.service';
import { Component, OnInit } from '@angular/core';
import { Constants } from 'src/app/common/constants';
import { HttpcallsService } from 'src/app/services/httpcalls.service';
import { Platform, LoadingController } from '@ionic/angular';



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
subAgencyAddress: string = '';
subAgencyLogo: any;

layer1List: any = [];
sectListValue: any  = [];
sectionName: any;
isimg = false;
  constructor(public toastService: ToastService,
    public androiDatabase: AndroidDatabaseService,
    public router: Router,
    public httpService: HttpcallsService,
    public platform: Platform,
    public compleService: CompleteTestServiceService,
    public loadingController: LoadingController
    ) {

      Constants.layer2flow = '';
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

console.log('totallist',Constants.sectionListService);
   this.sectionList = Constants.sectionListService.filter((user: any) =>
   user.package_id.includes(this.package));
   console.log('sectionList',this.sectionList);


  }
  sectionChange($event){
    this.sectionId= $event.target.value;
   console.log($event.target.value);
   this. platform.ready().then(() => {
    if (this.platform.is('android')) {


      this.androiDatabase.getSectin(this.sectionId).then((data) => {
        this.sectListValue = [];
        console.log('size',data.rows.length);
        if (data.rows.length > 0) {
          for (let i = 0; i < data.rows.length; i++) {
            this.sectListValue.push(data.rows.item(i));
          }
          console.log('totalList',this.sectListValue);
      this.sectionName = this.sectListValue[0].section_name;
        }});


      this.androiDatabase.getSubagency(this.sectionId).then((data) => {
        this.subAencyListValues = [];
        console.log('size',data.rows.length);
        if (data.rows.length > 0) {
          for (let i = 0; i < data.rows.length; i++) {
            this.subAencyListValues.push(data.rows.item(i));
          }
          console.log('totalList',this.subAencyListValues);
      this.subAgencyId = this.subAencyListValues[0].sa_id;
      this.isimg = true;

      this.subAgency = this.subAencyListValues[0].sa_name;
      this.subAgencyLogo = this.subAencyListValues[0].sa_logo;
      console.log('sub',this.subAgency+ '  '+this.subAgencyLogo);


        }
      });




    }else{

      this.httpService.getSubAgency(Constants.projectId,this.package,this.sectionId)
      .subscribe((res: any)=>{
        console.log('res',res);
        if(res.error === false){
          this.isimg = true;
          this.subAgencyId = res.data.sa_id;

          this.subAgency = res.data.sa_name;
          this.subAgencyLogo = res.data.sa_logo;
          console.log('sub',this.subAgency+ '  '+this.subAgencyLogo);

        }
      });

    }
  });
  }
  // subAgencyChange($event){
  //   this.subAencyListValues = [$event.target.value];
  //   console.log('array', this.subAencyListValues);
  //   if(this.subAencyListValues.length>0){
  //     this.isimg = true;
  //     this.subAgencyId = this.subAencyListValues[0].sa_id;

  //     this.subAgency = this.subAencyListValues[0].sa_name;
  //     this.subAgencyAddress = this.subAencyListValues[0].sa_address;
  //     this.subAgencyLogo = this.subAencyListValues[0].sa_logo;



  //   }


  // }
  moveToNext(){
    this.router.navigate(['boreholeinformation']);
  }
  validation(){
    if(this.package === undefined){
      this.toastService.presentError('Please Select Package');
    }else if(this.package === ''){
      this.toastService.presentError('Please Select Package');
    }

    else if(this.sectionId === ''){
      this.toastService.presentError('Please Select Section');

    }else if(this.sectionId === undefined){
     this.toastService.presentError('Please Select Section');

    }    else if(this.subAgency === undefined){
      this.toastService.presentError('Please Select SubAgency Name');

    }else if(this.subAgency === ''){
      this.toastService.presentError('Please Select SubAgency Name');

    }
    else{

      this.adding();
    }
  }


  autoLoader() {
    this.loadingController.create({
      spinner:'lines',
      message: 'Uploading, Please Wait ...',
      duration: 15000
    }).then((response) => {
      response.present();
      response.onDidDismiss().then((response1) => {
        console.log('Loader dismissed', response);
      });
    });
  }
  addDatabase(){
    this.autoLoader();
    if(Constants.laYer1Id === ''){


      this.androiDatabase.addLayer1Details(this.package,this.sectionName,this.subAgencyId,this.subAgencyAddress,this.subAgencyLogo,
        Constants.userId,Constants.orgId,Constants.projectId,this.subAgencyId,this.sectionId);
        this.getLayer1LastId();



        this.androiDatabase.getChlist(this.sectionId).then((data) => {
          Constants.chaingeListAndroid11 = [];
          console.log('size',data.rows.length);
          if (data.rows.length > 0) {
            for (let i = 0; i < data.rows.length; i++) {
              Constants.chaingeListAndroid11.push(data.rows.item(i));
            }
            console.log('totalList',Constants.chaingeListAndroid11);
            console.log('Chaingelistsize : ',Constants.chaingeListAndroid11.length);
            if(Constants.chaingeListAndroid11.length>0){
              this.router.navigate(['boreholeinformation']);
              Constants.package = this.package;
              Constants.section = this.sectionId;
              this.compleService.getChaingeList(this.sectionId);


            }else{
              this.toastService.presentError('No Chainage exist.');

            }


          }
        });


        // Constants.chaingeListAndroid11 = Constants.chaingeListAndroid.filter((user: any)=>user.section_id.includes(this.sectionId));
        // console.log('chainageListExample1 : ',Constants.chaingeListAndroid11);
        // console.log('Chaingelistsize : ',Constants.chaingeListAndroid11.length);
        // console.log('sectionId : ',this.sectionId);




    }else{




      this.androiDatabase.getChlist(this.sectionId).then((data) => {
        Constants.chaingeListAndroid11 = [];
        console.log('size',data.rows.length);
        if (data.rows.length > 0) {
          for (let i = 0; i < data.rows.length; i++) {
            Constants.chaingeListAndroid11.push(data.rows.item(i));
          }
          console.log('sectionId',this.sectionId);

          console.log('totalList',Constants.chaingeListAndroid11);
          console.log('Chaingelistsize : ',Constants.chaingeListAndroid11.length);
          if(Constants.chaingeListAndroid11.length>0){
            this.compleService.getChaingeList(this.sectionId);


            this.androiDatabase.updateLayer1(this.package,this.sectionName,this.subAgencyId,
              this.subAgencyAddress,this.subAgencyLogo,Constants.laYer1Id,this.sectionId);

              Constants.package = this.package;
              Constants.section = this.sectionId;

              this.getLayer1();
            }else{
              this.toastService.presentError('No Chainage exist.');

            }



        }
      });




      // Constants.chaingeListAndroid11 = '';
      // console.log('Chaingelistsize : ',Constants.chaingeListAndroid11.length);

      // console.log('sectionId',this.sectionId);
      // Constants.chaingeListAndroid11 = Constants.chaingeListAndroid.filter((user: any)=>user.section_id.includes(this.sectionId));
      // console.log('Chaingelistsize : ',Constants.chaingeListAndroid11.length);
      // this.compleService.getChaingeList(this.sectionId);

      // if(Constants.chaingeListAndroid11.length>0){

      // this.androiDatabase.updateLayer1(this.package,this.sections,this.subAgencyId,
      //   this.subAgencyAddress,this.subAgencyLogo,Constants.laYer1Id,this.sectionId);

      //   Constants.package = this.package;
      //   Constants.section = this.sectionId;

      //   this.getLayer1();
      // }else{
      //   this.toastService.presentError('No Chainage exist.');

      // }

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
        Constants.webbhid= response.data.bh_id;

        this.httpService.getAllChainagesBySectionID(this.sectionId).subscribe((response34: any)=>{
          console.log('response34',response34);
          if(response34.error === false){
            this.compleService.getChaingeList(this.sectionId);

            Constants.chainagesBySectionIDList = response34.data;
            this.compleService.getChaingeList(this.sectionId);

            console.log('webbhid',Constants.webbhid);
            this.toastService.presentSuccess(response.msg);
            this.router.navigate(['boreholeinformation']);

          }else{
            this.toastService.presentError(response34.msg);

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

          this.httpService.getAllChainagesBySectionID(this.sectionId).subscribe((response34: any)=>{
            console.log('response34',response34);
            if(response34.error === false){


            this.toastService.presentSuccess(response.msg);
           this.getWebData();
            }else{
              this.toastService.presentError(response34.msg);

            }
          });
        }
        });


    }


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
      if(this.layer1List[0].type_of_structure === ''){
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
