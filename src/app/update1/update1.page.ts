import { ToastService } from 'src/app/services/toast.service';
import { HttpcallsService } from 'src/app/services/httpcalls.service';
import { Platform } from '@ionic/angular';
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
subAencyList: any =[];
subAencyListValues: any =[];
subAgencyAddress: any;
subAgencyLogo: any;
boreHoles: any;
subAgency: any;
layer1List: any = [];
subAgencyId: any;
  constructor(public androidDatabase: AndroidDatabaseService,
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
    this.getLayer1();

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
getLayer1() {
    this.androidDatabase.getLayer1ById(this.layer1Id).then((data) => {
      this.layer1List = [];
      console.log('size',data.rows.length);
      if (data.rows.length > 0) {
        for (let i = 0; i < data.rows.length; i++) {
          this.layer1List.push(data.rows.item(i));
        }
        console.log('layer1List',this.layer1List);
        if(this.layer1List.length>0){

          this.package = this.layer1List[0].Package;

          this.boreHoles = this.layer1List[0].NoofBoreHoles;
          console.log('said',this.layer1List[0].SubAgencyName);

          if(this.layer1List[0].SubAgencyName === '1'){
console.log('one',1);
            this.subAgencyId = '1';

            this.subAgency = 'SubAgency-1';
            this.subAgencyAddress = 'Hyderabad';
            this.subAgencyLogo = 'http://sraossinc.net:7071/borelogapi/images/subagency.png';
          }else if(this.layer1List[0].SubAgencyName === '2'){
            console.log('two',1);

            this.subAgencyId = '2';

            this.subAgency = 'SubAgency-2';
            this.subAgencyAddress = 'Hyderabad';
            this.subAgencyLogo = 'http://sraossinc.net:7071/borelogapi/images/subagency2.png';
          }



        }

      }
    });
  }

  onClick(){
    if(this.layer1List[0].struct_type === 'null' ||
    this.layer1List[0].struct_type === null ||
    this.layer1List[0].struct_type === 'undefined' ||
    this.layer1List[0].struct_type === undefined ){
      this.router.navigate(['boreholeinformation']);

      Constants.webbhid = Constants.laYer1Id;
      }else{
        this.router.navigate(['update2']);
        Constants.webbhid = Constants.laYer1Id;

      }

  }
  updateLayer1(){
    // eslint-disable-next-line max-len
    this.androidDatabase.updateLayer1(this.package,this.boreHoles,this.subAgencyId,
      this.subAgencyAddress,this.subAgencyLogo,Constants.laYer1Id);
    console.log('updated');


           if(this.layer1List[0].struct_type === 'null' ||
    this.layer1List[0].struct_type === null ||
    this.layer1List[0].struct_type === 'undefined' ||
    this.layer1List[0].struct_type === undefined ){
      this.router.navigate(['boreholeinformation']);

      Constants.webbhid = Constants.laYer1Id;
      }else{
        this.router.navigate(['update2']);
        Constants.webbhid = Constants.laYer1Id;

      }


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



  gettingData(){
    this. platform.ready().then(() => {
       if (this.platform.is('android')) {
       this.getLayer1();

       }else{
        this.getWebData();

      }


   });

   }

   getWebData(){
    this.layer1List = [];

     this.httpService.getBoredetails(Constants.laYer1Id).subscribe((response: any)=>{
      this.layer1List = response.data;

     });
   }

}
