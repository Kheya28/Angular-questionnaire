import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedDataService } from '../shared-data.service';


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
})
export class QuestionComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name'];
  dataSource = this.shared_data.ELEMENT_DATA;
  constructor(private router: Router,
    private shared_data: SharedDataService
  ) { }

  ngOnInit(): void { }

  showDetails(userInfo: any) {
    this.shared_data.userInfo = userInfo;
    this.router.navigate(['show-info']);
  }

  addForm() {
    this.router.navigate(['add-form']);
  }
}
