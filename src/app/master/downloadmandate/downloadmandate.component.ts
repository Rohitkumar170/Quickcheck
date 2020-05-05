/// <reference path="../../../models/downloadmandate/downloadmandategrid.ts" />
/// <reference path="../../services/downloadmandate/downloadmandate.service.ts" />
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DownloadmandateService} from '../../services/downloadmandate/downloadmandate.service';
import { DownloadMandateDetails } from '../../../Models/downloadmandate/download-mandate-details';
import { Downloadmandategrid } from '../../../Models/downloadmandate/downloadmandategrid';
import { formatDate } from '@angular/common';
@Component({
  selector: 'app-downloadmandate',
  templateUrl: './downloadmandate.component.html',
    styleUrls: ['./downloadmandate.component.css'],
    providers: [DownloadmandateService]  
})
export class DownloadmandateComponent implements OnInit {
    ZipDownloadArray: Array<DownloadMandateDetails> = [];
    errorMessage: string; public errormsg: any;
    HeaderArray = {}; Preloader: boolean = true;
    //SelectionStatusOfMutants: any = [{}];
    SelectionStatusOfMutants = [];
    temp = [];
    storeMandateID = [];
    //SelectionStatusOfMutants: Downloadmandategrid[];
    selectMandateId = [];
    showBindgrid:boolean;

    dmandateForm: FormGroup;
    public dmandate: DownloadMandateDetails;
    bindgrid: Downloadmandategrid[];
    loading: boolean = false;
    //dmandate
    userID = "84";
     
    i: any;
    SponserBankCode: any;
    
    checkFlag: number = 0;
    Ischecked: number = 0;
    IsMandateID: string;
    Isallcheck: number = 0;
    IsCHFlag: number = 0;

    dataArray:any;
  //  showlabel: boolean;
    todate: Date;
    fromdate: Date;
    Bank: string;
    sponsorbankcode=new FormControl('');
    d1: string;
    selected: string;
    selectedAll: any;
    length: any;

    tempFromDate: any;
    tempToDate: any;
    tempBank: any;
    temprefNo: any;

    CheckedCount : number = 0;
    UncheckedCount: number = 0;
//     dmandateForm1 = new FormGroup({
//    scode: new FormControl(this.dmandate[0]),
//});showModalrejectmandate
    
    //selected: false;
    //todate = new FormControl('');
    //fromdate = new FormControl('');
    showModalrejectmandate: boolean;
    
    showModal: boolean;
    showModalSuccess: boolean;
    constructor(private _downloadMandateService: DownloadmandateService, private fb: FormBuilder) {
        

        
        this.fromdate = new Date();
        this.todate = new Date();
        this.dmandateForm = fb.group({
            
            'referenceNo': [null],
            'todate': [null],
            'fromdate': [null]
            // will use the property in html page
        })  
       
    }

    show() {
        if (this.Ischecked == 1) {
            //this.showModal = true;
            this.showModalrejectmandate = true;
           // alert('in');
        }
        else {
            this.errormsg = "Please select Mandate";
        }
    }
    //hide() {
    //    this.showModal = false;
       
    //}
    hideSuccess() {
        this.showModalSuccess = false;
    }

    // showSuccess() {
    //     this.showModalSuccess = true;
    // }

    // onClick() {
    //     this.showModalrejectmandate = true;


    // }

    cancelrejecthide() {
       // this.showModalSuccess=false;
        this.showModalrejectmandate = false;
        

    }


   
    ngOnInit() {
        
        this.getdmandate();
        this.showBindgrid=true;
        // this.fromdate = parseDate(fromdate : string);
       // console.log(this.dmandateForm1.value);

      //  this.dmandate.sponsorbankcode
        this.Preloader = false;
        var d = new Date(),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;

        this.d1= [year, month, day].join('-');
        //this.fromdate = new Date();
        //this.todate = new Date();
        //this.fromdate = this.d1;
        //this.todate = this.d1;

        //alert(this.d1);


       // this.todate.setValue(this.d1);
       // this.fromdate.setValue(this.d1);
        //this.dmandateForm.setValue(this.selected);
        //for (var x = 0; x < this.dmandate.length; x++) {
        //    if (this.dmandate[x].sponsorbankcode == this.selectedReleaseId) {
        //        this.Bank = this.dmandate[x].name;
        //    }
        //}
        // this.dmandateForm.setValue(this.dmandate[0].sponsorbankcode);
        // this.sponsorbankcode.setValue(this.selected);
       // this.Bank = this.dmandateForm.controls['sponsorbankcode'].value;
       // alert(this.Bank);

        //this.BindGrid(this.d1, this.d1, '000');

        let item = JSON.parse(sessionStorage.getItem('User'));
       // console.log(item.UserId);
        this._downloadMandateService.getBankDropDown(item.UserId).
            subscribe((data) => {
                this.dmandate = data;
                this.i = Object.entries(this.dmandate)[0][1];
                this.SponserBankCode = this.i.sponsorbankcode;
               // alert(this.SponserBankCode)
                var u = this.SponserBankCode;
                var k = formatDate(new Date(), "yyyy-MM-dd", "en");
                this.BindGrid(k, k, u,'');
            });


      
        
    }
   
    //selectAll() {
    //    this.selectedAll = !this.selectedAll;

    //    for (var i = 0; i < this.bindgrid.length; i++) {
    //       // this.bindgrid[i].selected = this.selectedAll;
    //    }
    //}

    //checkAll(ev) {
    //    this.bindgrid.forEach(x => x.state = ev.target.checked)
    //}

    //isAllChecked() {
    //    return this.bindgrid.every(_ => _.state);
    //}

    toggleSelect = function (event) {
            this.all = event.target.checked;
        this.bindgrid.forEach(function (item) {
           // console.log(item);
            item.selected = event.target.checked;
           // this.onChange(event, item);
           
        });

        this.checkFlag = 1;
       
        if (event.target.checked) {
            this.SelectionStatusOfMutants = [];
                this.Ischecked = 1;
                
                this.Isallcheck = 1;
               
                let item = JSON.parse(sessionStorage.getItem('User'));
                if (this.temprefNo == '') {
                   // this.Preloader = true;
                    this._downloadMandateService.getBindGrid(item.UserId, this.tempToDate, this.tempFromDate, this.tempBank)
                        .subscribe((data) => {
                           // this.allCheckData(data);
                            for (var i = 0; i < data.length; ++i) {
                                this.SelectionStatusOfMutants.push(data[i]);
                            }


                           
                        });
                }
                else {
                    
                   // this.Preloader = true;
                    this._downloadMandateService.getBindGridRef(item.UserId, this.temprefNo)
                        .subscribe((data) => {
                           
                           // this.allCheckData(data);

                            for (var i = 0; i < data.length; ++i) {
                                this.SelectionStatusOfMutants.push(data[i]);
                            }
                          
                        });
                }
                

            }
            else {
                this.Ischecked = 0;
                this.Isallcheck = 0;
                this.SelectionStatusOfMutants = [];
               
            }
      
       

    }     


    //allCheckData(data) {

    //    for (var i = 0; i < data.length; ++i) {
    //          this.SelectionStatusOfMutants.push(data[i]);
    //    }

    //}

    


    



    onChange(event, item) {

        
       this.Removelabel();
        this.checkFlag = 0;
       
            if (event.target.checked) {

                
                
                this.SelectionStatusOfMutants.push(item);
                this.selectMandateId.push(item.mandateid);

                console.log(this.SelectionStatusOfMutants);



                this.Ischecked = 1;
                this.CheckedCount++;

            }
            else {
               
                var index = 0;
                var ids = item.mandateid;
                console.log('select');
                console.log(this.SelectionStatusOfMutants[0]["mandateid"]);
               for (var i = 0; i < this.SelectionStatusOfMutants.length; ++i) {
                    if (this.SelectionStatusOfMutants[i]["mandateid"] == ids) {
                        index = i;
                    }
                }
                console.log("Index= " + "" + index);
                this.SelectionStatusOfMutants.splice(index, 1)

                console.log(this.SelectionStatusOfMutants);

                var index1 = 0;
                // var ids = item.mandateid;
                console.log('selectMandateID');
                 console.log(this.selectMandateId[0]);
                
                for (var i = 0; i < this.selectMandateId.length; ++i) {
                     if (this.selectMandateId[i] == ids) {
                         index1 = i;
                     }
                 }
                 console.log("Index= " + "" + index1);
                 this.selectMandateId.splice(index1, 1)


                this.UncheckedCount++;

                if (this.UncheckedCount == this.CheckedCount) {
                    this.Ischecked = 0;
                   
                }

               

                
               
            }
    }   

    
    //onCheckdownload() {

    //    this.bindgrid.forEach(function (item) {
    //        // console.log(item);
    //        item.target.checked;
    //        // this.onChange(event, item);

    //    });
    //}


    SubmitToDate() {

        const fromvalue = this.dmandateForm.value;
        console.log(fromvalue);
    }

    get AllFields() { return this.dmandateForm.controls; }

    getdmandate() {
        

        let item = JSON.parse(sessionStorage.getItem('User'));
        //console.log(item.UserId);
        this._downloadMandateService.getBankDropDown(item.UserId).subscribe
            (res => this.dmandate = res,
       // this.i = object.entries(this.dmandate)[0][1];
            error => this.errorMessage = <any>error);  
       // console.log(this.dmandate);
    }
    //onSearch() {
    //   // this.AllFields.sponsorbankcode.value;
    //    this._downloadMandateService.getbtnSearch(this.userID, this.AllFields.referenceNo.value).subscribe(
    //   res=>this.BindGrid())
   // }
    Removelabel() { this.errormsg = ''; }
    BindGrid(FromDate, ToDate, Bank, refNo) {
        //alert(FromDate + ToDate + Bank);
        //this.fromdate = FromDate;
        //this.todate = ToDate;
        //this.Bank = Bank;

        //let item = JSON.parse(sessionStorage.getItem('User'));
        //console.log(item.UserId);

       // console.log(refNo);
        this.tempFromDate = FromDate;
        this.tempToDate = ToDate;
        this.tempBank = Bank;
        this.temprefNo = refNo;
        let item = JSON.parse(sessionStorage.getItem('User'));
        if (refNo == '') {
            this.Preloader = true;
            this.showBindgrid=false;
            this._downloadMandateService.getBindGrid(item.UserId, ToDate, FromDate, Bank)
                .subscribe((data) => {
                    this.Preloader = false;
                    this.bindgrid = data;
                    this.StoreMandateId(data);
                    this.showBindgrid=true;

                   // this.dataArray = Object.entries(this.bindgrid)[0][1];
                   // this.dataArray.push(this.bindgrid);
                });
          //  this.loading = false;
            //if (this.dataArray.length > 0) {

            //    this.showlabel = true;
            //}

        }
        else {
            //console.log(refNo);
            this.Preloader = true;
            this.showBindgrid=false;
            this._downloadMandateService.getBindGridRef(item.UserId, refNo)
                .subscribe((data) => {
                    this.Preloader = false;
                    this.bindgrid = data;
                    this.StoreMandateId(data);
                    this.showBindgrid=true;
                   // this.dataArray.push(this.bindgrid);
                    refNo = '';
                });
            this.loading = false;

            var dta = <HTMLInputElement>document.getElementById('reference');
            dta.value = "";

        }
    }

    StoreMandateId(data) {
        for (var i = 0; i < data.length; ++i) {
            this.storeMandateID.push(data[i]["mandateid"]);
          
        }

        console.log("After bind storemandateid");
        console.log(this.storeMandateID);

    }

    RejectMandate(fromdate, todate, bank, rejectcomnt) {
      //  this.Ischecked = 1
       // if (this.Ischecked == 1) {
        
            let item = JSON.parse(sessionStorage.getItem('User'));
            // console.log(item.UserId);
            this.showModal = false;
            var dta = <HTMLInputElement>document.getElementById('myform');
            dta.value = "";
            //var rejectcomnt = 'test131';
       // alert(fromdate + '' + todate + '' + bank + '' + rejectcomnt + '' + item.UserId + '' + this.selectMandateId );
            this._downloadMandateService.getRejectMandate(item.UserId, fromdate, todate, this.selectMandateId, rejectcomnt).subscribe((res) => {
                console.log(res),
                    error => console.log(error); this.Ischecked == 0;this.BindGrid(fromdate, todate, bank, '')
                this.showModalrejectmandate = false;
                //alert('Mandate Rejected');
               // this.showSuccess();
               
        })
        
        //}
        //else {
        //    alert('Please select checkbox');
        //}
}





    ConvertToCSV(objArray) {
        this.HeaderArray = {
            mandateid: "Mandate ID", Customer1: "Name", DateOnMandate: "Date On Mandate", IsPrint: "Mandate Printed",
            IsScan: "Mandate Scan", Refrence1: "Reference", Amount: "Amount", AcNo: "Account No.", Code: "IFSC/MICR",
            BankName: "Bank Name", Frequency: "Frequency", DebitType: "Debit Type", ToDebit: "Debit To", createdon: "Created on"
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
            }

            var line = '';
            for (var index in array[i]) {
                if (line != '') line += ','

                line += array[i][index];
            }
            str += line + '\r\n';
        }
        return str;
    }
    download() {

        if (this.Ischecked == 1) {
        console.log(this.SelectionStatusOfMutants.length);
        if (this.SelectionStatusOfMutants.length > 0) {
            var csvData = this.ConvertToCSV(JSON.stringify(this.SelectionStatusOfMutants));

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
    }
        else {
            
            this.errormsg = "Please select Mandate";
        }
    }


    downloadScannedMandate() {
        this.ZipDownloadArray = [];
        if (this.checkFlag == 0) {
            this.getZipFile(JSON.stringify(this.SelectionStatusOfMutants));
        }
        else {
            this.getZipFile(JSON.stringify(this.bindgrid));
        }
    }


    getZipFile(data: any) {
        var a: any = document.createElement("a");
        document.body.appendChild(a);

        a.style = "display: none";
        var blob = new Blob([data], { type: 'application/zip' });

        var url = window.URL.createObjectURL(blob);

        a.href = url;
        a.download = "test.zip";
        a.click();
        window.URL.revokeObjectURL(url);

    }






}
