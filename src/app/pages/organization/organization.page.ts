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
package: any;
subAencyList: any =[];
subAgency: any;
subAgencyId: any;

subAencyListValues: any =[];
subAgencyAddress: any;
subAgencyLogo: any;
boreHoles: any;
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

    }
    else{
      this.adding();
    }
  }

  addDatabase(){
    if(Constants.laYer1Id === ''){
      this.androiDatabase.addLayer1Details(this.package,this.boreHoles,this.subAgencyId,this.subAgencyAddress,this.subAgencyLogo,
        Constants.userId,Constants.orgId,Constants.projectId,this.subAgencyId);
        this.getLayer1LastId();

      this.router.navigate(['boreholeinformation']);


    }else{
      this.androiDatabase.updateLayer1(this.package,this.boreHoles,this.subAgencyId,
        this.subAgencyAddress,this.subAgencyLogo,Constants.laYer1Id);
        this.router.navigate(['boreholeinformation']);
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
    if(this.boreHoles === undefined){
         this.boreHoles = null;
        }
        console.log('webid',Constants.webbhid);
      if(Constants.webbhid === ''){
        console.log('ifffffffffffffff');
     this.httpService.submitLayer1('',1,Constants.userId,Constants.orgId,Constants.projectId,
      this.package,this.boreHoles,this.subAgencyId).subscribe((response: any)=>{
       console.log('response',response);
       if(response.error === true){
         this.toastService.presentError(response.msg);
       }else{
        Constants.webbhid= response.data.bh_id;
        console.log('webbhid',Constants.webbhid);
        this.toastService.presentSuccess(response.msg);
        this.router.navigate(['boreholeinformation']);

       }

      });
    }else{
      console.log('elseeeeee');

      this.httpService.submitLayer1(Constants.webbhid,1,Constants.userId,Constants.orgId,Constants.projectId,
        this.package,this.boreHoles,this.subAgencyId).subscribe((response: any)=>{
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
        console.log('layer1List',this.layer1List);
        if(this.layer1List[0].struct_type === ''){
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
