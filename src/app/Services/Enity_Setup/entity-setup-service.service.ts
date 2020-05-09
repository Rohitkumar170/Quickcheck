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
        return this._http.get<any>(this.baseUrl + 'api/BindGrid');
    }
    SaveData(em: any, EntityId): Observable<any> {
        EntityId="";
        const body = em;
        const headers = new HttpHeaders().set('content-type', 'application/json');
        return this._http.post<any>(this.baseUrl + 'api/SaveData/' + EntityId , body, {
            headers
        });
    }
    BindState(CountryId): Observable<any> {
        return this._http.get<any>(this.baseUrl + 'api/BindState/'+ CountryId);
    }
    BindCity(StateId): Observable<any> {
        return this._http.get<any>(this.baseUrl + 'api/BindCity/'+ StateId);
    }
    EditFun(EntityId): Observable<any> {
        return this._http.get<any>(this.baseUrl + 'api/EditData/'+ EntityId);
    }
    DeleteFun(EntityId,em:any): Observable<any> {
        EntityId="";
       const body=em;
       alert(body);
       console.log(body);
       const headers = new HttpHeaders().set('content-type', 'application/json');
        return this._http.post<any>(this.baseUrl + 'api/DeleteData/' +EntityId , body, {
            headers
        });
    }
    errorHandler(error: Response) {
        console.log(error);
        return Observable.throw(error);
    }  
}
