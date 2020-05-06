import { Injectable, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { error } from 'util';
import { CheckReference } from '../../../Models/BankForm/checkreference';
import { SaveData, EditData0 } from '../../../Models/BankForm/savedata';
@Injectable({
  providedIn: 'root'
})
export class BankFormService {
    baseUrl: string = ""; UserId: string = ""; EntityId: string = "";
    constructor(private _http: HttpClient, @Inject('BASE_URL') myAppUrl: string) {
        this.baseUrl = myAppUrl;
    }

    GetCategory(): Observable<any> {
        let Sessionvalue = JSON.parse(sessionStorage.getItem('User'));
        this.UserId = Sessionvalue.UserId;
        this.EntityId = Sessionvalue.ReferenceId;
        return this._http.get<any>(this.baseUrl + 'api/BankForm/GetBankFormdata/' + this.UserId + '/' + this.EntityId);
    }
    CheckReference(em: any, mandateId, EntityId): Observable<CheckReference> {
        let Sessionvalue = JSON.parse(sessionStorage.getItem('User'));
        this.UserId = Sessionvalue.UserId;
        this.EntityId = Sessionvalue.ReferenceId;
        const body = em;     
        const headers = new HttpHeaders().set('content-type', 'application/json');
        return this._http.post<CheckReference>(this.baseUrl + 'api/BankForm/CheckReference/'+mandateId + '/' + EntityId , body, {
            headers
        });
    }

    SaveData(em: any, UserId, EntityId,mandateid): Observable<any> {
        debugger;
        const body = em;
        
        const headers = new HttpHeaders().set('content-type', 'application/json');
        return this._http.post<any>(this.baseUrl + 'api/BankForm/SaveData/'+UserId + '/' + EntityId + '/' + mandateid , body, {
            headers
        });
    }
    BindGrid(): Observable<any> {
        let item = JSON.parse(sessionStorage.getItem('User'));
        this.UserId = item.UserId;
        this.EntityId = item.ReferenceId;

        return this._http.get<any>(this.baseUrl + 'api/BankForm/BindGrid/' + this.UserId);

    } 

    Edit(mandateid): Observable<any> {
        let item = JSON.parse(sessionStorage.getItem('User'));
        this.UserId = item.UserId;
        this.EntityId = item.ReferenceId;
      
        return this._http.get<any>(this.baseUrl + 'api/BankForm/Edit/' + mandateid + '/' + this.UserId + '/' + this.EntityId);
           
       
    }

    
}
