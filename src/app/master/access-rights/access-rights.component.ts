import { Component, OnInit } from '@angular/core';
import { AccessRightsService } from '../../services/accessrights/access-rights.service';
import { AccessRightsEntityDetails } from '../../../models/accessrights/access-rights-entity-details';
import { AccessRightsDetails } from '../../../models/accessrights/access-rights-details';

@Component({
  selector: 'app-access-rights',
  templateUrl: './access-rights.component.html',
  styleUrls: ['./access-rights.component.css']
})
export class AccessRightsComponent implements OnInit {

 
  public entitydDetails: AccessRightsEntityDetails[]; 
  public AccessRightDetails: AccessRightsDetails;
  //dataArray: Array<AccessRightsDetails> = [];
  //public LAccessStore: Array<AccessRightsStoreLink> = [];
  //public RAccessStore: AccessRightsStoreRead;
  //public AAccessStore: AccessRightsStoreactive;
  //Arratdata = [];
  
  selectedItems: any = [];
  Ischecked: number = 0;
  showModalSuccess: boolean;
  storeLinkID = [];
  showdvCheckbox:boolean;
 
   storeIsRead = [];
  storeIsActive = [];
  numbers = [];
  constructor(private _accessRightsService: AccessRightsService) { }

  ngOnInit() {
      this.getEntityDetails();
      this.showdvCheckbox=false;
      
      
  }

  hideSuccess() {
     // alert('hide');
      this.showModalSuccess = false;
      this.getEntityDetails();
      this.showdvCheckbox=false;
  }

  showSuccess() {
      this.showModalSuccess = true;
  }

  getEntityDetails() {
    
      let item = JSON.parse(sessionStorage.getItem('User'));
      this._accessRightsService.getEntityDetails(item.UserType, item.ReferenceId).subscribe(
          (data) => {
              //(res => this.entitydDetails = res, error => console.log(error))
              this.entitydDetails = data;
              this.showdvCheckbox=true;
          })
          
  }

  getLinksForUser(data) {
      let item = JSON.parse(sessionStorage.getItem('User'));
      //alert(data.userid)
      //alert(data)
      //userid
      this._accessRightsService.getLinksForUser(data, item.UserType).subscribe
          (res => {
              this.AccessRightDetails = res,
                  this.Ischecked = 0,
                  this.checkAccessRights(res),
              error => console.log(error)
          })
      

  }
  checkAccessRights(data) {
     


      if (this.Ischecked == 0) {
          //for (var i = 0; i < data.length; ++i) {
          //    this.storeLinkID.pop();
          //    this.storeIsRead.pop();
          //    this.storeIsActive.pop();

          //}
          this.storeLinkID = [];
          this.storeIsRead = [];
          this.storeIsActive = [];



          for (var i = 0; i < data.length; ++i) {
              this.storeLinkID.push(data[i]["LinkID"]);
              this.storeIsRead.push(data[i]["IsRead"]);
              this.storeIsActive.push(data[i]["IsRead"]);
              
          }
          //console.log('ON page load start');
          //console.log(this.storeLinkID);
          //console.log(this.storeIsRead);
          //console.log(this.storeIsRead);
          //console.log('ON page load end');

          this.Ischecked = 1;
         
      }

      else {
          var ids = data.LinkID;
          var index = 0;

          for (var i = 0; i < this.storeLinkID.length; ++i) {
              if (this.storeLinkID[i] == ids) {
                  index = i;
              }
          }
          if ((<HTMLInputElement>document.getElementById(ids)).checked == true)
          {
              
             // console.log('index = ' + "" + index);

                  this.storeLinkID.splice(index, 1, data.LinkID)
                  this.storeIsActive.splice(index, 1, true)
                  this.storeIsRead.splice(index, 1,true)
                  
          }
          else {

              this.storeIsActive.splice(index, 1, false)
              this.storeIsRead.splice(index, 1, false)

          }
          //console.log('ON change start');
          //console.log(this.storeLinkID);
          //console.log(this.storeIsRead);
          //console.log(this.storeIsRead);
          //console.log('ON change end');

        
      }
  }

  
  InsertData(userid) {
    //  alert('hi');
      let item = JSON.parse(sessionStorage.getItem('User'));
      this._accessRightsService.getInsertdata(userid, this.storeIsActive, this.storeIsRead, this.storeLinkID, item.UserId).subscribe
          ((res) => {
              this.AccessRightDetails = res.Table;
              debugger
                 // this.user = data;
                 console.log(this.AccessRightDetails[0])
              if (this.AccessRightDetails[0].result == 1) {

                  // this.message = 'User already exists';
                  this.showSuccess();
              }
              else {
                  alert('error');
              }
              error => console.log(error)
          })
      
  }








}
