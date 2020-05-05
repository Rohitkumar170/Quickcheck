import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { UmrnUploadService } from '../../services/umrnupload/umrn-upload.service';
var UmrnuploadComponent = /** @class */ (function () {
    function UmrnuploadComponent(_UmrnUploadService) {
        this._UmrnUploadService = _UmrnUploadService;
        this.Preloader = true;
        this.dataArray = [];
    }
    UmrnuploadComponent.prototype.ngOnInit = function () {
        this.BindGrid();
    };
    UmrnuploadComponent.prototype.hide = function () {
        this.showModalsave = false;
    };
    UmrnuploadComponent.prototype.BindGrid = function () {
        var _this = this;
        //this.tbldiv1 = true;
        //this.tbldiv2 = false;
        //this.tbldiv3 = false;
        //this.tbldiv4 = false;
        this._UmrnUploadService.BindGrid().
            subscribe(function (data) {
            _this.umrnupload = data.Table;
            _this.Preloader = false;
        });
    };
    UmrnuploadComponent.prototype.doubleClick = function (data) {
        this.dataArray.push(data);
        //  let UploadHeaderId = JSON.stringify(data.UploadHeaderId);
        this.UploadHeaderId = data.UploadHeaderId;
        this.BindOnRowdblClick();
    };
    UmrnuploadComponent.prototype.BindOnRowdblClick = function () {
        var _this = this;
        this.Preloader = true;
        this._UmrnUploadService.BindOnRowdblClick(this.UploadHeaderId).
            subscribe(function (data) {
            _this.Preloader = false;
            //this.tbldiv1 = false;
            //this.tbldiv2 = true;
            //this.tbldiv3 = true;
            //this.tbldiv4 = true;
            _this.grdunsuccess = data.Table;
            _this.grdsuccess = data.Table1;
            _this.maingriddetails = data.Table2;
            var TotalCount = data.Table2.length;
            var successCount = data.Table1.length;
            var UnsuccessCount = data.Table.length;
            document.getElementById('lblTotalCount').innerHTML = 'Total Records: ' + TotalCount;
            document.getElementById('lblsuccessCount').innerHTML = 'Validated Records : ' + successCount;
            document.getElementById('lblUnsuccessCount').innerHTML = 'Rejected Records : ' + UnsuccessCount;
            var tbldiv1 = document.getElementById('tbldiv1');
            tbldiv1.style.display = 'none';
            var tbldiv2 = document.getElementById('tbldiv2');
            tbldiv2.style.display = 'block';
            var tbldiv3 = document.getElementById('tbldiv3');
            tbldiv3.style.display = 'block';
            var tbldiv4 = document.getElementById('tbldiv4');
            tbldiv4.style.display = 'block';
            var btndownload = document.getElementById('btndownload');
            btndownload.style.display = 'block';
            var divsave = document.getElementById('divsave');
            divsave.style.display = 'none';
        });
    };
    UmrnuploadComponent.prototype.ConvertToCSV = function (objArray) {
        debugger;
        var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
        var str = '';
        var row = "";
        //for (var index in objArray[0]) {
        //    //Now convert each value to string and comma-separated
        //    row += index + ',';
        //}
        // row = row.slice(0, -1);
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
    UmrnuploadComponent.prototype.downloadMaingriddetails = function () {
        this.HeaderArray = [];
        this.HeaderArray = {
            legacyUploadedID: "Legacy Upload Id", UMRN: "UMRN", Amount: "Amount", CustomerName: "Customer Name", Refrence: "Reference",
            FromDate: "From Date", ToDate: "To Date", AccountType: "Account Type", AccountNo: "Account Number", IFSC: "IFSC"
        };
        var csvData = this.ConvertToCSV(JSON.stringify(this.maingriddetails));
        var a = document.createElement("a");
        a.setAttribute('style', 'display:none;');
        document.body.appendChild(a);
        var blob = new Blob([csvData], { type: 'text/csv' });
        var url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = 'UMRN_Grid_details.csv';
        a.click();
        return 'success';
    };
    UmrnuploadComponent.prototype.downloadgrdsuccess = function () {
        this.HeaderArray = [];
        this.HeaderArray = {
            UMRN: "UMRN", Amount: "Amount", CustomerName: "Customer Name", Refrence: "Reference",
            FromDate: "From Date", ToDate: "To Date", AccountType: "Account Type", AccountNo: "Account Number", IFSC: "IFSC"
        };
        var csvData = this.ConvertToCSV(JSON.stringify(this.grdsuccess));
        var a = document.createElement("a");
        a.setAttribute('style', 'display:none;');
        document.body.appendChild(a);
        var blob = new Blob([csvData], { type: 'text/csv' });
        var url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = 'UMRN_Success.csv';
        a.click();
        return 'success';
    };
    UmrnuploadComponent.prototype.downloadgrdUnsuccess = function () {
        this.HeaderArray = [];
        this.HeaderArray = {
            UMRN: "UMRN", Amount: "Amount", CustomerName: "Customer Name", Refrence: "Reference",
            FromDate: "From Date", ToDate: "To Date", AccountType: "Account Type", AccountNo: "Account Number", IFSC: "IFSC", Remark: "Remark"
        };
        var csvData = this.ConvertToCSV(JSON.stringify(this.grdunsuccess));
        var a = document.createElement("a");
        a.setAttribute('style', 'display:none;');
        document.body.appendChild(a);
        var blob = new Blob([csvData], { type: 'text/csv' });
        var url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = 'UMRN_UnSuccess.csv';
        a.click();
        return 'success';
    };
    UmrnuploadComponent.prototype.btnBack_click = function (e) {
        //var tbldiv2 = <HTMLFormElement>document.getElementById('tbldiv2');
        //tbldiv2.style.display = 'none';
        //var tbldiv3 = <HTMLFormElement>document.getElementById('tbldiv3');
        //tbldiv3.style.display = 'none';
        //var tbldiv4 = <HTMLFormElement>document.getElementById('tbldiv4');
        //tbldiv4.style.display = 'none';
        //this.BindGrid();
        //var tbldiv1 = <HTMLFormElement>document.getElementById('tbldiv1');
        //tbldiv1.style.display = 'block';
        window.location.reload();
    };
    UmrnuploadComponent.prototype.downloadHeaderGrid = function () {
        this.HeaderArray = [];
        this.HeaderArray = {
            UploadNo: "Upload No", CreatedOn: "Created On", UserName: "User Name", TotalCount: "Total Count",
            SuccessCount: "Success Count"
        };
        var csvData = this.ConvertToCSV(JSON.stringify(this.umrnupload));
        var a = document.createElement("a");
        a.setAttribute('style', 'display:none;');
        document.body.appendChild(a);
        var blob = new Blob([csvData], { type: 'text/csv' });
        var url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = 'UMRN_Upload_List.csv';
        a.click();
        return 'success';
    };
    UmrnuploadComponent.prototype.btnNew_click = function (e) {
        //this.tbldiv1 = false;
        //this.tbldiv2 = false;
        //this.tbldiv3 = false;
        //this.tbldiv4 = false;
        var tbldiv1 = document.getElementById('tbldiv1');
        tbldiv1.style.display = 'none';
        var tbldiv2 = document.getElementById('tbldiv2');
        tbldiv2.style.display = 'none';
        var tbldiv3 = document.getElementById('tbldiv3');
        tbldiv3.style.display = 'none';
        var tbldiv4 = document.getElementById('tbldiv4');
        tbldiv4.style.display = 'none';
        var btndownload = document.getElementById('btndownload');
        btndownload.style.display = 'block';
        var btnupload = document.getElementById('btnupload');
        btnupload.style.display = 'block';
        var btnback = document.getElementById('btnback');
        btnback.style.display = 'block';
        var btnNew = document.getElementById('btnNew');
        btnNew.style.display = 'none';
    };
    UmrnuploadComponent.prototype.uploadUMRN = function () {
        var _this = this;
        var formData = new FormData();
        formData.append('upload', this.fileInput.nativeElement.files[0]);
        //  alert('k')
        //this.service.UploadExcel(formData).subscribe(result => {
        //    this.message = result.toString();
        //    this.loadAllUser();
        //});
        this.Preloader = true;
        this._UmrnUploadService.UploadExcel(formData).
            subscribe(function (data) {
            _this.Preloader = false;
            _this.grdunsuccess = data.Table;
            _this.grdsuccess = data.Table1;
            _this.maingriddetails = data.Table2;
            var TotalCount = data.Table2.length;
            var successCount = data.Table1.length;
            var UnsuccessCount = data.Table.length;
            document.getElementById('lblTotalCount').innerHTML = 'Total Records: ' + TotalCount;
            document.getElementById('lblsuccessCount').innerHTML = 'Validated Records : ' + successCount;
            document.getElementById('lblUnsuccessCount').innerHTML = 'Rejected Records : ' + UnsuccessCount;
            var tbldiv1 = document.getElementById('tbldiv1');
            tbldiv1.style.display = 'none';
            var tbldiv2 = document.getElementById('tbldiv2');
            tbldiv2.style.display = 'block';
            var tbldiv3 = document.getElementById('tbldiv3');
            tbldiv3.style.display = 'block';
            var tbldiv4 = document.getElementById('tbldiv4');
            tbldiv4.style.display = 'block';
            //this.tbldiv2 = true;
            //this.tbldiv3 = true;
            //this.tbldiv4 = true;
            var btndownload = document.getElementById('btndownload');
            btndownload.style.display = 'block';
            var divsave = document.getElementById('divsave');
            divsave.style.display = 'block';
            var btnNew = document.getElementById('btnNew');
            btnNew.style.display = 'none';
            document.getElementById('lbltotalrecordcount').innerHTML = TotalCount;
            document.getElementById('lblvalidatedcount').innerHTML = successCount;
            document.getElementById('lblUploaderID').innerHTML = _this.maingriddetails[0].legacyUploadedID;
            document.getElementById('lblfilename').innerHTML = data.FileName;
        });
    };
    UmrnuploadComponent.prototype.btnsave_click = function (e) {
        var _this = this;
        var UploadHeaderId = document.getElementById('lblUploaderID').innerHTML;
        var TotalCount = document.getElementById('lbltotalrecordcount').innerHTML;
        var validatedcount = document.getElementById('lblvalidatedcount').innerHTML;
        var FileName = document.getElementById('lblfilename').innerHTML;
        this.Preloader = true;
        this._UmrnUploadService.btnSave_Click(UploadHeaderId, TotalCount, validatedcount, FileName).subscribe(function (data) {
            _this.Preloader = false;
            _this.umrnupload = data.Table;
            if (data.Table.length != 0) {
                _this.showModalsave = true;
            }
            _this.BindGrid();
            var tbldiv1 = document.getElementById('tbldiv1');
            tbldiv1.style.display = 'block';
            var tbldiv2 = document.getElementById('tbldiv2');
            tbldiv2.style.display = 'none';
            var tbldiv3 = document.getElementById('tbldiv3');
            tbldiv3.style.display = 'none';
            var tbldiv4 = document.getElementById('tbldiv4');
            tbldiv4.style.display = 'none';
            //this.tbldiv1 = true;
            //this.tbldiv2 = false;
            //this.tbldiv3 = false;
            //this.tbldiv4 = false;
            window.location.reload();
        });
    };
    tslib_1.__decorate([
        ViewChild('fileInput'),
        tslib_1.__metadata("design:type", Object)
    ], UmrnuploadComponent.prototype, "fileInput", void 0);
    UmrnuploadComponent = tslib_1.__decorate([
        Component({
            selector: 'app-umrnupload',
            templateUrl: './umrnupload.component.html',
            styleUrls: ['./umrnupload.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [UmrnUploadService])
    ], UmrnuploadComponent);
    return UmrnuploadComponent;
}());
export { UmrnuploadComponent };
//# sourceMappingURL=umrnupload.component.js.map