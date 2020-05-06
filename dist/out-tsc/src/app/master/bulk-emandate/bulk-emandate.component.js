import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { BuldEmandateService } from '../../../app/Services/BulkEMandate/buld-emandate.service';
var BulkEmandateComponent = /** @class */ (function () {
    function BulkEmandateComponent(myservice) {
        this.myservice = myservice;
        this.ActivityType = 'E';
        this.topVal = 50;
    }
    BulkEmandateComponent.prototype.ngOnInit = function () {
        //ActivityType: string = 'p';
        var item = JSON.parse(sessionStorage.getItem('User'));
        // this.UserId = item.UserId;
        this.EntityId = item.ReferenceId;
        //alert(this.EntityId);
        this.BindGrid(this.EntityId, this.topVal, this.ActivityType);
    };
    BulkEmandateComponent.prototype.BindGrid = function (EntityId, topVal, ActivityType) {
        var _this = this;
        var item = JSON.parse(sessionStorage.getItem('User'));
        this.myservice.GetGridAllData(item.UserId, EntityId, topVal, ActivityType).subscribe(function (res) {
            console.log(res);
            _this.tabledata = res.Table;
            _this.datacount = res.Table1;
            console.log(_this.datacount);
            //this.count = JSON.stringify(this.datacount);
            var str = JSON.stringify(_this.datacount);
            _this.count = str.replace('[{"Totalcount":', '').replace('}]', '');
            if (_this.count == 0) {
                _this.topVal = _this.count;
            }
            else {
                _this.topVal = _this.count;
            }
            //  alert(this.tabledata.length);
            //  alert(JSON.stringify(res));
        });
    };
    BulkEmandateComponent.prototype.pagenext = function () {
        var item = JSON.parse(sessionStorage.getItem('User'));
        this.topVal += 50;
        if (this.topVal <= this.count) {
            this.BindGrid(this.EntityId, this.topVal, this.ActivityType);
        }
        else {
            this.topVal = this.count;
            this.BindGrid(this.EntityId, this.topVal, this.ActivityType);
        }
        //  console.log(this.topVal);
    };
    BulkEmandateComponent.prototype.ConvertToCSV = function (objArray) {
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
    BulkEmandateComponent.prototype.downloadExcel = function () {
        var csvData = this.ConvertToCSV(JSON.stringify(this.tabledata));
        var a = document.createElement("a");
        a.setAttribute('style', 'display:none;');
        document.body.appendChild(a);
        var blob = new Blob([csvData], { type: 'text/csv' });
        var url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = 'User_Results.csv'; /* your file name*/
        a.click();
        return 'success';
    };
    BulkEmandateComponent = tslib_1.__decorate([
        Component({
            selector: 'app-bulk-emandate',
            templateUrl: './bulk-emandate.component.html',
            styleUrls: ['./bulk-emandate.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [BuldEmandateService])
    ], BulkEmandateComponent);
    return BulkEmandateComponent;
}());
export { BulkEmandateComponent };
//# sourceMappingURL=bulk-emandate.component.js.map