import { Injectable, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { error } from 'util';
import { GridData } from '../../../Models/Allumrn/GridData';

import { GridDataDetails } from '../../../Models/Allumrn/GridDataDetails';

@Injectable({
  providedIn: 'root'
})
export class AllumrnService {
    baseUrl: string = "";

    constructor(private _http: HttpClient, @Inject('BASE_URL') myAppUrl: string) {
        this.baseUrl = myAppUrl;
    }

    //GridBind(Entityid, Pageno): Observable<GridData> {
       
    //    return this._http.get<GridData>(this.baseUrl + 'api/AllUMRN/GridBind/' + Entityid + '/' + Pageno);
    //}

    GridBind1(Entityid, Pageno): Observable<any> {

        return this._http.get<any>(this.baseUrl + 'api/AllUMRN/GridBind1/' + Entityid + '/' + Pageno);
    }

    GridDataDetails(UMRN, Entityid): Observable<GridDataDetails> {
       
        return this._http.get<GridDataDetails>(this.baseUrl + 'api/AllUMRN/GridDataDetails/' + UMRN + '/' + Entityid);
    }
    //GridDataDetails1(UMRN, Entityid): Observable<GridDataDetails> {

    //    return this._http.get<GridDataDetails>(this.baseUrl + 'api/AllUMRN/GridDataDetails1/' + UMRN + '/' + Entityid);
    //}

    SearchData(em: any): Observable<GridData> {
        const body = em;
       
        const headers = new HttpHeaders().set('content-type', 'application/json');
        return this._http.post<GridData>(this.baseUrl + 'api/AllUMRN/SearchData', body, {
            headers
        });
    }


    SearchData1(em: any): Observable<any> {
        const body = em;

        const headers = new HttpHeaders().set('content-type', 'application/json');
        return this._http.post<any>(this.baseUrl + 'api/AllUMRN/SearchData1', body, {
            headers
        });
    }
    //AddUmrn(em: any): Observable<any> {
    //    const body = em;
       
    //    const headers = new HttpHeaders().set('content-type', 'application/json');
    //    return this._http.post<any>(this.baseUrl + 'api/AllUMRN/AddUmrn', body, {
    //        headers
    //    });
    //}

    AddUmrn1(em: any): Observable<any> {
        const body = em;

        const headers = new HttpHeaders().set('content-type', 'application/json');
        return this._http.post<any>(this.baseUrl + 'api/AllUMRN/AddUmrn1', body, {
            headers
        });
    }
   


    errorHandler(error: Response) {
        console.log(error);
        return Observable.throw(error);
    }  




}








