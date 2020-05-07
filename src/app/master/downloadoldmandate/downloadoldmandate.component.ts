import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OldMandateClass1 } from '../../../Models/Old-Mandate/OldMandateClass1';
import { OldmandateService } from '../../Services/oldmandate/oldmandate.service';
import { forEach } from '@angular/router/src/utils/collection';
import { formatDate } from '@angular/common';

@Component({
    selector: 'app-downloadoldmandate',
    templateUrl: './downloadoldmandate.component.html',
    styleUrls: ['./downloadoldmandate.component.css']
})
export class DownloadoldmandateComponent implements OnInit {
    Preloader: boolean = true;
    loading = false;
    checkFlag: number = 0;
    Ischecked: number = 0;
    IsMandateID: string;
    Isallcheck: number = 0;
    SelectionStatusOfMutants = []
    selectMandateId = [];
    i: any;
    SponserBankCode: any;
    length: any;
    ZipDownloadArray: Array<OldMandateClass1> = [];
    buttonshow:boolean;
    CheckedCount : number = 0;
    UncheckedCount: number = 0; //
    validationFlag: number = 0;
    constructor(public myservice: OldmandateService) { }
    showModal: boolean;
    SuccessModal: boolean;
    MandateMessage: boolean;
    showBindgrid:boolean;
    HeaderArray = {};
    //onClick(event) {
    //    this.showModal = true;


    //}

    hidemandate() {

        this.SuccessModal = false;
    }

    show() {
       
        
        if (this.Ischecked == 1) {
            //this.showModal = true;
            this.showModal = true;
           // alert('in');
        }
        else {
            this.MandateMessage = true;
            this.showModal=false;
        }
       
    }
    hide() {
        this.showModal = false;
    }
    ngOnInit() {
      //  let item = JSON.parse(sessionStorage.getItem('User'));
        //                console.log(item.UserId);
        //  this.currentdate;
        this.MandateMessage = false;
        this.BankdataBind();
       // this.mydate(this.FromDate, thius,ToDate, selected);
        

        let item = JSON.parse(sessionStorage.getItem('User'));
        // console.log(item.UserId);
        this.myservice.BankBind(item.UserId).subscribe((res) => {
            // console.log(res);
            this.bankdrop = res;
            this.i = Object.entries(this.bankdrop)[0][1];
            this.SponserBankCode = this.i.sponsorbankcode;
          //  alert(this.SponserBankCode)
            var u = this.SponserBankCode;
            var k = formatDate(new Date(), "yyyy-MM-dd", "en");
            this.mydate(k, k, u);

          //  mydate(FromDate, ToDate, selected)


        });
        this.Preloader = false;
        this.showBindgrid=true;


    }
    bankdrop;
    CurrentDate = new Date();
  //  list = [];
    //reject mandate
    validation(FromDate, ToDate, RejectedReason,selected){
        let reason = ((document.getElementById("myform") as HTMLInputElement).value);
       // alert(phnumber)
       // if (phnumber != null) {
           //alert(reason.length)
        if (reason.length > 0) {
           // ((document.getElementById("txtPhNumber") as HTMLInputElement).value) == "";
           //this.NachMandate.controls['Phoneno'].setValue("");
           //alert("go");
           this.RejectData(FromDate, ToDate, RejectedReason,selected);
            ///document.getElementById("txtPhNumber").setAttribute("placeholder", "Please enter 10 - digit");
        }
        else{
          //  this.RejectData(FromDate, ToDate, RejectedReason,selected);
        
          document.getElementById("myform").classList.add('validate');
            this.validationFlag=1;
        }
    }

    removeClass(){
        document.getElementById("myform").classList.remove('validate');
        this.validationFlag=0;
    }

    RejectData(FromDate, ToDate, RejectedReason,selected) {
      //  alert(FromDate + " " + ToDate + " " + RejectedReason);
        //   alert(this.selectMandateId);
        //var modal = <HTMLElement>document.getElementById('myModal');
        //modal.style.display = 'block';
     //   var dta = <HTMLElement>document.getElementById('myform');
     
        var dta = <HTMLInputElement>document.getElementById('myform');
        dta.value = "";
        this.showModal = false;
        let item = JSON.parse(sessionStorage.getItem('User'));
       // alert(item.UserId);
        if ( this.validationFlag == 0) {
            this.myservice.RejectData(FromDate, ToDate, RejectedReason, item.UserId, this.selectMandateId).subscribe((res) => {
               // console.log(res);
               // this.tabledata = res;
                this.mydate(FromDate, ToDate, selected);
               // alert('Mandate Rejected');
               this.Ischecked = 0;
               
                this.SuccessModal = true;
                
        
            })
                }
        else {
          //  alert("please checked the mandate and fill the Reason");
            //this.MandateMessage = true;
        }
     
    }


    toggleSelect = function (event) {
        //toggleSelect(event) {
        // var SelectionStatusOfMutants = [];
        this.all = event.target.checked;
        this.tabledata.forEach(function (item) {
            // console.log(item);
            item.selected = event.target.checked;
            // this.onChange(event, item);

        });

        this.checkFlag = 1;

        if (event.target.checked) {
            this.Ischecked = 1;
            this.MandateMessage = false;
            //  this.Isallcheck = 1;
        }
        else {
            this.Ischecked = 0;
        }


    }       


    onChange(event, item) {
        //console.log(item);
        //var element = <HTMLInputElement>document.getElementById("is3dCheckBox");
        //var isChecked = element.checked;
        //if (count == '') {
        this.checkFlag = 0;
        // this.IsMandateID = item.mandateid;
        //var CheckedCount = 0, UncheckedCount = 0;

        if (event.target.checked) {
            this.MandateMessage = false;
            this.SelectionStatusOfMutants.push(item);
            this.selectMandateId.push(item.mandateid);
 
          //  console.log(this.SelectionStatusOfMutants);
          console.log(this.SelectionStatusOfMutants);
          console.log(this.selectMandateId);
          //  alert('checked')
            this.Ischecked = 1;
            this.CheckedCount++;

        }
        else {
            //

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
           // alert('please select mandate ');
            // this.SelectionStatusOfMutants.pop();
            // UncheckedCount++;
            // if (UncheckedCount == CheckedCount) {
            //     this.Ischecked = 0;
            // }
        }
        //}
        //else
        //{
        //    this.bindgrid.forEach(function (item) {
        //        // console.log(item);
        //        //item.selected = event.target.checked;
        //        // this.onChange(event, item);
        //        if (event.target.checked) {
        //            this.SelectionStatusOfMutants.push(item);
        //            alert('c')
        //        }
        //        else {
        //            this.SelectionStatusOfMutants.pop();
        //            alert('nc')
        //        }

        //    });

        //}
    }   

    //ifchecked(mandateid, Customer1, DateOnMandate, IsPrint, IsScan, Refrence1, Amount, AcNo, Code, BankName, Frequency, debittype, ToDebit, createdon) {

    //    //  console.log(mandateid);

    //    var aa =
    //    {
    //        'mandateid': mandateid,
    //        'Customer1': Customer1,
    //        'DateOnMandate': DateOnMandate,
    //        'IsPrint': IsPrint,
    //        'IsScan': IsScan,
    //        'Refrence1': Refrence1,
    //        'Amount': Amount,
    //        'AcNo': AcNo,
    //        'Code': Code,
    //        'BankName': BankName,
    //        'Frequency': Frequency,
    //        'debittype': debittype,
    //        'ToDebit': ToDebit,
    //        'createdon': createdon
    //    }

    //    this.list.push(aa);
    //    console.log(this.list);
    //}

    BankdataBind() {
        let item = JSON.parse(sessionStorage.getItem('User'));
        // console.log(item.UserId);
        this.myservice.BankBind(item.UserId).subscribe((res) => {
            // console.log(res);
            this.bankdrop = res;
        });
    }
    tabledata;
    SearchByReference(Reference) {
        //var formElement = <HTMLFormElement>document.getElementById('divLoarder');
        //formElement.style.display = 'block';

        let item = JSON.parse(sessionStorage.getItem('User'));
        // console.log(item.UserId);
        //var c = Reference;
        //var e = [
        //    {
        //        'Reference': c
        //    }
        //]
        // var obj = JSON.stringify(e);
        // alert(obj);
        // console.log(e);
        this.myservice.Bindbyrefrence(item.UserId, Reference).subscribe((res) => {
            // console.log(res);
            this.tabledata = res;

            //var formElement = <HTMLFormElement>document.getElementById('divLoarder');
            //formElement.style.display = 'none';
        });
    }


    mydate(FromDate, ToDate, selected) {
        //   alert(FromDate + "  " + ToDate + " " + selected);
       
        //var formElement = <HTMLFormElement>document.getElementById('divLoarder2');
        //formElement.style.display = 'block';
        this.Preloader = true;
        this.showBindgrid=false;
        if (FromDate != null && ToDate != null) {
            let item = JSON.parse(sessionStorage.getItem('User'));
            //  console.log(item.UserId);
            //var a = FromDate;
            //var b = ToDate;
            //var c = selected;
            this.loading = true;
            this.myservice.BindbyDate(item.UserId, FromDate, ToDate, selected).subscribe((res) => {
                this.Preloader = false;
                this.showBindgrid=true;
                  // console.log(res);
                 
                this.tabledata = res;
                if(this.tabledata.length > 0 ){
                    this.buttonshow=true;
                  }
                  else{
                      this.buttonshow=false;
                  }
            });
           // this.loading = false;
        }
       
        //  console.log(this.list);
        //var formloder = <HTMLElement>document.getElementById('divLoarder2');
        //formloder.style.display = 'none';
        this.loading = false;
    }

    SelectBank(FromDate, ToDate, selected) {
        let item = JSON.parse(sessionStorage.getItem('User'));
        // console.log(item.UserId);
        this.myservice.BindbyBank(item.UserId, FromDate, ToDate, selected).subscribe((res) => {
            //  console.log(res);
            this.tabledata = res;
            if(this.tabledata.length > 0 ){
                this.buttonshow=true;
              }
              else{
                  this.buttonshow=false;
              }
        });
    }

    ConvertToCSV(objArray) {
        //this.HeaderArray = {
        
        //}
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
    downloadExcel() {
       // alert("this method is working");

       // alert(this.Ischecked);
        console.log(this.SelectionStatusOfMutants);
    
        if (this.Ischecked == 1) {
            if (this.checkFlag == 0) {
                var csvData = this.ConvertToCSV(JSON.stringify(this.SelectionStatusOfMutants));
                this.MandateMessage = false;
            }
            else {
                var csvData = this.ConvertToCSV(JSON.stringify(this.tabledata));
                this.MandateMessage = false;
            }
       // var csvData = this.ConvertToCSV(JSON.stringify(this.list));
        var a = document.createElement("a");
        a.setAttribute('style', 'display:none;');
        document.body.appendChild(a);
        var blob = new Blob([csvData], { type: 'text/csv' });
        var url = window.URL.createObjectURL(blob);
        a.href = url;
        var kex = formatDate(new Date(), "ddMMyyyy", "en");
        a.download = 'Avasfin_'+kex+'_1.xls';/* your file name*/
        a.click();
            return 'success';
        }
        else {
           // alert('checkbox not selected');
            this.MandateMessage = true;
        }
    }
    //nontrade;
    //trade;
    //allNonTrades(event) {
    //    const checked = event.target.checked;
    //    this.nontrade.forEach(item => item.selected = checked);
    //}

    //allTrades(event) {
    //    const checked = event.target.checked;
    //    this.trade.forEach(item => item.selected = checked);
    //}

    //checkedDemo(abc) {
    //    console.log(abc);
    //}


    //downloadfileComponent(filePath: string) {
    //        this.appService.downloadfile(filePath)
    //        .subscribe(data => this.getZipFile(data)),
    //        error => console.log("Error downloading the file."),
    //        () => console.log('Completed file download.');
    //}
    downloadScannedMandate() {
        this.ZipDownloadArray = [];
        if (this.Ischecked == 1) {
            if (this.checkFlag == 0) {

                this.ZipDownloadArray = this.SelectionStatusOfMutants;
            }
            else {
                this.ZipDownloadArray = this.tabledata
            }
            if (this.ZipDownloadArray.length == 0) {
                // alert("please select mandate");
            }
            else {
                this.getZipFile(JSON.stringify(this.ZipDownloadArray));
            }
        }
        else {
            // alert('checkbox not selected');

            this.MandateMessage = true;

        }
    }


    getZipFile(data: any) {
        var a: any = document.createElement("a");
        document.body.appendChild(a);

        a.style = "display: none";
        var blob = new Blob([data], { type: 'application/zip' });

        var url = window.URL.createObjectURL(blob);

        a.href = url;
        a.download = "Zip_Avasfin_18042020_1.zip";
        a.click();
        window.URL.revokeObjectURL(url);

    }







}
