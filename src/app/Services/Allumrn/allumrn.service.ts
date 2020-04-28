import { Injectable, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { error } from 'util';
import { GridData } from '../../../Models/Allumrn/GridData';
import { Umrn_Class } from '../../../Models/Allumrn/Umrn_Class';

@Injectable({
  providedIn: 'root'
})
export class AllumrnService {
    baseUrl: string = "";

    constructor(private _http: HttpClient, @Inject('BASE_URL') myAppUrl: string) {
        this.baseUrl = myAppUrl;
    }

    GridBind(Entityid, Pageno): Observable<GridData> {
       // alert("Service" + Entityid + " " + Pageno );
        return this._http.get<GridData>(this.baseUrl + 'api/AllUMRN/GridBind/' + Entityid + '/' + Pageno);
    }

    //SearchData(em: any): Observable<GridData> {
    //    const body = em;
    //   //  alert(body);
    //    const headers = new HttpHeaders().set('content-type', 'application/json');
    //    return this._http.post<Umrn_Class>(this.baseUrl + 'api/AllUMRN/SearchData', body, {
    //        headers
    //    });
    //}

    errorHandler(error: Response) {
        console.log(error);
        return Observable.throw(error);
    }  




}








