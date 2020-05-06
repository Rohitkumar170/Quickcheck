/// <reference path="../../../models/report-view/BindUser.ts" />
import { Injectable, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { error } from 'util';
import { BindUser } from '../../../models/report-view/BindUser';
import { Bindgrid } from '../../../models/report-view/bindgrid';

@Injectable({
  providedIn: 'root'
})
export class ReportViewService {
    baseUrl: string = "";

    constructor(private _http: HttpClient, @Inject('BASE_URL') myAppUrl: string) {
        this.baseUrl = myAppUrl;
    }

    BindUser(UserId): Observable<any> {

        return this._http.get<any>(this.baseUrl + 'api/ReportView/BindUser/' + UserId);

    }

    SearchData(em: any): Observable<any> {
        
         const body = em;

        const headers = new HttpHeaders().set('content-type', 'application/json');
        return this._http.post<any>(this.baseUrl + 'api/ReportView/SearchData/', body, {
            headers
        });

    }
    


}


