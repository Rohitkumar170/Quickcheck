import { Injectable, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { error } from 'util';
import { GridData } from '../../../Models/Allumrn/GridData';
import { Umrn_Class } from '../../../Models/Allumrn/Umrn_Class';
import { GridDataDetails } from '../../../Models/Allumrn/GridDataDetails';

@Injectable({
  providedIn: 'root'
})
export class AllumrnService {
    baseUrl: string = "";

    constructor(private _http: HttpClient, @Inject('BASE_URL') myAppUrl: string) {
        this.baseUrl = myAppUrl;
    }

    GridBind(Entityid, Pageno): Observable<GridData> {
       // alert("Service" + Entityid + " " + Pageno );
        return this._http.get<GridData>(this.baseUrl + 'api/AllUMRN/GridBind/' + Entityid + '/' + Pageno);
    }
    GridDataDetails(UMRN, Entityid): Observable<GridData> {
        // alert("Service" + Entityid + " " + Pageno );
        return this._http.get<GridData>(this.baseUrl + 'api/AllUMRN/GridDataDetails/' + UMRN + '/' + Entityid);
    }

    SearchData(em: any): Observable<GridData> {
        const body = em;
       //  alert(body);
        const headers = new HttpHeaders().set('content-type', 'application/json');
        return this._http.post<Umrn_Class>(this.baseUrl + 'api/AllUMRN/SearchData', body, {
            headers
        });
    }
    AddUmrn(em: any): Observable<any> {
        const body = em;
        //  alert(body);
        const headers = new HttpHeaders().set('content-type', 'application/json');
        return this._http.post<any>(this.baseUrl + 'api/AllUMRN/AddUmrn', body, {
            headers
        });
    }
   

    //AddUmrn(NEWUMRN, Customername, ReferenceNumber, Amount, FromDate, ToDate, Entityid, Userid, CreatedBy): Observable<any> {
        
    //    return this._http.get<any>(this.baseUrl + 'api/AllUMRN/AddUmrn/'+NEWUMRN+'/'+Customername+'/'+ReferenceNumber+'/'+Amount+'/'+FromDate+'/' +ToDate+'/'+Entityid+'/'+Userid+'/'+CreatedBy);
        
    //}

    errorHandler(error: Response) {
        console.log(error);
        return Observable.throw(error);
    }  




}








