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
    UpdateToDate(mandateId,Userid,ToDate): Observable<any> {       
        return this._http.get<any>(this.baseUrl + 'api/BankForm/UpdateToDate/' + mandateId + '/' + Userid + '/' + ToDate);
    }
    UpdateIsFinalReject(mandateId,Userid): Observable<any> {       
        return this._http.get<any>(this.baseUrl + 'api/BankForm/UpdateIsFinalReject/' + mandateId + '/' + Userid);
    }
    UpdatePhysical(mandateId,Userid,lblISSendEmailCustomer): Observable<any> {       
        return this._http.get<any>(this.baseUrl + 'api/BankForm/UpdatePhysical/' + mandateId + '/' + Userid + '/' + lblISSendEmailCustomer);
    }
    UpdateAutoRejectReasonAcValidation(mandateId,Userid): Observable<any> {       
        return this._http.get<any>(this.baseUrl + 'api/BankForm/UpdateAutoRejectReasonAcValidation/' + mandateId + '/' + Userid);
    }
    UpdateSecond(mandateId,Userid): Observable<any> {       
        return this._http.get<any>(this.baseUrl + 'api/BankForm/UpdateSecond/' + mandateId + '/' + Userid);
    }
    UpdatePrintCount(mandateId,Userid): Observable<any> {       
        return this._http.get<any>(this.baseUrl + 'api/BankForm/UpdatePrintCount/' + mandateId + '/' + Userid);
    }
    ChecKmandate(mandateId): Observable<any> {       
        return this._http.get<any>(this.baseUrl + 'api/BankForm/ChecKmandate/' + mandateId);
    }
    RemoveImage(mandateId): Observable<any> {       
        return this._http.get<any>(this.baseUrl + 'api/BankForm/RemoveImage/' + mandateId);
    }
    CheckUserCreatable(Userid,mandateId): Observable<any> {       
        return this._http.get<any>(this.baseUrl + 'api/BankForm/CheckUserCreatable/' + Userid + '/' + mandateId);
    }

    CheckQrLogo(EntityId): Observable<any> {       
        return this._http.get<any>(this.baseUrl + 'api/BankForm/CheckQrLogo/' + EntityId);
    }
    CheckNetBanking(EntityId,mandateId): Observable<any> {       
        return this._http.get<any>(this.baseUrl + 'api/BankForm/CheckNetBanking/' + EntityId + '/' + mandateId);
    }
    UpdateAutoRejectReasonBankValidation(mandateId,Userid): Observable<any> {       
        return this._http.get<any>(this.baseUrl + 'api/BankForm/UpdateAutoRejectReasonBankValidation/' + mandateId + '/' + Userid);
    }
    UpdateFirst(mandateId,Userid): Observable<any> {       
        return this._http.get<any>(this.baseUrl + 'api/BankForm/UpdateFirst/' + mandateId + '/' + Userid);
    }
}
