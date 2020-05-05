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
import { CheckReference } from '../../../Models/BankForm/checkreference';
import { BindGrid } from '../../../Models/BankForm/BindGrid'
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { endWith } from 'rxjs/operators';
import { DISABLED } from '@angular/forms/src/model';
import { DatePipe, KeyValuePipe } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Directive, HostListener } from '@angular/core';
import { UrlSegment } from '@angular/router';
import  {SaveData,SaveData0,SaveData1,SaveData2,SaveData3,SaveData4,SaveData5,SaveData6,SaveData7,SaveData8} from '../../../Models/BankForm/SaveData'; 
import {EditData0,EditData1,EditData2,EditData3,EditData4} from  '../../../Models/BankForm/SaveData'; 

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
    lblIsValidationCountEnable;lblFinalBankValidationAdminCount;lblFinalBankValidationUserCount;lblFinalAcValidationAdminCount;
    lblFinalAcValidationUserCount;
    checkreference: CheckReference;
    savedata:SaveData;savedata0:SaveData0;savedata1:SaveData1;savedata2:SaveData2;savedata3:SaveData3;savedata4:SaveData4;
    savedata5:SaveData5;savedata6:SaveData6;savedata7:SaveData7;savedata8:SaveData8;editdata0:EditData0;
    message: string;editdata1:EditData1;editdata2:EditData2;editdata3:EditData3;editdata4:EditData4;
    submitted = false; 
    Preloader:boolean=false; showModalsave: boolean;btnBack:boolean=true;
    mandateId=0;today: Date;
    dataArray: Array<BindGrid>= [];
    //bindgrid:Bindgrid;
    bindgrid:BindGrid;
    btnCancel = false; btnSecVal = false; btnFirstVal = false; btnEditDisable = false; btnPhysicalMandate = false; btnEemandate = false; btnenach = false; 
    // Work on Header button work
    btnedit = false; btnscanprint = false; btnmandateprint = false; btnblackmandateprint = false; btnoldoverprintmandate = false; btnprint = false; btnscanhalf = false; btnscan = false; btnvalidate = false; AEresponse = false; btnregisfund = false; 
    isDisabled: boolean = true; isDisabledback: boolean = false; UtilityCodedesabled: boolean = true; CreateCodedesabled: boolean = true; ModifyCodedesabled: boolean = true;
    CancelCodedesabled: boolean = true; EntityNameCodedesabled: boolean = true; rdsbCodedesabled: boolean = true; rdcaCodedesabled: boolean = true; rdccCodedesabled: boolean = true;
    rdnbreCodedesabled: boolean = true; rdsbnrdCodedesabled: boolean = true; rdotherCodedesabled: boolean = true; UMRNCodedesabled: boolean = true; Amountcodedisabled: boolean = true;
    rdmonthlycodedisabled: boolean = true; rdquaterlycodedisabled: boolean = true; rdhalfyrlycodedisabled: boolean = true; rdyearlycodedisabled: boolean = true; Radio1codedisabled: boolean = true;
   // rdfxdamtcodedisabled: boolean = true;
    rdmaxamtcodedisabled: boolean = true; Reference2codedisabled: boolean = true; Periodtocodedisabled: boolean = true; Untillcancelledcodedisabled: boolean = true;
    Customer2disabled: boolean = true; Customer3disabled: boolean = true; Cancelleddisabled: boolean = true; 
    btnSecValdisabled: boolean = true;btnFirstValdisabled: boolean = true;btnSavedisabled: boolean = false;
    btnEditDisabledisabled: boolean = true;btnEemandatedisabled: boolean = true;
    Catagorycodedisabled: boolean = false; UMRNDATEdisabled: boolean = false; Sponsorcodedisabled: boolean = false;
    Bankaccountnodisabled: boolean = false; Withbankdisabled: boolean = false; IFSCdisabled: boolean = false;
    MICRdisabled: boolean = false; Amountrupeesdisabled: boolean = false; Refrence1disabled: boolean = false;
    Phonenodisabled: boolean = false;Emaildisabled: boolean = false;PeriodFromdisabled: boolean = false;
    Customer1disabled: boolean = false;
    //end header button work

    btnCancelDisabled: boolean = true; IsCancel = false;    btnSave:boolean=true;
    grd: boolean = false;
    divform: boolean = true;
    constructor(private router: Router, private formBuilder: FormBuilder, private _bankformService: BankFormService,public datepipe: DatePipe) { }
    hide() {
       
        this.showModalsave = false;
    }
    ngOnInit() {
        this.NachMandate = this.formBuilder.group({
            MandateMode: [''], Catagorycode: ['', Validators.required], Mandatetype: [''], UMRN: [''], UMRNDATE: ['', Validators.required], Sponsorcode: ['Select', Validators.required],  Utilitycode: [''], Create: [''], Modify: [''],
            Cancel: [''], Authrizename: [''], Todebit: [''], Bankaccountno: ['', Validators.required], Withbank: ['', Validators.required], IFSC: ['', Validators.required], MICR: [''], Amount: [''], Amountrupees: ['', Validators.required],
            Frequency: [''],
            Debittype: [''],
            Refrence1: ['', Validators.required], Phoneno: [''], Refrence2: [''], Email: ['', [ Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]], PeriodFrom: ['', Validators.required], PeriodTo: [''], Untillcancelled: [''],
            Customer1: ['', Validators.required], Customer2: [''], Customer3:[''],
            ContentPlaceHolder1_txtphysical:[''],ContentPlaceHolder1_txtemandate:[''],
            ContentPlaceHolder1_lblmandatecheckdata:['']
        });
        let Sessionvalue = JSON.parse(sessionStorage.getItem('User')); 
        this.lblIsRefrenceCheck = Sessionvalue.IsRefrenceCheck; this.lblIsMandateEdit = Sessionvalue.IsMandateEdit; this.lblIsRefrenceEdit = Sessionvalue.IsRefrenceEdit; this.lblOverMandate = Sessionvalue.IsOverPrintMandate; this.lblIsEMandate = Sessionvalue.IsEmandate; this.lblIsPhysicalMandate = Sessionvalue.IsPhysical; this.lblEntityId = Sessionvalue.ReferenceId; this.lblUserid = Sessionvalue.UserId; this.lblBranchId = Sessionvalue.BranchId; this.lblUserType = Sessionvalue.UserType; this.lblRefId = Sessionvalue.ReferenceId;
       
        this.BinddataonPageLoad();
        let item = JSON.parse(sessionStorage.getItem('User'));
        this.lblIsRefrenceCheck = item.IsRefrenceCheck;
        this.lblIsMandateEdit = item.IsMandateEdit;
        this.lblIsRefrenceEdit = item.IsRefrenceEdit;
        this.lblOverMandate = item.IsOverPrintMandate;
        this.lblIsEMandate = item.IsEmandate;
        this.lblIsPhysicalMandate = item.IsPhysical;
        this.lblEntityId = item.ReferenceId;
        this.lblUserid = item.UserId;
        this.lblUserType = item.UserType;
        this.lblBranchId = item.BranchId;
        this.lblRefId = item.ReferenceId;
     
        
    }


    showModal: boolean;
onClick(event) {
this.showModal = true;


}



showModalunsucess: boolean;
onClicksucess(event) {
    this.showModalunsucess = true;
    
    
    }
    
    hidesucess() {
    this.showModalunsucess = false;
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
                let dateString = data.Table[0].Date;
                

                this.NachMandate.controls['UMRNDATE'].setValue(data.Table[0].Date);
               //this.UMRNDATE = new Date(data.Table[0].Date);

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
                var  ValidationCountEnable;

                //--------For Table6----------//
                this.Table6=data.Table6;
                if(this.Table6[0].IsValidationCountEnable==false)
                {
                    ValidationCountEnable=0;
                }
                else{
                    ValidationCountEnable=1;
                }
                this.lblIsValidationCountEnable=ValidationCountEnable;
                this.lblFinalBankValidationAdminCount=this.Table6[0].BankValidationAdminCount;
                this.lblFinalBankValidationUserCount=this.Table6[0].BankValidationUserCount;
                this.lblFinalAcValidationAdminCount=this.Table6[0].AcValidationAdminCount;
                this.lblFinalAcValidationUserCount=this.Table6[0].AcValidationUserCount;
               
//-------------------End ------------//
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
   

    btnsave_click() {       
        this.submitted = true;
        if (this.NachMandate.valid) {            
            const datat = this.NachMandate.value;
          //  this.SaveData();
            this.CheckReference();
            //alert('ok');
        }             
        else {
            this.validateAllFormFields(this.NachMandate);
        }        
    }

    btnNew_Click()
    {
        window.location.reload();
    }
    btnBack_Click()
    {  
        this.Refrence1disabled=false;
        this.BindGrid();        
        this.divform=false;
       // Reset();
       this.AEresponse=false;
       this.btnEditDisabledisabled=true;
       this.isDisabled=false;
       this.btnSavedisabled=true;
       this.isDisabledback=true;
       this.btnprint=false;
       this.btnscanhalf=false;
       this.btnscan=false;
        this.btnvalidate=false;
        this.btnBack=false;
    }

    btnEditDisable_click()
    {
       // if (this.ChecKmandate()) {
            if (document.getElementById('lblIsMandateEdit').innerText.toUpperCase() == "FALSE") {
               alert('You cannot edit this mandate contact to Admin');
               // admin();
            } else {
                this.btnEditDisable=false;
              this.btnscan=false;
              this.btnSave=true;
                this.btnmandateprint=false;
                
                this.EnableAllControl();
            }
       // }
    }
    isFieldValid(field: string) {
        return !this.NachMandate.get(field).valid && this.NachMandate.get(field).touched;
    }
    displayFieldCss(field: string) {
        return {
            'validate': this.isFieldValid(field),
        };
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
    numberOnly(event): boolean {
        const charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;

    }

    Decimal(event): boolean {
        const charCode = (event.which) ? event.which : event.keyCode;       
        if (charCode != 8 && (charCode != 0 && charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    }

    isChklength() {
        let phnumber = ((document.getElementById("txtPhNumber") as HTMLInputElement).value);
        if (phnumber.length > 0 && phnumber.length < 10) {
           // ((document.getElementById("txtPhNumber") as HTMLInputElement).value) == "";
           this.NachMandate.controls['Phoneno'].setValue("");
            document.getElementById("txtPhNumber").classList.add('validate');
            document.getElementById("txtPhNumber").setAttribute("placeholder", "Please enter 10 - digit");
        }
        else {
            document.getElementById("txtPhNumber").classList.remove('validate');
        }
    }
    chkEmail() {
        let email = ((document.getElementById("txtEmailId") as HTMLInputElement).value);
        let regex = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+\.)+[a-zA-Z0-9.-]{2,4}$/;
        if (regex.test(email) != true) {
            this.NachMandate.controls['Email'].setValue("");
            document.getElementById("txtEmailId").classList.add('validate');
            document.getElementById("txtEmailId").setAttribute("placeholder", "Invalid-Email");
        }
        else {
            document.getElementById("txtEmailId").classList.remove('validate');
        }
    }
    RemoveClass() {
        document.getElementById("txtPhNumber").classList.remove('validate');
        document.getElementById("txtEmailId").classList.remove('validate');
       
    }
    numtoword(event): any {       
      
       var values="" ;
       this.NachMandate.controls['Amount'].setValue("");
      var  num =this.NachMandate.controls['Amountrupees'].value.trim();       

        var a = ['', 'One ', 'Two ', 'Three ', 'Four ', 'Five ', 'Six ', 'Seven ', 'Eight ', 'Nine ', 'Ten ', 'Eleven ', 'Twelve ', 'Thirteen ', 'Fourteen ', 'Fifteen ', 'Sixteen ', 'Seventeen ', 'Eighteen ', 'Nineteen '];
        var b = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
        var n;
        if ((num = num.toString()).length > 9) return 'overflow';
        n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
        if (!n) return;
        var str = '';
        str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'Crore ' : '';
        str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'Lakh ' : '';
        str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'Thousand ' : '';
        str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'Hundred ' : '';
        str += (n[5] != 0) ? ((str != '') ? '' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) : '';
        str += str + 'Only ';       
        this.NachMandate.controls['Amount'].setValue(str);
        
    }

    CheckReference() {
        let item = JSON.parse(sessionStorage.getItem('User'));
        this.lblUserid = item.UserId;        
        this.lblEntityId = item.ReferenceId;
        var id=this.mandateId;
       
        this._bankformService.CheckReference(JSON.stringify(this.NachMandate.value), id, this.lblEntityId).subscribe(
            (data) => {
               
                this.checkreference = data;
              
                if (data.available == 0) {
                    // if (data.FileName.toUpperCase() == "TRUE") {
                    //     alert('Reference Already Exist');
                    //     this.NachMandate.controls['Refrence1'].value.trim() == "";
                    //     document.getElementById("txtRefrence1").classList.add('validate');
                    // }
                    // else {
                    //     if (this.lblIsRefrenceEdit.toUpperCase() == "FALSE") {
                    //         alert('This reference no. already exists contact to Admin');
                    //         //this.admin();
                    //     }
                    //     else {

                    //     }
                    // }    
                    this.SaveData();              
                }
                else {
                   // this.SaveData();
                
                   this.SaveData();
                }
            }
        )
    }

    SaveData() {

        let item = JSON.parse(sessionStorage.getItem('User'));
       
        this.lblUserid = item.UserId;        
        this.lblEntityId = item.ReferenceId;
        this.btnSave=false;
        var id=this.mandateId;
        // this._bankformService.SaveData(JSON.stringify(this.NachMandate.value),this.lblUserid, this.lblEntityId,id).subscribe((res) => {
                this._bankformService.SaveData(JSON.stringify(this.NachMandate.value),this.lblUserid, this.lblEntityId,id).
                subscribe((res) => {
                
              console.log(res)
             
                //console.log(res.Table8[0].result);
              
               this.savedata8=res.Table8;
console.log(this.savedata8)
               
                if (this.savedata8[0].result = 1) {
                   
                    // this.message = 'Record saved Successfully';
                    // alert(this.message);
                    this.showModalsave = true;
                    this.btnregisfund=false;
                  this.btnSecValdisabled=true;
                  this.btnSecVal=true;
                   
                    if (document.getElementById("lblOverMandate").innerText.toUpperCase() == "TRUE") {
                        this.btnoldoverprintmandate=true;
                        this.btnblackmandateprint=true;
                       
                    } else {
                        this.btnoldoverprintmandate=false;
                        this.btnblackmandateprint=false;
                    }
                    this.btnFirstVal=true;
                    this.btnEditDisable=true;
                    this.btnFirstValdisabled=false;

                   this.Bankaccountnodisabled=true;
                   this.Refrence1disabled=true;
                   this.Reference2codedisabled=true;
                   this.Amountrupeesdisabled=true;
                   this.Withbankdisabled=true;
                   this.Sponsorcodedisabled=true;
                   this.Catagorycodedisabled=true;
                   this.Customer3disabled=true;
                this.IFSCdisabled=true;
                this.MICRdisabled=true;
                this.Refrence1disabled=true;
               this.Reference2codedisabled=true;
               this.Amountrupeesdisabled=true;
             this.Amountcodedisabled=true;
           this.PeriodFromdisabled=true;
           this.UMRNDATEdisabled=true;
           this.PeriodFromdisabled=true;
              this.Emaildisabled=true;
              this.Phonenodisabled=true;
             this.Withbankdisabled=true;
             this.Catagorycodedisabled=true;
             this.Sponsorcodedisabled=true; 
             this.savedata7=res.Table7;
           

             this.NachMandate.controls['ContentPlaceHolder1_txtphysical'].setValue(this.savedata7[0].IsPhysical);
             this.NachMandate.controls['ContentPlaceHolder1_txtemandate'].setValue(this.savedata7[0].Enach);
             //this.CheckLogoOrQR();  
                    
                   
                }
                if(this.savedata2[0].result = -1) {
                    this.message = 'Error';
                    alert(this.message);
                }
              
            }
        )
    }

    

    BindGrid() {     
     
        this.divform=false;
        this.grd=false;
        this.isDisabled=false;
       this.Preloader=true;
        this._bankformService.BindGrid().
            subscribe((data) => {
                this.Preloader=false;
                this.grd=true;
                this.bindgrid = data.Table;
            });
      
       
    }

    doubleClick(data: any) {
       
        this.dataArray.push(data);        
        this.mandateId = data.mandateid
        this.grd=false;
      
       this.Refrence1disabled=true;
        this.isDisabledback=false;
       
this.btnEditDisabledisabled=true;
        this.btnSavedisabled=false;
        this.isDisabled=true;
        this.Edit(this.mandateId);
      
        this.grd=false;
        
    }
    Edit(mandateid) {
this.Preloader=true;

this.btnSave=false;
this.btnEditDisable=true;
this.isDisabledback=false;
this.btnBack=true;
this.btnEditDisabledisabled=false;

        this._bankformService.Edit(mandateid).
            subscribe((data) => {
                this.Preloader=false;
                this.divform=true;
                this.editdata0 = data.Table;
                this.editdata1 = data.Table1;
                this.editdata2 = data.Table2;
                this.editdata3 = data.Table3;
                this.editdata4 = data.Table4;                
              
                // console.log(this.editdata0);
                // console.log(this.editdata1);
                // console.log(this.editdata2);
                // console.log(this.editdata3);
                // console.log(this.editdata4);
                if(data.Table4.length >0)
                {
                   this.btnregisfund=true;
                }
                else{
                    this.btnregisfund=false;
                }
                var Mandatetype = this.editdata0[0].isphysical;
                var Mandateetype = this.editdata0[0].enach;
                this.NachMandate.controls['ContentPlaceHolder1_txtphysical'].setValue(Mandatetype);
                this.NachMandate.controls['ContentPlaceHolder1_txtemandate'].setValue(Mandateetype);
                if (Mandatetype && !this.editdata0[0].isAccountValidation && this.editdata0[0].status != "Saved") 
                {
                    this.btnscan=true;
                } 
                else if (Mandatetype && this.editdata0[0].isAccountValidation && this.editdata0[0].status != "Saved" && this.editdata0[0].status != "Bank Validated") 
                {
                    this.btnscan=true;
                } 
                else 
                {
                    this.btnscan=false;
                }              
                if (this.editdata0[0].MandateMode.trim() != " ") 
                {
                    var MandateMode = this.editdata0[0].MandateMode.trim();                                      
                    this.NachMandate.controls['MandateMode'].setValue(MandateMode);
                }
                if (this.editdata0[0].xmlpath != '') {
                    this.btnEditDisabledisabled=true;
                    this.btnFirstValdisabled=true;
                    this.btnSecValdisabled=true; 
                    document.getElementById("AResponse").setAttribute('href', '..' + this.editdata0[0].xmlpath + '');
                    document.getElementById("AResponse").setAttribute('download', '' + this.editdata0[0].Refrence1 + '.xml');
                    this.AEresponse=false;                   
                } 
                else {                    
                    this.AEresponse=false;
                    this.btnscanhalf=false;                  
                    if (document.getElementById("lblOverMandate").innerText.toUpperCase() == "TRUE") {                        
                        this.btnoldoverprintmandate=true;
                        this.btnblackmandateprint=true;                        
                    } else {
                        this.btnoldoverprintmandate=false;
                        this.btnblackmandateprint=false;  
                    }  
                    if (this.editdata0[0].IsScan == 'YES') {
                        this.btnscanprint=true;
                        document.getElementById("imgscanImage").setAttribute('src', this.editdata0[0].jpgpath + "?" + new Date().getTime());
                      
                    } else {
                        this.btnscanprint=false;
                    }
                }
                if ((document.getElementById("lblIsMandateEdit").innerText.toUpperCase() == "FALSE")) {                    
                    this.btnFirstValdisabled=true;
                    this.btnSecValdisabled=true;                     
                }
                if (this.editdata0[0].xmlpath != '') {
                    this.btnEemandatedisabled=true;
                    this.btnPhysicalMandate=true;
                    this.btnEemandate=false;
                    this.btnEditDisabledisabled=true;
                    this.btnFirstValdisabled=true;
                    this.btnSecValdisabled=true;                   
                }
                if (this.editdata0[0].enach == 1) {
                    this.btnscan=false;
                    this.btnscanhalf=false;
                    this.btnPhysicalMandate=false;                   
                } else {
                    this.btnPhysicalMandate=true;
                }
              
                this.NachMandate.controls['Catagorycode'].setValue(this.editdata0[0].CategoryCode);
                this.NachMandate.controls['UMRNDATE'].setValue(this.editdata0[0].DateOnMandate);
                this.NachMandate.controls['Sponsorcode'].setValue(this.editdata0[0].SponsorbankCode);
                this.NachMandate.controls['Utilitycode'].setValue(this.editdata0[0].UtilityCode);
                this.NachMandate.controls['Todebit'].setValue(this.editdata0[0].ToDebit);
                this.NachMandate.controls['Bankaccountno'].setValue(this.editdata0[0].AcNo);
                this.NachMandate.controls['Withbank'].setValue(this.editdata0[0].BankName);
                this.NachMandate.controls['IFSC'].setValue(this.editdata0[0].IFSC);
                this.NachMandate.controls['MICR'].setValue(this.editdata0[0].MICR);
                this.NachMandate.controls['Amount'].setValue(this.editdata0[0].Amount);
                this.NachMandate.controls['Amountrupees'].setValue(this.editdata0[0].AmountRupees);
                this.NachMandate.controls['Frequency'].setValue(this.editdata0[0].FrequencyType);
                this.NachMandate.controls['Debittype'].setValue(this.editdata0[0].DebitType);
                this.NachMandate.controls['Refrence1'].setValue(this.editdata0[0].Refrence1);
                this.NachMandate.controls['Phoneno'].setValue(this.editdata0.PhoneNumber);
                this.NachMandate.controls['Refrence2'].setValue(this.editdata0[0].Refrence2);
                this.Reference2codedisabled=false;
                this.NachMandate.controls['Email'].setValue(this.editdata0[0].EmailId);
                this.NachMandate.controls['PeriodFrom'].setValue(this.editdata0[0].FromDate);
                this.NachMandate.controls['PeriodTo'].setValue(this.editdata0[0].Todate);
                this.NachMandate.controls['Customer1'].setValue(this.editdata0[0].Customer1);
                this.NachMandate.controls['Customer2'].setValue(this.editdata0[0].Customer2);
                this.NachMandate.controls['Customer3'].setValue(this.editdata0[0].Customer3);             

                
                this.Bankaccountnodisabled=true;
                this.Customer1disabled=true;
                this.Customer2disabled=true;

                // let txtCust2 = ((document.getElementById("txtCust2") as HTMLInputElement).value);

                // if (txtCust2==" ") {
                   
                   
                //     this.Customer3disabled=false;
                // } else {
                   
                //     this.Customer3disabled=true;;
                // }
                this.Customer3disabled=true;
                this.IFSCdisabled=true;
                this.MICRdisabled=true;
                this.Refrence1disabled=true;
               this.Reference2codedisabled=true;
               this.Amountrupeesdisabled=true;
             this.Amountcodedisabled=true;
           this.PeriodFromdisabled=true;
           this.UMRNDATEdisabled=true;
           this.PeriodFromdisabled=true;
              this.Emaildisabled=true;
              this.Phonenodisabled=true;
             this.Withbankdisabled=true;
             this.Catagorycodedisabled=true;
             this.Sponsorcodedisabled=true;    
            });
        

    }

    ChecKmandate()
    {
        var flag = true;

    }

    EnableAllControl()
    {
      
        this.Untillcancelledcodedisabled=true;
        this.btnPhysicalMandate=false;
       this.btnEemandate=false;
       this.btnSecValdisabled=true;
       this.btnFirstValdisabled=true;

       this.Customer3disabled=true;
       this.IFSCdisabled=false;;
       this.MICRdisabled=false;
       this.Refrence1disabled=false;
      this.Reference2codedisabled=false;
      this.Amountrupeesdisabled=false;
    this.Amountcodedisabled=true;
    this.Customer2disabled=false;
    this.Customer1disabled=false;
  this.PeriodFromdisabled=true;
  this.UMRNDATEdisabled=false;
  this.PeriodFromdisabled=false;
     this.Emaildisabled=false;
     this.Phonenodisabled=false;
    this.Withbankdisabled=true;
    this.Catagorycodedisabled=true;
    this.Sponsorcodedisabled=true;    
    this.Periodtocodedisabled=false; 
    this.Withbankdisabled=false;
    this.Catagorycodedisabled=false;
    this.Sponsorcodedisabled=false;
       this.btnSavedisabled=false;
        var txtCust2 = ((document.getElementById("txtCust2") as HTMLInputElement).value);
       

        if (txtCust2==" ") {
           
             this.Customer3disabled=true;
        } else {
            this.Customer3disabled=false;
        }
      
        this.Customer3disabled=false;
      
      
    }
}
