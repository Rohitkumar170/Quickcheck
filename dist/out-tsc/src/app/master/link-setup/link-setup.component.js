import * as tslib_1 from "tslib";
/// <reference path="../../../models/link-setup/bindgrid.ts" />
/// <reference path="../../services/link-setup/link-setup.service.ts" />
/// <reference path="../../../models/link-setup/iconname.ts" />
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { LinkSetupService } from '../../services/link-setup/link-setup.service';
var LinkSetupComponent = /** @class */ (function () {
    function LinkSetupComponent(formBuilder, _LinkSetupService) {
        this.formBuilder = formBuilder;
        this._LinkSetupService = _LinkSetupService;
        this.Preloader = false;
        this.formid = false;
        this.tbldiv = false;
        this.Temp = 1;
        this.submitted = false;
        this.LinkId = 0;
    }
    LinkSetupComponent.prototype.hide = function () {
        this.showModalsave = false;
    };
    LinkSetupComponent.prototype.ngOnInit = function () {
        this.Linksetup = this.formBuilder.group({
            LinkName: ['', Validators.required],
            Url: ['', Validators.required],
            OrderNo: ['', Validators.required],
            IconName: [''],
            Purpose: [''],
            IsActive: ['']
        });
        // this.Preloader = false;
        this.BindGrid();
        this.GetIconDropDown();
        document.getElementById("btnEdit").setAttribute("disabled", "disabled");
        document.getElementById("btnBack").setAttribute("disabled", "disabled");
        document.getElementById("btnSave").setAttribute("disabled", "disabled");
        this.setSelectedRow = function (index) {
            this.selectedRow = index;
        };
    };
    LinkSetupComponent.prototype.isFieldValid = function (field) {
        return !this.Linksetup.get(field).valid && this.Linksetup.get(field).touched;
    };
    LinkSetupComponent.prototype.displayFieldCss = function (field) {
        return {
            'validate': this.isFieldValid(field),
        };
    };
    LinkSetupComponent.prototype.validateAllFormFields = function (formGroup) {
        var _this = this;
        Object.keys(formGroup.controls).forEach(function (field) {
            var control = formGroup.get(field);
            if (control instanceof FormControl) {
                control.markAsTouched({ onlySelf: true });
            }
            else if (control instanceof FormGroup) {
                _this.validateAllFormFields(control);
            }
        });
    };
    LinkSetupComponent.prototype.CheckLink = function () {
        var LinkName = (document.getElementById("LinkName").value);
        if (LinkName == "0") {
            this.Linksetup.controls['LinkName'].setValue("");
            document.getElementById("LinkName").classList.add('validate');
            document.getElementById("LinkName").setAttribute("placeholder", "Can't Be Zero");
        }
        else {
            document.getElementById("LinkName").classList.remove('validate');
        }
    };
    LinkSetupComponent.prototype.CheckURL = function () {
        var URL = (document.getElementById("URL").value);
        if (URL == "0") {
            this.Linksetup.controls['Url'].setValue("");
            document.getElementById("URL").classList.add('validate');
            document.getElementById("URL").setAttribute("placeholder", "Can't Be Zero");
        }
        else {
            document.getElementById("URL").classList.remove('validate');
        }
    };
    LinkSetupComponent.prototype.CheckOrderNo = function () {
        var OrderNo = (document.getElementById("OrderNo").value);
        if (OrderNo == "0") {
            this.Linksetup.controls['OrderNo'].setValue("");
            document.getElementById("OrderNo").classList.add('validate');
            document.getElementById("OrderNo").setAttribute("placeholder", "Can't Be Zero");
        }
        else {
            document.getElementById("OrderNo").classList.remove('validate');
        }
    };
    LinkSetupComponent.prototype.removeClass = function () {
        document.getElementById("LinkName").classList.remove('validate');
        document.getElementById("URL").classList.remove('validate');
        document.getElementById("OrderNo").classList.remove('validate');
    };
    LinkSetupComponent.prototype.BindGrid = function () {
        var _this = this;
        this.Preloader = true;
        this._LinkSetupService.BindGrid().
            subscribe(function (data) {
            _this.Preloader = false;
            _this.linksetup = data.Table;
            _this.tbldiv = true;
        });
    };
    LinkSetupComponent.prototype.GetIconDropDown = function () {
        var _this = this;
        this._LinkSetupService.GetIconDropDown().
            subscribe(function (data) {
            _this.iconname = data.Table;
            console.log(_this.iconname);
        });
    };
    LinkSetupComponent.prototype.btnNew_Click = function () {
        this.Linksetup.reset();
        document.getElementById("btnSave").removeAttribute("disabled");
        document.getElementById("btnEdit").setAttribute("disabled", "disabled");
        document.getElementById("btnNew").setAttribute("disabled", "disabled");
        document.getElementById("btnBack").removeAttribute("disabled");
        this.tbldiv = false;
        this.formid = true;
        this.Temp = 1;
        this.LinkId = 0;
    };
    LinkSetupComponent.prototype.btnBack_Click = function () {
        this.formid = false;
        this.BindGrid();
        // this.tbldiv = true;
        //document.getElementById('divSearch').hidden = false;
        //document.getElementById('btnExport').hidden = false;
        document.getElementById("btnSave").setAttribute("disabled", "disabled");
        document.getElementById("btnEdit").setAttribute("disabled", "disabled");
        document.getElementById("btnNew").removeAttribute("disabled");
        document.getElementById("btnBack").setAttribute("disabled", "disabled");
        this.Linksetup.reset();
    };
    LinkSetupComponent.prototype.editData = function () {
        var _this = this;
        this._LinkSetupService.EditData(this.LinkId).subscribe(function (data) {
            _this.linksetup = data.Table;
            console.log(_this.linksetup);
            _this.Linksetup.controls['LinkName'].setValue(_this.linksetup[0].LinkName);
            _this.Linksetup.controls['Url'].setValue(_this.linksetup[0].url);
            _this.Linksetup.controls['Purpose'].setValue(_this.linksetup[0].Purpose);
            _this.Linksetup.controls['OrderNo'].setValue(_this.linksetup[0].OrderNo);
            _this.Linksetup.controls['IconName'].setValue(_this.linksetup[0].IconName);
            if (_this.linksetup[0].IsActive == 1) {
                _this.Linksetup.controls['IsActive'].setValue(true);
            }
        });
        document.getElementById("btnSave").removeAttribute("disabled");
        document.getElementById("btnEdit").setAttribute("disabled", "disabled");
        document.getElementById("btnNew").setAttribute("disabled", "disabled");
        document.getElementById("btnBack").removeAttribute("disabled");
        //document.getElementById('divSearch').hidden = true;
        //document.getElementById('btnExport').hidden = true;
        this.tbldiv = false;
        this.formid = true;
    };
    LinkSetupComponent.prototype.onSubmit = function () {
        this.submitted = true;
        if (this.Linksetup.valid) {
            //this.sucess=true;
            var datat = this.Linksetup.value;
            if (this.Temp == 1) {
                this.InsertData();
            }
            else {
                this.UpDateLink();
            }
        }
        else {
            this.validateAllFormFields(this.Linksetup);
        }
    };
    LinkSetupComponent.prototype.InsertData = function () {
        var _this = this;
        var item = JSON.parse(sessionStorage.getItem('User'));
        this._LinkSetupService.InsertData(JSON.stringify(this.Linksetup.value), item.UserId).subscribe(function (data) {
            // this.linksetup = data;
            _this.linksetup = data;
            if (_this.linksetup[0].Result == -1) {
                _this.message = 'Link already exists';
                alert(_this.message);
            }
            else {
                //innerHTML("Link Save SuccessFully");
                _this.showModalsave = true;
            }
            _this.Linksetup.reset();
            _this.BindGrid();
            _this.formid = false;
            _this.tbldiv = true;
            document.getElementById("btnEdit").setAttribute("disabled", "disabled");
            document.getElementById("btnBack").setAttribute("disabled", "disabled");
            document.getElementById("btnSave").setAttribute("disabled", "disabled");
            document.getElementById("btnNew").removeAttribute("disabled");
            //document.getElementById('divSearch').hidden = false;
            //document.getElementById('btnExport').hidden = false;
        });
    };
    LinkSetupComponent.prototype.UpDateLink = function () {
        var _this = this;
        var item = JSON.parse(sessionStorage.getItem('User'));
        this._LinkSetupService.UpDateLink(JSON.stringify(this.Linksetup.value), item.UserId, this.LinkId).subscribe(function (data) {
            _this.linksetup = data;
            if (_this.linksetup[0].Result == -1) {
                _this.message = 'Error';
                alert(_this.message);
            }
            else {
                _this.showModalsave = true;
            }
            _this.Linksetup.reset();
            _this.BindGrid();
            _this.formid = false;
            _this.tbldiv = true;
            document.getElementById("btnEdit").setAttribute("disabled", "disabled");
            document.getElementById("btnBack").setAttribute("disabled", "disabled");
            document.getElementById("btnSave").setAttribute("disabled", "disabled");
            document.getElementById("btnNew").removeAttribute("disabled");
            //document.getElementById('divSearch').hidden = false;
            //document.getElementById('btnExport').hidden = false;
        });
    };
    LinkSetupComponent.prototype.doubleClick = function (Data) {
        var Currentrowid = this.Linksetup.value;
        this.LinkId = Data.LinkID;
        this.editData();
        this.Temp = 2;
    };
    LinkSetupComponent.prototype.setClickedRow = function (Data) {
        var Currentrowid = this.Linksetup.value;
        this.LinkId = Data.LinkID;
        this.Temp = 2;
        document.getElementById("btnEdit").removeAttribute("disabled");
    };
    LinkSetupComponent = tslib_1.__decorate([
        Component({
            selector: 'app-link-setup',
            templateUrl: './link-setup.component.html',
            styleUrls: ['./link-setup.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [FormBuilder, LinkSetupService])
    ], LinkSetupComponent);
    return LinkSetupComponent;
}());
export { LinkSetupComponent };
//# sourceMappingURL=link-setup.component.js.map