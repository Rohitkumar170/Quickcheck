import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DownloadEmandateServiceService } from '../../services/downloademandate/download-emandate-service.service';
import { FormBuilder } from '@angular/forms';
import { formatDate } from '@angular/common';
var DownloadEmandateComponent = /** @class */ (function () {
    //BindGridData: BindGridData;
    function DownloadEmandateComponent(DEService, fb) {
        this.DEService = DEService;
        this.dataArray = [];
        this.SelectionStatusOfMutants = [];
        this.checkFlag = 0;
        this.Ischecked = 0;
        this.CheckedCount = 0;
        this.UncheckedCount = 0;
        this.Preloader = true;
        this.toggleSelect = function (event) {
            this.all = event.target.checked;
            this.Databind.forEach(function (item) {
                item.selected = event.target.checked;
            });
            this.checkFlag = 1;
            if (event.target.checked) {
                this.Ischecked = 1;
            }
            else {
                this.Ischecked = 0;
            }
        };
        this.fromdate = new Date();
        this.todate = new Date();
        //this.BindGridData = new BindGridData();
        this.dmandateForm = fb.group({
            'todate': [null],
            'fromdate': [null],
        });
    }
    DownloadEmandateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.Preloader = false;
        this.showlabel = false;
        var item = JSON.parse(sessionStorage.getItem('User'));
        this.DEService.BankBind(item.UserId).
            subscribe(function (data) {
            _this.bankbind = data.Table;
            _this.i = Object.entries(_this.bankbind)[0][1];
            _this.SponserBankCode = _this.i.sponsorbankcode;
            var u = _this.SponserBankCode;
            var k = formatDate(new Date(), "yyyy-MM-dd", "en");
            _this.SearchFunction(k, k, u);
        });
        this.BankBind();
    };
    DownloadEmandateComponent.prototype.Removelabel = function () { this.errormsg = ''; };
    DownloadEmandateComponent.prototype.BankBind = function () {
        var _this = this;
        var item = JSON.parse(sessionStorage.getItem('User'));
        this.DEService.BankBind(item.UserId).
            subscribe(function (data) {
            _this.bankbind = data.Table;
            _this.i = Object.entries(_this.bankbind)[0][1];
        });
    };
    DownloadEmandateComponent.prototype.SearchFunction = function (FromDate, ToDate, Bank) {
        var _this = this;
        this.Preloader = true;
        var item = JSON.parse(sessionStorage.getItem('User'));
        this.DEService.BindGridData(FromDate, ToDate, Bank, item.UserId).subscribe(function (data) {
            _this.Preloader = false;
            _this.Databind = data;
            _this.dataArray.push(_this.Databind);
        });
        if (this.dataArray.length > 0) {
            this.showlabel = true;
        }
    };
    DownloadEmandateComponent.prototype.onChange = function (event, item) {
        this.checkFlag = 0;
        this.IsMandateID = item.mandateid;
        if (event.target.checked) {
            this.SelectionStatusOfMutants.push(item);
            this.Ischecked = 1;
            this.CheckedCount++;
        }
        else {
            this.SelectionStatusOfMutants.pop();
            this.UncheckedCount++;
            if (this.UncheckedCount == this.CheckedCount) {
                this.Ischecked = 0;
            }
        }
    };
    DownloadEmandateComponent.prototype.ConvertToCSV = function (objArray) {
        this.HeaderArray = {
            DebtorName: "Debtor Name",
            InstructedAgentMemberName: "InstructedAgentMemberName",
            ConsumerReferenceNumber: "ConsumerReferenceNumber",
            DebtorAccountNumber: "DebtorAccountNumber",
            DebtorAgentID: "DebtorAgentID",
            Collection: "Collection",
            MaximumAmount: "MaximumAmount",
            ServiceProvider: "ServiceProvider",
            Frequency: "Frequency",
            DebtorAccountType: "DebtorAccountType",
            CreationDateTime: "CreationDateTime"
        };
        var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
        var str = '';
        var row = "";
        for (var index in objArray[0]) {
            //Now convert each value to string and comma-separated
            row += index + ',';
        }
        row = row.slice(0, -1);
        str += row + '\r\n';
        for (var i = 0; i < array.length; i++) {
            var line = '';
            if (i == 0) {
                for (var index in this.HeaderArray) {
                    if (line != '')
                        line += ',';
                    line += this.HeaderArray[index];
                }
                str += line + '\r\n';
            }
            var line = '';
            for (var index in array[i]) {
                if (line != '')
                    line += ',';
                line += array[i][index];
            }
            str += line + '\r\n';
        }
        return str;
    };
    DownloadEmandateComponent.prototype.download = function () {
        if (this.Ischecked == 1) {
            if (this.checkFlag == 0) {
                var csvData = this.ConvertToCSV(JSON.stringify(this.SelectionStatusOfMutants));
            }
            else {
                var csvData = this.ConvertToCSV(JSON.stringify(this.Databind));
            }
            var a = document.createElement("a");
            a.setAttribute('style', 'display:none;');
            document.body.appendChild(a);
            var blob = new Blob([csvData], { type: 'text/csv' });
            var url = window.URL.createObjectURL(blob);
            a.href = url;
            a.download = 'User_Results.csv'; /* your file name*/
            a.click();
            return 'success';
        }
        else {
            this.errormsg = "Please Select Mandate !!";
        }
    };
    DownloadEmandateComponent = tslib_1.__decorate([
        Component({
            selector: 'app-download-emandate',
            templateUrl: './download-emandate.component.html',
            styleUrls: ['./download-emandate.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [DownloadEmandateServiceService, FormBuilder])
    ], DownloadEmandateComponent);
    return DownloadEmandateComponent;
}());
export { DownloadEmandateComponent };
//# sourceMappingURL=download-emandate.component.js.map