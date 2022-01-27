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
        db.executeSql('create table Layer1(Id Integer Primarykey Auto Increment,Package Text,NoofBoreHoles Text,SubAgencyName Text,SubAgencyAddress Text,SubAgencyLogo Text)', [])
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
}
