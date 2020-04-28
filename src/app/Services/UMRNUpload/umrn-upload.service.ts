import { Injectable, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { error } from 'util';
import { UMRNUpload } from '../../../models/umrnupload/maingrid';

@Injectable({
  providedIn: 'root'
})
export class UmrnUploadService {
    baseUrl: string = "";
    UserId: string = "";
    EntityId: string = "";
    constructor(private _http: HttpClient, @Inject('BASE_URL') myAppUrl: string) {
        this.baseUrl = myAppUrl;
    }

    BindGrid(): Observable<any> {
        let item = JSON.parse(sessionStorage.getItem('User'));
        this.UserId = item.UserId;
        this.EntityId = item.ReferenceId;
       
        return this._http.get<any>(this.baseUrl + 'api/UMRNUpload/BindGrid/' + this.EntityId);

    } 



    BindOnRowdblClick(UploadHeaderId): Observable<any> {
        let item = JSON.parse(sessionStorage.getItem('User'));
        this.UserId = item.UserId;
        this.EntityId = item.ReferenceId;


        return this._http.get<any>(this.baseUrl + 'api/UMRNUpload/BindOnRowdblClick/' + UploadHeaderId);

    } 


    UploadExcel(formData: FormData) {
        let headers = new HttpHeaders();

        headers.append('Content-Type', 'multipart/form-data');
        headers.append('Accept', 'application/json');
        let item = JSON.parse(sessionStorage.getItem('User'));
        this.UserId = item.UserId;
        this.EntityId = item.ReferenceId;

        const httpOptions = { headers: headers };

        //return this.http.post(this.url + '/UploadExcel', formData, httpOptions)
        return this._http.post<any>(this.baseUrl + 'api/UMRNUpload/UploadExcel/'+ this.UserId + '/'  + this.EntityId, formData, httpOptions);
    }
    errorHandler(error: Response) {
        console.log(error);
        return Observable.throw(error);
    }  

    btnSave_Click(UploadHeaderId, TotalCount, validatedcount, FileName): Observable<any> {
        let item = JSON.parse(sessionStorage.getItem('User'));
        this.UserId = item.UserId;
        this.EntityId = item.ReferenceId;


        return this._http.get<any>(this.baseUrl + 'api/UMRNUpload/btnSave_Click/' + this.EntityId + '/' + this.UserId + '/' + UploadHeaderId + '/' + TotalCount +
            '/' + validatedcount + '/' + FileName);

    } 
}
