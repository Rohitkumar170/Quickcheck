/// <reference path="../../../models/downloadmandate/download-mandate-details.ts" />
import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { error } from 'util';
import { DownloadMandateDetails } from '../../../Models/downloadmandate/download-mandate-details';
import { Downloadmandategrid } from '../../../Models/downloadmandate/downloadmandategrid';

@Injectable({
  providedIn: 'root'
})
export class DownloadmandateService {

    baseUrl: string = "";

    constructor(private _http: HttpClient, @Inject('BASE_URL') myAppUrl: string) {
        this.baseUrl = myAppUrl;
    }

    getBankDropDown(userId): Observable<DownloadMandateDetails> {
        return this._http.get<DownloadMandateDetails>(this.baseUrl + 'api/DownloadMandate/getdropdownbank/' + userId );
    }

    //getbtnSearch(userId, referenceNo): Observable<DownloadMandateDetails[]> {
    //    return this._http.get<DownloadMandateDetails[]>(this.baseUrl + 'api/DownloadMandate/getlogindetails/' + userId + '/' + referenceNo);
    //}

    getBindGrid(userID, ToDate, FromDate, sponsorbankcode): Observable<Downloadmandategrid[]> {
        return this._http.get<Downloadmandategrid[]>(this.baseUrl + 'api/DownloadMandate/getBindGrid/' + userID + '/' + ToDate + '/' + FromDate + '/' + sponsorbankcode);
    }

    getBindGridRef(userID, refNo): Observable<Downloadmandategrid[]> {
        //alert("Service" + FromDate + " " + ToDate);
        return this._http.get<Downloadmandategrid[]>(this.baseUrl + 'api/DownloadMandate/getBindGridRef/' + userID + '/' + refNo);
    }

    getRejectMandate(userID, fromdate, todate, selectMandateId, rejectcomnt): Observable<any> {
       // alert(selectMandateId);
        return this._http.get<any>(this.baseUrl + 'api/DownloadMandate/getRejectMandate/' + userID + '/' + fromdate + '/' + todate + '/' + selectMandateId + '/' + rejectcomnt);
    }


}
