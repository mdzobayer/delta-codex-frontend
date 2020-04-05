import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Contest } from '../../models/contest';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-contest-list',
  templateUrl: './contest-list.component.html',
  styleUrls: ['./contest-list.component.css']
})
export class ContestListComponent implements OnInit {

  contestList: MatTableDataSource<Contest>;
  contestlistColumns: string[] = ['id', 'name', 'type', 'phase', 'startTimeSeconds'];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private api: ApiService) {

  }

  ngOnInit() {
    this.getContests();
    
  }

  getContests() {
    this.api.getContestList()
      .subscribe(data => {

        this.contestList = new MatTableDataSource<Contest>(data['result']);
        this.contestList.paginator = this.paginator;
      });
  }

  

}
