import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CodeforcesUrls } from '../assets/codeforces/const-urls';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getContestList() {
    return this.http.get(CodeforcesUrls.contestListWithoutGym);
  }
}
