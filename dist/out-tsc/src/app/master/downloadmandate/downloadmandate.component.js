import * as tslib_1 from "tslib";
/// <reference path="../../../models/downloadmandate/downloadmandategrid.ts" />
/// <reference path="../../services/downloadmandate/downloadmandate.service.ts" />
import { Component } from '@angular/core';
import { FormControl, FormBuilder } from '@angular/forms';
import { DownloadmandateService } from '../../services/downloadmandate/downloadmandate.service';
import { formatDate } from '@angular/common';
var DownloadmandateComponent = /** @class */ (function () {
    function DownloadmandateComponent(_downloadMandateService, fb) {
        this._downloadMandateService = _downloadMandateService;
        this.fb = fb;
        this.ZipDownloadArray = [];
        this.HeaderArray = {};
        this.Preloader = true;
        // SelectionStatusOfMutants: any = {};
        this.SelectionStatusOfMutants = [];
        this.selectMandateId = [];
        this.loading = false;
        //dmandate
        this.userID = "84";
        this.checkFlag = 0;
        this.Ischecked = 0;
        this.Isallcheck = 0;
        this.IsCHFlag = 0;
        this.sponsorbankcode = new FormControl('');
        this.CheckedCount = 0;
        this.UncheckedCount = 0;
        //selectAll() {
        //    this.selectedAll = !this.selectedAll;
        //    for (var i = 0; i < this.bindgrid.length; i++) {
        //       // this.bindgrid[i].selected = this.selectedAll;
        //    }
        //}
        this.toggleSelect = function (event) {
            //toggleSelect(event) {
            // var SelectionStatusOfMutants = [];
            this.all = event.target.checked;
            this.bindgrid.forEach(function (item) {
                // console.log(item);
                item.selected = event.target.checked;
                // this.onChange(event, item);
            });
            this.checkFlag = 1;
            if (event.target.checked) {
                this.Ischecked = 1;
                //  alert('all checked')
                this.Isallcheck = 1;
            }
            else {
                this.Ischecked = 0;
                // alert('all not checked')
                //this.Isallcheck = 1;
            }
        };
        this.fromdate = new Date();
        this.todate = new Date();
        this.dmandateForm = fb.group({
            'referenceNo': [null],
            'todate': [null],
            'fromdate': [null]
            // will use the property in html page
        });
    }
    DownloadmandateComponent.prototype.onClick = function (event) {
        this.showModalrejectmandate = true;
    };
    DownloadmandateComponent.prototype.hide = function () {
        this.showModalrejectmandate = false;
    };
    DownloadmandateComponent.prototype.show = function () {
        if (this.Ischecked == 1) {
            //this.showModal = true;
            this.showModalrejectmandate = true;
            // alert('in');
        }
        //else {
        //    alert('Please select checkbox');
        //}
    };
    //hide() {
    //    this.showModal = false;
    //}
    DownloadmandateComponent.prototype.hideSuccess = function () {
        this.showModalSuccess = false;
    };
    DownloadmandateComponent.prototype.showSuccess = function () {
        this.showModalSuccess = true;
    };
    DownloadmandateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getdmandate();
        // this.fromdate = parseDate(fromdate : string);
        // console.log(this.dmandateForm1.value);
        //  this.dmandate.sponsorbankcode
        this.Preloader = false;
        this.showBindgrid = true;
        var d = new Date(), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear();
        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;
        this.d1 = [year, month, day].join('-');
        //this.fromdate = new Date();
        //this.todate = new Date();
        //this.fromdate = this.d1;
        //this.todate = this.d1;
        //alert(this.d1);
        // this.todate.setValue(this.d1);
        // this.fromdate.setValue(this.d1);
        //this.dmandateForm.setValue(this.selected);
        //for (var x = 0; x < this.dmandate.length; x++) {
        //    if (this.dmandate[x].sponsorbankcode == this.selectedReleaseId) {
        //        this.Bank = this.dmandate[x].name;
        //    }
        //}
        // this.dmandateForm.setValue(this.dmandate[0].sponsorbankcode);
        // this.sponsorbankcode.setValue(this.selected);
        // this.Bank = this.dmandateForm.controls['sponsorbankcode'].value;
        // alert(this.Bank);
        //this.BindGrid(this.d1, this.d1, '000');
        var item = JSON.parse(sessionStorage.getItem('User'));
        // console.log(item.UserId);
        this._downloadMandateService.getBankDropDown(item.UserId).
            subscribe(function (data) {
            _this.dmandate = data;
            _this.i = Object.entries(_this.dmandate)[0][1];
            _this.SponserBankCode = _this.i.sponsorbankcode;
            // alert(this.SponserBankCode)
            var u = _this.SponserBankCode;
            var k = formatDate(new Date(), "yyyy-MM-dd", "en");
            _this.BindGrid(k, k, u, '');
        });
    };
    DownloadmandateComponent.prototype.onChange = function (event, item) {
        //var element = <HTMLInputElement>document.getElementById("is3dCheckBox");
        //var isChecked = element.checked;
        //if (count == '') {
        this.Removelabel();
        this.checkFlag = 0;
        // this.IsMandateID = item.mandateid;
        console.log(item);
        //if (this.Isallcheck == 0) {
        if (event.target.checked) {
            this.SelectionStatusOfMutants.push(item);
            this.selectMandateId.push(item.mandateid);
            console.log(this.SelectionStatusOfMutants);
            this.Ischecked = 1;
            this.CheckedCount++;
        }
        else {
            //  alert('not checked')
            //  if (this.Isallcheck == 1) {
            //this.SelectionStatusOfMutants.push(this.bindgrid);
            //console.log(this.SelectionStatusOfMutants);
            //}
            // this.SelectionStatusOfMutants.pop();
            this.SelectionStatusOfMutants.splice(event.target);
            console.log(this.SelectionStatusOfMutants);
            this.UncheckedCount++;
            if (this.UncheckedCount == this.CheckedCount) {
                this.Ischecked = 0;
                // alert('in')
            }
            //     }
        }
        // }
        //else {
        //    this.SelectionStatusOfMutants.push(this.bindgrid);
        //    console.log(this.SelectionStatusOfMutants);
        //    this.Isallcheck = 0;
        //    this.onChange(event, item);
        //}
        //}
    };
    //onCheckdownload() {
    //    this.bindgrid.forEach(function (item) {
    //        // console.log(item);
    //        item.target.checked;
    //        // this.onChange(event, item);
    //    });
    //}
    DownloadmandateComponent.prototype.SubmitToDate = function () {
        var fromvalue = this.dmandateForm.value;
        console.log(fromvalue);
    };
    Object.defineProperty(DownloadmandateComponent.prototype, "AllFields", {
        get: function () { return this.dmandateForm.controls; },
        enumerable: true,
        configurable: true
    });
    DownloadmandateComponent.prototype.getdmandate = function () {
        //alert(userID);
        //let item = JSON.parse(sessionStorage.getItem('User'));
        //console.log(item.UserId);
        var _this = this;
        var item = JSON.parse(sessionStorage.getItem('User'));
        //console.log(item.UserId);
        this._downloadMandateService.getBankDropDown(item.UserId).subscribe(function (res) { return _this.dmandate = res; }, 
        // this.i = object.entries(this.dmandate)[0][1];
        function (error) { return _this.errorMessage = error; });
        // console.log(this.dmandate);
    };
    //onSearch() {
    //   // this.AllFields.sponsorbankcode.value;
    //    this._downloadMandateService.getbtnSearch(this.userID, this.AllFields.referenceNo.value).subscribe(
    //   res=>this.BindGrid())
    // }
    DownloadmandateComponent.prototype.Removelabel = function () { this.errormsg = ''; };
    DownloadmandateComponent.prototype.BindGrid = function (FromDate, ToDate, Bank, refNo) {
        //alert(FromDate + ToDate + Bank);
        //this.fromdate = FromDate;
        //this.todate = ToDate;
        //this.Bank = Bank;
        var _this = this;
        //let item = JSON.parse(sessionStorage.getItem('User'));
        //console.log(item.UserId);
        // console.log(refNo);
        var item = JSON.parse(sessionStorage.getItem('User'));
        if (refNo == '') {
            this.Preloader = true;
            this.showBindgrid = false;
            this._downloadMandateService.getBindGrid(item.UserId, ToDate, FromDate, Bank)
                .subscribe(function (data) {
                _this.Preloader = false;
                _this.showBindgrid = true;
                _this.bindgrid = data;
                // this.dataArray = Object.entries(this.bindgrid)[0][1];
                // this.dataArray.push(this.bindgrid);
            });
            //  this.loading = false;
            //if (this.dataArray.length > 0) {
            //    this.showlabel = true;
            //}
        }
        else {
            //console.log(refNo);
            this.Preloader = true;
            this.showBindgrid = false;
            debugger;
            this._downloadMandateService.getBindGridRef(item.UserId, refNo)
                .subscribe(function (data) {
                _this.Preloader = false;
                _this.showBindgrid = true;
                _this.bindgrid = data;
                // this.dataArray.push(this.bindgrid);
                refNo = '';
            });
            this.loading = false;
        }
    };
    DownloadmandateComponent.prototype.RejectMandate = function (fromdate, todate, bank, rejectcomnt) {
        //  this.Ischecked = 1
        // if (this.Ischecked == 1) {
        var _this = this;
        var item = JSON.parse(sessionStorage.getItem('User'));
        // console.log(item.UserId);
        this.showModal = false;
        var dta = document.getElementById('myform');
        dta.value = "";
        //var rejectcomnt = 'test131';
        // alert(fromdate + '' + todate + '' + bank + '' + rejectcomnt + '' + item.UserId + '' + this.selectMandateId );
        this._downloadMandateService.getRejectMandate(item.UserId, fromdate, todate, this.selectMandateId, rejectcomnt).subscribe(function (res) {
            console.log(res),
                function (error) { return console.log(error); };
            _this.BindGrid(fromdate, todate, bank, '');
            _this.showModalrejectmandate = false;
            //alert('Mandate Rejected');
            _this.showSuccess();
        });
        //}
        //else {
        //    alert('Please select checkbox');
        //}
    };
    DownloadmandateComponent.prototype.ConvertToCSV = function (objArray) {
        this.HeaderArray = {
            mandateid: "Mandate ID", Customer1: "Name", DateOnMandate: "Date On Mandate", IsPrint: "Mandate Printed",
            IsScan: "Mandate Scan", Refrence1: "Reference", Amount: "Amount", AcNo: "Account No.", Code: "IFSC/MICR",
            BankName: "Bank Name", Frequency: "Frequency", DebitType: "Debit Type", ToDebit: "Debit To", createdon: "Created on"
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
    DownloadmandateComponent.prototype.download = function () {
        //  alert(this.Ischecked);
        //console.log(this.checkFlag);
        if (this.Ischecked == 1) {
            if (this.checkFlag == 0) {
                var csvData = this.ConvertToCSV(JSON.stringify(this.SelectionStatusOfMutants));
            }
            else {
                var csvData = this.ConvertToCSV(JSON.stringify(this.bindgrid));
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
            this.errormsg = "Please select Mandate";
        }
    };
    DownloadmandateComponent.prototype.downloadScannedMandate = function () {
        this.ZipDownloadArray = [];
        if (this.checkFlag == 0) {
            this.getZipFile(JSON.stringify(this.SelectionStatusOfMutants));
        }
        else {
            this.getZipFile(JSON.stringify(this.bindgrid));
        }
    };
    DownloadmandateComponent.prototype.getZipFile = function (data) {
        var a = document.createElement("a");
        document.body.appendChild(a);
        a.style = "display: none";
        var blob = new Blob([data], { type: 'application/zip' });
        var url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = "test.zip";
        a.click();
        window.URL.revokeObjectURL(url);
    };
    DownloadmandateComponent = tslib_1.__decorate([
        Component({
            selector: 'app-downloadmandate',
            templateUrl: './downloadmandate.component.html',
            styleUrls: ['./downloadmandate.component.css'],
            providers: [DownloadmandateService]
        }),
        tslib_1.__metadata("design:paramtypes", [DownloadmandateService, FormBuilder])
    ], DownloadmandateComponent);
    return DownloadmandateComponent;
}());
export { DownloadmandateComponent };
//# sourceMappingURL=downloadmandate.component.js.map