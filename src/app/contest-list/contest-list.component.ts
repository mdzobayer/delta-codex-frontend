import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-contest-list',
  templateUrl: './contest-list.component.html',
  styleUrls: ['./contest-list.component.css']
})
export class ContestListComponent implements OnInit {

  contestList: any;

  constructor(private api: ApiService) {

  }

  ngOnInit() {
    this.getContests();
  }

  getContests() {
    this.api.getContestList()
      .subscribe(data => {

        this.contestList = data['result'];

      });
  }

  

}
