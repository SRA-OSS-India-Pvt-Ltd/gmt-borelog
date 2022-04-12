/* eslint-disable max-len */
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
         db.executeSql('CREATE TABLE IF NOT EXISTS borelog_data (Id Integer Primary key AUTOINCREMENT,Package Text,NoofBoreHoles Text,SubAgencyName Text,SubAgencyAddress Text,SubAgencyLogo Text,section_id Text, user_id int(11) ,org_id int(11) , project_id int(11) ,sa_id int(11) ,ref_std varchar(255)  ,bh_no varchar(255) , bh_location varchar(255) , chainage varchar(255) ,  chainage_id Text, easting varchar(255) ,northing varchar(255) ,  type_of_crossing Text,type_of_structure Text, type_of_bridge Text, bh_start_date date ,bh_rl varchar(255) , water_table_rl varchar(255) ,type_of_rig varchar(255) , type_of_rig_other Text ,drill_orientation varchar(255) ,bh_dia varchar(255) ,casing_dia varchar(255) ,casing_depth varchar(255) ,drilling_bit Text , drilling_bit_other Text,core_barrel text, drill_depth_from varchar(255) ,drill_depth_to varchar(255) ,type_of_strata varchar(255) ,type_of_sample text ,soil_ds_depth_from varchar(255) ,soil_ds_depth_to varchar(255) ,soil_spt_depth_from varchar(255) ,soil_spt_depth_to varchar(255) ,soil_uds_depth_from varchar(255) ,soil_uds_depth_to varchar(255) ,soil_sample_color varchar(255),soil_type varchar(100) ,soil_density varchar(100) ,soil_visual_classif varchar(100)  ,rock_sample_type varchar(100) ,rock_depth_from text,rock_depth_to text,rock_run_length varchar(100) ,rock_run_time varchar(100) ,rock_water_loss varchar(100) ,rock_pieces_length varchar(100) , rock_pieces_10 varchar(100) , rock_cr varchar(100) ,rock_rqd varchar(100) ,rock_sample_color varchar(100) ,rock_weathering varchar(100) ,rock_type varchar(100) ,depth_termination varchar(255) ,bh_enddate date , rv_rep_name varchar(255) ,rv_rep_sign varchar(255) ,sa_rep_name varchar(255) ,sa_rep_sign varchar(255) ,client_rep_name varchar(255) ,client_rep_sign varchar(255) ,created_date datetime ,modified_date datetime ,bh_layer text,bh_status text,first text,second text,third text,total text,firstB text,secondB text,thirdB text, totalB text,soil_spt_depth_status text,angle_horizontal Text)',[])
         .then(() => console.log('Executed SQL'))
         .catch(e => console.log(e));


         // eslint-disable-next-line max-len
         db.executeSql('CREATE TABLE IF NOT EXISTS iterations (bh_iteration_id Integer Primary key AUTOINCREMENT,bh_id Text, drill_depth_from Text drill_depth_to Text, type_of_strata Text, type_of_sample Text, soil_ds_depth Text, soil_spt_depth Text,soil_spt_penetration_1 Text,soil_spt_blow_n_1 Text,soil_spt_penetration_2 Text, soil_spt_blow_n_2 Text,soil_spt_penetration_3 Text,soil_spt_blow_n_3 Text,soil_spt_penetration_total Text,soil_spt_blow_n_total Text, soil_spt_depth_status Text, soil_uds_depth Text, soil_sample_color Text, soil_sample_color_other Text,soil_visual_classif Text,rock_sample_type Text, rock_depth_from Text,rock_depth_to Text,rock_run_length Text, rock_run_time Text,rock_water_loss Text,rock_cr Text, rock_rqd Text, rock_sample_color Text,rock_weathering Text)',[])
         .then(() => console.log('Executed SQL'))
         .catch(e => console.log(e));


      })
      .catch(e => console.log(e));

  }
  addLayer1Details(package1: any,noholes: any,sunageName: any,subageAddr: any,aubAgeLog: any,
    userid: any,orgId: any,projId: any,said: any,sectionId: any){
    this.databaseObj.executeSql(`INSERT INTO borelog_data
    (Package,NoofBoreHoles,SubAgencyName,SubAgencyAddress,SubAgencyLogo,user_id,org_id,project_id,sa_id,section_id)
    VALUES
    ('${package1}',
    '${noholes}',
    '${sunageName}',
    '${subageAddr}',
    '${aubAgeLog}',
    '${userid}',
    '${orgId}',
    '${projId}',
    '${said}}',
    '${sectionId}')`,[]);
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

  updateLayer1(package1: string,noholes: string,sunageName: string,subageAddr: string,aubAgeLog: string, id: string,sectionId: string){

   // eslint-disable-next-line max-len
   return this.databaseObj.executeSql(`UPDATE borelog_data SET Package = '${package1}',NoofBoreHoles = '${noholes}',SubAgencyName = '${sunageName}',SubAgencyAddress = '${subageAddr}',SubAgencyLogo = '${aubAgeLog}',section_id = '${sectionId}' WHERE Id = ${id} `,[])
   .then((res) => {
    console.log('Updating');

    return res;
  })
  .catch((e) => {
    console.log('error on Updating Layer1 ', JSON.stringify(e));
    return 'error on Updating Layer1 ' + JSON.stringify(e);
  });

  }
  updateLayer2(refstd: any,bhno: any,
    bhloca: any,bhlat: any,bhlon: any,chainage: any, chainageid: any,
    typeOfcross: any,typeofStruc: any,typeOfBride: any,
    bhsdate: any,bhrl: any,watertaRl: any,
    typeOfrig: any,typeRigOther: any,
    drillOrient: any,bhDia: any,casingDia: any,
    casingDepth: any,id: any,drillbit: any,
    driiother: any,
    core: any){
      return this.databaseObj.executeSql(`UPDATE borelog_data
       SET ref_std = '${refstd}',

       bh_no = '${bhno}',
       bh_location = '${bhloca}',

       easting = '${bhlat}',
       northing = '${bhlon}',
      chainage = '${chainage}',
      chainage_id = '${chainageid}',
      type_of_crossing = '${typeOfcross}',
      type_of_structure = '${typeofStruc}',
      type_of_bridge = '${typeOfBride}',

       bh_start_date = '${bhsdate}',
       bh_rl = '${bhrl}',
       water_table_rl = '${watertaRl}',
       type_of_rig = '${typeOfrig}',
       type_of_rig_other = '${typeRigOther}',


       drill_orientation = '${drillOrient}',
       bh_dia = '${bhDia}',
       casing_dia = '${casingDia}',
       casing_depth = '${casingDepth}',
       drilling_bit = '${drillbit}',
       drilling_bit_other = '${driiother}',
       core_barrel = '${core}'


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






additerationData(bhid: any,drillDepthFrom: any,drillDepthTo: any,typeOfstara: any,
  typeOfSample: any,
  soilDsDepthFrom: any,sptDethFrom: any,
  first: any,sec: any,thir: any,tot: any,fb: any,sb: any, thirdb: any,totB: any,sptdtaus: any,
  udsDepthFrom: any,
  soilSamplColor: any,colorOther: any,soilVisualClassi: any,
  rockSampletype: any,
  rockdepthfrom: any,rockdepthto: any,
  rockrunLeng: any,rockRunTime: any,
  rockWaterLoss: any,rockCr: any,rockrqd: any,
  rockSampleColor: any,rockWaethering: any){
    this.databaseObj.executeSql(`INSERT INTO iterations
    (bh_id,drill_depth_from,drill_depth_to,type_of_strata,type_of_sample,soil_ds_depth,soil_spt_depth,soil_spt_penetration_1,soil_spt_blow_n_1,soil_spt_penetration_2,soil_spt_blow_n_2,soil_spt_penetration_3,soil_spt_blow_n_3,soil_spt_penetration_total,soil_spt_blow_n_total,soil_spt_depth_status,soil_uds_depth,soil_sample_color,soil_sample_color_other,soil_visual_classif,rock_sample_type,rock_depth_from,rock_depth_to,rock_run_length,rock_run_time,rock_water_loss,rock_cr,rock_rqd,rock_sample_color,rock_weathering)
    VALUES
    ('${bhid}',
    '${drillDepthFrom}',
    '${drillDepthTo}',
    '${typeOfstara}',
    '${typeOfSample}',
    '${soilDsDepthFrom}',
    '${sptDethFrom}',
    '${first}',
    '${fb}',
    '${sec}',
    '${sb}',
    '${thir}',
    '${thirdb}',
    '${tot}',
    '${totB}',
    '${sptdtaus}',
    '${udsDepthFrom}',
    '${soilSamplColor}',
    '${colorOther}',
    '${soilVisualClassi}',
    '${rockSampletype}',
    '${rockdepthfrom}',
    '${rockdepthto}',
    '${rockrunLeng}',
    '${rockRunTime}',
    '${rockWaterLoss}',
    '${rockCr}',
    '${rockrqd}',
    '${rockSampleColor}',
    '${rockWaethering}')`,[])
    .then((res: any)=>{
      console.log('adding Borelog');
      this.toastSer.presentError('Iteration Added');

    }).catch((error: any)=>{
      console.log('error on adding Borelog ', JSON.stringify(error));

    });;

  }

 updateLayer3(id: any,bhid: any,drillDepthFrom: any,drillDepthTo: any,typeOfstara: any,
  typeOfSample: any,
  soilDsDepthFrom: any,sptDethFrom: any,
  first: any,sec: any,thir: any,tot: any,fb: any,sb: any, thirdb: any,totB: any,sptdtaus: any,
  udsDepthFrom: any,
  soilSamplColor: any,colorOther: any,soilVisualClassi: any,
  rockSampletype: any,
  rockdepthfrom: any,rockdepthto: any,
  rockrunLeng: any,rockRunTime: any,
  rockWaterLoss: any,rockCr: any,rockrqd: any,
  rockSampleColor: any,rockWaethering: any){
        return this.databaseObj.executeSql(`UPDATE iterations
         SET bh_id = '${bhid}',
         drill_depth_from = '${drillDepthFrom}',
         drill_depth_to = '${drillDepthTo}',
         type_of_strata = '${typeOfstara}',
         type_of_sample = '${typeOfSample}',
         soil_ds_depth = '${soilDsDepthFrom}',
         soil_spt_depth = '${sptDethFrom}',
         soil_spt_penetration_1 = '${first}',
         soil_spt_penetration_2 = '${sec}',
         soil_spt_penetration_3 = '${thir}',
         soil_spt_penetration_total ='${tot}',
         soil_spt_blow_n_1 = '${fb}',
         soil_spt_blow_n_2 = '${sb}',
         soil_spt_blow_n_3 = '${thirdb}',
         soil_spt_blow_n_total ='${totB}',
         soil_spt_depth_status = '${sptdtaus}',

         soil_uds_depth = '${udsDepthFrom}',

         soil_sample_color = '${soilSamplColor}',
         soil_sample_color_other = '${colorOther}',

         soil_visual_classif = '${soilVisualClassi}',
         rock_sample_type = '${rockSampletype}',
         rock_depth_from = '${rockdepthfrom}',
         rock_depth_to = '${rockdepthto}',

         rock_run_length = '${rockrunLeng}',
         rock_run_time = '${rockRunTime}',
         rock_water_loss = '${rockWaterLoss}',

         rock_cr = '${rockCr}',
         rock_rqd = '${rockrqd}',
         rock_sample_color = '${rockSampleColor}',
         rock_weathering = '${rockWaethering}'


         WHERE bh_iteration_id = ${id} `,[])
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

        updateLayer4home(depthTer: any,edate: any,rvrepname: any,
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

             return res;
           })
           .catch((e) => {
             console.log('error on Updating Layer4 ', JSON.stringify(e));
             return 'error on Updating Layer4 ' + JSON.stringify(e);
           });

          }

  getLayer1(userid: any) {
    return this.databaseObj
      .executeSql(`select * from borelog_data where user_id = '${userid}'`, [])
      .then((res) => {
        console.log('getting Layer1');
        return res;
      })
      .catch((e) => {
        console.log('error on getting Layer1 ', JSON.stringify(e));
        return 'error on getting Layer1 ' + JSON.stringify(e);
      });
  }


  getIteraions(bhid: any) {
    return this.databaseObj
      .executeSql(`select * from iterations where bh_id = '${bhid}'`, [])
      .then((res) => {
        console.log('getting Iterations');
        return res;
      })
      .catch((e) => {
        console.log('error on getting Iterations ', JSON.stringify(e));
        return 'error on getting Iterations ' + JSON.stringify(e);
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



  getIterationCount(bhid: any) {
    return this.databaseObj
      .executeSql(`    SELECT COUNT(*) FROM iterations where bh_id = '${bhid}'  `, [])
      .then((res) => {
        console.log('getting Id');
        return res;
      })
      .catch((e) => {
        console.log('error on getting Id ', JSON.stringify(e));
        return 'error on getting Id ' + JSON.stringify(e);
      });
  }
  deleteRowbyId(id: any) {
    return this.databaseObj
      .executeSql(`DELETE FROM borelog_data WHERE Id = '${id}'`, [])
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
