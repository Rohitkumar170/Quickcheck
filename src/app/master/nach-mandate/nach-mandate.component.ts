import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { BankFormService } from '../../Services/BankForm/bank-form.service';
import {BindEntityDetails } from '../../../Models/BankForm/BindEntityDetails'; import {BindLogoImageDetails } from '../../../Models/BankForm/BindLogoImageDetails';
import {BindBankNameDetails } from '../../../Models/BankForm/BindBankNameDetails'; import {BindSponserCode } from '../../../Models/BankForm/BindSponserCode';
import {BindBankUtilityCode } from '../../../Models/BankForm/BindBankUtilityCode'; import {BindBankPaymentMode } from '../../../Models/BankForm/BindBankPaymentMode';
import { BindEntityDetailsdata } from '../../../Models/BankForm/BindEntityDetailsdata'; import { BindDebitType } from '../../../Models/BankForm/BindDebitType';
import { Bindfrequency } from '../../../Models/BankForm/Bindfrequency'; import { BindEntityPeriods } from '../../../Models/BankForm/BindEntityPeriods';
import { BindEntitydebitcredit } from '../../../Models/BankForm/BindEntitydebitcredit'; import { BindEntityCategorytype } from '../../../Models/BankForm/BindEntityCategorytype';
import { BindLogincheck } from '../../../Models/BankForm/BindLogincheck';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { endWith } from 'rxjs/operators';
import { DISABLED } from '@angular/forms/src/model';
//mport { DatePipe, KeyValuePipe } from '@angular/common';

@Component({
  selector: 'app-nach-mandate',
  templateUrl: './nach-mandate.component.html',
  styleUrls: ['./nach-mandate.component.css']
})
export class NachMandateComponent implements OnInit {
    //---------------------------------------------------------Done By all Rohit----------------------------------------------------------------------------
    NachMandate: FormGroup; Table: BindEntityDetails; Table1: BindLogoImageDetails; Table2: BindBankNameDetails; Table3: BindSponserCode; Table4: BindBankUtilityCode; Table5: BindBankPaymentMode; Table6: BindEntityDetailsdata; Table7: BindDebitType; Table8: Bindfrequency; Table9: BindEntityPeriods; Table10: BindEntitydebitcredit; Table11: BindEntityCategorytype; Table12: BindLogincheck;
    lblIsRefrenceCheck; lblIsMandateEdit; lblIsRefrenceEdit; lblOverMandate; lblIsEMandate; lblIsPhysicalMandate; lblEntityId; lblUserid; lblBranchId; lblUserType; lblRefId;
    lblTodateMandataoryforEsign = false; lblISSendEmailCustomer = false; IsShow = false; public _isActive = false; public _isimage: string = "";

    btnCancel = false; btnSecVal = false; btnFirstVal = false; btnEditDisable = false; btnPhysicalMandate = false; btnEemandate = false; btnenach = false; 
    // Work on Header button work
    btnedit = false; btnscanprint = false; btnmandateprint = false; btnblackmandateprint = false; btnoldoverprintmandate = false; btnprint = false; btnscanhalf = false; btnscan = false; btnvalidate = false; AEresponse = false; btnregisfund = false; 
    isDisabled: boolean = false; isDisabledback: boolean = false; UtilityCodedesabled: boolean = true; CreateCodedesabled: boolean = true; ModifyCodedesabled: boolean = true;
    CancelCodedesabled: boolean = true; EntityNameCodedesabled: boolean = true; rdsbCodedesabled: boolean = true; rdcaCodedesabled: boolean = true; rdccCodedesabled: boolean = true;
    rdnbreCodedesabled: boolean = true; rdsbnrdCodedesabled: boolean = true; rdotherCodedesabled: boolean = true; UMRNCodedesabled: boolean = true; Amountcodedisabled: boolean = true;
    rdmonthlycodedisabled: boolean = true; rdquaterlycodedisabled: boolean = true; rdhalfyrlycodedisabled: boolean = true; rdyearlycodedisabled: boolean = true; Radio1codedisabled: boolean = true;
   // rdfxdamtcodedisabled: boolean = true;
    rdmaxamtcodedisabled: boolean = true; Reference2codedisabled: boolean = true; Periodtocodedisabled: boolean = true; Untillcancelledcodedisabled: boolean = true;
    Customer2disabled: boolean = true; Customer3disabled: boolean = true; Cancelleddisabled: boolean = true; 

    //end header button work

    btnCancelDisabled: boolean = true; IsCancel = false;    
    constructor(private router: Router, private formBuilder: FormBuilder, private _bankformService: BankFormService) { }
    ngOnInit() {
        this.NachMandate = this.formBuilder.group({
            MandateMode: [''], Catagorycode: [''], Mandatetype: [''], UMRN: [''], UMRNDATE: [''], Sponsorcode: [''],  Utilitycode: [''], Create: [''], Modify: [''],
            Cancel: [''], Authrizename: [''], Todebit: [''], Bankaccountno: [''], Withbank: [''], IFSC: [''], MICR: [''], Amount: [''], Amountrupees: [''],
            Frequency: [''],
            Debittype: [''],
            Reference: [''], Phoneno: [''], Refrence2: [''], Email: [''], PeriodFrom: [''], PeriodTo: [''], Untillcancelled: [''],
            Customer1: [''], Customer2: [''], Customer3:['']

        });
        let Sessionvalue = JSON.parse(sessionStorage.getItem('User')); 
        this.lblIsRefrenceCheck = Sessionvalue.IsRefrenceCheck; this.lblIsMandateEdit = Sessionvalue.IsMandateEdit; this.lblIsRefrenceEdit = Sessionvalue.IsRefrenceEdit; this.lblOverMandate = Sessionvalue.IsOverPrintMandate; this.lblIsEMandate = Sessionvalue.IsEmandate; this.lblIsPhysicalMandate = Sessionvalue.IsPhysical; this.lblEntityId = Sessionvalue.ReferenceId; this.lblUserid = Sessionvalue.UserId; this.lblBranchId = Sessionvalue.BranchId; this.lblUserType = Sessionvalue.UserType; this.lblRefId = Sessionvalue.ReferenceId;
   
        this.BinddataonPageLoad();
    }
    get AllFields() { return this.NachMandate.controls; }
    BinddataonPageLoad() {
        this._bankformService.GetCategory().subscribe(
            (data) => {
                this.Table12 = data.Table12; 
                if (this.Table12[0].IsEnableCancel == false) {
                    this.Cancelleddisabled = false;    
                    this.btnCancel = true;
                }
                else {
                    this.Cancelleddisabled = true;    
                    this.IsCancel = false;
                }
                this.Table7 = data.Table7; this.Table8 = data.Table8; this.Table10 = data.Table10; this.Table9 = data.Table9; if (data.Table9[0].isenable == true) { this.Periodtocodedisabled = false } else { this.Periodtocodedisabled = true } if (data.Table9[1].isenable == true) { this.Untillcancelledcodedisabled = false } else { this.Untillcancelledcodedisabled = true }
                this.Table2 = data.Table2; this.Table11 = data.Table11; this.Table3 = data.Table3; this.NachMandate.controls['Utilitycode'].setValue(this.Table3[0].utilityCode);
                this.Table = data.Table; this.lblTodateMandataoryforEsign = this.Table[0].IsTodatemandatoryenach; this.lblISSendEmailCustomer = this.Table[0].ISSendEmailCustomer;
                this.NachMandate.controls['Sponsorcode'].setValue(this.Table[0].SponsorBankCode);
                if (this.Table[0].ModeOfPayment == 'Y') {
                    this.IsShow = true;
                    //jquery_1_11_3_min_p("#pnl2").css('display', 'block');
                    //jquery_1_11_3_min_p("#lblTotal").attr('disabled', true);
                } else {
                    this.IsShow = false;
                }
                this.NachMandate.controls['PeriodFrom'].setValue(this.Table[0].FromDate);
               // this.NachMandate.controls['UMRNDATE'].setValue(public datepipe: DatePipe);
                this.NachMandate.controls['Authrizename'].setValue(this.Table[0].Name);
                this.EntityNameCodedesabled = true;
                this.NachMandate.controls['Debittype'].setValue(this.Table[0].DebitType);
                this.NachMandate.controls['Frequency'].setValue(this.Table[0].FrequencyType);
                this.NachMandate.controls['Todebit'].setValue(this.Table[0].ToDebit);
                if (this.Table[0].PeriodType == 'u') {
                    this.NachMandate.controls['Untillcancelled'].setValue(true);
                    this._isActive = true;

                } else {
                    this.NachMandate.controls['Untillcancelled'].setValue(false);
                    this._isActive = false;
                }
                this.Table1 = data.Table1;
                this._isimage = this.Table1[0].ImagePath;

                this.Table5 = data.Table5;

                //var i = 0;
                //var jsonData = eval(result.d.Table5);
                //jQuery.each(jsonData, function (rec) {
                //    if (jsonData[i].PaymentMode == 'Cash') {
                //        jquery_1_11_3_min_p('#DivCash').css('display', 'block');
                //        jquery_1_11_3_min_p('#divca').css('display', 'block');
                //    }
                //    if (jsonData[i].PaymentMode == 'Cheque') {
                //        jquery_1_11_3_min_p('#DivChequee').css('display', 'block');
                //        jquery_1_11_3_min_p('#divcq').css('display', 'block');
                //    }
                //    if (jsonData[i].PaymentMode == 'DD') {
                //        jquery_1_11_3_min_p('#DivDDD').css('display', 'block');
                //        jquery_1_11_3_min_p('#divdd').css('display', 'block');
                //    }
                //    if (jsonData[i].PaymentMode == 'E') {
                //        jquery_1_11_3_min_p('#DivElectronic').css('display', 'block');
                //        jquery_1_11_3_min_p('#divcad').css('display', 'block');
                //    }
                //    i++;

                //});


            });

    }
    trackByFn(index, item) {
        return index; // or item.id
    }
    //numberOnly(event): boolean {
    //    const charCode = (event.which) ? event.which : event.keyCode;
    //    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
    //        return false;
    //    }
    //    return true;

    //}
    //Decimal(event): boolean {
    //    const charCode = (event.which) ? event.which : event.keyCode;
    //    // e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)
    //    if (charCode != 8 && (charCode != 0 && charCode < 48 || charCode > 57)) {
    //        return false;
    //    }
    //    return true;

    //}
   

}
