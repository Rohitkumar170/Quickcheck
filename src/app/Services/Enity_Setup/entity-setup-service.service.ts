import { Injectable, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { error } from 'util';
import { MainGrid } from '../../../models/entity_setup/main-grid';


@Injectable({
  providedIn: 'root'
})
export class EntitySetupServiceService {
    baseUrl: string = "";

    constructor(private _http: HttpClient, @Inject('BASE_URL') myAppUrl: string) {
        this.baseUrl = myAppUrl;
    }

    BindCountryAndBank(): Observable<any> {
        return this._http.get<any>(this.baseUrl + 'api/BindCountryAndBank');
    }
    BingGrid(): Observable<any> {
        return this._http.get<any>(this.baseUrl + 'api/BingGrid');
    }
    SaveData(em: any): Observable<any> {
        const body = em;
        const headers = new HttpHeaders().set('content-type', 'application/json');
        return this._http.post<any>(this.baseUrl + 'api/SaveData', body, {
            headers
        });
    }

    errorHandler(error: Response) {
        console.log(error);
        return Observable.throw(error);
    }  
}
