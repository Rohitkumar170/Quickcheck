// /// <reference path="../../../models/nachtransactionpresentation/nachtransactionpresentation.ts" />

import { Injectable, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { error } from 'util';
import { BankBind, CheckUser, BindGridForm, BindMainGrid, BindUMRN, BindRefrence, BindOnRowdblClick, BindUMRNOnchange, BindRefOnchange} from '../../../models/nachtransactionpresentation/nachtransactionpresentation'

@Injectable({
  providedIn: 'root'
})
export class NachtransactionporesentationService {
    baseUrl: string = "";

    constructor(private _http: HttpClient, @Inject('BASE_URL') myAppUrl: string) {
        this.baseUrl = myAppUrl;
    }
    BankBind(EntityId, UserId): Observable<BankBind> {
        //alert("Service" + FromDate + " " + ToDate + Bank);
        return this._http.get<BankBind>(this.baseUrl + 'api/NachtransactionPresentation/BankBind/' + EntityId + '/' + UserId);
       
    }

    CheckUser(EntityId, UserId): Observable<CheckUser> {
        return this._http.get<CheckUser>(this.baseUrl + 'api/NachtransactionPresentation/CheckUser/' + EntityId + '/' + UserId);

    }

    BindGridForm(EntityId, UserId, Bank): Observable<BindGridForm> {
        return this._http.get<BindGridForm>(this.baseUrl + 'api/NachtransactionPresentation/BindGridForm/' + EntityId + '/' + UserId + '/' + Bank);
    }
    //paras
    BindMainGrid(UserId): Observable<BindMainGrid> {
        alert('MainGrid');
        return this._http.get<BindMainGrid>(this.baseUrl + 'api/NachtransactionPresentation/BindMainGrid/' + UserId );
    }

    BindUMRN(EntityId, UserId, PresDate): Observable<BindUMRN> {

        return this._http.get<BindUMRN>(this.baseUrl + 'api/NachtransactionPresentation/BindUMRN/' + UserId + '/' + EntityId + '/' + PresDate); 
       // 
    }

    BindRefrence(EntityId, UserId, PresDate): Observable<BindRefrence> {

        //alert('hellos');
        return this._http.get<BindRefrence>(this.baseUrl + 'api/NachtransactionPresentation/BindRefrence/' + UserId + '/' + EntityId + '/' + PresDate);
        // 
    }

    BindOnRowdblClick(EntityId, UserId, FileNo): Observable<BindOnRowdblClick> {
        return this._http.get<BindOnRowdblClick>(this.baseUrl + 'api/NachtransactionPresentation/BindOnRowdblClick/' + UserId + '/' + EntityId + '/' + FileNo);
        // 
    }
    BindUMRNOnchange(EntityId, UserId, RefrenceNo): Observable<BindUMRNOnchange> {
        return this._http.get<BindUMRNOnchange>(this.baseUrl + 'api/NachtransactionPresentation/BindUMRNOnchange/' + UserId + '/' + EntityId + '/' + RefrenceNo);
        // 
    }

    BindRefOnchange(EntityId, UserId, UMRN): Observable<BindRefOnchange> {
        alert('hellos');
        return this._http.get<BindRefOnchange>(this.baseUrl + 'api/NachtransactionPresentation/BindRefOnchange/' + UserId + '/' + EntityId + '/' + UMRN);
        // 
    }
    errorHandler(error: Response) {
        console.log(error);
        return Observable.throw(error);
    }   

}
