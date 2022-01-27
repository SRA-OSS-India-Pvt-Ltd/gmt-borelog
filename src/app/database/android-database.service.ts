import { Injectable } from '@angular/core';
//import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class AndroidDatabaseService {
  databaseObj: SQLiteObject;

  constructor(public sqlite: SQLite) { }

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
         db.executeSql('CREATE TABLE IF NOT EXISTS borelog_data (bh_id Integer Primary key AUTOINCREMENT, user_id int(11) ,org_id int(11) , project_id int(11) ,sa_id int(11) ,ref_std varchar(255) , struct_type varchar(255) ,bh_no varchar(255) , bh_location varchar(255) , bh_chainage varchar(255) , bh_lat varchar(255) ,bh_lon varchar(255) , bh_start_date date ,bh_rl varchar(255) , water_table_rl varchar(255) ,type_of_rig varchar(255) ,type_of_drilling varchar(255) ,circulation_fluid varchar(255) ,drill_orientation varchar(255) ,bh_dia varchar(255) ,casing_dia varchar(255) ,casing_depth varchar(255) ,drill_depth_from varchar(255) ,drill_depth_to varchar(255) ,type_of_strata varchar(255) ,type_of_sample text ,soil_ds_depth_from varchar(255) ,soil_ds_depth_to varchar(255) ,soil_spt_depth_from varchar(255) ,soil_spt_depth_to varchar(255) ,soil_uds_depth_from varchar(255) ,soil_uds_depth_to varchar(255) ,soil_sample_color varchar(255),soil_type varchar(100) ,soil_density varchar(100) ,soil_visual_classif varchar(100) ,soil_drilling_bit varchar(100) ,soil_core_barrel varchar(100) ,rock_sample_type varchar(100) ,rock_run_length varchar(100) ,rock_run_time varchar(100) ,rock_water_loss varchar(100) ,rock_pieces_length varchar(100) , rock_pieces_10 varchar(100) , rock_cr varchar(100) ,rock_rqd varchar(100) ,rock_sample_color varchar(100) ,rock_weathering varchar(100) ,rock_type varchar(100) ,depth_termination varchar(255) ,bh_enddate date , rv_rep_name varchar(255) ,rv_rep_sign varchar(255) ,sa_rep_name varchar(255) ,sa_rep_sign varchar(255) ,client_rep_name varchar(255) ,client_rep_sign varchar(255) ,created_date datetime ,modified_date datetime ,bh_layer text,bh_status text)',[])
         .then(() => console.log('Executed SQL'))
         .catch(e => console.log(e));


      })
      .catch(e => console.log(e));

  }
  addLayer1Details(package1: any,noholes: any,sunageName: any,subageAddr: any,aubAgeLog: any){
    this.databaseObj.executeSql(`INSERT INTO Layer1
    (Package,NoofBoreHoles,SubAgencyName,SubAgencyAddress,SubAgencyLogo)
    VALUES
    ('${package1}',
    '${noholes}',
    '${sunageName}',
    '${subageAddr}',
    '${aubAgeLog}')`,[]);
  }
  updateLayer1(package1: string,noholes: string,sunageName: string,subageAddr: string,aubAgeLog: string, id: string){

   // eslint-disable-next-line max-len
   return this.databaseObj.executeSql(`UPDATE Layer1 SET Package = '${package1}',NoofBoreHoles = '${noholes}',SubAgencyName = '${sunageName}',SubAgencyAddress = '${subageAddr}',SubAgencyLogo = '${aubAgeLog}' WHERE Id = ${id} `,[])
   .then((res) => {
    console.log('Updating');
    return res;
  })
  .catch((e) => {
    console.log('error on Updating Layer1 ', JSON.stringify(e));
    return 'error on Updating Layer1 ' + JSON.stringify(e);
  });

  }

  getLayer1() {
    return this.databaseObj
      .executeSql(`select * from Layer1`, [])
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
      .executeSql(`select * from Layer1 where Id = '${id}'`, [])
      .then((res) => {
        console.log('getting Layer1');
        return res;
      })
      .catch((e) => {
        console.log('error on getting Layer1 ', JSON.stringify(e));
        return 'error on getting Layer1 ' + JSON.stringify(e);
      });
  }
}
