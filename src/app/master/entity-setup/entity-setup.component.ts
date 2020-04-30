import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { EntitySetupServiceService } from '../../services/enity_setup/entity-setup-service.service';
import { BindCountry } from '../../../models/entity_setup/bind-country';
import { BindBank } from '../../../models/entity_setup/bind-bank';
import { EntityBusinessCode } from '../../../models/entity_setup/entity-business-code';
import { MainGrid } from '../../../models/entity_setup/main-grid';
import { count } from 'rxjs/operators';

@Component({
    selector: 'app-entity-setup',
    templateUrl: './entity-setup.component.html',
    styleUrls: ['./entity-setup.component.css']
})
export class EntitySetupComponent implements OnInit {
    CountryData: BindCountry;
    BankData: BindBank;
    EntityBusinessCodeData: EntityBusinessCode;
    MainGridData: MainGrid;
    MainGideDiv = true;
    EntityFormDiv = false;
    EntitySetupForm: FormGroup;
    Preloader: boolean = true;
    EMandateMode: boolean = false;
    NetBankingTab: boolean = false;
    DebitCardTab: boolean = false;
    AadhaarCardTab: boolean = false;
    ActivePaymentModeTab: boolean = false;
    PhysicalTab: boolean = false;
    IsThirdTransactionTab: boolean = false;
    isSelected: boolean = false;
    IsValidationCountEnableTab: boolean = false;
    RecheckTab: boolean = false;

    constructor(private ESService: EntitySetupServiceService, private formBuilder: FormBuilder) { }

    ngOnInit() {
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
    }

    BindCountryAndBank() {
        this.ESService.BindCountryAndBank().subscribe(
            (data) => {
                this.CountryData = data.Table;
                this.BankData = data.Table1;
                this.EntityBusinessCodeData = data.Table2;
            });
    }
    CountryFunction(CountryId) {

    }
    BingGrid() {
        this.Preloader = true;
        this.ESService.BingGrid().subscribe(
            (data) => {
                this.Preloader = false;
                this.MainGridData = data.Table;
            });
    }
    NewFun() {
        this.MainGideDiv = false;
        this.EntityFormDiv = true;
    }
    BackFun() {
        this.MainGideDiv = true;
        this.EntityFormDiv = false;
    }
    get AllFields() { return this.EntitySetupForm.controls; }

    IsEMandateFun() {
        if (this.AllFields.IsEMandate.value == true) {
            this.EMandateMode = true;
        }
        else {
            this.EMandateMode = false;
        }
    }
    NetBankingFun() {
        if (this.AllFields.NetBankingCh.value == true) {
            this.NetBankingTab = true;
        }
        else {
            this.NetBankingTab = false;
        }
    }
    DebitCardFun() {
        if (this.AllFields.DebitCardCh.value == true) {
            this.DebitCardTab = true;
        }
        else {
            this.DebitCardTab = false;
        }
    }
    AadhaarCardFun() {
        if (this.AllFields.AadhaarCardCh.value == true) {
            this.AadhaarCardTab = true;
        }
        else {
            this.AadhaarCardTab = false;
        }
    }
    ActivePaymentModeFun() {
        if (this.AllFields.ActivePaymentModeCh.value == true) {
            this.ActivePaymentModeTab = true;
        }
        else {
            this.ActivePaymentModeTab = false;
        }
    }
    IsPhysicalMandateFun() {
        if (this.AllFields.IsPhysicalMandateCh.value == true) {
            this.PhysicalTab = true;
        }
        else {
            this.PhysicalTab = false;
        }
    }
    IsThirdTransactionFun() {
        if (this.AllFields.IsThirdTransactionCh.value == true) {
            this.IsThirdTransactionTab = true;
        }
        else {
            this.IsThirdTransactionTab = false;
        }
    }
    selectallFun(event) {
        if (event.target.checked) {
            this.isSelected = true;
        }
        else {
            this.isSelected = false;
        }
    }
    IsValidationCountEnableFun() {
        if (this.AllFields.IsValidationCountEnableCh.value == true) {
            this.IsValidationCountEnableTab = true;
        }
        else {
            this.IsValidationCountEnableTab = false;
        }
    }
    RecheckthepresentmentfileFun() {
        if (this.AllFields.IsValidationCountEnableCh.value == true) {
            this.RecheckTab = true;
        }
        else {
            this.RecheckTab = false;
        }
    }
    SaveFun() {
        const data = this.EntitySetupForm.value;
        this.ESService.SaveData(data).subscribe(
            (data) => {
                console.log(data);
            });
    }
}
