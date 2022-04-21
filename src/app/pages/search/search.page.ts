/* eslint-disable no-var */
import { Component, OnInit } from '@angular/core';
import { Constants } from 'src/app/common/constants';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  term = '';
  filterData = [
    {
      firstName: 'Celestine',
      lastName: 'Schimmel',
      address: '7687 Jadon Port'
    },
    {
      firstName: 'Johan',
      lastName: 'Ziemann PhD',
      address: '156 Streich Ports'
    },
    {
      firstName: 'Lizzie',
      lastName: 'Schumm',
      address: '5203 Jordon Center'
    },
    {
      firstName: 'Gavin',
      lastName: 'Leannon',
      address: '91057 Davion Club'
    },
    {
      firstName: 'Lucious',
      lastName: 'Leuschke',
      address: '16288 Reichel Harbor'
    }
  ];

  countriesInitial = []; //initialize your countriesInitial array empty
countries = []; //initialize your countries array empty
searchCountryString = ''; // initialize your searchCountryString string empty


  constructor() {
    this.countriesInitial = Constants.chaingeListAndroid;
    this.countries = Constants.chaingeListAndroid;

   }

  ngOnInit() {
  }

  searchCountry(searchbar) {
    // reset countries list with initial call
    this.countries = this.countriesInitial;

    // set q to the value of the searchbar
    var q = searchbar.value;

    // if the value is an empty string don't filter the items

    this.countries = this.countries.filter((v) => {
        if (v.toLowerCase().indexOf(q.toLowerCase()) > -1) {
            return true;
        }
        return false;
    });
}


}

