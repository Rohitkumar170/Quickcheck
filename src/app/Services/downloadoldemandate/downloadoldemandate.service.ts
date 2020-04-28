import { Injectable, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { error } from 'util';
import { Bankdetails } from '../../../Models/OldEmandate/Bankbind';
import { Searchdetails } from '../../../Models/OldEmandate/SearchData';

@Injectable({
  providedIn: 'root'
})
export class DownloadoldemandateService {
    baseUrl: string = "";

    constructor(private _http: HttpClient, @Inject('BASE_URL') myAppUrl: string) {
        this.baseUrl = myAppUrl;
    }
    BankBind(userid): Observable<any> {
      
        return this._http.get<any>(this.baseUrl + 'api/Downloadoldemandate/BankBind/' + userid);
    }
    
    SearchData(FromDate, ToDate, Bank, userid): Observable<Searchdetails> {
      
        return this._http.get<Searchdetails>(this.baseUrl + 'api/Downloadoldemandate/SearchData/' + FromDate + '/' + ToDate + '/' + Bank + '/' + userid);
    }

    errorHandler(error: Response) {
        console.log(error);
        return Observable.throw(error);
    }  
}
