import { Component, OnInit } from '@angular/core';
import { BulkEmandateAttributeClass } from '../../../Models/BulkEmandate/BulkEmandateAttributeClass';
import { BuldEmandateService } from '../../../app/Services/BulkEMandate/buld-emandate.service';
import { Route, Router } from '@angular/router';
import { forEach } from '@angular/router/src/utils/collection';
import { formatDate } from '@angular/common';
import { count } from 'rxjs/operators';

@Component({
  selector: 'app-bulk-emandate',
  templateUrl: './bulk-emandate.component.html',
  styleUrls: ['./bulk-emandate.component.css']
})
export class BulkEmandateComponent implements OnInit {

    constructor(private myservice: BuldEmandateService,private router:Router) { }
    ActivityType: string = 'E';
    topVal: any=50;
    EntityId: any;
    tabledata: any;
    datacount: any;
    count: any;
    EntityId123: any;
    Preloader: boolean = true;
    ngOnInit() {
        this.Preloader = false;
        //ActivityType: string = 'p';
        let item = JSON.parse(sessionStorage.getItem('User'));
// this.UserId = item.UserId;
        this.EntityId = item.ReferenceId;
        //alert(this.EntityId);
     
        this.BindGrid(this.EntityId, this.topVal, this.ActivityType);
    }

    BindGrid(EntityId, topVal, ActivityType) {
        let item = JSON.parse(sessionStorage.getItem('User'));
        this.Preloader = true;
        this.myservice.GetGridAllData(item.UserId, EntityId, topVal, ActivityType).subscribe((res) => {
          //  console.log(res);
            this.tabledata = res.Table;
            this.datacount = res.Table1;
            this.Preloader = false;
            console.log(this.datacount);
            //this.count = JSON.stringify(this.datacount);
            var str = JSON.stringify(this.datacount);
            this.count = str.replace('[{"Totalcount":', '').replace('}]', '');
            if (this.count == 0) {
                this.topVal = this.count;
            }
            else {
                this.topVal = this.count;
            }
          //  alert(this.tabledata.length);
         //  alert(JSON.stringify(res));
        });
    }

    pagenext() {
        let item = JSON.parse(sessionStorage.getItem('User'));
        this.topVal += 50;
        if (this.topVal <= this.count) {
            this.BindGrid(this.EntityId, this.topVal, this.ActivityType);
        }
        else {
            this.topVal = this.count
            this.BindGrid(this.EntityId, this.topVal, this.ActivityType);
        }
      //  console.log(this.topVal);
        
    }
    Redirectpage(){

        window.location.href="../../EBulkUploadedData";

    }

    ConvertToCSV(objArray) {
        //this.HeaderArray = {

        //}
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

            //if (i == 0) {
            //    for (var index in this.HeaderArray) {
            //        if (line != '') line += ','

            //        line += this.HeaderArray[index];
            //    }
            //    str += line + '\r\n';
            //}

            //var line = '';
            for (var index in array[i]) {
                if (line != '') line += ','

                line += array[i][index];
            }
            str += line + '\r\n';
        }
        return str;
    }




    downloadExcel() {
        var csvData = this.ConvertToCSV(JSON.stringify(this.tabledata));
            var a = document.createElement("a");
            a.setAttribute('style', 'display:none;');
            document.body.appendChild(a);
            var blob = new Blob([csvData], { type: 'text/csv' });
            var url = window.URL.createObjectURL(blob);
            a.href = url;
            a.download = 'MandateExcel.csv';/* your file name*/
            a.click();
            return 'success';
    }

    UserId:any;
    rbulkupdData(data){
        
         var ActivityId=data.ActivityId;
         var TEUHID=data.TEUHID;
        
         var ActivityId1= sessionStorage.setItem('ActivityId1',ActivityId);
         var TEUHID1= sessionStorage.setItem('TEUHID1',TEUHID);

        //  alert(TEUHID1);
          //  let item1 = sessionStorage.getItem('ActivityId1');
      
    //  window.location.href="../../dashboard?ID="+ID+""; 
      
      let item = JSON.parse(sessionStorage.getItem('User'));
    //    this.UserId = item.UserId;
    //           this.EntityId = item.ReferenceId;
  
              
    //          alert(ActivityId1+"  "+this.UserId+"  "+this.EntityId+"  "+TEUHID1+" "+this.topVal);
   this.router.navigate(['/eBulkUploadedData']);
    }


   


}
