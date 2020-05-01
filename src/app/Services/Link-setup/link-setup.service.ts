
import { Injectable, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { error } from 'util';
import { Linksetup } from '../../../models/link-setup/bindgrid';


@Injectable({
  providedIn: 'root'
})
export class LinkSetupService {
    baseUrl: string = "";
    UserId: string = "";
    EntityId: string = "";
    constructor(private _http: HttpClient, @Inject('BASE_URL') myAppUrl: string) {
        this.baseUrl = myAppUrl;
    }
    BindGrid(): Observable<any> {
        debugger;
        let item = JSON.parse(sessionStorage.getItem('User'));
        this.UserId = item.UserId;
        this.EntityId = item.ReferenceId;
        return this._http.get<any>(this.baseUrl + 'api/Link_setup/BindGrid');
    } 


    GetIconDropDown(): Observable<any> {
        return this._http.get<any>(this.baseUrl + 'api/Link_setup/GetIconDropDown');
    } 

    EditData(LinkId): Observable<any> {
        return this._http.get<any>(this.baseUrl + 'api/Link_setup/EditData/' + LinkId);
    }

    InsertData(em: any, UserId): Observable<Linksetup> {
        const body = em;
        const headers = new HttpHeaders().set('content-type', 'application/json');
        return this._http.post<Linksetup>(this.baseUrl + 'api/Link_setup/InsertData/' + UserId, body, {
            headers
        });
    }


    UpDateLink(em: any, UserId, LinkId): Observable<Linksetup> {
        const body = em;
        const headers = new HttpHeaders().set('content-type', 'application/json');
        return this._http.post<Linksetup>(this.baseUrl + 'api/Link_setup/UpDateLink/' + '/' + UserId + '/' + LinkId, body, {
            headers
        });
    }
}
