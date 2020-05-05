import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators, FormControl, FormBuilder } from '@angular/forms';
import { EntityBankService } from '../../Services/EntityBankSetup/entity-bank.service';
import { Entity } from '../../../Models/EntityBankSetup/entity';
import { Bank } from '../../../Models/EntityBankSetup/bank';
import { EntityData } from '../../../Models/EntityBankSetup/entity-data';
import { Table1 } from '../../../Models/EntityBankSetup/table1';
import { Table2 } from '../../../Models/EntityBankSetup/table2';
import { Table3 } from '../../../Models/EntityBankSetup/table3';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Adhocdata } from 'src/Models/EntityBankSetup/Adhocdata';

@Component({
    selector: 'app-entity-bank-setup',
    templateUrl: './entity-bank-setup.component.html',
    styleUrls: ['./entity-bank-setup.component.css']
})
export class EntityBankSetupComponent implements OnInit {
    Entitysetup: FormGroup; entity: Entity; bank: Bank; isDisabledtext: boolean = false; htmlToAdd=""; public SelectedSequence; isDisabledtextlength: boolean = false; isDisabledtextvalue: boolean = false;
    divlength: boolean = false; divvalue: boolean = false; divdateformat: boolean = false; items; isDisableddate: boolean = false; isDisableddate1: boolean = false; isDisableddate2: boolean = false; isDisableddate3: boolean = false; isDisableddate4: boolean = false;
    isDisableddate5: boolean = false; isDisabledday: boolean = false; RemainingCount; public arrvalue: any = []; lblFileSequence; public sequence: any; public adhocarr: any = []; public adhoc: any;
    entitydata: EntityData; showModalsave: boolean = false; tblentitybanksetup: Table1; tblFilesequence: Table2; tblEntitybankdate: Table3; public Id: any; temp: number; public arr:any=[]; public btnAdhoc:boolean=false; public Divadhoc:boolean=false
    public BankName:any; public popuptext:any; showModalalert: boolean=false;adhocdata:Adhocdata; public divadhoctable:boolean=false; public divsequencetable:boolean=false;
   
    constructor(private formBuilder: FormBuilder, private entitybankservice: EntityBankService) { }
    hide() {
        this.showModalsave = false;
        this.showModalalert=false;
    }
    ngOnInit() {
        this.Entitysetup = this.formBuilder.group({
            ddlentity: ['', Validators.required],
            ddlbank: ['', Validators.required],
            chkexcel: new FormControl(),
            chkcsv: new FormControl(),
            chkxml: new FormControl(),
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
        this.btnAdhoc=false;
        this.Divadhoc=false;
        this.divadhoctable=false;
        this.divsequencetable=false;
        this.temp = 1;
        this.Id = "";
        
    }

    isFieldValid(field: string) {
        return !this.Entitysetup.get(field).valid && this.Entitysetup.get(field).touched;
    }
    displayFieldCss(field: string) {
        return {
            'validate': this.isFieldValid(field),
        };
    }

   

    BindEntity() {
        this.entitybankservice.getEntity().subscribe((data) => {


            this.entity = data.Table;
            
        });
    }

    BindBank() {
        let EntityId = this.Entitysetup.value.ddlentity;
        
        this.entitybankservice.getBank(EntityId).subscribe((data) => {

            this.bank = data.Table;
           
        });
    }

    DataCheck() {
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
               this.popuptext='You can not add more than total length!';
               this.showModalalert=true;

            }


            if (this.Entitysetup.value.ddlsequence == 1 || this.Entitysetup.value.ddlsequence == 4) {
                var length = this.Entitysetup.value.txtlength;
                var value = this.Entitysetup.value.txtvalue.length;
                if (length > 0 && value > 0) {
                    if (value != length) {
                        flag = 1;
                        
                        this.popuptext='Total Length should be equal to length of selected items!!!';
                        this.showModalalert=true;

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
    }

    tblDataBind() {
        
        var RemainingCount = 0;
        if (this.DataCheck() == true) {

            if(this.RemainingCount == '' || this.RemainingCount==0) {
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

            this.divsequencetable=true;
            this.arrvalue.push(this.sequence);
            

        }
        else {

        }
    }
    onChangesequence(event: any) {
        if (this.Entitysetup.value.ddlsequence == 2) {
            this.Entitysetup.controls['txtlength'].setValue(1);
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




    }

    onDateChange(event: any) {
        var flag = 0;
        this.SelectedSequence = event.target.options[event.target.options.selectedIndex].text;
        if (this.Entitysetup.value.ddldate = 0) {
            if (this.SelectedSequence.length > this.Entitysetup.value.txtremaining) {
                flag = 1;
                this.popuptext='You can not add more than total length!';
                this.showModalalert=true;
                this.Entitysetup.controls['ddldate'].setValue(0);
            }
        }
    }

    valuePress(e: any) {
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

       
   
    
    if(this.Entitysetup.value.ddlsequence == 4) {
    if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
       
        return false;
    }
}

        if (this.Entitysetup.value.ddlsequence == 1) {
    if ((e.which >= 27 && e.which <= 57) || (e.which >= 58 && e.which <= 64) || (e.which >= 91 && e.which <= 96) || (e.which >= 123 && e.which <= 126)) {
       
        return false;
    }
}
}

    dailyClick() {
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
        this.btnAdhoc=false;
        this.Divadhoc=false;
    }

    weeklyClick() {
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
        this.btnAdhoc=false;
        this.Divadhoc=false;

    }

    monthlyClick() {
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
        this.btnAdhoc=false;
        this.Divadhoc=false;

    }

    adhocClick() {
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
        this.btnAdhoc=true;
        this.Divadhoc=true;

    }

    timePress(e: any) {
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {

            return false;
        }
    }

    totLength(e: any) {
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {

            return false;
        }
    }
    lengthPress(e: any) {
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {

            return false;
        }
    }
    onTotLengthchange() {
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
    }
    onLengthchange() {

        if (parseInt(this.RemainingCount) < this.Entitysetup.value.txtlength) {
            this.Entitysetup.controls['txtlength'].setValue('');
            this.popuptext='You can not enter more than the remaining length.!';
            this.showModalalert=true;

        }
    }

    onSubmit() {


            
            if (this.Entitysetup.valid) {
                //this.sucess=true;
                const datat = this.Entitysetup.value;
                if (this.temp == 1) {
                    this.Savedata();
                }
                else {
                    this.Updatedata();
                }
                

            } else {

                this.validateAllFormFields(this.Entitysetup);
            }
        }
        Savedata() {
            var date = this.Entitysetup.value.rdoDate;
            var DailyTime="";
            var IsFormat=0;
            let item = JSON.parse(sessionStorage.getItem('User'));
           let _adhocdata=new Adhocdata();
           _adhocdata.UserId=item.UserId;
           for(var i=0; i<this.adhocarr.length; i++){
           _adhocdata.adhocarr.push(this.adhocarr[i]);
           }
           for(var i=0; i<this.arrvalue.length; i++){
            _adhocdata.arrsequence.push(this.arrvalue[i]);
        }
           _adhocdata.chkcsv=this.Entitysetup.value.chkcsv;
           _adhocdata.chkexcel=this.Entitysetup.value.chkexcel;
           _adhocdata.chkxml=this.Entitysetup.value.chkxml;
           _adhocdata.ddlbank=this.Entitysetup.value.ddlbank;
           _adhocdata.ddlentity=this.Entitysetup.value.ddlentity;
           _adhocdata.presentmenttime=this.Entitysetup.value.presentmenttime;
           _adhocdata.ddlday=this.Entitysetup.value.ddlday;
           _adhocdata.rdoDate=this.Entitysetup.value.rdoDate;
           _adhocdata.txtdatepicker=this.Entitysetup.value.txtdatepicker;
           _adhocdata.txtdatepicker1=this.Entitysetup.value.txtdatepicker1;
           _adhocdata.txtdatepicker2=this.Entitysetup.value.txtdatepicker2;
           _adhocdata.txtdatepicker3=this.Entitysetup.value.txtdatepicker3;
           _adhocdata.txtdatepicker4=this.Entitysetup.value.txtdatepicker4;
           _adhocdata.txtdatepicker5=this.Entitysetup.value.txtdatepicker5;
           _adhocdata.txttotalcount=this.Entitysetup.value.txttotalcount;
           _adhocdata.ddldate=this.Entitysetup.value.ddldate;
           
            if (this.adhocarr == "") {
                this.adhocarr.push(0);
            }
            if (date == 'D') {
                DailyTime = this.Entitysetup.value.txtdatepicker;
                if (DailyTime == '') {
                    document.getElementById('txtDatePicker').classList.add('validate');
                    return;
                }
            }
            else if(date == 'M') {
                if (this.Entitysetup.value.txtdatepicker2 == '')
                { 
                    document.getElementById('txtDatePicker2').classList.add('validate');
                    return;
                 }
                else if (this.Entitysetup.value.txtdatepicker4 == '')
                { 
                    document.getElementById('txtDatePicker4').classList.add('validate'); 
                    return; 
                }
            }
            else if (date == 'W'){
                if (this.Entitysetup.value.ddlday == 0 ){
                    document.getElementById('ddlday').classList.add('validate'); 
                    return;
                }
                else if (this.Entitysetup.value.txtdatepicker1 == '')
            {
                 document.getElementById('txtDatePicker1').classList.add('validate');  
                return; 
            }


            }
            
            if (this.Entitysetup.value.chkcsv == true) {

                IsFormat = 1;
            }
            if (this.Entitysetup.value.chkxml == true) {

                IsFormat = 1;
            }
            if (this.Entitysetup.value.chkexcel == true) {
                
                IsFormat = 1;
            }
            if (IsFormat == 0) {
                document.getElementById('divformat').classList.add('validate');
                return;
            }
            
            
      
            if (this.arrvalue == "") {
                
                this.popuptext='Please Create Sequence File Number !!';
                this.showModalalert=true;
                return;
            }
            
            

            this.entitybankservice.SaveData(JSON.stringify(_adhocdata)).subscribe(
                (data) => {

                    this.adhocdata = data;
                    if (this.adhocdata[0].result == 1) {
                        this.showModalsave = true;
                    }
                    this.Entitysetup.reset();
                    this.adhocarr = [];
                    this.arrvalue = [];
                    this.BankName="";
                });
               
    }

    Updatedata() {

        var date = this.Entitysetup.value.rdoDate;
            var DailyTime="";
            var IsFormat=0;
           

            let item = JSON.parse(sessionStorage.getItem('User'));
            let _adhocdata=new Adhocdata();
           _adhocdata.UserId=item.UserId;
           for(var i=0; i<this.adhocarr.length; i++){
           _adhocdata.adhocarr.push(this.adhocarr[i]);
           }
           for(var i=0; i<this.arrvalue.length; i++){
            _adhocdata.arrsequence.push(this.arrvalue[i]);
        }
           _adhocdata.chkcsv=this.Entitysetup.value.chkcsv;
           _adhocdata.chkexcel=this.Entitysetup.value.chkexcel;
           _adhocdata.chkxml=this.Entitysetup.value.chkxml;
           _adhocdata.ddlbank=this.Entitysetup.value.ddlbank;
           _adhocdata.ddlentity=this.Entitysetup.value.ddlentity;
           _adhocdata.presentmenttime=this.Entitysetup.value.presentmenttime;
           _adhocdata.ddlday=this.Entitysetup.value.ddlday;
           _adhocdata.rdoDate=this.Entitysetup.value.rdoDate;
           _adhocdata.txtdatepicker=this.Entitysetup.value.txtdatepicker;
           _adhocdata.txtdatepicker1=this.Entitysetup.value.txtdatepicker1;
           _adhocdata.txtdatepicker2=this.Entitysetup.value.txtdatepicker2;
           _adhocdata.txtdatepicker3=this.Entitysetup.value.txtdatepicker3;
           _adhocdata.txtdatepicker4=this.Entitysetup.value.txtdatepicker4;
           _adhocdata.txtdatepicker5=this.Entitysetup.value.txtdatepicker5;
           _adhocdata.txttotalcount=this.Entitysetup.value.txttotalcount;
           _adhocdata.ddldate=this.Entitysetup.value.ddldate;
           
            if (this.adhocarr == "") {
                this.adhocarr.push(0);
            }
            if (date == 'D') {
                DailyTime = this.Entitysetup.value.txtdatepicker;
                if (DailyTime == '') {
                    document.getElementById('txtDatePicker').classList.add('validate');
                    return;
                }
            }
            else if(date == 'M') {
                if (this.Entitysetup.value.txtdatepicker2 == '')
                { 
                    document.getElementById('txtDatePicker2').classList.add('validate');
                    return;
                 }
                else if (this.Entitysetup.value.txtdatepicker4 == '')
                { 
                    document.getElementById('txtDatePicker4').classList.add('validate'); 
                    return; 
                }
            }
            else if (date == 'W'){
                if (this.Entitysetup.value.ddlday == 0 ){
                    document.getElementById('ddlday').classList.add('validate'); 
                    return;
                }
                else if (this.Entitysetup.value.txtdatepicker1 == '')
            {
                 document.getElementById('txtDatePicker1').classList.add('validate');  
                return; 
            }


            }
            
           // if (this.Entitysetup.value.chkcsv == true) {

              //  IsFormat = 1;
           // }
           // if (this.Entitysetup.value.chkxml == true) {

               // IsFormat = 1;
           // }
           // if (this.Entitysetup.value.chkexcel == true) {
                
              //  IsFormat = 1;
           // }
           // if (IsFormat == 0) {
               // document.getElementById('divformat').classList.add('validate');
                
          //  }
           
              
            if (this.arrvalue == "") {
                
                this.popuptext='Please Create Sequence File Number !!';
                this.showModalalert=true;
                return;
                
            }
            
            
       this.entitybankservice.UpdateData(JSON.stringify(_adhocdata), this.Id).subscribe(
            (data) => {

                this.adhocdata = data;
                if (this.adhocdata[0].result == 1) {
                    this.showModalsave = true;
                    this.adhocarr = [];
                     this.arrvalue = [];
                     this.Entitysetup.reset();
                    this.temp = 1;
                    this.Id = "";
                    this.BankName="";
                }
                
            });
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

    tbladhoc() {
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
            this.divadhoctable=true;
        }
    }

    BindData(event:any) {
        this.arrvalue=[];
        this.sequence="";
        this.BankName=event.target.options[event.target.options.selectedIndex].text;
        let EntityId = this.Entitysetup.value.ddlentity;
        let BankId = this.Entitysetup.value.ddlbank;
        this.entitybankservice.EditData(EntityId, BankId).subscribe(
            (data) => {
                this.tblentitybanksetup = data.Table;
                this.tblEntitybankdate = data.Table2;
                if (data.Table.length > 0) {
                    this.temp = 2;
                    this.Entitysetup.controls['ddlentity'].setValue(this.tblentitybanksetup[0].EntityId);
                    this.Entitysetup.controls['ddlbank'].setValue(this.tblentitybanksetup[0].BankId);
                    if (this.tblentitybanksetup[0].IsFileFormatCsv == true) {
                        this.Entitysetup.controls['chkcsv'].setValue(true);
                    }
                    if (this.tblentitybanksetup[0].IsFileFormatExcel == true) {
                        this.Entitysetup.controls['chkexcel'].setValue(true);
                    }
                    if (this.tblentitybanksetup[0].IsFileFormatXml == true) {
                        this.Entitysetup.controls['chkxml'].setValue(true);
                    }
                    if (this.tblentitybanksetup[0].IsFileSendDaily == true) {
                        this.Entitysetup.controls['rdoDate'].setValue('D');
                        this.isDisableddate = false;
                        this.Entitysetup.controls['txtdatepicker'].setValue(this.tblEntitybankdate[0].DailyTime);
                    }
                    else {
                        this.isDisableddate = true;
                        this.Entitysetup.controls['txtdatepicker'].setValue('');

                    }
                    if (this.tblentitybanksetup[0].IsFileSendWeekly == true) {
                        this.Entitysetup.controls['rdoDate'].setValue('W');
                        this.isDisableddate1 = false;
                        var WeeklyArray = [];
                        WeeklyArray = (this.tblEntitybankdate[0].WeeklyDate).split('_');
                        this.Entitysetup.controls['ddlday'].setValue(WeeklyArray[0]);
                        this.Entitysetup.controls['txtdatepicker1'].setValue(WeeklyArray[1]);
                        this.isDisabledday = false;
                    }
                    else {
                        this.Entitysetup.controls['ddlday'].setValue('');
                        this.Entitysetup.controls['txtdatepicker1'].setValue('');
                        this.isDisabledday = true;
                        this.isDisableddate1 = true;

                    }
                    if (this.tblentitybanksetup[0].IsFileSendMonthly == true) {
                        this.Entitysetup.controls['rdoDate'].setValue('M');
                        this.isDisableddate2 = false;
                        this.isDisableddate4 = false;
                        var MontlyArray = [];
                        MontlyArray = (this.tblEntitybankdate[0].MonthlyDate).split('_');
                        this.Entitysetup.controls['txtdatepicker2'].setValue(MontlyArray[0]);
                        this.Entitysetup.controls['txtdatepicker4'].setValue(MontlyArray[1]);
                    }
                    else {
                        this.Entitysetup.controls['txtdatepicker2'].setValue('');
                        this.Entitysetup.controls['txtdatepicker4'].setValue('');
                        this.isDisableddate2 = true;
                        this.isDisableddate4 = true;
                    }
                    if (this.tblentitybanksetup[0].IsAdhoc == true) {
                        this.Entitysetup.controls['rdoDate'].setValue('A');
                        this.isDisableddate3 = false;
                        this.isDisableddate5 = false;
                        this.Entitysetup.controls['txtdatepicker3'].setValue('');
                        this.Entitysetup.controls['txtdatepicker5'].setValue('');
                        var AdhocArray = [];
                        AdhocArray = (this.tblEntitybankdate[0].AdhocDates).split(',');
                        for (var k = 0; k < AdhocArray.length; k++) {
                            this.adhocarr.push(AdhocArray[k]);
                        }
                        this.Divadhoc=true;
                        this.btnAdhoc=true;
                        this.divadhoctable=true;
                    }
                    else {
                        this.Entitysetup.controls['txtdatepicker3'].setValue('');
                        this.Entitysetup.controls['txtdatepicker5'].setValue('');
                        this.isDisableddate3 = true;
                        this.isDisableddate5 = true;
                        this.Divadhoc=false;
                        this.btnAdhoc=false;
                        this.divadhoctable=false;
                    }
                    this.Entitysetup.controls['presentmenttime'].setValue(this.tblentitybanksetup[0].TimeDuration);
                    this.Id = this.tblentitybanksetup[0].EntityBankSetupId;
                    this.tblFilesequence = data.Table1;
                    this.Entitysetup.controls['txttotalcount'].setValue(this.tblFilesequence[0].TotalLength);
                    if (this.tblFilesequence[0].TotalLength != "") {
                        this.isDisabledtext = true;
                    }
                    for (var i = 0; i < data.Table1.length; i++) {
                        this.arrvalue.push(this.tblFilesequence[i].name);
                    }
                    this.divsequencetable=true;
                   this.RemainingCount=0;

                }
                else {
                    this.Entitysetup.reset();
                    this.Entitysetup.controls['ddlentity'].setValue(EntityId);
                    this.Entitysetup.controls['ddlbank'].setValue(BankId);
                    this.isDisabledtext=false;
                    this.adhocarr=[];
                    this.arrvalue=[];
                    this.Id="";
                    this.temp=1;
                }
            });

    }
    Removeclass() {
    
    
    
    document.getElementById('txtdatepicker').classList.remove('validate');
    document.getElementById('txtdatepicker1').classList.remove('validate');
    document.getElementById('txtdatepicker2').classList.remove('validate');
    document.getElementById('txtdatepicker3').classList.remove('validate');
    document.getElementById('txtdatepicker4').classList.remove('validate');
    document.getElementById('txtdatepicker5').classList.remove('validate');
    document.getElementById('ddlday').classList.remove('validate');
}

    removeSequencediv(data:any,i){
        
    
        var result=data;
        
        
        
        var arrvalue1 = [];
        arrvalue1 = result.split('_');
        if (arrvalue1[0] == 'Date') {
            result = arrvalue1[1].length;
        }
        else if (arrvalue1[0] == 'Increment') {
            result = arrvalue1[1].length;
        }
       
        else {
            result  = result.length.toString();
        }
        
    
        var aa = parseInt(this.RemainingCount) + parseInt(result);
        this.RemainingCount=aa;
        //this.divsequencetable = false;
        var dynamicid='divseq'+i;
        document.getElementById(dynamicid).classList.add("hidden");
        this.arrvalue.pop(data);
        
    if(this.Entitysetup.value.txttotalcount==this.RemainingCount){
        this.isDisabledtext=true;
    }
    else{
        this.isDisabledtext=false;
    }
   }

   removeAdhocdiv(data:any,i){
    var dynamid='divad'+i;
    document.getElementById(dynamid).classList.add("hidden");
    this.adhocarr.pop(data);
     
}
Removechkxml(){
    if(this.Entitysetup.value.chkxml==true)
    {
        document.getElementById('divformat').classList.remove('validate');
    }
}

Removechkexcel() {
     if(this.Entitysetup.value.chkexcel==true)
    {
        document.getElementById('divformat').classList.remove('validate');
    }
}
Removechkcsv(){
    if(this.Entitysetup.value.chkcsv==true)
    {
        document.getElementById('divformat').classList.remove('validate');
    }

}



 }

 