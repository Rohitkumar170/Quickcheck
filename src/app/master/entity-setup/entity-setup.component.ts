import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { EntitySetupServiceService } from '../../services/enity_setup/entity-setup-service.service';
import { BindCountry } from '../../../models/entity_setup/bind-country';
import { BindState } from '../../../models/entity_setup/bind-state';
import { BindCity } from '../../../models/entity_setup/bind-city';
import { BindBank } from '../../../models/entity_setup/bind-bank';
import { EditDataAny } from '../../../models/entity_setup/edit-data-any';
import { EditData1 } from '../../../models/entity_setup/edit-data1';
import { EditData2 } from '../../../models/entity_setup/edit-data2';
import { EditData3 } from '../../../models/entity_setup/edit-data3';
import { EditData4 } from '../../../models/entity_setup/edit-data4';
import { EditData5 } from '../../../models/entity_setup/edit-data5';
import { EditData6 } from '../../../models/entity_setup/edit-data6';
import { EditData7 } from '../../../models/entity_setup/edit-data7';
import { EditData8 } from '../../../models/entity_setup/edit-data8';
import { EditData9 } from '../../../models/entity_setup/edit-data9';
import { EditData10 } from '../../../models/entity_setup/edit-data10';
import { EditData11 } from '../../../models/entity_setup/edit-data11';
import { EditData12 } from '../../../models/entity_setup/edit-data12';
import { EditData13 } from '../../../models/entity_setup/edit-data13';
import { EditData14 } from '../../../models/entity_setup/edit-data14';
import { SaveResult } from '../../../models/entity_setup/save-result';
import { AllSaveData } from '../../../Models/Entity_Setup/all-Save-data';
import { EntityBusinessCode } from '../../../models/entity_setup/entity-business-code';
import { MainGrid } from '../../../models/entity_setup/main-grid';
import { count } from 'rxjs/operators';

@Component({
    selector: 'app-entity-setup',
    templateUrl: './entity-setup.component.html',
    styleUrls: ['./entity-setup.component.css']
})
export class EntitySetupComponent implements OnInit {
    AllSaveData : AllSaveData;
    EditDataAny: EditDataAny;
    EditData1 : EditData1;
    EditData2 : EditData2;
    EditData3 : EditData3;
    EditData4 : EditData4;
    EditData5 : EditData5;
    EditData6 : EditData6;
    EditData7 : EditData7;
    EditData8 : EditData8;
    EditData9 : EditData9;
    EditData10 : EditData10;
    EditData11 : EditData11;
    EditData12 : EditData12;
    EditData13 : EditData13;
    EditData14 : EditData14;
    showModalsave: boolean = false;
    SaveResultData : SaveResult;
    StateData: BindState;
    CityData: BindCity
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
    liSave: boolean = true;
    IsValidationCountEnableTab: boolean = false;
    RecheckTab: boolean = false;
    SponsorBankCodeArray = [];
    SponsorBankCodeArrayData = [];
    //i = 0;
    count = 0;
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
    DivSponsorCode : boolean = false;
    SponsoredBankcode;
    HeaderArray ;
    AmountArray;
    isSelectedCountry : boolean = true;
    isSelectedState : boolean = true;
    isSelectedCity : boolean = true;
    isselectSBN : boolean=true;
    isSelectEntityBC:boolean=true;
    liDelete : boolean = true;
    liEdit: boolean=true;
    liNew : boolean=false;
    CheckedDataArray = [];
    EntityId = "";
    dtBankCode: any = [];

    constructor(private ESService: EntitySetupServiceService, private formBuilder: FormBuilder) { }
    hide() {
       
        this.showModalsave = false;
    }
    ngOnInit() {
        this.EntitySetupForm = this.formBuilder.group({
            Code: [''],
            EntityName: ['', Validators.required],
            AppID: ['', Validators.required],
            MerchantKey: [''],
            Name: [''],
            Email: [''],
            MobileNo: [''],
            Address: ['', Validators.required],
            Country: ['', Validators.required],
            State: ['', Validators.required],
            City: ['', Validators.required],
            PinCode: [''],
            UserName: ['', Validators.required],
            EntityBCode: ['', Validators.required],
            IsEMandate: [false, Validators.required],
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
            UntillCancelled_Ch: [''],
            FileName1: [''],
            FileName2: [''],
            FileName3: [''],
            FileName4: [''],
            FileName5: [''],
            FileName6: [''],
            InstructingMenmerId : [''],
            Type : [''],
            DebitType: [''],
            ToDebit: [''],
            FrequencyType: [''],
            Amount : [''],
            ISEnableCancelUser : [''],
            CheckerRequire:[''],
            ValidationByCustomer_Ch : [''],
            ValidationByCorporate_Ch:[''],
            OCRCode_Ch: [''],
            QRCode_Ch: [''],
            Logo_Ch: [''],
            PhoneNumber_ch: [''],
            E_mailID_Ch : [''],
            ValidateThroughEmail_Ch : [''],
            Manual_Ch: [''],
            SMS_Ch:[''],
            DebitValidateThroughEmail : [''],
            DebitManual : [''],
            DebitSMS : [''],
            AadhaarValidateThroughEmail : [''],
            AadhaarManual : [''],
            AadhaarSMS :[''],
            Accountvalidation_Ch: [''],
            Presentment_Ch: [''],
            AmountBank: [''],
            AmountOfBank: ['']

        });
        this.Preloader = false;
        this.BindCountryAndBank();
        this.BingGrid();
    }

    isNumber(evt): boolean {
        evt = (evt) ? evt : window.event;
        var charCode = (evt.which) ? evt.which : evt.keyCode;

        if (charCode > 31 && (charCode != 46 && (charCode < 48 || charCode > 57))) {
            return false;
        } else {
            return true;
        }
    }
    chkEmail() {
        let email = ((document.getElementById("txtEmailId") as HTMLInputElement).value);
        let regex = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+\.)+[a-zA-Z0-9.-]{2,4}$/;
        if (regex.test(email) != true) {
            this.EntitySetupForm.controls['Email'].setValue("");
            document.getElementById("txtEmailId").classList.add('validate');
            document.getElementById("txtEmailId").setAttribute("placeholder", "Invalid-Email");
        }
        else {
            document.getElementById("txtEmailId").classList.remove('validate');
        }
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
        this.ESService.BindState(CountryId).subscribe(
            (data) => {
                this.StateData = data.Table;
                this.isSelectedState = true;
            });
            
    }
    StateFun(StateId){
        this.ESService.BindCity(StateId).subscribe(
            (data) => {
                this.CityData = data.Table;
                this.isSelectedCity = true;
            });
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
        this.EntitySetupForm.reset();
        this.EntityId = "N";
        this.MainGideDiv = false;
        this.EntityFormDiv = true;
        this.liBack = false;
        this.liSave = false;
        this.liEdit = true;
        this.liNew = true;
        this.liDelete = true;
    }
    BackFun() {
        this.EntitySetupForm.reset();
        this.MainGideDiv = true;
        this.EntityFormDiv = false;
        this.liBack = true;
        this.liSave = true;
        this.liEdit = true;
        this.liNew = false;
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
        //alert(this.AllFields.ActivePaymentModeCh.value);
        if (this.AllFields.ActivePaymentModeCh.value == true) {
           // alert("true");
            this.ActivePaymentModeTab = true;
           
        }
        else {
           // alert("false");
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
     if (this.EntitySetupForm.valid) {        
         let AllData=new AllSaveData();
         AllData = this.EntitySetupForm.value;
        let item = JSON.parse(sessionStorage.getItem('User'));           
        AllData.UserId = item.UserId;
        console.log(AllData.UserId);  
        AllData.dtBankCode = this.dtBankCode;
       // for(var i=0; i<this.dtBankCode.length; i++){
           // AllData.dtBankCode.push(this.dtBankCode[i]);
           // }
        console.log(AllData.dtBankCode);       
        this.ESService.SaveData(JSON.stringify(AllData),this.EntityId).subscribe(
            (data) => {
               
                if(data.Table.length == 0){
                    this.SaveResultData = data.Table1;
                    if(this.SaveResultData[0].Result== 1){
                        this.showModalsave = true;
                        this.BingGrid();
                        this.MainGideDiv = true;
                        this.EntityFormDiv = false;
                        this.liBack = true;
                        this.liSave = true;
                        this.liEdit = true;
                        this.liNew = false;
                        this.liDelete = true;
                    }
                    else {
                    if(this.SaveResultData[0].Result == '' || this.SaveResultData[0].Result==null){                
                        alert("error");                
                    }
                }
            }
                   else {
                    if(data.Table[0].Result== -1){
                       alert("User already Exist");
                    }
                       
                   } 
            });
        }
        else{
            this.validateAllFormFields(this.EntitySetupForm);
        }
       
    }

    validateAllFormFields(formGroup: FormGroup) {
        Object.keys(formGroup.controls).forEach(field => {
            const control = formGroup.get(field);
            if (control instanceof FormControl) {
                control.markAsTouched({ onlySelf: true });
            } else if (control instanceof FormGroup) {
                this.validateAllFormFields(control);
            }
        });
    }
    displayFieldCss(field: string) {
        return {
            'validate': this.isFieldValid(field),
        };
    }
    isFieldValid(field: string) {
        return !this.EntitySetupForm.get(field).valid && this.EntitySetupForm.get(field).touched;
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
        this.DivSponsorCode=true;
        this.SponsorBankCodeArrayData.push( this.AllFields.SponsoredBankCode.value);
        //this.SponsoredBankcode = this.AllFields.SponsoredBankCode.value;
        this.SponsorBankCodeArray.push(this.AllFields.SponsoredBankName.value,this.AllFields.SponsoredBankCode.value
           ,this.AllFields.UtilityCode.value,this.AllFields.IFSC.value,this.AllFields.AccountNumber.value ); 

           var Data = "";
        Data += this.AllFields.SponsoredBankName.value;
        Data += ",";
        Data += this.AllFields.SponsoredBankCode.value;
        Data += ",";
        Data += this.AllFields.UtilityCode.value;
        Data += ",";
        Data += this.AllFields.IFSC.value;
        Data += ",";
        Data += this.AllFields.AccountNumber.value;
        this.dtBankCode.push(Data);

        //this.SponsorBankCodeArray.push(this.AllFields.SponsoredBankCode.value);  
        //this.SponsorBankCodeArray.push(this.AllFields.UtilityCode.value); 
        //this.SponsorBankCodeArray.push(this.AllFields.IFSC.value);
        //this.SponsorBankCodeArray.push(this.AllFields.AccountNumber.value);
        console.log(this.SponsorBankCodeArray);
    }
    ConvertToCSV(objArray) {
        this.HeaderArray = {
            SrNo: "Sr No.", Code: "Code", Name: "Name", SponsorBankName: "Sponsor Bank Name"    
        }
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
                    if (line != '') line += ','

                    line += this.HeaderArray[index];
                }
                str += line + '\r\n';
                var line = '';
            }           
            for (var index in array[i]) {
                if (line != '') line += ','

                line += array[i][index];
            }
            str += line + '\r\n';
        }
        return str;
    }
    download() {
            var csvData = this.ConvertToCSV(JSON.stringify(this.MainGridData));
            var a = document.createElement("a");
            a.setAttribute('style', 'display:none;');
            document.body.appendChild(a);
            var blob = new Blob([csvData], { type: 'text/csv' });
            var url = window.URL.createObjectURL(blob);
            a.href = url;
            a.download = 'User_Results.csv';/* your file name*/
            a.click();
            return 'success';
    }
    AddAmountArray(){
        alert("Add");
        this.AmountArray.push(this.AllFields.AmountBank.value);
        this.AmountArray.push(this.AllFields.AmountOfBank.value); 
        console.log(this.AmountArray);
    }
   
    doubleClick(data: any) {        
       // alert(data.EntityId);
       this.EntityId = "";
       this.EntityId = data.EntityId;
        this.ESService.EditFun(data.EntityId).subscribe(
            (data) => {
                this.EditData1 = data.Table;
                this.EditData2 = data.Table1;
                this.EditData3 = data.Table2;
                this.EditData4 = data.Table3;
                this.EditDataAny = data.Table4;
                this.EditData5 = data.Table5;
                this.EditData6 = data.Table6;
                this.EditData7 = data.Table7;
                this.EditData8 = data.Table8;
                this.EditData9 = data.Table9;
                this.EditData10 = data.Table10;
                this.EditData11 = data.Table11;
                this.EditData12 = data.Table12;
                this.EditData13 = data.Table13;
                this.EditData14 = data.Table14;
                console.log(data);
                console.log(this.EditData14);
                console.log(this.EditDataAny);
                console.log(this.EditData5);

                this.EntitySetupForm.reset();
                this.EntitySetupForm.controls['Address'].setValue(this.EditData3[0].Address);
                this.EntitySetupForm.controls['Email'].setValue(this.EditData3[0].Email);
                this.EntitySetupForm.controls['MobileNo'].setValue(this.EditData3[0].Mobile);
                this.EntitySetupForm.controls['PinCode'].setValue(this.EditData3[0].PinCode);

                this.isSelectedCountry = false;
                this.isSelectedState = false;
                this.isSelectedCity = false; 
                this.CountryFunction(this.EditData3[0].CountryId); 
                this.StateFun(this.EditData3[0].StateId);             
                this.EntitySetupForm.controls['Country'].setValue(this.EditData3[0].CountryId);
                this.EntitySetupForm.controls['State'].setValue(this.EditData3[0].StateId);
                this.EntitySetupForm.controls['City'].setValue(this.EditData3[0].CityId);

                this.EntitySetupForm.controls['UserName'].setValue(this.EditData4[0].UserName);
                this.EntitySetupForm.controls['Code'].setValue(this.EditData1[0].Code);
                this.EntitySetupForm.controls['AppID'].setValue(this.EditData1[0].AppId);
                this.EntitySetupForm.controls['MerchantKey'].setValue(this.EditData1[0].EnitityMarchantKey);
                this.EntitySetupForm.controls['EntityName'].setValue(this.EditData1[0].Name);
                this.EntitySetupForm.controls['Name'].setValue(this.EditData1[0].ContactPerson);
                this.EntitySetupForm.controls['FixedAmount_Ch'].setValue(this.EditData7[0].isenable);
                this.EntitySetupForm.controls['MaximumAmount_Ch'].setValue(this.EditData7[1].isenable);
                if(this.EditData7[0].isenable == true){ this.FixedAmount_Radio = false}
                if(this.EditData7[1].isenable == true){ this.MaximumAmount_Radio = false}
                this.EntitySetupForm.controls['Monthly_Ch'].setValue(this.EditData8[0].isenable);
                this.EntitySetupForm.controls['Quarterly_Ch'].setValue(this.EditData8[1].isenable);
                this.EntitySetupForm.controls['Half_Yearly_Ch'].setValue(this.EditData8[2].isenable);
                this.EntitySetupForm.controls['Yearly_Ch'].setValue(this.EditData8[3].isenable);
                this.EntitySetupForm.controls['Presented_Ch'].setValue(this.EditData8[4].isenable);
                if(this.EditData8[0].isenable == true){ this.Monthly_Radio = false}
                if(this.EditData8[1].isenable == true){ this.Quarterly_Radio = false}
                if(this.EditData8[2].isenable == true){ this.Half_Yearly_Radio = false}
                if(this.EditData8[3].isenable == true){ this.Yearly_Radio = false}
                if(this.EditData8[4].isenable == true){ this.Presented_Radio = false}
                this.EntitySetupForm.controls['To_Ch'].setValue(this.EditData9[0].isenable);
                this.EntitySetupForm.controls['UntillCancelled_Ch'].setValue(this.EditData9[1].isenable);
                if(this.EditData9[0].isenable == true){ this.To_Radio = false}
                if(this.EditData9[1].isenable == true){ this.UntillCancelled_Radio = false}
                this.EntitySetupForm.controls['SB_Ch'].setValue(this.EditData10[0].isenable);
                this.EntitySetupForm.controls['CA_Ch'].setValue(this.EditData10[1].isenable);
                this.EntitySetupForm.controls['CC_Ch'].setValue(this.EditData10[2].isenable);
                this.EntitySetupForm.controls['SB_NRE_Ch'].setValue(this.EditData10[3].isenable);
                this.EntitySetupForm.controls['SB_NRO_Ch'].setValue(this.EditData10[4].isenable);
                this.EntitySetupForm.controls['Other_Ch'].setValue(this.EditData10[5].isenable);
                if(this.EditData10[0].isenable == true){ this.SB_Radio = false}
                if(this.EditData10[1].isenable == true){ this.CA_Radio = false}
                if(this.EditData10[2].isenable == true){ this.CC_Radio = false}
                if(this.EditData10[3].isenable == true){ this.SB_NRE_Radio = false}
                if(this.EditData10[4].isenable == true){ this.SB_NRO_Radio = false}
                if(this.EditData10[5].isenable == true){ this.Other_Radio = false}
                this.EntitySetupForm.controls['IsEMandate'].setValue(this.EditData1[0].IsEmandate);
                if(this.EditData13[0].Emandate == true){ this.EMandateMode = true}
                this.EntitySetupForm.controls['NetBankingCh'].setValue(this.EditData13[0].NetBanking);
                if(this.EditData13[0].NetBanking == true){ this.NetBankingTab = true}
                this.EntitySetupForm.controls['ValidateThroughEmail_Ch'].setValue(this.EditData13[0].NetValidateMail);
                this.EntitySetupForm.controls['Manual_Ch'].setValue(this.EditData13[0].NetManual);
                this.EntitySetupForm.controls['SMS_Ch'].setValue(this.EditData13[0].NetSMS);
                this.EntitySetupForm.controls['DebitCardCh'].setValue(this.EditData13[0].Debit);
                if(this.EditData13[0].Debit == true){ this.DebitCardTab = true}
                this.EntitySetupForm.controls['DebitValidateThroughEmail'].setValue(this.EditData13[0].DebitValidateMail);
                this.EntitySetupForm.controls['DebitManual'].setValue(this.EditData13[0].DebitManual);
                this.EntitySetupForm.controls['DebitSMS'].setValue(this.EditData13[0].DebitSMS);
                this.EntitySetupForm.controls['AadhaarCardCh'].setValue(this.EditData13[0].Aadhar);
                if(this.EditData13[0].Aadhar == true){ this.AadhaarCardTab = true}
                this.EntitySetupForm.controls['AadhaarValidateThroughEmail'].setValue(this.EditData13[0].AadharValidateMail);
                this.EntitySetupForm.controls['AadhaarManual'].setValue(this.EditData13[0].AadharManual);
                this.EntitySetupForm.controls['AadhaarSMS'].setValue(this.EditData13[0].AadharSMS);
                this.EntitySetupForm.controls['IsPhysicalMandateCh'].setValue(this.EditData13[0].Physical);
                if(this.EditData13[0].Physical == true){ this.PhysicalTab = true}
                this.EntitySetupForm.controls['ValidationByCustomer_Ch'].setValue(this.EditData13[0].ValidateByCustomer);
                this.EntitySetupForm.controls['ValidationByCorporate_Ch'].setValue(this.EditData13[0].ValidateByCooperate);
                this.EntitySetupForm.controls['OCRCode_Ch'].setValue(this.EditData13[0].OCR);
                this.EntitySetupForm.controls['Presentment_Ch'].setValue(this.EditData13[0].IsPresentment);
                this.EntitySetupForm.controls['Logo_Ch'].setValue(this.EditData13[0].PrintLogo);
                this.EntitySetupForm.controls['QRCode_Ch'].setValue(this.EditData13[0].PrintQR);
                this.EntitySetupForm.controls['E_mailID_Ch'].setValue(this.EditData13[0].Customeremailid);
                this.EntitySetupForm.controls['PhoneNumber_ch'].setValue(this.EditData13[0].Customerphnumber);
                this.EntitySetupForm.controls['ISEnableCancelUser'].setValue(this.EditData13[0].EnableCancelUserWise);
                this.EntitySetupForm.controls['EnableUserWise_Ch'].setValue(this.EditData13[0].EnableUserWise);
                this.EntitySetupForm.controls['Accountvalidation_Ch'].setValue(this.EditData13[0].IsAccountValidation);
                this.EntitySetupForm.controls['AcValidationAdminCount'].setValue(this.EditData1[0].AcValidationAdminCount);
                this.EntitySetupForm.controls['AcValidationUserCount'].setValue(this.EditData1[0].AcValidationUserCount);
                this.EntitySetupForm.controls['BankValidationUserCount'].setValue(this.EditData1[0].BankValidationUserCount);
                this.EntitySetupForm.controls['BankValidationAdminCount'].setValue(this.EditData1[0].BankValidationAdminCount);
                this.EntitySetupForm.controls['DebitType'].setValue(this.EditData1[0].DebitType);
                this.EntitySetupForm.controls['FrequencyType'].setValue(this.EditData1[0].FrequencyType);
                this.EntitySetupForm.controls['Type'].setValue(this.EditData1[0].PeriodType);


                this.MainGideDiv = false;
                this.EntityFormDiv = true;
                this.liBack = false;
                this.liSave = false;
                this.liEdit = true;
                this.liNew = true;
                this.liDelete = true;

            });
           
             
           
    }
    AfterEditFillForm(){
       // alert(ad);
        //this.EntitySetupForm.controls['Address'].setValue(this.AllEditData[0].Address);
    }
    CheckBoxFun(event,data){
        if (event.target.checked) {
            this.count = this.count+1;
            this.EntityId = data.EntityId;
            this.CheckedDataArray.push(data.EntityId);
        }
        else {
            this.count = this.count-1;
            this.CheckedDataArray.pop();
        }
        if(this.count == 1){
          this.liEdit = false;
          this.liDelete = false;
        }
        else if(this.count > 0 && this.count !=1 ){
            this.liEdit = true;
            this.liDelete = false;
        } 
        else{
            this.liDelete = true;
           this.liEdit = true;
        }
    }
    DeleteFun(){
        var EntityArray ="";
        
       for(let i=0;i<this.CheckedDataArray.length; i++) {
        EntityArray +=  this.CheckedDataArray[i];
        EntityArray += ",";
       }
       var jasondata = {
        "Code": EntityArray     
        }
       alert(EntityArray);


        this.ESService.DeleteFun(this.EntityId, jasondata).subscribe(
            (data) => {
            console.log(data);
            });
            alert("Delete Successfully");
            this.BingGrid();
            this.CheckedDataArray = [];
    }
}
