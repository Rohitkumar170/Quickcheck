import { Injectable, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { error } from 'util';
import { HistoricalMandateClass } from '../../../models/historical-mandate/historical-mandate-class';

@Injectable({
  providedIn: 'root'
})
export class HistoricalMandateServiceService {
    baseUrl: string = "";

    constructor(private _http: HttpClient, @Inject('BASE_URL') myAppUrl: string) {
        this.baseUrl = myAppUrl;
    }
    BindGridData(FromDate, ToDate, UserId): Observable<HistoricalMandateClass> {
       // alert(FromDate + " " + ToDate + " " + UserId);
        //alert("Service" + FromDate + " " + ToDate);
        return this._http.get<HistoricalMandateClass>(this.baseUrl + 'api/BindData/DatesWise/' + FromDate + '/' + ToDate + '/' + UserId);
    }
    errorHandler(error: Response) {
        console.log(error);
        return Observable.throw(error);
    }  
}
