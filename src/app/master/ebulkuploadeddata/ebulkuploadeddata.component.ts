import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { forEach } from '@angular/router/src/utils/collection';
import { formatDate } from '@angular/common';
import { count } from 'rxjs/operators';
import{EbulkUploadedDataServiceService} from '../../Services/EBulkUploadedData/ebulk-uploaded-data-service.service';
import { Table1 } from 'src/Models/EntityBankSetup/table1';
@Component({
  selector: 'app-ebulkuploadeddata',
  templateUrl: './ebulkuploadeddata.component.html',
  styleUrls: ['./ebulkuploadeddata.component.css']
})
export class EbulkuploadeddataComponent implements OnInit {
  topVal: any=50;
  EntityId:any;
  UserId:any;
  MainTableData:any;
  MainTableCount:any;
  InvalidTableData:any;
  InvalidTableCount:any;
  ValidTableData:any;
  ValidTableCount:any;
  Activityid_ID:any;
  AccountIssueTableData:any;
  AccountIssueTableCount:any;
  MisMatchTableData:any;
  MisMatchTableCount:any;
  AccountValiTableData:any;
  AccountValiTableCount:any;
  constructor(private myservice: EbulkUploadedDataServiceService,private router:Router) { }

  ngOnInit() {
    let Activity_Id = sessionStorage.getItem('ActivityId1');
    let TEUH_ID=sessionStorage.getItem('TEUHID1');
    let item = JSON.parse(sessionStorage.getItem('User'));
    this.UserId = item.UserId;
    this.EntityId = item.ReferenceId;
    this.gridData(Activity_Id,this.UserId,this.EntityId,TEUH_ID,this.topVal);
  }

  gridData(Activity_Id,UserId,EntityId,TEUH_ID,topVal){
   // alert("ActivityID="+Activity_Id+"  "+"UserId="+UserId+"  "+"EntityId="+EntityId+"  "+"TEUH_ID="+TEUH_ID+" "+"topVal="+topVal);
       this.myservice.GetGridAllData(Activity_Id,UserId,EntityId,TEUH_ID,topVal).subscribe((res)=>{
       //  console.log(res);
       this.MainTableData=res.Table;
       this.MainTableCount=res=Table1;
       this.InvalidTableData=res.Table4;
       this.InvalidTableCount=res.Table5;
       this.ValidTableData=res.Table2;
       this.ValidTableCount=res.Table3;
       this.Activityid_ID=res.Table6;
       this.AccountIssueTableData=res.Table7;
       this.AccountIssueTableCount=res.Table8;
       this.MisMatchTableData=res.Table9;
       this.MisMatchTableCount=res.Table10;
       this.AccountValiTableData=res.Table11;
       this.AccountValiTableCount=res.Table12;
       })

  }

}
