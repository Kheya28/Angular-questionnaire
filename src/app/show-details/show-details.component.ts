import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent implements OnInit {

  userinfo: any;
  constructor(private router: Router, private shared_data: SharedDataService) { }

  ngOnInit(): void {
    this.userinfo = this.shared_data.userInfo;
  }

  backToDataList() {
    this.router.navigate(['question-builder']);
  }

}
