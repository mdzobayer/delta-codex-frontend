import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


const localUrl = 'https://codeforces.com/api/user.info?handles=DmitriyH';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getSmartphone() {
    return this.http.get(localUrl);
  }
}
