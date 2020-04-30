import { Injectable, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { error } from 'util';
import { User } from '../../../Models/User/user';
import { Users } from '../../../Models/User/users';



@Injectable({
    providedIn: 'root'
})
export class UserServiceService {
    baseUrl: string = "";
    constructor(private _http: HttpClient, @Inject('BASE_URL') myAppUrl: string) {
        this.baseUrl = myAppUrl;
    }
    getUser(EntityId, PageCount, Search_Text): Observable<any> {

        return this._http.get<any>(this.baseUrl + 'api/USer/getUserData/' + EntityId + '/' + PageCount + '/' + Search_Text);
    }
    getMakers(EntityId, UserId): Observable<any> {

        return this._http.get<any>(this.baseUrl + 'api/USer/getMakers/' + EntityId + '/' + UserId);

    }
    CheckIsPresentmentChecker(EntityId): Observable<any> {

        return this._http.get<any>(this.baseUrl + 'api/USer/CheckIsPresentmentChecker/' + EntityId);
    }

    SaveUser(em: any, EntityId, UserId, IsViewAll, checkbulkuploadlink, chkvideolink): Observable<Users> {
        const body = em;
        const headers = new HttpHeaders().set('content-type', 'application/json');
        return this._http.post<Users>(this.baseUrl + 'api/USer/SaveData/' + EntityId + '/' + UserId + '/' + IsViewAll + '/' + checkbulkuploadlink + '/' + chkvideolink, body, {
            headers
        });
    }
    EditData(UserId): Observable<any> {

        return this._http.get<any>(this.baseUrl + 'api/USer/EditData/' + UserId);
    }
    UpdateUser(em: any, EntityId, UserId, Id, IsViewAll, checkbulkuploadlink, chkvideolink): Observable<Users> {
        const body = em;
        const headers = new HttpHeaders().set('content-type', 'application/json');
        return this._http.post<Users>(this.baseUrl + 'api/USer/UpdateData/' + EntityId + '/' + UserId + '/' + Id + '/' + IsViewAll + '/' + checkbulkuploadlink + '/' + chkvideolink, body, {
            headers
        });
    }
    getUserReport(EntityId): Observable<any> {

        return this._http.get<any>(this.baseUrl + 'api/USer/getUserReport/' + EntityId);
    }
}

