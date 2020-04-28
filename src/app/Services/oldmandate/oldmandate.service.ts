import { Injectable, Inject} from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { error } from 'util';
import { OldMandateClass1 } from '../../../Models/Old-Mandate/OldMandateClass1';
import { OldMandateTable } from '../../../Models/Old-Mandate/OldMandateTable';

@Injectable({
  providedIn: 'root'
})
export class OldmandateService {
    baseUrl: string = "";
    constructor(public http: HttpClient, @Inject('BASE_URL') myAppUrl: string) {
        this.baseUrl = myAppUrl;
    }

    BankBind(UserId): Observable<OldMandateClass1> {
      // alert("service" +UserId);
        return this.http.get<OldMandateClass1>(this.baseUrl + 'api/OldMandate/GetDataByUID/' + UserId);
    }


    Bindbyrefrence(UserId, Refrence1): Observable<OldMandateClass1> {
       // alert("service" + UserId + Refrence1);
        return this.http.get<OldMandateClass1>(this.baseUrl + 'api/OldMandate/GetDataByReference/' + UserId + '/' + Refrence1);
    }


    BindbyDate(UserId, FromDate, ToDate, SponsorBankCode): Observable<OldMandateClass1> {
      //  alert("service" + FromDate + ToDate + SponsorBankCode + UserId);
        return this.http.get<OldMandateClass1>(this.baseUrl + 'api/OldMandate/GetDataByDate/' + UserId + '/' + FromDate + '/' + ToDate + '/' + SponsorBankCode);
    }

    BindbyBank(UserId, FromDate, ToDate, SponsorBankCode): Observable<OldMandateClass1> {
        //  alert("service" + FromDate + ToDate + SponsorBankCode + UserId);
        return this.http.get<OldMandateClass1>(this.baseUrl + 'api/OldMandate/GetDataByDate/' + UserId + '/' + FromDate + '/' + ToDate + '/' + SponsorBankCode);
    }


    RejectData(FromDate, ToDate, RejectedReason, UserId, selectMandateId): Observable<OldMandateClass1> {
        //  alert("service" + FromDate + ToDate + SponsorBankCode + UserId);
        return this.http.get<OldMandateClass1>(this.baseUrl + 'api/OldMandate/RejectDt/' + '/' + FromDate + '/' + ToDate + '/' + RejectedReason + '/' + UserId + '/' + selectMandateId);
    }
}
