import { Injectable, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { error } from 'util';
import { UMRNHISTORYCLASS } from '../../../models/umrn_history/umrn-history-class'

@Injectable({
  providedIn: 'root'
})
export class UMRNHISTORYSERVICEService {
    baseUrl: string = "";

    constructor(private _http: HttpClient, @Inject('BASE_URL') myAppUrl: string) {
        this.baseUrl = myAppUrl;
    }

    //BindGridData(UMRN, CustomerName, RefrNo): Observable<UMRNHISTORYCLASS> {
    //    alert("Service" + UMRN + " " + CustomerName + RefrNo);
    //    return this._http.get<UMRNHISTORYCLASS>(this.baseUrl + 'api/BindData/' + UMRN + '/' + CustomerName + '/' + RefrNo);
    //}


    BindGridData(em: any): Observable<UMRNHISTORYCLASS> {
        const body = em;
       // alert(body);
        const headers = new HttpHeaders().set('content-type', 'application/json');
        return this._http.post<UMRNHISTORYCLASS>(this.baseUrl + 'api/BindData', body, {
            headers
        });

        // return this._http.post<UMRNHISTORYCLASS>(this.baseUrl + 'api/BindData', +UMRN + '/' + CustomerName + '/' + RefrNo + '/' + UserId);
    }

    errorHandler(error: Response) {
        console.log(error);
        return Observable.throw(error);
    }  
}
