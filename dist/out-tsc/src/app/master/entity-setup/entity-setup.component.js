import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { EntitySetupServiceService } from '../../services/enity_setup/entity-setup-service.service';
var EntitySetupComponent = /** @class */ (function () {
    function EntitySetupComponent(ESService, formBuilder) {
        this.ESService = ESService;
        this.formBuilder = formBuilder;
        this.MainGideDiv = true;
        this.EntityFormDiv = false;
        this.Preloader = true;
        this.EMandateMode = false;
        this.NetBankingTab = false;
        this.DebitCardTab = false;
        this.AadhaarCardTab = false;
        this.ActivePaymentModeTab = false;
        this.PhysicalTab = false;
        this.IsThirdTransactionTab = false;
        this.isSelected = false;
        this.IsValidationCountEnableTab = false;
        this.RecheckTab = false;
    }
    EntitySetupComponent.prototype.ngOnInit = function () {
        this.EntitySetupForm = this.formBuilder.group({
            Code: [''],
            EntityName: [''],
            AppID: [''],
            MerchantKey: [''],
            Name: [''],
            Email: [''],
            MobileNo: [''],
            Address: [''],
            Country: [''],
            State: [''],
            City: [''],
            PinCode: [''],
            UserName: [''],
            EntityBCode: [''],
            IsEMandate: [''],
            IsOverPrintMandate: [''],
            NetBankingCh: [''],
            DebitCardCh: [''],
            AadhaarCardCh: [''],
            ActivePaymentModeCh: [''],
            IsPhysicalMandateCh: [''],
            IsThirdTransactionCh: [''],
            IsValidationCountEnableCh: [''],
            recheckthepresentmentfileCh: [''],
            SB_Ch: [''],
            CA_Ch: [''],
            CC_Ch: [''],
            SB_NRE_Ch: [''],
            SB_NRO_Ch: [''],
            Other_Ch: [''],
            IsSendEmail: [''],
            IsRefNumerc: [''],
            IsShowMandateMode: [''],
            ISTodateMandatoryEnach_Ch: [''],
            chkIsZipSure_Ch: [''],
            chkIsAllowEManadte_Ch: [''],
            chkIsRefrence2Mandatory: [''],
            IsRefCheck_Ch: [''],
            Cash_Ch: [''],
            Cheque_Ch: [''],
            DemandDraft_Ch: [''],
            Electronic_Ch: ['']
        });
        this.Preloader = false;
        this.BindCountryAndBank();
        this.BingGrid();
    };
    EntitySetupComponent.prototype.BindCountryAndBank = function () {
        var _this = this;
        this.ESService.BindCountryAndBank().subscribe(function (data) {
            _this.CountryData = data.Table;
            _this.BankData = data.Table1;
            _this.EntityBusinessCodeData = data.Table2;
        });
    };
    EntitySetupComponent.prototype.CountryFunction = function (CountryId) {
    };
    EntitySetupComponent.prototype.BingGrid = function () {
        var _this = this;
        this.Preloader = true;
        this.ESService.BingGrid().subscribe(function (data) {
            _this.Preloader = false;
            _this.MainGridData = data.Table;
        });
    };
    EntitySetupComponent.prototype.NewFun = function () {
        this.MainGideDiv = false;
        this.EntityFormDiv = true;
    };
    EntitySetupComponent.prototype.BackFun = function () {
        this.MainGideDiv = true;
        this.EntityFormDiv = false;
    };
    Object.defineProperty(EntitySetupComponent.prototype, "AllFields", {
        get: function () { return this.EntitySetupForm.controls; },
        enumerable: true,
        configurable: true
    });
    EntitySetupComponent.prototype.IsEMandateFun = function () {
        if (this.AllFields.IsEMandate.value == true) {
            this.EMandateMode = true;
        }
        else {
            this.EMandateMode = false;
        }
    };
    EntitySetupComponent.prototype.NetBankingFun = function () {
        if (this.AllFields.NetBankingCh.value == true) {
            this.NetBankingTab = true;
        }
        else {
            this.NetBankingTab = false;
        }
    };
    EntitySetupComponent.prototype.DebitCardFun = function () {
        if (this.AllFields.DebitCardCh.value == true) {
            this.DebitCardTab = true;
        }
        else {
            this.DebitCardTab = false;
        }
    };
    EntitySetupComponent.prototype.AadhaarCardFun = function () {
        if (this.AllFields.AadhaarCardCh.value == true) {
            this.AadhaarCardTab = true;
        }
        else {
            this.AadhaarCardTab = false;
        }
    };
    EntitySetupComponent.prototype.ActivePaymentModeFun = function () {
        if (this.AllFields.ActivePaymentModeCh.value == true) {
            this.ActivePaymentModeTab = true;
        }
        else {
            this.ActivePaymentModeTab = false;
        }
    };
    EntitySetupComponent.prototype.IsPhysicalMandateFun = function () {
        if (this.AllFields.IsPhysicalMandateCh.value == true) {
            this.PhysicalTab = true;
        }
        else {
            this.PhysicalTab = false;
        }
    };
    EntitySetupComponent.prototype.IsThirdTransactionFun = function () {
        if (this.AllFields.IsThirdTransactionCh.value == true) {
            this.IsThirdTransactionTab = true;
        }
        else {
            this.IsThirdTransactionTab = false;
        }
    };
    EntitySetupComponent.prototype.selectallFun = function (event) {
        if (event.target.checked) {
            this.isSelected = true;
        }
        else {
            this.isSelected = false;
        }
    };
    EntitySetupComponent.prototype.IsValidationCountEnableFun = function () {
        if (this.AllFields.IsValidationCountEnableCh.value == true) {
            this.IsValidationCountEnableTab = true;
        }
        else {
            this.IsValidationCountEnableTab = false;
        }
    };
    EntitySetupComponent.prototype.RecheckthepresentmentfileFun = function () {
        if (this.AllFields.IsValidationCountEnableCh.value == true) {
            this.RecheckTab = true;
        }
        else {
            this.RecheckTab = false;
        }
    };
    EntitySetupComponent.prototype.SaveFun = function () {
        var data = this.EntitySetupForm.value;
        this.ESService.SaveData(data).subscribe(function (data) {
            console.log(data);
        });
    };
    EntitySetupComponent = tslib_1.__decorate([
        Component({
            selector: 'app-entity-setup',
            templateUrl: './entity-setup.component.html',
            styleUrls: ['./entity-setup.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [EntitySetupServiceService, FormBuilder])
    ], EntitySetupComponent);
    return EntitySetupComponent;
}());
export { EntitySetupComponent };
//# sourceMappingURL=entity-setup.component.js.map