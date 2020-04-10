import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CodeforcesUrls } from '../../assets/codeforces/const-urls';
import { ContestListResp } from '../models/contestlistresp'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getContestList() :Observable<ContestListResp> {
    return this.http.get<ContestListResp>(CodeforcesUrls.contestListWithoutGym);
  }
}
