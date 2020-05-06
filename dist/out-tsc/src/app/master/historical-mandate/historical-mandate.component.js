import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HistoricalMandateServiceService } from '../../services/historical-mandate/historical-mandate-service.service';
var HistoricalMandateComponent = /** @class */ (function () {
    function HistoricalMandateComponent(HMService, formBuilder) {
        this.HMService = HMService;
        this.formBuilder = formBuilder;
        this.TotalCount = 0;
        this.dataArray = [];
        this.Preloader = true;
        this.CurrentDate = new Date();
    }
    HistoricalMandateComponent.prototype.ngOnInit = function () {
        this.HistoricalMandateForm = this.formBuilder.group({
            FromDate: [''],
            ToDate: ['']
        });
        this.Preloader = false;
    };
    HistoricalMandateComponent.prototype.SearchFunction = function (FromDate, ToDate) {
        var _this = this;
        this.Preloader = true;
        var item = JSON.parse(sessionStorage.getItem('User'));
        if (FromDate != "" && ToDate != "") {
            this.HMService.BindGridData(FromDate, ToDate, item.UserId).subscribe(function (data) {
                _this.Preloader = false;
                _this.BindAllData = data;
                var json = JSON.stringify(_this.BindAllData);
                var CountRecordArray = typeof json != 'object' ? JSON.parse(json) : json;
                _this.TotalCount = CountRecordArray.length;
            });
        }
    };
    HistoricalMandateComponent.prototype.doubleClick = function (data) {
        this.dataArray.push(data);
        var json = JSON.stringify(data);
        alert(json);
        console.log(data.MandateFreshId);
    };
    HistoricalMandateComponent.prototype.ConvertToCSV = function (objArray) {
        this.HeaderArray = {
            MandateStatus: "Mandate Status", SendToBankDate: "Send To Bank Date", MandateFreshId: "Mandate ID", mandateMode: "mandate Mode",
            AutoRejectReason: "AutoRejectReason", updatedon: "updatedon", username: "username", UpdateBy: "UpdateBy", Enach: "Enach",
            IsMobileData: "IsMobileData", RejectedReason: "RejectedReason", REJECTED: "REJECTED", CreatedOn: "CreatedOn", is_enach_live: "is_enach_live",
            IsScan: "IsScan", JPGPath: "JPGPath", TIPPath: "TIPPath", IsPrint: "IsPrint", mandateid: "mandateid", status: "status", Amount: "Amount",
            Code: "Code", BankName: "BankName", DateOnMandate: "DateOnMandate", AcNo: "AcNo", Refrence1: "Refrence1", AcceptRefNo: "AcceptRefNo",
            NPCIErrorDesc: "NPCIErrorDesc", FromDate: "FromDate", Customer1: "Customer1", debittype: "debittype", Frequency: "Frequency", Monthly: "Monthly",
            ToDebit: "ToDebit", NPCIMsgId: "NPCIMsgId", MSGId: "MSGId", UMRN: "UMRN", AggregatorValue: "AggregatorValue", Amount_Numeric: "Amount_Numeric",
            SponsorBankCode: "SponsorBankCode", PhoneNumber: "PhoneNumber", EmailId: "EmailId", EmandateType: "EmandateType", ActivityId: "ActivityId",
            Refrence2: "Refrence2"
        };
        var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
        var str = '';
        var row = "";
        for (var index in objArray[0]) {
            //Now convert each value to string and comma-separated
            row += index + ',';
        }
        row = row.slice(0, -1);
        //append Label row with line break
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
    HistoricalMandateComponent.prototype.download = function () {
        if (this.TotalCount > 0) {
            var csvData = this.ConvertToCSV(JSON.stringify(this.BindAllData));
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
        else { }
    };
    HistoricalMandateComponent = tslib_1.__decorate([
        Component({
            selector: 'app-historical-mandate',
            templateUrl: './historical-mandate.component.html',
            styleUrls: ['./historical-mandate.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [HistoricalMandateServiceService, FormBuilder])
    ], HistoricalMandateComponent);
    return HistoricalMandateComponent;
}());
export { HistoricalMandateComponent };
//# sourceMappingURL=historical-mandate.component.js.map