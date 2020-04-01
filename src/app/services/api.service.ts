import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AppConfig } from '../appConfig';

@Injectable()
export class ApiService {

  constructor( private http: HttpClient ) { }

  userLogin(data) {
    return this.http.post(`some-url/api/login`, data);
  }
  getPost(page, limit) {
    return this.http.get(`${AppConfig.apiUrl}/posts?_page=${page}&_limit=${limit}`);
  }
  writePost(data) {
    return this.http.post(`${AppConfig.apiUrl}/posts`, data);
  }
}