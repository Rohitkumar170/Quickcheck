import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { UserServiceService } from '../../Services/User/user-service.service';
//import { Directive, HostListener } from '@angular/core';
//import { UserServiceService } from 'ClientApp/app/Services/user/user-service.service';
var UserComponent = /** @class */ (function () {
    function UserComponent(formBuilder, userservice) {
        this.formBuilder = formBuilder;
        this.userservice = userservice;
        this.DetailArray = [];
        this.checkbulkuploadlink = [];
        this.chkvideolink = [];
        this.chkuserlist = [];
        this.submitted = false;
        this.Temp = 1;
        this.tableid = false;
        this.formid = false;
        // public divuserlist:boolean = false;
        this.divaccessright = false;
        this.disabled = false;
        this.ShowFilter = false;
        this.limitSelection = false;
        this.selectedItems = [];
        this.dropdownSettings = {};
        this.Page_Count = 1;
        this.Search_Text = "";
        this.SponsorBankCodeId = [];
        this.divNachUser = false;
        this.divplusicon = false;
        this.divPresentmentAccess = false;
        this.divMaker = false;
        this.dvBulkUpload = false;
        this.dvVideos = false;
        this.dvtxtBankValidationcount = false;
        this.dvtxtAccountValidationcount = false;
        this.linkid = 0;
        this.AcvalUsercount = "";
        this.bankvalUsercount = "";
        this.dvEnableCancel = false;
        this.isSelected = false;
        this.isSingleChk = false;
        this.Userid = 0;
        this.selected_checkbox = {};
        this.IsViewAll = 0;
        this.lblalluser = false;
    }
    UserComponent.prototype.onClick = function (event) {
        this.showModal = true;
    };
    UserComponent.prototype.hide = function () {
        this.showModalsave = false;
        this.showModal = false;
        this.showModalalert = false;
    };
    UserComponent.prototype.ngOnInit = function () {
        this.UserForm = this.formBuilder.group({
            UserName: [, Validators.required],
            sponsorbankcode: ['', Validators.required],
            categorycode: ['', Validators.required],
            Type: ['', Validators.required],
            PhoneNo: new FormControl(),
            EmailId: new FormControl(),
            emailsent: new FormControl(),
            chkDownload: new FormControl(),
            chkCreate: new FormControl(),
            chkEdit: new FormControl(),
            chkView: new FormControl(),
            chkRefEdit: new FormControl(),
            nachuser: new FormControl(),
            chkUmrnHistory: new FormControl(),
            chkUmrnUpload: new FormControl(),
            chkAllUMRN: new FormControl(),
            chknachpresentment: new FormControl(),
            chkPresentMaker: new FormControl(),
            chkPresentChecker: new FormControl(),
            maker: new FormControl(),
            bankval: new FormControl(),
            accountval: new FormControl(),
            chkEnableCancel: new FormControl(),
            chkbulkuploadlink: new FormControl(),
            chkvideolink: new FormControl()
        });
        this.setSelectedRow = function (index) {
            this.selectedRow = index;
        };
        this.tableid = true;
        this.formid = false;
        this.divaccessright = false;
        this.divNachUser = false;
        this.divplusicon = false;
        this.divPresentmentAccess = false;
        this.divMaker = false;
        this.dvBulkUpload = false;
        this.dvVideos = false;
        this.dvtxtBankValidationcount = false;
        this.dvtxtAccountValidationcount = false;
        this.dvEnableCancel = false;
        this.isSelected = false;
        this.lblalluser = false;
        document.getElementById("btnEdit").setAttribute("disabled", "disabled");
        document.getElementById("btnBack").setAttribute("disabled", "disabled");
        document.getElementById("btnSave").setAttribute("disabled", "disabled");
        this.bindUser();
        this.bindPresentmentMaker();
        this.BindPresentmentChecker();
        this.UserForm.controls['sponsorbankcode'].setValue(0);
        this.UserForm.controls['categorycode'].setValue(0);
        this.UserForm.controls['maker'].setValue(0);
        this.UserForm.controls['nachuser'].setValue(0);
    };
    UserComponent.prototype.isFieldValid = function (field) {
        return !this.UserForm.get(field).valid && this.UserForm.get(field).touched;
    };
    UserComponent.prototype.displayFieldCss = function (field) {
        return {
            'validate': this.isFieldValid(field),
        };
    };
    UserComponent.prototype.newUser = function () {
        document.getElementById("btnSave").removeAttribute("disabled");
        document.getElementById("btnEdit").setAttribute("disabled", "disabled");
        document.getElementById("btnNew").setAttribute("disabled", "disabled");
        document.getElementById("btnBack").removeAttribute("disabled");
        this.tableid = false;
        this.formid = true;
        this.divMaker = false;
        this.divPresentmentAccess = false;
        this.divNachUser = false;
        this.divaccessright = false;
        document.getElementById('divSearch').hidden = true;
        document.getElementById('btnExport').hidden = true;
        this.Temp = 1;
        this.Userid = 0;
        this.checkbulkuploadlink = [];
        this.chkvideolink = [];
    };
    UserComponent.prototype.bindUser = function () {
        var _this = this;
        this.Search_Text = (document.getElementById("txtSearch").value);
        if (this.Search_Text == "") {
            this.Search_Text = "0";
        }
        var item = JSON.parse(sessionStorage.getItem('User'));
        this.userservice.getUser(item.ReferenceId, this.Page_Count, this.Search_Text).subscribe(function (data) {
            _this.userdata = data.Table;
            _this.sponsorbankcode = data.Table2;
            _this.categorycode = data.Table7;
            _this.bankacc = data.Table5;
            _this.UserForm.controls['bankval'].setValue("");
            _this.UserForm.controls['accountval'].setValue("");
            if (_this.bankacc[0].EnableUserWise == true) {
                _this.UserForm.controls['bankval'].setValue(_this.bankacc[0].BankValidationUserCount);
                _this.UserForm.controls['accountval'].setValue(_this.bankacc[0].AcValidationUserCount);
                _this.dvtxtAccountValidationcount = true;
                _this.dvtxtBankValidationcount = true;
                _this.AcvalUsercount = _this.bankacc[0].AcValidationUserCount;
                _this.bankvalUsercount = _this.bankacc[0].BankValidationUserCount;
            }
            else {
                _this.dvtxtBankValidationcount = false;
                _this.dvtxtAccountValidationcount = false;
            }
            if (_this.bankacc[0].EnableCancelUserWise == true) {
                _this.dvEnableCancel = true;
            }
            else {
                _this.dvEnableCancel = false;
            }
            _this.tempdata = data.Table6;
        });
    };
    UserComponent.prototype.bindPresentmentMaker = function () {
        var _this = this;
        var item = JSON.parse(sessionStorage.getItem('User'));
        this.userservice.getMakers(item.ReferenceId, item.UserId).subscribe(function (data) {
            _this.maker = data.Table;
            _this.nachuser = data.Table1;
        });
    };
    UserComponent.prototype.BindPresentmentChecker = function () {
        var _this = this;
        var item = JSON.parse(sessionStorage.getItem('User'));
        this.userservice.CheckIsPresentmentChecker(item.ReferenceId).subscribe(function (data) {
            _this.checker = data.Table;
            var html = "";
            var html1 = "";
            if (data.Table1.length > 0) {
                _this.bulkupload = data.Table1;
                _this.dvBulkUpload = true;
                //html = "<div class='col-md-11 col-sm-12 col-xs-12 no-padding' ><div class='form-group'><label class='col-sm-2 col-md-2 col-xs-4 control-label no-padding ' for='form-field-1'>Bulk Upload</label><div class='col-sm-10 col-md-10 col-xs-7 no-padding' id='divbulkupload'>"
                //for (var i = 0; i < data.Table1.length; i++) {
                //    html += "<div class='col-md-2 col-sm-3 col-xs-12 no-padding' ><input type='checkbox' name='chkbulkupload' id='chkbx_" + this.bulkupload[i].LinkID + "' class='bulkvideo pull-left' value='" + this.bulkupload[i].LinkID + "'/><label class='col-md-10 col-xs-10 col-sm-10 no-padding-right control-label'>" + this.bulkupload[i].LinkName + "</label></div>"
                //}
                //html += "</div></div></div>"
                //var d1 = document.getElementById('dvBulkUpload');
                //d1.insertAdjacentHTML('beforeend', html);
            }
            if (data.Table2.length > 0) {
                _this.bulkvideo = data.Table2;
                _this.dvVideos = true;
                //html1 = "<div class='col-md-11 col-sm-12 col-xs-12 no-padding' ><div class='form-group'><label class='col-sm-2 col-md-2 col-xs-4 control-label no-padding ' for='form-field-1'>Bulk Upload</label><div class='col-sm-10 col-md-10 col-xs-7 no-padding' id='divbulkupload'>"
                //for (var i = 0; i < data.Table2.length; i++) {
                //    html1 += "<div class='col-md-2 col-sm-3 col-xs-12 no-padding' ><input type='checkbox' name='chkbulkupload' id='chkbx_" + this.bulkvideo[i].LinkID + "' class='bulkvideo pull-left' value='" + this.bulkvideo[i].LinkID + "'/><label class='col-md-10 col-xs-10 col-sm-10 no-padding-right control-label'>" + this.bulkvideo[i].LinkName + "</label></div>"
                //}
                //html += "</div></div></div>"
                //var d2 = document.getElementById('dvVideos');
                //d2.insertAdjacentHTML('beforeend', html);
            }
        });
    };
    UserComponent.prototype.onSubmit = function () {
        this.submitted = true;
        if (this.UserForm.valid) {
            //this.sucess=true;
            var datat = this.UserForm.value;
            if (this.Temp == 1) {
                this.SaveUser();
            }
            else {
                this.UpdateUser();
            }
        }
        else {
            this.validateAllFormFields(this.UserForm);
        }
    };
    UserComponent.prototype.validateAllFormFields = function (formGroup) {
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
    UserComponent.prototype.userClick = function () {
        this.divaccessright = true;
    };
    UserComponent.prototype.adminClick = function () {
        this.divaccessright = false;
    };
    UserComponent.prototype.backClick = function () {
        this.bindUser();
        this.tableid = true;
        this.formid = false;
        document.getElementById('divSearch').hidden = false;
        document.getElementById('btnExport').hidden = false;
        document.getElementById("btnSave").setAttribute("disabled", "disabled");
        document.getElementById("btnEdit").setAttribute("disabled", "disabled");
        document.getElementById("btnNew").removeAttribute("disabled");
        document.getElementById("btnBack").setAttribute("disabled", "disabled");
        this.UserForm.reset();
    };
    UserComponent.prototype.isNumber = function (evt) {
        evt = (evt) ? evt : window.event;
        var charCode = (evt.which) ? evt.which : evt.keyCode;
        if (charCode > 31 && (charCode != 46 && (charCode < 48 || charCode > 57))) {
            return false;
        }
        else {
            return true;
        }
    };
    UserComponent.prototype.viewClick = function () {
        var element = document.getElementById("IsChkView");
        if (element.checked == true) {
            this.divNachUser = true;
            this.divplusicon = true;
        }
        else {
            this.divNachUser = false;
            this.divplusicon = false;
        }
    };
    UserComponent.prototype.presentmentClick = function () {
        var element = document.getElementById("chkIsNachPresent");
        if (element.checked == true) {
            this.divPresentmentAccess = true;
            this.divMaker = false;
        }
        else {
            this.divPresentmentAccess = false;
            this.divMaker = false;
        }
    };
    UserComponent.prototype.checkerClick = function () {
        var element = document.getElementById("chkIsChecker");
        if (element.checked == true) {
            this.divMaker = true;
        }
        else {
            this.divMaker = false;
        }
    };
    UserComponent.prototype.SaveUser = function () {
        var _this = this;
        var item = JSON.parse(sessionStorage.getItem('User'));
        this.userservice.SaveUser(JSON.stringify(this.UserForm.value), item.ReferenceId, item.UserId, this.IsViewAll, this.checkbulkuploadlink, this.chkvideolink).subscribe(function (data) {
            _this.user = data;
            if (_this.user[0].Result == -1) {
                _this.showModalalert = true;
            }
            else {
                _this.showModalsave = true;
            }
            _this.UserForm.reset();
            _this.bindUser();
            _this.formid = false;
            _this.tableid = true;
            document.getElementById("btnEdit").setAttribute("disabled", "disabled");
            document.getElementById("btnBack").setAttribute("disabled", "disabled");
            document.getElementById("btnSave").setAttribute("disabled", "disabled");
            document.getElementById("btnNew").removeAttribute("disabled");
            document.getElementById('divSearch').hidden = false;
            document.getElementById('btnExport').hidden = false;
        });
    };
    UserComponent.prototype.UpdateUser = function () {
        var _this = this;
        var item = JSON.parse(sessionStorage.getItem('User'));
        this.userservice.UpdateUser(JSON.stringify(this.UserForm.value), item.ReferenceId, item.UserId, this.Userid, this.IsViewAll, this.checkbulkuploadlink, this.chkvideolink).subscribe(function (data) {
            _this.user = data;
            if (_this.user[0].Result == 1) {
                _this.showModalsave = true;
            }
            //else {
            //    this.message = 'User updated Successfully';
            //    alert(this.message);
            //}
            _this.UserForm.reset();
            _this.bindUser();
            _this.formid = false;
            _this.tableid = true;
            document.getElementById("btnEdit").setAttribute("disabled", "disabled");
            document.getElementById("btnBack").setAttribute("disabled", "disabled");
            document.getElementById("btnSave").setAttribute("disabled", "disabled");
            document.getElementById("btnNew").removeAttribute("disabled");
            document.getElementById('divSearch').hidden = false;
            document.getElementById('btnExport').hidden = false;
        });
    };
    UserComponent.prototype.isChklength = function () {
        var phnumber = (document.getElementById("txtphnumber").value);
        if (phnumber.length > 0 && phnumber.length < 10) {
            this.UserForm.controls['PhoneNo'].setValue("");
            document.getElementById("txtphnumber").classList.add('validate');
            document.getElementById("txtphnumber").setAttribute("placeholder", "Please enter 10 - digit");
        }
        else {
            document.getElementById("txtphnumber").classList.remove('validate');
        }
    };
    UserComponent.prototype.removeClass = function () {
        document.getElementById("txtphnumber").classList.remove('validate');
        document.getElementById("txtEmailId").classList.remove('validate');
        document.getElementById("txtemailsent").classList.remove('validate');
    };
    UserComponent.prototype.chkEmail = function () {
        var email = (document.getElementById("txtEmailId").value);
        var regex = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+\.)+[a-zA-Z0-9.-]{2,4}$/;
        if (regex.test(email) != true) {
            this.UserForm.controls['EmailId'].setValue("");
            document.getElementById("txtEmailId").classList.add('validate');
            document.getElementById("txtEmailId").setAttribute("placeholder", "Invalid-Email");
        }
        else {
            document.getElementById("txtEmailId").classList.remove('validate');
        }
    };
    UserComponent.prototype.chkEmailSent = function () {
        var email = (document.getElementById("txtemailsent").value);
        var regex = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+\.)+[a-zA-Z0-9.-]{2,4}$/;
        if (regex.test(email) != true) {
            this.UserForm.controls['emailsent'].setValue("");
            document.getElementById("txtemailsent").classList.add('validate');
            document.getElementById("txtemailsent").setAttribute("placeholder", "Invalid-Email");
        }
        else {
            document.getElementById("txtemailsent").classList.remove('validate');
        }
    };
    UserComponent.prototype.onRowClicked = function (User) {
        var Currentrowid = this.UserForm.value;
        this.Userid = User.UserId;
        this.editData();
        //document.getElementById("btnSave").removeAttribute("disabled");
        //document.getElementById("btnEdit").setAttribute("disabled", "disabled");
        //document.getElementById("btnNew").setAttribute("disabled", "disabled");
        //document.getElementById("btnBack").removeAttribute("disabled");
        //this.tableid = false;
        //this.formid = true;
        this.Temp = 2;
    };
    UserComponent.prototype.editData = function () {
        var _this = this;
        this.userservice.EditData(this.Userid).subscribe(function (data) {
            _this.userdata = data.Table;
            _this.sponsorbankid = data.Table1;
            _this.getcatcode = data.Table9;
            _this.getmaker = data.Table4;
            _this.getAccessRight1 = data.Table5;
            _this.getAccessRight2 = data.Table6;
            _this.UserForm.controls['UserName'].setValue(_this.userdata[0].UserName);
            _this.UserForm.controls['EmailId'].setValue(_this.userdata[0].EmailId);
            _this.UserForm.controls['emailsent'].setValue(_this.userdata[0].EmailSendTo);
            _this.UserForm.controls['PhoneNo'].setValue(_this.userdata[0].PhoneNo);
            _this.UserForm.controls['sponsorbankcode'].setValue(_this.sponsorbankid[0].SponsorBankCodeId);
            _this.UserForm.controls['bankval'].setValue(_this.userdata[0].BankValidationUserCount);
            _this.UserForm.controls['accountval'].setValue(_this.userdata[0].AcValidationUserCount);
            _this.UserForm.controls['categorycode'].setValue(_this.getcatcode[0].CategoryCode);
            if (_this.userdata[0].PresentmentMaker == 1) {
                _this.UserForm.controls['chkPresentMaker'].setValue(true);
            }
            if (_this.userdata[0].PresentmentChecker == 1) {
                _this.divPresentmentAccess = true;
                _this.UserForm.controls['chkPresentChecker'].setValue(true);
            }
            if (_this.getAccessRight1[0].IsCreate == true) {
                _this.UserForm.controls['chkCreate'].setValue(true);
            }
            if (_this.getAccessRight1[0].IsDownload == true) {
                _this.UserForm.controls['chkDownload'].setValue(true);
            }
            if (_this.getAccessRight1[0].IsRead == true) {
                _this.UserForm.controls['chkView'].setValue(true);
                _this.divNachUser = true;
                _this.UserForm.controls['nachuser'].setValue(_this.getAccessRight1[0].ParallelUserIDs);
            }
            else {
                _this.UserForm.controls['chkView'].setValue(false);
                _this.divNachUser = false;
            }
            _this.getmaker = data.Table4;
            if (_this.userdata[0].PresentmentChecker == "1") {
                _this.divMaker = true;
                _this.UserForm.controls['maker'].setValue(_this.getmaker[0].MakerUserId);
            }
            if (_this.userdata[0].IsRefrenceEdit == true) {
                _this.UserForm.controls['chkRefEdit'].setValue(true);
            }
            else {
                _this.UserForm.controls['chkRefEdit'].setValue(false);
            }
            if (_this.userdata[0].IsRefrenceEdit == true) {
                _this.UserForm.controls['chkRefEdit'].setValue(true);
            }
            else {
                _this.UserForm.controls['chkRefEdit'].setValue(false);
            }
            if (_this.userdata[0].IsEnableCancel == true) {
                _this.UserForm.controls['chkEnableCancel'].setValue(true);
            }
            else {
                _this.UserForm.controls['chkEnableCancel'].setValue(false);
            }
            _this.UserForm.controls['Type'].setValue(_this.userdata[0].UserType);
            if (_this.userdata[0].UserType == 'u') {
                _this.divaccessright = true;
            }
            else {
                _this.divaccessright = false;
            }
            debugger;
            for (var i = 0; i < data.Table6.length; i++) {
                if (_this.getAccessRight2[i].LinkID == 17) {
                    _this.UserForm.controls['chkUmrnHistory'].setValue(true);
                }
                if (_this.getAccessRight2[i].LinkID == 18) {
                    _this.UserForm.controls['chkUmrnUpload'].setValue(true);
                }
                if (_this.getAccessRight2[i].LinkID == 19) {
                    _this.UserForm.controls['chknachpresentment'].setValue(true);
                }
                if (_this.getAccessRight2[i].LinkID == 22) {
                    _this.UserForm.controls['chkAllUMRN'].setValue(true);
                }
                if (_this.getAccessRight2[i].LinkID == 25) {
                    //var ids = "25";
                    var ids = _this.getAccessRight2[i].LinkID;
                    document.getElementById("" + ids + "").checked = true;
                }
                if (_this.getAccessRight2[i].LinkID == 26) {
                    //  var ids = "26";
                    var ids = _this.getAccessRight2[i].LinkID;
                    document.getElementById("" + ids + "").checked = true;
                }
                if (_this.getAccessRight2[i].LinkID == 27) {
                    // var ids = "27";
                    var ids = _this.getAccessRight2[i].LinkID;
                    document.getElementById("" + ids + "").checked = true;
                }
                if (_this.getAccessRight2[i].LinkID == 28) {
                    // var ids = "28";
                    var ids = _this.getAccessRight2[i].LinkID;
                    document.getElementById("" + ids + "").checked = true;
                }
            }
        });
        document.getElementById("btnSave").removeAttribute("disabled");
        document.getElementById("btnEdit").setAttribute("disabled", "disabled");
        document.getElementById("btnNew").setAttribute("disabled", "disabled");
        document.getElementById("btnBack").removeAttribute("disabled");
        document.getElementById('divSearch').hidden = true;
        document.getElementById('btnExport').hidden = true;
        this.tableid = false;
        this.formid = true;
    };
    UserComponent.prototype.bankValidationChange = function () {
        if (this.UserForm.controls['bankval'].value == 0) {
            this.UserForm.controls['bankval'].setValue(this.bankvalUsercount);
            alert('Value should Be Greater Than 0');
        }
        else {
            if ((this.UserForm.controls['bankval'].value) > (this.bankvalUsercount)) {
                this.UserForm.controls['bankval'].setValue("");
                alert("Max Bank Validation count for Corporate Is :  " + this.bankvalUsercount);
                this.UserForm.controls['bankval'].setValue(this.bankvalUsercount);
            }
        }
    };
    UserComponent.prototype.accountValidationChange = function () {
        if (this.UserForm.controls['accountval'].value == 0) {
            this.UserForm.controls['accountval'].setValue(this.AcvalUsercount);
            alert('Value should Be Greater Than 0');
        }
        else {
            if ((this.UserForm.controls['accountval'].value) > (this.AcvalUsercount)) {
                this.UserForm.controls['accountval'].setValue("");
                alert("Max Bank Validation count for Corporate Is :  " + this.AcvalUsercount);
                this.UserForm.controls['accountval'].setValue(this.AcvalUsercount);
            }
        }
    };
    UserComponent.prototype.setClickedRow = function (User) {
        var Currentrowid = this.UserForm.value;
        this.Userid = User.UserId;
        this.Temp = 2;
        document.getElementById("btnEdit").removeAttribute("disabled");
    };
    UserComponent.prototype.checkLinks = function (data) {
        var ids = data.LinkID;
        if (document.getElementById(ids).checked == true) {
            this.checkbulkuploadlink.push(ids);
        }
        else {
            this.checkbulkuploadlink.pop();
        }
        //for (var i = 0; i < this.checkbulkuploadlink.length; i++) {
        //    //this.UserForm.controls['chkbulkuploadlink'].setValue(this.checkbulkuploadlink[i]);
        //   this.UserForm.setControl('chkbulkuploadlink', this.formBuilder.array(this.checkbulkuploadlink || []));
        //}
    };
    UserComponent.prototype.checkVideoLinks = function (data) {
        var ids1 = data.LinkID;
        if (document.getElementById(ids1).checked == true) {
            this.chkvideolink.push(ids1);
        }
        else {
            this.chkvideolink.pop();
        }
        //for (var i = 0; i < this.chkvideolink.length; i++) {
        //   // this.UserForm.controls['chkvideolink'].setValue(this.chkvideolink[i]);
        //   this.UserForm.setControl('chkvideolink', this.formBuilder.array(this.chkvideolink || []));
        //}
    };
    UserComponent.prototype.download = function () {
        var _this = this;
        var item = JSON.parse(sessionStorage.getItem('User'));
        this.userservice.getUserReport(item.ReferenceId).subscribe(function (data) {
            _this.userreport = data.Table;
            var csvData = _this.ConvertToCSV(JSON.stringify(_this.userreport));
            var a = document.createElement("a");
            a.setAttribute('style', 'display:none;');
            document.body.appendChild(a);
            var blob = new Blob([csvData], { type: 'text/csv' });
            var url = window.URL.createObjectURL(blob);
            a.href = url;
            a.download = 'User_Results.csv'; /* your file name*/
            a.click();
            return 'success';
        });
    };
    UserComponent.prototype.ConvertToCSV = function (objArray) {
        this.HeaderArray = {
            Srno: "Sr No.", UserName: "User Name", EmailId: "Email ID", PhoneNo: "Phone Number",
            Type: "Type", Status: "Status"
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
    UserComponent.prototype.checkSingleUser = function (data) {
        var id = data.UserId;
        if (document.getElementById(id).checked == true) {
            this.chkuserlist.push(id);
        }
        else {
            this.chkuserlist.splice(id);
            document.getElementById('chkalluserlist').checked = false;
        }
    };
    UserComponent.prototype.getUserlist = function () {
        var userdata = [];
        for (var i = 0; i < this.chkuserlist.length; i++) {
            userdata.push(this.chkuserlist[i]);
        }
        this.UserForm.controls['nachuser'].setValue(userdata);
        this.showModal = false;
        this.chkuserlist = [];
    };
    UserComponent.prototype.chkAllUser = function (event) {
        if (event.target.checked == true) {
            this.IsViewAll = 1;
            this.lblalluser = true;
        }
        else {
            this.IsViewAll = 0;
            this.lblalluser = false;
        }
    };
    UserComponent = tslib_1.__decorate([
        Component({
            selector: 'app-user',
            templateUrl: './user.component.html',
            styleUrls: ['./user.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [FormBuilder, UserServiceService])
    ], UserComponent);
    return UserComponent;
}());
export { UserComponent };
//# sourceMappingURL=user.component.js.map