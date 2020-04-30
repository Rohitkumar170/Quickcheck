import { Injectable, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { error } from 'util';

import { EntityData } from '../../../Models/EntityBankSetup/entity-data';


@Injectable({
  providedIn: 'root'
})
export class EntityBankService {
    baseUrl: string = "";
    constructor(private _http: HttpClient, @Inject('BASE_URL') myAppUrl: string) {
        this.baseUrl = myAppUrl;
    }
    getEntity(): Observable<any> {

        return this._http.get<any>(this.baseUrl + 'api/EntityBank/getEntity');
    }
    getBank(EntityId): Observable<any> {

        return this._http.get<any>(this.baseUrl + 'api/EntityBank/getBank/' + EntityId);

    }
    SaveData(em: any, UserId,arrvalue,adhocarr): Observable<EntityData> {
        const body = em;
        const headers = new HttpHeaders().set('content-type', 'application/json');
        return this._http.post<EntityData>(this.baseUrl + 'api/EntityBank/SaveData/' + UserId + '/' + arrvalue + '/' + adhocarr, body, {
            headers
        });
    }

}
