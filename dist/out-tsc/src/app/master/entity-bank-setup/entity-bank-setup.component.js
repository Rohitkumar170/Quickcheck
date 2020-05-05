import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { EntityBankService } from '../../Services/EntityBankSetup/entity-bank.service';
var EntityBankSetupComponent = /** @class */ (function () {
    function EntityBankSetupComponent(formBuilder, entitybankservice) {
        this.formBuilder = formBuilder;
        this.entitybankservice = entitybankservice;
        this.isDisabledtext = false;
        this.htmlToAdd = "";
        this.isDisabledtextlength = false;
        this.isDisabledtextvalue = false;
        this.divlength = false;
        this.divvalue = false;
        this.divdateformat = false;
        this.isDisableddate = false;
        this.isDisableddate1 = false;
        this.isDisableddate2 = false;
        this.isDisableddate3 = false;
        this.isDisableddate4 = false;
        this.isDisableddate5 = false;
        this.isDisabledday = false;
        this.arrvalue = [];
        this.adhocarr = [];
    }
    EntityBankSetupComponent.prototype.ngOnInit = function () {
        this.Entitysetup = this.formBuilder.group({
            ddlentity: ['', Validators.required],
            ddlbank: ['', Validators.required],
            chkexcel: ['', Validators.required],
            chkcsv: ['', Validators.required],
            chkxml: ['', Validators.required],
            rdoDate: ['', Validators.required],
            presentmenttime: ['', Validators.required],
            ddlday: new FormControl(),
            ddlsequence: new FormControl(),
            ddldate: new FormControl(),
            txtlength: new FormControl(),
            txtvalue: new FormControl(),
            txttotalcount: new FormControl(),
            txtremaining: new FormControl(),
            txtdatepicker: new FormControl(),
            txtdatepicker1: new FormControl(),
            txtdatepicker2: new FormControl(),
            txtdatepicker3: new FormControl(),
            txtdatepicker4: new FormControl(),
            txtdatepicker5: new FormControl()
        });
        this.BindEntity();
        this.isDisableddate = true;
        this.isDisableddate1 = true;
        this.isDisableddate2 = true;
        this.isDisableddate3 = true;
        this.isDisableddate4 = true;
        this.isDisableddate5 = true;
    };
    EntityBankSetupComponent.prototype.isFieldValid = function (field) {
        return !this.Entitysetup.get(field).valid && this.Entitysetup.get(field).touched;
    };
    EntityBankSetupComponent.prototype.displayFieldCss = function (field) {
        return {
            'validate': this.isFieldValid(field),
        };
    };
    EntityBankSetupComponent.prototype.BindEntity = function () {
        var _this = this;
        this.entitybankservice.getEntity().subscribe(function (data) {
            _this.entity = data.Table;
        });
    };
    EntityBankSetupComponent.prototype.BindBank = function () {
        var _this = this;
        var EntityId = this.Entitysetup.value.ddlentity;
        console.log(this.Entitysetup.value.ddlentity);
        this.entitybankservice.getBank(EntityId).subscribe(function (data) {
            _this.bank = data.Table;
        });
    };
    EntityBankSetupComponent.prototype.DataCheck = function () {
        var flag = 0;
        if (this.Entitysetup.value.ddlsequence != '') {
            if (this.Entitysetup.value.ddlsequence == 0) {
                document.getElementById('ddlsequence').classList.add('validate');
                flag = 1;
            }
            if (this.Entitysetup.value.ddlsequence == 1) {
                if (this.Entitysetup.value.txtlength == '') {
                    document.getElementById('txtlength').classList.add('validate');
                    flag = 1;
                }
                else {
                    document.getElementById('txtlength').classList.remove('validate');
                }
                if (this.Entitysetup.value.ddlsequence == 2) {
                    if (this.Entitysetup.value.txtvalue == '') {
                        document.getElementById('txtvalue').classList.add('validate');
                        flag = 1;
                    }
                    else {
                        document.getElementById('txtvalue').classList.remove('validate');
                    }
                }
                if (this.Entitysetup.value.ddlsequence == 3) {
                    if (this.Entitysetup.value.ddldate == 0) {
                        document.getElementById('ddldate').classList.add('validate');
                        flag = 1;
                    }
                    else {
                        document.getElementById('ddldate').classList.remove('validate');
                    }
                }
                if (this.Entitysetup.value.ddlsequence == 4) {
                    if (this.Entitysetup.value.txtvalue == '') {
                        document.getElementById('txtvalue').classList.add('validate');
                        flag = 1;
                    }
                    else {
                        document.getElementById('txtvalue').classList.remove('validate');
                    }
                    if (this.Entitysetup.value.txtlength == '') {
                        document.getElementById('txtlength').classList.add('validate');
                        flag = 1;
                    }
                    else {
                        document.getElementById('txtlength').classList.remove('validate');
                    }
                }
                if (this.Entitysetup.value.ddlsequence == 5) {
                    if (this.Entitysetup.value.txtlength == '') {
                        document.getElementById('txtlength').classList.add('validate');
                        flag = 1;
                    }
                    else {
                        document.getElementById('txtlength').classList.remove('validate');
                    }
                }
            }
            if (this.RemainingCount == 0) {
                flag = 1;
                alert('You can not add more than total length!');
            }
            if (this.Entitysetup.value.ddlsequence == 1 || this.Entitysetup.value.ddlsequence == 4) {
                var length = this.Entitysetup.value.txtlength;
                var value = this.Entitysetup.value.txtvalue.length;
                if (length > 0 && value > 0) {
                    if (value != length) {
                        flag = 1;
                        //alert('length and value length should be equal');
                        alert('Total Length should be equal to length of selected items!!!');
                    }
                }
            }
        }
        if (this.Entitysetup.value.txttotalcount == '') {
            document.getElementById('txttotalcount').classList.add('validate');
            flag = 1;
        }
        if (flag == 1) {
            return false;
        }
        else {
            return true;
        }
    };
    EntityBankSetupComponent.prototype.tblDataBind = function () {
        var RemainingCount = 0;
        if (this.DataCheck() == true) {
            if (this.RemainingCount == '') {
                RemainingCount = this.Entitysetup.value.txttotalcount;
            }
            else {
                RemainingCount = this.RemainingCount;
            }
            if (this.Entitysetup.value.ddlsequence == 3) {
                this.sequence = 'Date' + "__" + this.SelectedSequence;
                var result = RemainingCount - this.SelectedSequence.length;
                this.RemainingCount = result;
            }
            else if (this.Entitysetup.value.ddlsequence == 5) {
                this.sequence = 'Increment' + "__" + this.Entitysetup.value.txtvalue;
                var result = RemainingCount - this.Entitysetup.value.txtlength;
                this.RemainingCount = result;
            }
            //Avinash
            else {
                this.sequence = this.Entitysetup.value.txtvalue;
                var result = RemainingCount - this.Entitysetup.value.txtlength;
                this.RemainingCount = result;
            }
            if (this.Entitysetup.value.txttotalcount == this.RemainingCount) {
                this.isDisabledtext = false;
            }
            else {
                this.isDisabledtext = true;
            }
            this.Entitysetup.controls['txtlength'].setValue('');
            this.Entitysetup.controls['txtvalue'].setValue('');
            this.Entitysetup.controls['ddlsequence'].setValue(0);
            this.Entitysetup.controls['ddldate'].setValue(0);
            this.arrvalue.push(this.sequence);
        }
        else {
        }
    };
    EntityBankSetupComponent.prototype.onChangesequence = function (event) {
        if (this.Entitysetup.value.ddlsequence == 2) {
            this.Entitysetup.controls['txtvalue'].setValue('1');
            this.isDisabledtextlength = true;
            this.divdateformat = false;
            this.divlength = true;
        }
        else {
            this.isDisabledtextlength = false;
            this.Entitysetup.controls['txtvalue'].setValue('');
            this.divdateformat = false;
            this.divlength = true;
        }
        if (this.Entitysetup.value.ddlsequence == 3) {
            this.divvalue = false;
            this.divdateformat = true;
            this.divlength = false;
            this.Entitysetup.controls['txtlength'].setValue('');
        }
        else {
            this.divvalue = true;
            this.divdateformat = false;
            this.divlength = true;
        }
        if (this.Entitysetup.value.ddlsequence == 6) {
            this.divvalue = false;
            this.divlength = false;
            this.isDisabledtext = true;
        }
        else {
        }
        this.Entitysetup.controls['txtvalue'].setValue('');
        var value = this.Entitysetup.value.ddlsequence;
        var items = '';
        var i = 0;
        ///this.items = this.Entitysetup.value.lblSequence.split('_');
    };
    EntityBankSetupComponent.prototype.onDateChange = function (event) {
        var flag = 0;
        this.SelectedSequence = event.target.options[event.target.options.selectedIndex].text;
        if (this.Entitysetup.value.ddldate = 0) {
            if (this.SelectedSequence.length > this.Entitysetup.value.txtremaining) {
                flag = 1;
                alert('You can not add more than total length!');
                this.Entitysetup.controls['ddldate'].setValue(0);
            }
        }
    };
    EntityBankSetupComponent.prototype.valuePress = function (e) {
        if (this.Entitysetup.value.ddlsequence == 2) {
            if (this.Entitysetup.value.txtvalue.length >= 1) {
                return false;
            }
            if ((e.which >= 48 && e.which <= 57) || (e.which >= 1 && e.which <= 26) || (e.which >= 65 && e.which <= 90) || (e.which >= 97 && e.which <= 122)) {
                return false;
            }
        }
        if (this.Entitysetup.value.txtvalue.length >= parseInt(this.Entitysetup.value.txtlength)) {
            return false;
        }
        if (this.Entitysetup.value.ddlsequence == 4) {
            if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
                return false;
            }
        }
        if (this.Entitysetup.value.ddlsequence == 1) {
            if ((e.which >= 27 && e.which <= 57) || (e.which >= 58 && e.which <= 64) || (e.which >= 91 && e.which <= 96) || (e.which >= 123 && e.which <= 126)) {
                return false;
            }
        }
    };
    EntityBankSetupComponent.prototype.dailyClick = function () {
        this.isDisableddate = false;
        this.isDisableddate1 = true;
        this.isDisableddate2 = true;
        this.isDisableddate3 = true;
        this.isDisableddate4 = true;
        this.isDisableddate5 = true;
        this.Entitysetup.controls['txtdatepicker1'].setValue('');
        this.Entitysetup.controls['txtdatepicker2'].setValue('');
        this.Entitysetup.controls['txtdatepicker3'].setValue('');
        this.Entitysetup.controls['txtdatepicker4'].setValue('');
        this.Entitysetup.controls['txtdatepicker5'].setValue('');
        this.isDisabledday = true;
        this.Entitysetup.controls['ddlday'].setValue(0);
    };
    EntityBankSetupComponent.prototype.weeklyClick = function () {
        this.isDisableddate = true;
        this.isDisableddate1 = false;
        this.isDisableddate2 = true;
        this.isDisableddate3 = true;
        this.isDisableddate4 = true;
        this.isDisableddate5 = true;
        this.Entitysetup.controls['txtdatepicker'].setValue('');
        this.Entitysetup.controls['txtdatepicker2'].setValue('');
        this.Entitysetup.controls['txtdatepicker3'].setValue('');
        this.Entitysetup.controls['txtdatepicker4'].setValue('');
        this.Entitysetup.controls['txtdatepicker5'].setValue('');
        this.isDisabledday = false;
    };
    EntityBankSetupComponent.prototype.monthlyClick = function () {
        this.isDisableddate = true;
        this.isDisableddate1 = true;
        this.isDisableddate2 = false;
        this.isDisableddate3 = true;
        this.isDisableddate4 = false;
        this.isDisableddate5 = true;
        this.Entitysetup.controls['txtdatepicker'].setValue('');
        this.Entitysetup.controls['txtdatepicker1'].setValue('');
        this.Entitysetup.controls['txtdatepicker3'].setValue('');
        this.Entitysetup.controls['txtdatepicker5'].setValue('');
        this.isDisabledday = true;
        this.Entitysetup.controls['ddlday'].setValue(0);
    };
    EntityBankSetupComponent.prototype.adhocClick = function () {
        this.isDisableddate = true;
        this.isDisableddate1 = true;
        this.isDisableddate2 = true;
        this.isDisableddate3 = false;
        this.isDisableddate4 = true;
        this.isDisableddate5 = false;
        this.Entitysetup.controls['txtdatepicker'].setValue('');
        this.Entitysetup.controls['txtdatepicker1'].setValue('');
        this.Entitysetup.controls['txtdatepicker2'].setValue('');
        this.Entitysetup.controls['txtdatepicker4'].setValue('');
        this.isDisabledday = true;
        this.Entitysetup.controls['ddlday'].setValue(0);
    };
    EntityBankSetupComponent.prototype.timePress = function (e) {
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            return false;
        }
    };
    EntityBankSetupComponent.prototype.totLength = function (e) {
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            return false;
        }
    };
    EntityBankSetupComponent.prototype.lengthPress = function (e) {
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            return false;
        }
    };
    EntityBankSetupComponent.prototype.onTotLengthchange = function () {
        var Count = this.Entitysetup.value.txttotalcount;
        this.RemainingCount = Count;
        if (this.Entitysetup.value.txttotalcount == this.RemainingCount) {
            this.isDisabledtext = false;
        }
        else if (this.Entitysetup.value.txttotalcount == "") {
            this.isDisabledtext = false;
        }
        else {
            this.isDisabledtext = true;
        }
    };
    EntityBankSetupComponent.prototype.onLengthchange = function () {
        if (parseInt(this.RemainingCount) < this.Entitysetup.value.txtlength) {
            this.Entitysetup.controls['txtlength'].setValue('');
            alert('You can not enter more than the remaining length.!');
        }
    };
    EntityBankSetupComponent.prototype.onSubmit = function () {
        if (this.Entitysetup.valid) {
            //this.sucess=true;
            var datat = this.Entitysetup.value;
            this.Savedata();
        }
        else {
            this.validateAllFormFields(this.Entitysetup);
        }
    };
    EntityBankSetupComponent.prototype.Savedata = function () {
        var item = JSON.parse(sessionStorage.getItem('User'));
        this.entitybankservice.SaveData(JSON.stringify(this.Entitysetup.value), item.UserId, this.arrvalue, this.adhocarr).subscribe(function (data) {
        });
    };
    EntityBankSetupComponent.prototype.validateAllFormFields = function (formGroup) {
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
    EntityBankSetupComponent.prototype.tbladhoc = function () {
        if (this.Entitysetup.value.txtdatepicker3 == '') {
            return;
        }
        else if (this.Entitysetup.value.txtdatepicker5 == '') {
            return;
        }
        else {
            this.adhoc = this.Entitysetup.value.txtdatepicker3 + '_' + this.Entitysetup.value.txtdatepicker5;
            this.Entitysetup.controls['txtdatepicker3'].setValue('');
            this.Entitysetup.controls['txtdatepicker5'].setValue('');
            this.adhocarr.push(this.adhoc);
        }
    };
    EntityBankSetupComponent = tslib_1.__decorate([
        Component({
            selector: 'app-entity-bank-setup',
            templateUrl: './entity-bank-setup.component.html',
            styleUrls: ['./entity-bank-setup.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [FormBuilder, EntityBankService])
    ], EntityBankSetupComponent);
    return EntityBankSetupComponent;
}());
export { EntityBankSetupComponent };
//# sourceMappingURL=entity-bank-setup.component.js.map