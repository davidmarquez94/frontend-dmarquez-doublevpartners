import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiListUrl = 'https://api.github.com/search/users?q=';
  private apiUserUrl = 'https://api.github.com/users/';

  constructor(private http: HttpClient) { }

  //Listado de usuarios
  public getUsersList(username: string): Observable<any>
  {
    let url = this.apiListUrl + username;
    return this.http.get<any>(url);
  }

  //Datos de un usuario único
  public getUserData(user_login: string): Observable<any>
  {
    let url = this.apiUserUrl + user_login;
    return this.http.get<any>(url);
  }
}
