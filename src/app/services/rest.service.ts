import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  private clientId= "GITHUB_CLIENT_ID";
  private clientSecret = "GITHUB_CLIENT_SECRET";

  constructor(private httpClient: HttpClient) { }

  fetchUsers(user):Observable<any>{
    const url = 'https://api.github.com/users/' +user+ '?client_id=' +this.clientId+ '&client_secret=' +this.clientSecret;
    return this.httpClient.get(url);
  }
}
