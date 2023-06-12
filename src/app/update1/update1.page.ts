/* eslint-disable @typescript-eslint/no-inferrable-types */
import { CompleteTestServiceService } from './../services/complete-test-service.service';
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable quote-props */
import { ToastService } from 'src/app/services/toast.service';
import { HttpcallsService } from 'src/app/services/httpcalls.service';
import { Platform, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AndroidDatabaseService } from './../database/android-database.service';
import { Constants } from 'src/app/common/constants';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update1',
  templateUrl: './update1.page.html',
  styleUrls: ['./update1.page.scss'],
})
export class Update1Page implements OnInit {
  layer1Id: any;
  orgName: any;
  orgAddrs: any;
  orgLogo: any;
  projName: any;
  clientName: any;
  projLocation: any;
  package: any;
  packageList: any = [];
  subAencyList: any = [];
  subAencyListValues: any = [];
  subAgencyAddress: string ='';
  subAgencyLogo: any;


  boreHoles: any;
  subAgency: any;

  layer1List: any = [];
  subAgencyId: any;
  sectionId: any;
  section: any;
  sectionList: any = [];
  sectListValue: any = [];
  sectionName: any;
  packagename: string = '';

  isFirst = 1;
  constructor(
    public androidDatabase: AndroidDatabaseService,
    public router: Router,
    public platform: Platform,
    public httpService: HttpcallsService,
    public toastService: ToastService,
    public compleService: CompleteTestServiceService,
    public loadingController: LoadingController
  ) {
    this.layer1Id = Constants.laYer1Id;
    this.orgName = Constants.orgName;
    this.orgAddrs = Constants.orgAddre;
    this.orgLogo = Constants.orgLogo;
    this.projName = Constants.projectName;
    this.clientName = Constants.clentName;
    this.projLocation = Constants.projectLocation;

    this.subAencyList = Constants.subAgencyList;
    this.androidDatabase.getPackage().then((data) => {
      this.packageList = [];
      console.log('size',data.rows.length);
      if (data.rows.length > 0) {
        for (let i = 0; i < data.rows.length; i++) {
          this.packageList.push(data.rows.item(i));
        }
        console.log('packageList',this.packageList);
      }});
    this.getLayer1();
  }
  packageChange($event) {


    this.package = $event.target.value;
    if(this.isFirst > 1) {
      this.sectionId = '';
      this.section = '';
    }

    console.log($event.target.value);
    if(this.package === '1'){
      this.packagename = 'DFCCIL Package-1';
    }else if(this.package === '2'){
      this.packagename = 'DFCCIL Package-2';
    }else if(this.package === '3'){
      this.packagename = 'DFCCIL Package-3';
    }


    this.sectionList = Constants.sectionListService.filter((user: any) =>
      user.package_id.includes(this.package)
    );
    this.isFirst = this.isFirst+1;
  }



  sectionChange($event){


    this.sectionId= $event.target.value;
   console.log($event.target.value);
      this.androidDatabase.getSectin(this.sectionId).then((data) => {
        this.sectListValue = [];
        console.log('size',data.rows.length);
        if (data.rows.length > 0) {
          for (let i = 0; i < data.rows.length; i++) {
            this.sectListValue.push(data.rows.item(i));
          }
          console.log('totalList',this.sectListValue);
      this.sectionName = this.sectListValue[0].section_name;
        }});


      this.androidDatabase.getSubagency(this.sectionId).then((data) => {
        this.subAencyListValues = [];
        console.log('size',data.rows.length);
        if (data.rows.length > 0) {
          for (let i = 0; i < data.rows.length; i++) {
            this.subAencyListValues.push(data.rows.item(i));
          }
          console.log('totalList',this.subAencyListValues);
      this.subAgencyId = this.subAencyListValues[0].sa_id;

      this.subAgency = this.subAencyListValues[0].sa_name;
      this.subAgencyLogo = this.subAencyListValues[0].sa_logo;

        }
      });






  }

  sectionChange1($event){

  }

  ngOnInit() {}

  // autoLoader() {
  //   this.loadingController.create({
  //     spinner:'lines',
  //     message: 'Uploading, Please Wait ...',
  //     duration: 15000
  //   }).then((response) => {
  //     response.present();
  //     response.onDidDismiss().then((response1) => {
  //       console.log('Loader dismissed', response);
  //     });
  //   });
  // }

  getLayer1() {
    this.androidDatabase.getLayer1ById(this.layer1Id).then((data) => {
      this.layer1List = [];
      console.log('size', data.rows.length);
      if (data.rows.length > 0) {
        for (let i = 0; i < data.rows.length; i++) {
          this.layer1List.push(data.rows.item(i));
        }
        console.log('layer1List', this.layer1List);
        if (this.layer1List.length > 0) {
          this.package = this.layer1List[0].Package;
          this.packagename = this.layer1List[0].package_name;
          this.sectionId = this.layer1List[0].section_id;
          Constants.beforeUpdateSecId = this.layer1List[0].section_id;
          this.section = this.layer1List[0].section_id;

          this.sectionName = this.layer1List[0].NoofBoreHoles;

          this.boreHoles = this.layer1List[0].NoofBoreHoles;
          console.log('said', this.layer1List[0].SubAgencyName);

          this.subAencyListValues = this.subAencyList.filter((user: any) =>
            user.sa_id.includes(this.layer1List[0].SubAgencyName)
          );

          console.log('array', this.subAencyListValues);
          if (this.subAencyListValues.length > 0) {
            this.subAgencyId = this.subAencyListValues[0].sa_id;

            this.subAgency = this.subAencyListValues[0].sa_name;

            this.subAgencyLogo = this.subAencyListValues[0].sa_logo;
          }
        }
      }
    });
  }

  onClick() {
    if (
      this.layer1List[0].type_of_structure === 'null' ||
      this.layer1List[0].type_of_structure === null ||
      this.layer1List[0].type_of_structure === 'undefined' ||
      this.layer1List[0].type_of_structure === undefined
    ) {
      this.router.navigate(['boreholeinformation']);

      Constants.webbhid = Constants.laYer1Id;
    } else {
      this.router.navigate(['update2']);
      Constants.webbhid = Constants.laYer1Id;
    }
  }
  updateLayer1() {
   // this.autoLoader();
    // Constants.chaingeListAndroid11 = '';

    // Constants.chaingeListAndroid11 = Constants.chaingeListAndroid.filter((user: any)=>user.section_id.includes(this.sectionId));
    // this.compleService.getChaingeList(this.sectionId);
    Constants.editSectionId = this.sectionId;

    this.androidDatabase.getChlist(this.sectionId).then((data) => {
      Constants.chaingeListAndroid11 = [];
      console.log('size', data.rows.length);
      if (data.rows.length > 0) {
        for (let i = 0; i < data.rows.length; i++) {
          Constants.chaingeListAndroid11.push(data.rows.item(i));
        }
        console.log('sectionId', this.sectionId);

        console.log('totalList', Constants.chaingeListAndroid11);
        console.log(
          'Chaingelistsize : ',
          Constants.chaingeListAndroid11.length
        );

        if (Constants.chaingeListAndroid11.length > 0) {
          this.compleService.getChaingeList(this.sectionId);

          // eslint-disable-next-line max-len
          this.androidDatabase.updateLayer1(
            this.package,
            this.sectionName,
            this.subAgencyId,
            this.subAgencyAddress,
            this.subAgencyLogo,
            Constants.laYer1Id,
            this.sectionId,
            this.packagename,
            '','','',''
          );
          console.log('updated');
          Constants.package = this.package;
          Constants.section = this.sectionId;
          Constants.editSectionId = this.sectionId;


          if (
            this.layer1List[0].type_of_structure === 'null' ||
            this.layer1List[0].type_of_structure === null ||
            this.layer1List[0].type_of_structure === 'undefined' ||
            this.layer1List[0].type_of_structure === undefined
          ) {
            this.router.navigate(['boreholeinformation']);

            Constants.webbhid = Constants.laYer1Id;
          } else {
            Constants.editSectionId = this.sectionId;
            console.log('editSecId:'+Constants.editSectionId);
            this.router.navigate(['update2']);
            Constants.webbhid = Constants.laYer1Id;
          }
        } else {
          this.toastService.presentError('No Chainage exist.');
        }
      }else {
        this.toastService.presentError('No Chainage exist.');
      }
    });
  }
  validation() {
    if (this.package === '') {
      this.toastService.presentError('Please Select Package');
    } else if (this.sectionId === '') {
      this.toastService.presentError('Please Select Section');
    }

     else if (this.subAgency === '') {
      this.toastService.presentError('Please Select SubAgency Name');
    } else {
      this.updateLayer1();
    }
  }

  gettingData() {
    this.platform.ready().then(() => {
      if (this.platform.is('android')) {
        this.getLayer1();
      } else {
        this.getWebData();
      }
    });
  }

  getWebData() {
    this.layer1List = [];

    this.httpService
      .getBoredetails(Constants.laYer1Id)
      .subscribe((response: any) => {
        this.layer1List = response.data;
      });
  }
}
