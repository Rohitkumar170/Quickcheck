import { Injectable, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { error } from 'util';
import { Bankdetails } from '../../../models/downloademandate/downloademandate'
//paras
import { DownloadEmandateclass } from '../../../models/downloademandate/downloademandate'


@Injectable({
  providedIn: 'root'
})
export class DownloadEmandateServiceService {
    baseUrl: string = "";

    constructor(private _http: HttpClient, @Inject('BASE_URL') myAppUrl: string) {
        this.baseUrl = myAppUrl;
    }

    BankBind(UserId): Observable<any> {

        return this._http.get<any>(this.baseUrl + 'api/DownloadEmandate/BankBind/' + UserId);
    }
    //paras
    BindGridData(FromDate, ToDate, Bank, UserId): Observable<DownloadEmandateclass> {
        //alert("Service" + FromDate + " " + ToDate + Bank);
        return this._http.get<DownloadEmandateclass>(this.baseUrl + 'api/DownloadEmandate/BindGridData/' + FromDate + '/' + ToDate + '/' + Bank + '/' + UserId);
    }
    //paras


    errorHandler(error: Response) {
        console.log(error);
        return Observable.throw(error);
    }   

   
  

}
