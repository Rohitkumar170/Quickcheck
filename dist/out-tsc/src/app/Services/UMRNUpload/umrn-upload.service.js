import * as tslib_1 from "tslib";
import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
var UmrnUploadService = /** @class */ (function () {
    function UmrnUploadService(_http, myAppUrl) {
        this._http = _http;
        this.baseUrl = "";
        this.UserId = "";
        this.EntityId = "";
        this.baseUrl = myAppUrl;
    }
    UmrnUploadService.prototype.BindGrid = function () {
        var item = JSON.parse(sessionStorage.getItem('User'));
        this.UserId = item.UserId;
        this.EntityId = item.ReferenceId;
        return this._http.get(this.baseUrl + 'api/UMRNUpload/BindGrid/' + this.EntityId);
    };
    UmrnUploadService.prototype.BindOnRowdblClick = function (UploadHeaderId) {
        var item = JSON.parse(sessionStorage.getItem('User'));
        this.UserId = item.UserId;
        this.EntityId = item.ReferenceId;
        return this._http.get(this.baseUrl + 'api/UMRNUpload/BindOnRowdblClick/' + UploadHeaderId);
    };
    UmrnUploadService.prototype.UploadExcel = function (formData) {
        var headers = new HttpHeaders();
        headers.append('Content-Type', 'multipart/form-data');
        headers.append('Accept', 'application/json');
        var item = JSON.parse(sessionStorage.getItem('User'));
        this.UserId = item.UserId;
        this.EntityId = item.ReferenceId;
        var httpOptions = { headers: headers };
        //return this.http.post(this.url + '/UploadExcel', formData, httpOptions)
        return this._http.post(this.baseUrl + 'api/UMRNUpload/UploadExcel/' + this.UserId + '/' + this.EntityId, formData, httpOptions);
    };
    UmrnUploadService.prototype.errorHandler = function (error) {
        console.log(error);
        return Observable.throw(error);
    };
    UmrnUploadService.prototype.btnSave_Click = function (UploadHeaderId, TotalCount, validatedcount, FileName) {
        var item = JSON.parse(sessionStorage.getItem('User'));
        this.UserId = item.UserId;
        this.EntityId = item.ReferenceId;
        return this._http.get(this.baseUrl + 'api/UMRNUpload/btnSave_Click/' + this.EntityId + '/' + this.UserId + '/' + UploadHeaderId + '/' + TotalCount +
            '/' + validatedcount + '/' + FileName);
    };
    UmrnUploadService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__param(1, Inject('BASE_URL')),
        tslib_1.__metadata("design:paramtypes", [HttpClient, String])
    ], UmrnUploadService);
    return UmrnUploadService;
}());
export { UmrnUploadService };
//# sourceMappingURL=umrn-upload.service.js.map