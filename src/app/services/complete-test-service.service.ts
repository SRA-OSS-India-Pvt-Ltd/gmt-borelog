/* eslint-disable @typescript-eslint/member-ordering */

import { Injectable } from '@angular/core';
import {AutoCompleteService} from 'ionic4-auto-complete';


import { Constants } from '../common/constants';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class CompleteTestServiceService implements AutoCompleteService {
  labelAttribute = 'name';
  formValueAttribute = 'numericCode';
   chaingeList: any = [];

  constructor(    public platform: Platform) {

    this. platform.ready().then(() => {
      if (this.platform.is('android')) {
        this.chaingeList = Constants.chaingeListAndroid11;
      }else{

    this.chaingeList = Constants.chainagesBySectionIDList;
      }
    });
   }
  getItemLabel?(item: any) {
  console.log('iteems: ',item);
  return item.chainage;
  }

  getResults(keyword: string) {
    if (!keyword) { return false; }


          // eslint-disable-next-line arrow-body-style
          return this.chaingeList.filter((item: any) => {
                return item.chainage.startsWith(keyword);
              }
          );
       }
  }



