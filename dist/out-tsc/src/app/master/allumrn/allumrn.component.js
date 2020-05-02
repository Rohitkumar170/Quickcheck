import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { AllumrnService } from '../../Services/Allumrn/allumrn.service';
//import { Umrn_Class } from '../../../Models/Allumrn/Umrn_Class';
var AllumrnComponent = /** @class */ (function () {
    function AllumrnComponent(formBuilder, _allumrn) {
        this.formBuilder = formBuilder;
        this._allumrn = _allumrn;
        // Addumrn: FormGroup;
        this.submitted = false;
        this.Preloader = true;
    }
    AllumrnComponent.prototype.ngOnInit = function () {
        this.showmodalcreateumrn = false;
        this.showModalumrnstatement = false;
        this.Preloader = false;
        // let item = JSON.parse(sessionStorage.getItem('User'));
        this.GridBind();
        this.Allumrn = this.formBuilder.group({
            Searchvalidation: ['', Validators.required]
        });
        //this.Addumrn = this.formBuilder.group({
        //    Newumrn: ['', Validators.required],
        //    CustomerName: ['', Validators.required],
        //    ReferenceNumber: ['', Validators.required],
        //    Amount: ['', Validators.required],
        //    FromDate: ['', Validators.required],
        //    ToDate: ['', Validators.required]
        //});
    };
    AllumrnComponent.prototype.GridBind = function () {
        var _this = this;
        this.Entityid = 13;
        this.Pageno = 1;
        this.Preloader = true;
        this._allumrn.GridBind(this.Entityid, this.Pageno).subscribe(function (data) {
            _this.Preloader = false;
            _this.Umrndta = data;
            console.log(_this.Umrndta);
        });
    };
    AllumrnComponent.prototype.onClick = function (event) {
        this.showmodalcreateumrn = true;
    };
    AllumrnComponent.prototype.hide = function () {
        this.showmodalcreateumrn = false;
        this.showModalumrnstatement = false;
    };
    //onClick(event) {
    //    this.showModalumrnstatement = true;
    //}
    //hide() {
    //    this.showModalumrnstatement = false;
    //}
    AllumrnComponent.prototype.Insertumrn = function (NEWUMRN, Customername, ReferenceNumber, Amount, FromDate, ToDate) {
        var Entityid = 13;
        var Userid = 86;
        var CreatedBy = 1;
        var jasondata = {
            "UMRN": NEWUMRN,
            "CustomerName": Customername,
            "ReferenceNumber": ReferenceNumber,
            "Entityid": Entityid,
            "Amount": Amount,
            "FromDate": FromDate,
            "ToDate": ToDate,
            "Userid": Userid,
            "CreatedBy": CreatedBy
        };
        //this._allumrn.AddUmrn(jasondata).subscribe(
        //  (data) => {
        //    this.insert = data;
        //  alert("Data Save successfully");
        //this.showmodalcreateumrn = false;
        // });
    };
    AllumrnComponent.prototype.onRowClicked = function (data) {
        alert("dlclick");
        //const Currentrowid = this.Allumrn.value;
        this.showModalumrnstatement = true;
        // this.dataArray.push(data);
        var UMRN = data.UMRN;
        var Entityid = 13;
        //  this._allumrn.GridDataDetails(UMRN, Entityid).subscribe(
        //    (data) => {
        //       this.Preloader = false;
        //     this.griddatadetail = data;
        //  console.log(this.griddatadetail);
        //  });
        // this.dataArray = data;
        //this.showModalumrnstatement = true;
        //this.Login.controls['FullName'].setValue(data.FullName);
        //this.Login.controls['Email'].setValue(data.Email);
        //this.Login.controls['Password'].setValue(data.Password);
        //this.buttonDisabled1 = false;
        //this.Temp = 2;
    };
    AllumrnComponent.prototype.isFieldValid = function (field) {
        return !this.Allumrn.get(field).valid && this.Allumrn.get(field).touched;
    };
    AllumrnComponent.prototype.displayFieldCss = function (field) {
        return {
            'validate': this.isFieldValid(field),
        };
    };
    AllumrnComponent = tslib_1.__decorate([
        Component({
            selector: 'app-allumrn',
            templateUrl: './allumrn.component.html',
            styleUrls: ['./allumrn.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [FormBuilder, AllumrnService])
    ], AllumrnComponent);
    return AllumrnComponent;
}());
export { AllumrnComponent };
//# sourceMappingURL=allumrn.component.js.map