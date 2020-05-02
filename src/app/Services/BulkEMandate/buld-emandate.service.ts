import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { error } from 'util';
import { DownloadMandateDetails } from '../../../Models/downloadmandate/download-mandate-details';
import { Downloadmandategrid } from '../../../Models/downloadmandate/downloadmandategrid';
import { BulkEmandateAttributeClass } from '../../../Models/BulkEmandate/BulkEmandateAttributeClass';
@Injectable({
  providedIn: 'root'
})
export class BuldEmandateService {

    baseUrl: string = "";
    constructor(private _http: HttpClient, @Inject('BASE_URL') myAppUrl: string) {
        this.baseUrl = myAppUrl;
    }

    GetGridAllData(UserId, EntityId, topVal, ActivityType): Observable<any> {
        return this._http.get<any>(this.baseUrl + 'api/BulkEMandate/GetGridData/' + UserId + '/' + EntityId + '/' + topVal + '/' + ActivityType);
    }
}
