import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  apiUrl=environment.apiUrl;
  baseUrl: string =this.apiUrl+ "/Login";
  constructor(private http: HttpClient) { }
  isAuthor:boolean=false;
  GetUserData(httpParams:HttpParams): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}`,{ params: httpParams });
  }
}
