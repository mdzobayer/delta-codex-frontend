import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Contest } from '../../models/contest';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', blabla: 'ak'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];


@Component({
  selector: 'app-contest-list',
  templateUrl: './contest-list.component.html',
  styleUrls: ['./contest-list.component.css']
})
export class ContestListComponent implements OnInit {

  contestList: Contest [];
  contestlistColumns: string[] = ['id', 'name', 'type', 'phase', 'startTimeSeconds'];

  displayedColumns: string[] = ['position', 'name',  'symbol', 'blabla'];
  dataSource = ELEMENT_DATA;


  constructor(private api: ApiService) {

  }

  ngOnInit() {
    this.getContests();
  }

  getContests() {
    this.api.getContestList()
      .subscribe(data => {
debugger
        this.contestList = data['result'];

      });
  }

  

}
