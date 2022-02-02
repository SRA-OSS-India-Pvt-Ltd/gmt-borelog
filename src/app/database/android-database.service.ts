import { ToastService } from './../services/toast.service';
import { Injectable } from '@angular/core';
//import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class AndroidDatabaseService {
  databaseObj: SQLiteObject;

  constructor(public sqlite: SQLite,
    public toastSer: ToastService) { }

  createDatabase(){
    this.sqlite.create({
      name: 'borelog.db',
      location: 'default'
    })
      .then((db: SQLiteObject) => {

       this.databaseObj = db;
        // eslint-disable-next-line max-len
        db.executeSql('create table Layer1(Id Integer Primary key AUTOINCREMENT,Package Text,NoofBoreHoles Text,SubAgencyName Text,SubAgencyAddress Text,SubAgencyLogo Text)', [])
          .then(() => console.log('Executed SQL'))
          .catch(e => console.log(e));


         // eslint-disable-next-line max-len
         db.executeSql('CREATE TABLE IF NOT EXISTS borelog_data (Id Integer Primary key AUTOINCREMENT,Package Text,NoofBoreHoles Text,SubAgencyName Text,SubAgencyAddress Text,SubAgencyLogo Text, user_id int(11) ,org_id int(11) , project_id int(11) ,sa_id int(11) ,ref_std varchar(255) , struct_type varchar(255) ,bh_no varchar(255) , bh_location varchar(255) , bh_chainage varchar(255) , bh_lat varchar(255) ,bh_lon varchar(255) , bh_start_date date ,bh_rl varchar(255) , water_table_rl varchar(255) ,type_of_rig varchar(255) ,type_of_drilling varchar(255) ,circulation_fluid varchar(255) ,drill_orientation varchar(255) ,bh_dia varchar(255) ,casing_dia varchar(255) ,casing_depth varchar(255) ,drill_depth_from varchar(255) ,drill_depth_to varchar(255) ,type_of_strata varchar(255) ,type_of_sample text ,soil_ds_depth_from varchar(255) ,soil_ds_depth_to varchar(255) ,soil_spt_depth_from varchar(255) ,soil_spt_depth_to varchar(255) ,soil_uds_depth_from varchar(255) ,soil_uds_depth_to varchar(255) ,soil_sample_color varchar(255),soil_type varchar(100) ,soil_density varchar(100) ,soil_visual_classif varchar(100) ,soil_drilling_bit varchar(100) ,soil_core_barrel varchar(100) ,rock_sample_type varchar(100) ,rock_run_length varchar(100) ,rock_run_time varchar(100) ,rock_water_loss varchar(100) ,rock_pieces_length varchar(100) , rock_pieces_10 varchar(100) , rock_cr varchar(100) ,rock_rqd varchar(100) ,rock_sample_color varchar(100) ,rock_weathering varchar(100) ,rock_type varchar(100) ,depth_termination varchar(255) ,bh_enddate date , rv_rep_name varchar(255) ,rv_rep_sign varchar(255) ,sa_rep_name varchar(255) ,sa_rep_sign varchar(255) ,client_rep_name varchar(255) ,client_rep_sign varchar(255) ,created_date datetime ,modified_date datetime ,bh_layer text,bh_status text,first text,second text,third text,total text,firstB text,secondB text,thirdB text, totalB text)',[])
         .then(() => console.log('Executed SQL'))
         .catch(e => console.log(e));


      })
      .catch(e => console.log(e));

  }
  addLayer1Details(package1: any,noholes: any,sunageName: any,subageAddr: any,aubAgeLog: any,
    userid: any,orgId: any,projId: any,said: any){
    this.databaseObj.executeSql(`INSERT INTO borelog_data
    (Package,NoofBoreHoles,SubAgencyName,SubAgencyAddress,SubAgencyLogo,user_id,org_id,project_id,sa_id)
    VALUES
    ('${package1}',
    '${noholes}',
    '${sunageName}',
    '${subageAddr}',
    '${aubAgeLog}',
    '${userid}',
    '${orgId}',
    '${projId}',
    '${said}}')`,[]);
  }

  addBoreLogData(package1: any,noholes: any,sunageName: any,subageAddr: any,aubAgeLog: any,
    userid: any,orgId: any,projId: any,said: any,refstd: any,strtype: any,bhno: any,
    bhloca: any,bhchainage: any,bhlat: any,bhlon: any,bhsdate: any,bhrl: any,watertaRl: any,
    typeOfrig: any,typeOfDrill: any,cirFluid: any,drillOrient: any,bhDia: any,casingDia: any,
    casingDepth: any,drillDepthFrom: any,drillDepthTo: any,typeOfstara: any,typeOfSample: any,
    soilDsDepthFrom: any,soilDsDepthTo: any,sptDethFrom: any,sptDepthTo: any,udsDepthFrom: any,
    udsDepthTo: any,soilSamplColor: any,soilType: any,soilDensity: any,soilVisualClassi: any,
    soilDrillingBit: any,soilCoreBarrel: any,rockSampletype: any,rockrunLeng: any,rockRunTime: any,
    rockWaterLoss: any,rockPiecesLength: any,rockPiecse10: any,rockCr: any,rockrqd: any,
    rockSampleColor: any,rockWaethering: any,rockType: any,depthTermination: any,bhedate: any,
    rvRepName: any,rvRepSign: any,sarepName: any,saRepSign: any,clientRepName: any,
    clientRepSign: any,cdate: any,mdate: any,bhlayer: any,bhstatus: any){
    this.databaseObj.executeSql(`INSERT INTO borelog_data
    (Package,NoofBoreHoles,SubAgencyName,SubAgencyAddress,SubAgencyLogo,user_id,org_id,project_id,
      sa_id,ref_std,struct_type,bh_no,bh_location,bh_chainage,bh_lat,bh_lon,
      bh_start_date,bh_rl,water_table_rl,type_of_rig,type_of_drilling,circulation_fluid,drill_orientation,
      bh_dia,casing_dia,casing_depth,drill_depth_from,drill_depth_to,type_of_strata,type_of_sample,
      soil_ds_depth_from,soil_ds_depth_to,soil_spt_depth_from,soil_spt_depth_to,soil_uds_depth_from,
      soil_uds_depth_to,soil_sample_color,soil_type,soil_density,soil_visual_classif,soil_drilling_bit,
      soil_core_barrel,rock_sample_type,rock_run_length,rock_run_time,rock_water_loss,rock_pieces_length,
      rock_pieces_10,rock_cr,rock_rqd,rock_sample_color,rock_weathering,rock_type,depth_termination,
      bh_enddate,rv_rep_name,rv_rep_sign,sa_rep_name,sa_rep_sign,client_rep_name,client_rep_sign,
      created_date,modified_date,bh_layer,bh_status
      )
    VALUES
    ('${package1}',
    '${noholes}',
    '${sunageName}',
    '${subageAddr}',
    '${aubAgeLog}',
    '${userid}',
    '${orgId}',
    '${projId}',
    '${said}',
    '${refstd}',
    '${strtype}',
    '${bhno}',
    '${bhloca}',
    '${bhchainage}',
    '${bhlat}',
    '${bhlon}',
    '${bhsdate}',
    '${bhrl}',
    '${watertaRl}',
    '${typeOfrig}',
    '${typeOfDrill}',
    '${cirFluid}',
    '${drillOrient}',
    '${bhDia}',
    '${casingDia}',
    '${casingDepth}',
    '${drillDepthFrom}',
    '${drillDepthTo}',
    '${typeOfstara}',
    '${typeOfSample}',
    '${soilDsDepthFrom}',
    '${soilDsDepthTo}',
    '${sptDethFrom}',
    '${sptDepthTo}',
    '${udsDepthFrom}',
    '${udsDepthTo}',
    '${soilSamplColor}',
    '${soilType}',
    '${soilDensity}',
    '${soilVisualClassi}',
    '${soilDrillingBit}',
    '${soilCoreBarrel}',
    '${rockSampletype}',
    '${rockrunLeng}',
    '${rockRunTime}',
    '${rockWaterLoss}',
    '${rockPiecesLength}',
    '${rockPiecse10}',
    '${rockCr}',
    '${rockrqd}',
    '${rockSampleColor}',
    '${rockWaethering}',
    '${rockType}',
    '${depthTermination}',
    '${bhedate}',
    '${rvRepName}',
    '${rvRepSign}',
    '${sarepName}',
    '${saRepSign}',
    '${clientRepName}',
    '${clientRepSign}',
    '${cdate}',
    '${mdate}',
    '${bhlayer}',
    '${bhstatus}',
    )`,[]).then((res: any)=>{
      console.log('adding Borelog');
    }).catch((error: any)=>{
      console.log('error on adding Borelog ', JSON.stringify(error));

    });
  }

  updateLayer1(package1: string,noholes: string,sunageName: string,subageAddr: string,aubAgeLog: string, id: string){

   // eslint-disable-next-line max-len
   return this.databaseObj.executeSql(`UPDATE borelog_data SET Package = '${package1}',NoofBoreHoles = '${noholes}',SubAgencyName = '${sunageName}',SubAgencyAddress = '${subageAddr}',SubAgencyLogo = '${aubAgeLog}' WHERE Id = ${id} `,[])
   .then((res) => {
    console.log('Updating');

    return res;
  })
  .catch((e) => {
    console.log('error on Updating Layer1 ', JSON.stringify(e));
    return 'error on Updating Layer1 ' + JSON.stringify(e);
  });

  }
  updateLayer2(refstd: any,strtype: any,bhno: any,
    bhloca: any,bhchainage: any,bhlat: any,bhlon: any,bhsdate: any,bhrl: any,watertaRl: any,
    typeOfrig: any,typeOfDrill: any,cirFluid: any,drillOrient: any,bhDia: any,casingDia: any,
    casingDepth: any,id: any){
      return this.databaseObj.executeSql(`UPDATE borelog_data
       SET ref_std = '${refstd}',
       struct_type = '${strtype}',
       bh_no = '${bhno}',
       bh_location = '${bhloca}',
       bh_chainage = '${bhchainage}',
       bh_lat = '${bhlat}',
       bh_lon = '${bhlon}',
       bh_start_date = '${bhsdate}',
       bh_rl = '${bhrl}',
       water_table_rl = '${watertaRl}',
       type_of_rig = '${typeOfrig}',
       type_of_drilling = '${typeOfDrill}',
       circulation_fluid = '${cirFluid}',
       drill_orientation = '${drillOrient}',
       bh_dia = '${bhDia}',
       casing_dia = '${casingDia}',
       casing_depth = '${casingDepth}'
       WHERE Id = ${id} `,[])
      .then((res) => {
       console.log('Updating Layer2');
       this.toastSer.presentSuccess('Layer 2 Details Updated');
       return res;
     })
     .catch((e) => {
       console.log('error on Updating Layer2 ', JSON.stringify(e));
       return 'error on Updating Layer2 ' + JSON.stringify(e);
     });

    }



 updateLayer3(drillDepthFrom: any,drillDepthTo: any,typeOfstara: any,typeOfSample: any,
  soilDsDepthFrom: any,soilDsDepthTo: any,sptDethFrom: any,sptDepthTo: any,udsDepthFrom: any,
  udsDepthTo: any,soilSamplColor: any,soilType: any,soilDensity: any,soilVisualClassi: any,
  soilDrillingBit: any,soilCoreBarrel: any,rockSampletype: any,rockrunLeng: any,rockRunTime: any,
  rockWaterLoss: any,rockPiecesLength: any,rockPiecse10: any,rockCr: any,rockrqd: any,
  rockSampleColor: any,rockWaethering: any,rockType: any,id: any,
  first: any,sec: any,thir: any,tot: any,fb: any,sb: any, thirdb: any,totB: any){
        return this.databaseObj.executeSql(`UPDATE borelog_data
         SET drill_depth_from = '${drillDepthFrom}',
         drill_depth_to = '${drillDepthTo}',
         type_of_strata = '${typeOfstara}',
         type_of_sample = '${typeOfSample}',
         soil_ds_depth_from = '${soilDsDepthFrom}',
         soil_ds_depth_to = '${soilDsDepthTo}',
         soil_spt_depth_from = '${sptDethFrom}',
         soil_spt_depth_to = '${sptDepthTo}',
         soil_uds_depth_from = '${udsDepthFrom}',
         soil_uds_depth_to = '${udsDepthTo}',
         soil_sample_color = '${soilSamplColor}',
         soil_type = '${soilType}',
         soil_density = '${soilDensity}',
         soil_visual_classif = '${soilVisualClassi}',
         soil_drilling_bit = '${soilDrillingBit}',
         soil_core_barrel = '${soilCoreBarrel}',
         rock_sample_type = '${rockSampletype}',
         rock_run_length = '${rockrunLeng}',
         rock_run_time = '${rockRunTime}',
         rock_water_loss = '${rockWaterLoss}',
         rock_pieces_length = '${rockPiecesLength}',
         rock_pieces_10 = '${rockPiecse10}',
         rock_cr = '${rockCr}',
         rock_rqd = '${rockrqd}',
         rock_sample_color = '${rockSampleColor}',
         rock_weathering = '${rockWaethering}',
         rock_type = '${rockType}',
         first = '${first}',
         second = '${sec}',
         third = '${thir}',
         total ='${tot}',
         firstB = '${fb}',
         secondB = '${sb}',
         thirdB = '${thirdb}',
         totalB ='${totB}'

         WHERE Id = ${id} `,[])
        .then((res) => {
         console.log('Updating Layer3');
         this.toastSer.presentSuccess('Layer 3 Details Updated');
         return res;
       })
       .catch((e) => {
         console.log('error on Updating Layer3 ', JSON.stringify(e));
         return 'error on Updating Layer3 ' + JSON.stringify(e);
       });

      }


      updateLayer4(depthTer: any,edate: any,rvrepname: any,
        rvrepsign: any,sarepname: any,sarepsign: any,clientname: any,clisign: any,id: any){
          return this.databaseObj.executeSql(`UPDATE borelog_data
           SET depth_termination = '${depthTer}',
           bh_enddate = '${edate}',
           rv_rep_name = '${rvrepname}',
           rv_rep_sign = '${rvrepsign}',
           sa_rep_name = '${sarepname}',
           sa_rep_sign = '${sarepsign}',
           client_rep_name = '${clientname}',
           client_rep_sign = '${clisign}'
           WHERE Id = ${id} `,[])
          .then((res) => {
           console.log('Updating Layer4');
           this.toastSer.presentSuccess('Layer 4 Details Updated');
           return res;
         })
         .catch((e) => {
           console.log('error on Updating Layer4 ', JSON.stringify(e));
           return 'error on Updating Layer4 ' + JSON.stringify(e);
         });

        }


  getLayer1() {
    return this.databaseObj
      .executeSql(`select * from borelog_data`, [])
      .then((res) => {
        console.log('getting Layer1');
        return res;
      })
      .catch((e) => {
        console.log('error on getting Layer1 ', JSON.stringify(e));
        return 'error on getting Layer1 ' + JSON.stringify(e);
      });
  }

  getLayer1ById(id: any) {
    return this.databaseObj
      .executeSql(`select * from borelog_data where Id = '${id}'`, [])
      .then((res) => {
        console.log('getting Layer1');
        return res;
      })
      .catch((e) => {
        console.log('error on getting Layer1 ', JSON.stringify(e));
        return 'error on getting Layer1 ' + JSON.stringify(e);
      });
  }

  getLastId() {
    return this.databaseObj
      .executeSql(`SELECT Id from borelog_data order by Id DESC limit 1`, [])
      .then((res) => {
        console.log('getting Id');
        return res;
      })
      .catch((e) => {
        console.log('error on getting Id ', JSON.stringify(e));
        return 'error on getting Id ' + JSON.stringify(e);
      });
  }
}
