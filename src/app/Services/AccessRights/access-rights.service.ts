import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AccessRightsEntityDetails } from '../../../models/accessrights/access-rights-entity-details';
import {AccessRightsDetails } from '../../../models/accessrights/access-rights-details';


@Injectable({
  providedIn: 'root'
})
export class AccessRightsService {

  


  baseUrl: string = "";

  constructor(private _http: HttpClient, @Inject('BASE_URL') myAppUrl: string) {
      this.baseUrl = myAppUrl;
  }

  getEntityDetails(UserType, ReferenceId): Observable<AccessRightsEntityDetails[]> {
      return this._http.get<AccessRightsEntityDetails[]>(this.baseUrl + 'api/AccessRights/getBindEntityDetails/' + UserType + '/' + ReferenceId);
  }



  getLinksForUser(userid,UserType): Observable<AccessRightsDetails> {
      return this._http.get<AccessRightsDetails>(this.baseUrl + 'api/AccessRights/getBindAccessRightDetails/' + userid + '/' + UserType);
  }

  
  getInsertdata(userid, storeIsActive, storeIsRead, storeLinkID,CUserId): Observable<any> {
     // alert('service')
      return this._http.get<any>(this.baseUrl + 'api/AccessRights/getInsertdata/' + userid + '/' + storeIsActive + '/' + storeIsRead + '/' + storeLinkID + '/' + CUserId);
  }
}
