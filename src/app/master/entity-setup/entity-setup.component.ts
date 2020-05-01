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
    SponsorBankCodeArray = [];
    i = 0;
    liBack: boolean = true;
    SB_Radio:boolean = true;
    CA_Radio:boolean = true;
    CC_Radio:boolean = true;
    SB_NRE_Radio:boolean = true;
    SB_NRO_Radio:boolean = true;
    Other_Radio:boolean = true;
    Monthly_Radio:boolean = true;
    Quarterly_Radio:boolean = true;
    Half_Yearly_Radio:boolean = true;
    Yearly_Radio:boolean = true;
    Presented_Radio:boolean = true;
    FixedAmount_Radio:boolean = true;
    MaximumAmount_Radio:boolean = true;
    To_Radio:boolean = true; 
    UntillCancelled_Radio:boolean = true; 

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
            Electronic_Ch: [''],
            BankValidationAdminCount: [''],
            BankValidationUserCount: [''],
            AcValidationAdminCount: [''],
            AcValidationUserCount: [''],
            EnableUserWise_Ch: [''],
            SponsoredBankName: [''],
            SponsoredBankCode: [''],
            UtilityCode: [''],
            IFSC: [''],
            AccountNumber: [''],
            FixedAmount_Ch: [''],
            MaximumAmount_Ch: [''],
            Monthly_Ch:[''],
            Quarterly_Ch: [''],
            Half_Yearly_Ch: [''],
            Yearly_Ch: [''],
            Presented_Ch: [''],
            To_Ch: [''],
            UntillCancelled_Ch: ['']
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
        this.liBack = true;
    }
    BackFun() {
        this.MainGideDiv = true;
        this.EntityFormDiv = false;
        this.liBack = false;
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
        alert(this.AllFields.ActivePaymentModeCh.value);
        if (this.AllFields.ActivePaymentModeCh.value == true) {
            alert("true");
            this.ActivePaymentModeTab = true;
           
        }
        else {
            alert("false");
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
        if (this.AllFields.recheckthepresentmentfileCh.value == true) {
            this.RecheckTab = true;
        }
        else {
            this.RecheckTab = false;
        }
    }
    SaveFun() {
        const data = this.EntitySetupForm.value;
        console.log(data);
        this.ESService.SaveData(data).subscribe(
            (data) => {
                console.log(data);
            });
    }
    SB_ChFun(){
        if (this.AllFields.SB_Ch.value == true) {
            this.SB_Radio = true;
        }
        else {
            this.SB_Radio = false;
        }
    }
    CA_ChFun(){
        if (this.AllFields.CA_Ch.value == true) {
            this.CA_Radio = true;
        }
        else {
            this.CA_Radio = false;
        }
    }
    CC_ChFun(){
        if (this.AllFields.CC_Ch.value == true) {
            this.CC_Radio = true;
        }
        else {
            this.CC_Radio = false;
        }
    }
    SB_NRE_ChFun(){
        if (this.AllFields.SB_NRE_Ch.value == true) {
            this.SB_NRE_Radio = true;
        }
        else {
            this.SB_NRE_Radio = false;
        }
    }
    SB_NRO_ChFun(){
        if (this.AllFields.SB_NRO_Ch.value == true) {
            this.SB_NRO_Radio = true;
        }
        else {
            this.SB_NRO_Radio = false;
        } 
    }
    Other_ChFun(){
        if (this.AllFields.Other_Ch.value == true) {
            this.Other_Radio = true;
        }
        else {
            this.Other_Radio = false;
        } 
    }
    Monthly_ChFun(){
        if (this.AllFields.Monthly_Ch.value == true) {
            this.Monthly_Radio = true;
        }
        else {
            this.Monthly_Radio = false;
        } 
    }
    Quarterly_ChFun(){
        if (this.AllFields.Quarterly_Ch.value == true) {
            this.Quarterly_Radio = true;
        }
        else {
            this.Quarterly_Radio = false;
        }
    }
    Half_Yearly_ChFun(){
        if (this.AllFields.Half_Yearly_Ch.value == true) {
            this.Half_Yearly_Radio = true;
        }
        else {
            this.Half_Yearly_Radio = false;
        }
    }
    Yearly_ChFun(){
        if (this.AllFields.Yearly_Ch.value == true) {
            this.Yearly_Radio = true;
        }
        else {
            this.Yearly_Radio = false;
        }
    }
    Presented_ChFun(){
        if (this.AllFields.Presented_Ch.value == true) {
            this.Presented_Radio = true;
        }
        else {
            this.Presented_Radio = false;
        }
    }
    FixedAmount_ChFun(){
        if (this.AllFields.FixedAmount_Ch.value == true) {
            this.FixedAmount_Radio = true;
        }
        else {
            this.FixedAmount_Radio = false;
        }
    }
    MaximumAmount_ChFun(){
        if (this.AllFields.MaximumAmount_Ch.value == true) {
            this.MaximumAmount_Radio = true;
        }
        else {
            this.MaximumAmount_Radio = false;
        } 
    }
    To_ChFun(){
        if (this.AllFields.To_Ch.value == true) {
            this.To_Radio = true;
        }
        else {
            this.To_Radio = false;
        }   
    }
    UntillCancelled_ChFun(){
        if (this.AllFields.UntillCancelled_Ch.value == true) {
            this.UntillCancelled_Radio = true;
        }
        else {
            this.UntillCancelled_Radio = false;
        } 
    }

    SponCodBankAddFun() {
        alert("Add");
        this.i += 1;
        this.SponsorBankCodeArray.push(this.i);
        this.SponsorBankCodeArray.push(this.AllFields.SponsoredBankName); 
        this.SponsorBankCodeArray.push(this.AllFields.SponsoredBankCode);  
        this.SponsorBankCodeArray.push(this.AllFields.UtilityCode); 
        this.SponsorBankCodeArray.push(this.AllFields.IFSC);
        this.SponsorBankCodeArray.push(this.AllFields.AccountNumber);
        console.log(this.SponsorBankCodeArray);
    }
}
