import * as tslib_1 from "tslib";
import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
var AllumrnService = /** @class */ (function () {
    function AllumrnService(_http, myAppUrl) {
        this._http = _http;
        this.baseUrl = "";
        this.baseUrl = myAppUrl;
    }
    AllumrnService.prototype.GridBind = function (Entityid, Pageno) {
        // alert("Service" + Entityid + " " + Pageno );
        return this._http.get(this.baseUrl + 'api/AllUMRN/GridBind/' + Entityid + '/' + Pageno);
    };
    AllumrnService.prototype.GridDataDetails = function (UMRN, Entityid) {
        // alert("Service" + Entityid + " " + Pageno );
        return this._http.get(this.baseUrl + 'api/AllUMRN/GridDataDetails/' + UMRN + '/' + Entityid);
    };
    AllumrnService.prototype.SearchData = function (em) {
        var body = em;
        //  alert(body);
        var headers = new HttpHeaders().set('content-type', 'application/json');
        return this._http.post(this.baseUrl + 'api/AllUMRN/SearchData', body, {
            headers: headers
        });
    };
    AllumrnService.prototype.AddUmrn = function (em) {
        var body = em;
        //  alert(body);
        var headers = new HttpHeaders().set('content-type', 'application/json');
        return this._http.post(this.baseUrl + 'api/AllUMRN/AddUmrn', body, {
            headers: headers
        });
    };
    //AddUmrn(NEWUMRN, Customername, ReferenceNumber, Amount, FromDate, ToDate, Entityid, Userid, CreatedBy): Observable<any> {
    //    return this._http.get<any>(this.baseUrl + 'api/AllUMRN/AddUmrn/'+NEWUMRN+'/'+Customername+'/'+ReferenceNumber+'/'+Amount+'/'+FromDate+'/' +ToDate+'/'+Entityid+'/'+Userid+'/'+CreatedBy);
    //}
    AllumrnService.prototype.errorHandler = function (error) {
        console.log(error);
        return Observable.throw(error);
    };
    AllumrnService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__param(1, Inject('BASE_URL')),
        tslib_1.__metadata("design:paramtypes", [HttpClient, String])
    ], AllumrnService);
    return AllumrnService;
}());
export { AllumrnService };
//# sourceMappingURL=allumrn.service.js.map