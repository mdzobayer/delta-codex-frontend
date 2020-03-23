import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { debug } from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'delta-codex-frontend';

  contestInfo: any;

  constructor(private api: ApiService) {
    this.getSmartphone();
  }

  getSmartphone() {
    this.api.getSmartphone()
      .subscribe(data => {
        debugger
      });
  }
}
