import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admindashbord',
  templateUrl: './admindashbord.page.html',
  styleUrls: ['./admindashbord.page.scss'],
})
export class AdmindashbordPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }
  movetoList(){
    this.router.navigate(['viewlist1']);

  }

}
