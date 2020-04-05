import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ContestListResp } from '../../models/contestlistresp';

@Component({
  selector: 'app-contest-list',
  templateUrl: './contest-list.component.html',
  styleUrls: ['./contest-list.component.css']
})
export class ContestListComponent implements OnInit {

  contestListResp: ContestListResp;

  constructor(private api: ApiService) {

  }

  ngOnInit() {
    this.getContests();
  }

  getContests() {
    this.api.getContestList()
      .subscribe(data => {

        this.contestListResp = data;

      });
  }

  

}
