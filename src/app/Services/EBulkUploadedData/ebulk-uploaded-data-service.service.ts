import { Injectable, Inject } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EbulkUploadedDataServiceService {
  baseUrl: string = "";
  constructor(private _http: HttpClient, @Inject('BASE_URL') myAppUrl: string) { 
    this.baseUrl = myAppUrl;
  }

//   GetGridAllData(UserId, EntityId, topVal, ActivityType): Observable<any> {
//     return this._http.get<any>(this.baseUrl + 'api/BulkEMandate/GetGridData/' + UserId + '/' + EntityId + '/' + topVal + '/' + ActivityType);
// }
GetGridAllData(ActivityID,UserId,EntityId,TEUHID,LoadData):Observable<any>{
  alert("ActivityID="+ActivityID+"  "+"UserId="+UserId+"  "+"EntityId="+EntityId+"  "+"TEUHID="+TEUHID+"  "+"LoadData="+LoadData);
  return this._http.get<any>(this.baseUrl+'api/EBulkUploadedData/GetAllData/'+ActivityID+'/'+UserId+'/'+EntityId+'/'+TEUHID+'/'+LoadData)
}
}
