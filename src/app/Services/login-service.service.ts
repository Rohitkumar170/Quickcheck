import { Injectable,Inject } from '@angular/core';
import { Router } from '@angular/router'; 
import { HttpClient,HttpHeaders,HttpParams,HttpResponse} from '@angular/common/http'; 
import { Observable } from 'rxjs';
import {map,catchError} from 'rxjs/operators';  
import { error } from 'util';
import {Logindetails} from '../../Models/Login/logindetails'

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
    baseUrl: string = "";
    
    constructor(private _http: HttpClient, @Inject('BASE_URL') myAppUrl: string) {
        this.baseUrl = myAppUrl;
    }
    GetLogin(Username,Password): Observable<Logindetails> {
        return this._http.get<Logindetails>(this.baseUrl + 'api/Login/getlogindetails/' + Username + '/' + Password);
    }
    ForgotPassword(Username): Observable<Logindetails> {
        return this._http.get<Logindetails>(this.baseUrl + 'api/Login/ForgotPassword/' + Username);
    }

    ChangePassword(Password,Email): Observable<Logindetails> {
        return this._http.get<Logindetails>(this.baseUrl + 'api/Login/UpdatePassword/' + Password+'/'+Email);
    }
    
errorHandler(error: Response) {  
  console.log(error);  
  return Observable.throw(error);  
}  

  }


