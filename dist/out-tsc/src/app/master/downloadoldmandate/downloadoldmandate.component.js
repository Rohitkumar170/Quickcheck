import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { OldmandateService } from '../../Services/oldmandate/oldmandate.service';
import { formatDate } from '@angular/common';
var DownloadoldmandateComponent = /** @class */ (function () {
    function DownloadoldmandateComponent(myservice) {
        this.myservice = myservice;
        this.Preloader = true;
        this.loading = false;
        this.checkFlag = 0;
        this.Ischecked = 0;
        this.Isallcheck = 0;
        this.SelectionStatusOfMutants = [];
        this.selectMandateId = [];
        this.ZipDownloadArray = [];
        this.CurrentDate = new Date();
        this.toggleSelect = function (event) {
            //toggleSelect(event) {
            // var SelectionStatusOfMutants = [];
            this.all = event.target.checked;
            this.tabledata.forEach(function (item) {
                // console.log(item);
                item.selected = event.target.checked;
                // this.onChange(event, item);
            });
            this.checkFlag = 1;
            if (event.target.checked) {
                this.Ischecked = 1;
                //  this.Isallcheck = 1;
            }
            else {
                this.Ischecked = 0;
            }
        };
    }
    //onClick(event) {
    //    this.showModal = true;
    //}
    DownloadoldmandateComponent.prototype.hidemandate = function () {
        this.SuccessModal = false;
    };
    DownloadoldmandateComponent.prototype.show = function () {
        this.showModal = true;
    };
    DownloadoldmandateComponent.prototype.hide = function () {
        this.showModal = false;
    };
    DownloadoldmandateComponent.prototype.ngOnInit = function () {
        var _this = this;
        //  let item = JSON.parse(sessionStorage.getItem('User'));
        //                console.log(item.UserId);
        //  this.currentdate;
        this.MandateMessage = false;
        this.BankdataBind();
        // this.mydate(this.FromDate, thius,ToDate, selected);
        var item = JSON.parse(sessionStorage.getItem('User'));
        // console.log(item.UserId);
        this.myservice.BankBind(item.UserId).subscribe(function (res) {
            // console.log(res);
            _this.bankdrop = res;
            _this.i = Object.entries(_this.bankdrop)[0][1];
            _this.SponserBankCode = _this.i.sponsorbankcode;
            //  alert(this.SponserBankCode)
            var u = _this.SponserBankCode;
            var k = formatDate(new Date(), "yyyy-MM-dd", "en");
            _this.mydate(k, k, u);
            //  mydate(FromDate, ToDate, selected)
        });
        this.Preloader = false;
    };
    //  list = [];
    //reject mandate
    DownloadoldmandateComponent.prototype.RejectData = function (FromDate, ToDate, RejectedReason, selected) {
        //  alert(FromDate + " " + ToDate + " " + RejectedReason);
        //   alert(this.selectMandateId);
        //var modal = <HTMLElement>document.getElementById('myModal');
        //modal.style.display = 'block';
        //   var dta = <HTMLElement>document.getElementById('myform');
        var _this = this;
        var dta = document.getElementById('myform');
        dta.value = "";
        this.showModal = false;
        var item = JSON.parse(sessionStorage.getItem('User'));
        // alert(item.UserId);
        if (RejectedReason != null) {
            this.myservice.RejectData(FromDate, ToDate, RejectedReason, item.UserId, this.selectMandateId).subscribe(function (res) {
                // console.log(res);
                // this.tabledata = res;
                _this.mydate(FromDate, ToDate, selected);
                // alert('Mandate Rejected');
                _this.SuccessModal = true;
            });
        }
        else {
            //  alert("please checked the mandate and fill the Reason");
            this.MandateMessage = true;
        }
    };
    DownloadoldmandateComponent.prototype.onChange = function (event, item) {
        //var element = <HTMLInputElement>document.getElementById("is3dCheckBox");
        //var isChecked = element.checked;
        //if (count == '') {
        this.checkFlag = 0;
        // this.IsMandateID = item.mandateid;
        var CheckedCount = 0, UncheckedCount = 0;
        if (event.target.checked) {
            this.SelectionStatusOfMutants.push(item);
            this.selectMandateId.push(item.mandateid);
            //  console.log(this.SelectionStatusOfMutants);
            //  alert('checked')
            this.Ischecked = 1;
            CheckedCount++;
        }
        else {
            //
            // alert('please select mandate ');
            this.SelectionStatusOfMutants.pop();
            UncheckedCount++;
            if (UncheckedCount == CheckedCount) {
                this.Ischecked = 0;
            }
        }
        //}
        //else
        //{
        //    this.bindgrid.forEach(function (item) {
        //        // console.log(item);
        //        //item.selected = event.target.checked;
        //        // this.onChange(event, item);
        //        if (event.target.checked) {
        //            this.SelectionStatusOfMutants.push(item);
        //            alert('c')
        //        }
        //        else {
        //            this.SelectionStatusOfMutants.pop();
        //            alert('nc')
        //        }
        //    });
        //}
    };
    //ifchecked(mandateid, Customer1, DateOnMandate, IsPrint, IsScan, Refrence1, Amount, AcNo, Code, BankName, Frequency, debittype, ToDebit, createdon) {
    //    //  console.log(mandateid);
    //    var aa =
    //    {
    //        'mandateid': mandateid,
    //        'Customer1': Customer1,
    //        'DateOnMandate': DateOnMandate,
    //        'IsPrint': IsPrint,
    //        'IsScan': IsScan,
    //        'Refrence1': Refrence1,
    //        'Amount': Amount,
    //        'AcNo': AcNo,
    //        'Code': Code,
    //        'BankName': BankName,
    //        'Frequency': Frequency,
    //        'debittype': debittype,
    //        'ToDebit': ToDebit,
    //        'createdon': createdon
    //    }
    //    this.list.push(aa);
    //    console.log(this.list);
    //}
    DownloadoldmandateComponent.prototype.BankdataBind = function () {
        var _this = this;
        var item = JSON.parse(sessionStorage.getItem('User'));
        // console.log(item.UserId);
        this.myservice.BankBind(item.UserId).subscribe(function (res) {
            // console.log(res);
            _this.bankdrop = res;
        });
    };
    DownloadoldmandateComponent.prototype.SearchByReference = function (Reference) {
        //var formElement = <HTMLFormElement>document.getElementById('divLoarder');
        //formElement.style.display = 'block';
        var _this = this;
        var item = JSON.parse(sessionStorage.getItem('User'));
        // console.log(item.UserId);
        //var c = Reference;
        //var e = [
        //    {
        //        'Reference': c
        //    }
        //]
        // var obj = JSON.stringify(e);
        // alert(obj);
        // console.log(e);
        this.myservice.Bindbyrefrence(item.UserId, Reference).subscribe(function (res) {
            // console.log(res);
            _this.tabledata = res;
            //var formElement = <HTMLFormElement>document.getElementById('divLoarder');
            //formElement.style.display = 'none';
        });
    };
    DownloadoldmandateComponent.prototype.mydate = function (FromDate, ToDate, selected) {
        //   alert(FromDate + "  " + ToDate + " " + selected);
        var _this = this;
        //var formElement = <HTMLFormElement>document.getElementById('divLoarder2');
        //formElement.style.display = 'block';
        this.Preloader = true;
        if (FromDate != null && ToDate != null) {
            var item = JSON.parse(sessionStorage.getItem('User'));
            //  console.log(item.UserId);
            //var a = FromDate;
            //var b = ToDate;
            //var c = selected;
            this.loading = true;
            this.myservice.BindbyDate(item.UserId, FromDate, ToDate, selected).subscribe(function (res) {
                _this.Preloader = false;
                // console.log(res);
                _this.tabledata = res;
            });
            // this.loading = false;
        }
        else {
            alert("please choose the Date");
        }
        //  console.log(this.list);
        //var formloder = <HTMLElement>document.getElementById('divLoarder2');
        //formloder.style.display = 'none';
        this.loading = false;
    };
    DownloadoldmandateComponent.prototype.SelectBank = function (FromDate, ToDate, selected) {
        var _this = this;
        var item = JSON.parse(sessionStorage.getItem('User'));
        // console.log(item.UserId);
        this.myservice.BindbyBank(item.UserId, FromDate, ToDate, selected).subscribe(function (res) {
            //  console.log(res);
            _this.tabledata = res;
        });
    };
    DownloadoldmandateComponent.prototype.ConvertToCSV = function (objArray) {
        //this.HeaderArray = {
        //}
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
            //if (i == 0) {
            //    for (var index in this.HeaderArray) {
            //        if (line != '') line += ','
            //        line += this.HeaderArray[index];
            //    }
            //    str += line + '\r\n';
            //}
            //var line = '';
            for (var index in array[i]) {
                if (line != '')
                    line += ',';
                line += array[i][index];
            }
            str += line + '\r\n';
        }
        return str;
    };
    DownloadoldmandateComponent.prototype.downloadExcel = function () {
        // alert("this method is working");
        // alert(this.Ischecked);
        //console.log(this.checkFlag);
        if (this.Ischecked == 1) {
            if (this.checkFlag == 0) {
                var csvData = this.ConvertToCSV(JSON.stringify(this.SelectionStatusOfMutants));
                this.MandateMessage = false;
            }
            else {
                var csvData = this.ConvertToCSV(JSON.stringify(this.tabledata));
                this.MandateMessage = false;
            }
            // var csvData = this.ConvertToCSV(JSON.stringify(this.list));
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
            // alert('checkbox not selected');
            this.MandateMessage = true;
        }
    };
    //nontrade;
    //trade;
    //allNonTrades(event) {
    //    const checked = event.target.checked;
    //    this.nontrade.forEach(item => item.selected = checked);
    //}
    //allTrades(event) {
    //    const checked = event.target.checked;
    //    this.trade.forEach(item => item.selected = checked);
    //}
    //checkedDemo(abc) {
    //    console.log(abc);
    //}
    //downloadfileComponent(filePath: string) {
    //        this.appService.downloadfile(filePath)
    //        .subscribe(data => this.getZipFile(data)),
    //        error => console.log("Error downloading the file."),
    //        () => console.log('Completed file download.');
    //}
    DownloadoldmandateComponent.prototype.downloadScannedMandate = function () {
        this.ZipDownloadArray = [];
        if (this.Ischecked == 1) {
            if (this.checkFlag == 0) {
                this.ZipDownloadArray = this.SelectionStatusOfMutants;
            }
            else {
                this.ZipDownloadArray = this.tabledata;
            }
            if (this.ZipDownloadArray.length == 0) {
                // alert("please select mandate");
            }
            else {
                this.getZipFile(JSON.stringify(this.ZipDownloadArray));
            }
        }
        else {
            // alert('checkbox not selected');
            this.MandateMessage = true;
        }
    };
    DownloadoldmandateComponent.prototype.getZipFile = function (data) {
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
    DownloadoldmandateComponent = tslib_1.__decorate([
        Component({
            selector: 'app-downloadoldmandate',
            templateUrl: './downloadoldmandate.component.html',
            styleUrls: ['./downloadoldmandate.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [OldmandateService])
    ], DownloadoldmandateComponent);
    return DownloadoldmandateComponent;
}());
export { DownloadoldmandateComponent };
//# sourceMappingURL=downloadoldmandate.component.js.map