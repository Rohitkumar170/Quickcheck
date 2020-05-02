import * as tslib_1 from "tslib";
/// <reference path="../../../models/report-view/bindgrid.ts" />
/// <reference path="../../services/report-vew/report-view.service.ts" />
/// <reference path="../../../models/report-view/binduser.ts" />
import { Component } from '@angular/core';
import { formatDate } from '@angular/common';
import { ReportViewService } from '../../services/report-vew/report-view.service';
import { FormBuilder } from '@angular/forms';
var ReportViewComponent = /** @class */ (function () {
    function ReportViewComponent(reportviewService, formBuilder) {
        this.reportviewService = reportviewService;
        this.formBuilder = formBuilder;
        this.dataArray = [];
        this.Preloader = true;
        this.currentDate = new Date();
    }
    ReportViewComponent.prototype.ngOnInit = function () {
        this.showlabel = false;
        this.Preloader = false;
        this.BindUser();
    };
    ReportViewComponent.prototype.BindUser = function () {
        var _this = this;
        var item = JSON.parse(sessionStorage.getItem('User'));
        //var jasondata = {
        //    "UserId": item.UserId
        //}
        this.userId = item.UserId;
        this.reportviewService.BindUser(this.userId).
            subscribe(function (data) {
            _this.binduser = data.Table;
            var y = Object.entries(_this.binduser)[0][1];
            //// alert(y.sponsorbankcode);
            var u = y.UserId;
            var k = formatDate(new Date(), "yyyy-MM-dd", "en");
            _this.PostData(k, k, u);
        });
        // this.BindUser();
    };
    ReportViewComponent.prototype.PostData = function (FromDate, Todate, userdrop) {
        var _this = this;
        var item = JSON.parse(sessionStorage.getItem('User'));
        var username = this.UMRNUploadform.controls['ddluser'].value();
        this.reportviewService.SearchData(FromDate, Todate, username, item.UserId).subscribe(function (data) {
            _this.Preloader = false;
            _this.bindgrid = data.Table;
            _this.dataArray.push(_this.bindgrid);
            // alert(this.dataArray.length);
            //console.log(this.Databind);
        });
        if (this.dataArray.length > 0) {
            // alert(this.dataArray.length);
            this.showlabel = true;
        }
    };
    ReportViewComponent = tslib_1.__decorate([
        Component({
            selector: 'app-report-view',
            templateUrl: './report-view.component.html',
            styleUrls: ['./report-view.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [ReportViewService, FormBuilder])
    ], ReportViewComponent);
    return ReportViewComponent;
}());
export { ReportViewComponent };
//# sourceMappingURL=report-view.component.js.map