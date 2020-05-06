import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder, FormArray } from '@angular/forms';
import { UserServiceService } from '../../Services/User/user-service.service';
import { User } from '../../../Models/User/user';
import { SponsorBankCode } from '../../../Models/User/sponsor-bank-code';
import { CategoryCode } from '../../../Models/User/category-code';
import { Maker } from '../../../Models/User/maker';
import { NachUser } from '../../../Models/User/nach-user';
import { Checker } from '../../../Models/User/checker';
import { AccessRights } from '../../../Models/User/access-rights';
import { Users } from '../../../Models/User/users';
import { Bankval } from '../../../Models/User/bankval';
import { TempData } from '../../../Models/User/temp-data';
import { Getsponsorcode } from '../../../Models/User/getsponsorcode';
import { GetMaker } from '../../../Models/User/get-maker';
import { GetAccessRights } from '../../../Models/User/get-access-rights';
import { GetCategoryCode } from '../../../Models/User/get-category-code';
import { Userdata } from '../../../Models/User/userdata';
//import { Directive, HostListener } from '@angular/core';
//import { UserServiceService } from 'ClientApp/app/Services/user/user-service.service';


@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

    UserForm: FormGroup; HeaderArray; DetailArray = []; checkbulkuploadlink = []; chkvideolink = []; chkuserlist = [];

    user: Users;
    userdata: User;
    userreport: Userdata;
    categorycode: CategoryCode; sponsorbankid: Getsponsorcode; getmaker: GetMaker; getAccessRight1: GetAccessRights; getcatcode: GetCategoryCode; getAccessRight2: GetAccessRights;
    bankacc: Bankval;
    setSelectedRow: Function;
    tempdata: TempData;
    submitted = false; Temp: number = 1;
    public tableid: boolean = false;
    public formid: boolean = false;
    Preloader:boolean=false;
    // public divuserlist:boolean = false;
    public divaccessright: boolean = false;
    disabled = false;
    ShowFilter = false;
    limitSelection = false;
    public sponsorbankcode: SponsorBankCode;
    selectedItems: any = [];
    dropdownSettings: any = {};
    Page_Count: number = 1;
    Search_Text: string = "";
    maker: Maker;
    nachuser: NachUser;
    checker: Checker;
    bulkupload: AccessRights;
    bulkvideo: AccessRights;
    SponsorBankCodeId: any = [];
    public divNachUser: boolean = false;
    public divplusicon: boolean = false;
    public divPresentmentAccess: boolean = false;
    public divMaker: boolean = false;
    public dvBulkUpload: boolean = false;
    public dvVideos: boolean = false;
    public dvtxtBankValidationcount: boolean = false;
    public dvtxtAccountValidationcount: boolean = false;
    message: string;
    linkid: number = 0;
    public AcvalUsercount: string = "";
    public bankvalUsercount: string = "";
    public dvEnableCancel: boolean = false;
    TotalCount;
    isSelected: boolean = false;
    isSingleChk: boolean = false;
    Userid: number = 0;
    selected_checkbox = {};
    constructor(private formBuilder: FormBuilder, private userservice: UserServiceService) { }
    showModal: boolean;
    showModalsave: boolean;
    showModalalert: boolean;
    IsViewAll: number = 0;
    lblalluser: boolean = false;

    onClick(event) {
        this.showModal = true;


    }

    hide() {
        this.showModalsave = false;
        this.showModal = false;
        this.showModalalert = false;
    }

    ngOnInit() {
        this.UserForm = this.formBuilder.group({
            UserName: ['', Validators.required],
            sponsorbankcode: ['', Validators.required],
            categorycode: ['', Validators.required],
            Type: ['', Validators.required],
            PhoneNo: new FormControl(),
            EmailId: new FormControl(),
            emailsent: new FormControl(),
            chkDownload: new FormControl(),
            chkCreate: new FormControl(),
            chkEdit: new FormControl(),
            chkView: new FormControl(),
            chkRefEdit: new FormControl(),
            nachuser: new FormControl(),
            chkUmrnHistory: new FormControl(),
            chkUmrnUpload: new FormControl(),
            chkAllUMRN: new FormControl(),
            chknachpresentment: new FormControl(),
            chkPresentMaker: new FormControl(),
            chkPresentChecker: new FormControl(),
            maker: new FormControl(),
            bankval: new FormControl(),
            accountval: new FormControl(),
            chkEnableCancel: new FormControl(),
            chkbulkuploadlink: new FormControl(),
            chkvideolink: new FormControl()



        });
        this.setSelectedRow = function (index) {
            this.selectedRow = index;
        }

       
        this.formid = false;
        this.divaccessright = false;
        this.divNachUser = false;
        this.divplusicon = false;
        this.divPresentmentAccess = false;
        this.divMaker = false;
        this.dvBulkUpload = false;
        this.dvVideos = false;
        this.dvtxtBankValidationcount = false;
        this.dvtxtAccountValidationcount = false;
        this.dvEnableCancel = false;
        this.isSelected = false;
        this.lblalluser = false;
        this.bindUser();

        document.getElementById("btnEdit").setAttribute("disabled", "disabled");
        document.getElementById("btnBack").setAttribute("disabled", "disabled");
        document.getElementById("btnSave").setAttribute("disabled", "disabled");
       
        this.bindPresentmentMaker();
        this.BindPresentmentChecker();
        //this.UserForm.controls['sponsorbankcode'].setValue(0);
        //this.UserForm.controls['categorycode'].setValue(0);
        //this.UserForm.controls['maker'].setValue(0);
        //this.UserForm.controls['nachuser'].setValue(0);
    }

    isFieldValid(field: string) {
        return !this.UserForm.get(field).valid && this.UserForm.get(field).touched;
    }
    displayFieldCss(field: string) {
        return {
            'validate': this.isFieldValid(field),
        };
    }

    newUser() {
        document.getElementById("btnSave").removeAttribute("disabled");
        document.getElementById("btnEdit").setAttribute("disabled", "disabled");
        document.getElementById("btnNew").setAttribute("disabled", "disabled");
        document.getElementById("btnBack").removeAttribute("disabled");
        this.tableid = false;
        this.formid = true;
        this.divMaker = false;
        this.divPresentmentAccess = false;
        this.divNachUser = false;
        this.divaccessright = false;
        document.getElementById('divSearch').hidden = true;
        document.getElementById('btnExport').hidden = true;
        this.Temp = 1;
        this.Userid = 0;
        this.checkbulkuploadlink = [];
        this.chkvideolink = [];
    }

    bindUser() {

        this.Search_Text = ((document.getElementById("txtSearch") as HTMLInputElement).value);
        if (this.Search_Text == "") {
            this.Search_Text = "0";
        }
        this.Preloader=true;
        let item = JSON.parse(sessionStorage.getItem('User'));
        this.userservice.getUser(item.ReferenceId, this.Page_Count, this.Search_Text).subscribe((data) => {
this.Preloader=false;
            this.userdata = data.Table;

            this.tableid = true;
            this.sponsorbankcode = data.Table2;


            this.categorycode = data.Table7;





            this.bankacc = data.Table5;
            this.UserForm.controls['bankval'].setValue("");
            this.UserForm.controls['accountval'].setValue("");
            if (this.bankacc[0].EnableUserWise == true) {
                this.UserForm.controls['bankval'].setValue(this.bankacc[0].BankValidationUserCount);
                this.UserForm.controls['accountval'].setValue(this.bankacc[0].AcValidationUserCount);
                this.dvtxtAccountValidationcount = true;
                this.dvtxtBankValidationcount = true;

                this.AcvalUsercount = this.bankacc[0].AcValidationUserCount;
                this.bankvalUsercount = this.bankacc[0].BankValidationUserCount;

            }
            else {
                this.dvtxtBankValidationcount = false;
                this.dvtxtAccountValidationcount = false;
            }

            if (this.bankacc[0].EnableCancelUserWise == true) {
                this.dvEnableCancel = true;
            }
            else {
                this.dvEnableCancel = false;
            }

            this.tempdata = data.Table6;


        });
    }

    bindPresentmentMaker() {
        let item = JSON.parse(sessionStorage.getItem('User'));
        this.userservice.getMakers(item.ReferenceId, item.UserId).subscribe((data) => {
            this.maker = data.Table;
            this.nachuser = data.Table1;

        });
    }

    BindPresentmentChecker() {

        let item = JSON.parse(sessionStorage.getItem('User'));
        this.userservice.CheckIsPresentmentChecker(item.ReferenceId).subscribe((data) => {
            this.checker = data.Table;
            var html = "";
            var html1 = "";
            if (data.Table1.length > 0) {
                this.bulkupload = data.Table1;
                this.dvBulkUpload = true;

                //html = "<div class='col-md-11 col-sm-12 col-xs-12 no-padding' ><div class='form-group'><label class='col-sm-2 col-md-2 col-xs-4 control-label no-padding ' for='form-field-1'>Bulk Upload</label><div class='col-sm-10 col-md-10 col-xs-7 no-padding' id='divbulkupload'>"
                //for (var i = 0; i < data.Table1.length; i++) {
                //    html += "<div class='col-md-2 col-sm-3 col-xs-12 no-padding' ><input type='checkbox' name='chkbulkupload' id='chkbx_" + this.bulkupload[i].LinkID + "' class='bulkvideo pull-left' value='" + this.bulkupload[i].LinkID + "'/><label class='col-md-10 col-xs-10 col-sm-10 no-padding-right control-label'>" + this.bulkupload[i].LinkName + "</label></div>"


                //}
                //html += "</div></div></div>"

                //var d1 = document.getElementById('dvBulkUpload');
                //d1.insertAdjacentHTML('beforeend', html);
            }
            if (data.Table2.length > 0) {
                this.bulkvideo = data.Table2;
                this.dvVideos = true;

                //html1 = "<div class='col-md-11 col-sm-12 col-xs-12 no-padding' ><div class='form-group'><label class='col-sm-2 col-md-2 col-xs-4 control-label no-padding ' for='form-field-1'>Bulk Upload</label><div class='col-sm-10 col-md-10 col-xs-7 no-padding' id='divbulkupload'>"
                //for (var i = 0; i < data.Table2.length; i++) {
                //    html1 += "<div class='col-md-2 col-sm-3 col-xs-12 no-padding' ><input type='checkbox' name='chkbulkupload' id='chkbx_" + this.bulkvideo[i].LinkID + "' class='bulkvideo pull-left' value='" + this.bulkvideo[i].LinkID + "'/><label class='col-md-10 col-xs-10 col-sm-10 no-padding-right control-label'>" + this.bulkvideo[i].LinkName + "</label></div>"


                //}
                //html += "</div></div></div>"

                //var d2 = document.getElementById('dvVideos');
                //d2.insertAdjacentHTML('beforeend', html);
            }


        });

    }


    onSubmit() {


        this.submitted = true;
        if (this.UserForm.valid) {
            //this.sucess=true;
            const datat = this.UserForm.value;
            if (this.Temp == 1) {
                this.SaveUser();

            }
            else {
                this.UpdateUser();
            }

        } else {

            this.validateAllFormFields(this.UserForm);
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

    userClick() {
        this.divaccessright = true;
    }

    adminClick() {
        this.divaccessright = false;
    }

    backClick() {
        this.formid = false;
        this.bindUser();
      //  this.tableid = true;
      this.UserForm.reset();
        document.getElementById('divSearch').hidden = false;
        document.getElementById('btnExport').hidden = false;
        document.getElementById("btnSave").setAttribute("disabled", "disabled");
        document.getElementById("btnEdit").setAttribute("disabled", "disabled");
        document.getElementById("btnNew").removeAttribute("disabled");
        document.getElementById("btnBack").setAttribute("disabled", "disabled");
       

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

    viewClick() {
        let element = <HTMLInputElement>document.getElementById("IsChkView");
        if (element.checked == true) {
            this.divNachUser = true;
            this.divplusicon = true;

        }
        else {
            this.divNachUser = false;
            this.divplusicon = false;

        }
    }

    presentmentClick() {
        let element = <HTMLInputElement>document.getElementById("chkIsNachPresent");
        if (element.checked == true) {
            this.divPresentmentAccess = true;
            this.divMaker = false;
        }
        else {
            this.divPresentmentAccess = false;
            this.divMaker = false;
        }
    }

    checkerClick() {
        let element = <HTMLInputElement>document.getElementById("chkIsChecker");
        if (element.checked == true) {
            this.divMaker = true;

        }
        else {
            this.divMaker = false;

        }
    }
    SaveUser() {



        let item = JSON.parse(sessionStorage.getItem('User'));


        this.userservice.SaveUser(JSON.stringify(this.UserForm.value), item.ReferenceId, item.UserId, this.IsViewAll, this.checkbulkuploadlink, this.chkvideolink).subscribe(
            (data) => {
                this.user = data;
                if (this.user[0].Result == -1) {

                    this.showModalalert = true;
                }
                else {
                    this.showModalsave = true;
                }
                this.UserForm.reset();
                this.bindUser();

                this.formid = false;
                this.tableid = true;
                document.getElementById("btnEdit").setAttribute("disabled", "disabled");
                document.getElementById("btnBack").setAttribute("disabled", "disabled");
                document.getElementById("btnSave").setAttribute("disabled", "disabled");
                document.getElementById("btnNew").removeAttribute("disabled");
                document.getElementById('divSearch').hidden = false;
                document.getElementById('btnExport').hidden = false;


            }
        )

    }
    UpdateUser() {



        let item = JSON.parse(sessionStorage.getItem('User'));


        this.userservice.UpdateUser(JSON.stringify(this.UserForm.value), item.ReferenceId, item.UserId, this.Userid, this.IsViewAll, this.checkbulkuploadlink, this.chkvideolink).subscribe(
            (data) => {
                this.user = data;
                if (this.user[0].Result == 1) {

                    this.showModalsave = true;
                }
                //else {
                //    this.message = 'User updated Successfully';

                //    alert(this.message);
                //}
                this.UserForm.reset();
                this.bindUser();

                this.formid = false;
                this.tableid = true;
                document.getElementById("btnEdit").setAttribute("disabled", "disabled");
                document.getElementById("btnBack").setAttribute("disabled", "disabled");
                document.getElementById("btnSave").setAttribute("disabled", "disabled");
                document.getElementById("btnNew").removeAttribute("disabled");
                document.getElementById('divSearch').hidden = false;
                document.getElementById('btnExport').hidden = false;


            }
        )

    }


    isChklength() {
        let phnumber = ((document.getElementById("txtphnumber") as HTMLInputElement).value);
        if (phnumber.length > 0 && phnumber.length < 10) {
            this.UserForm.controls['PhoneNo'].setValue("");
            document.getElementById("txtphnumber").classList.add('validate');
            document.getElementById("txtphnumber").setAttribute("placeholder", "Please enter 10 - digit");
        }
        else {
            document.getElementById("txtphnumber").classList.remove('validate');
        }
    }

    removeClass() {
        document.getElementById("txtphnumber").classList.remove('validate');
        document.getElementById("txtEmailId").classList.remove('validate');
        document.getElementById("txtemailsent").classList.remove('validate');
    }

    chkEmail() {
        let email = ((document.getElementById("txtEmailId") as HTMLInputElement).value);
        let regex = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+\.)+[a-zA-Z0-9.-]{2,4}$/;
        if (regex.test(email) != true) {
            this.UserForm.controls['EmailId'].setValue("");
            document.getElementById("txtEmailId").classList.add('validate');
            document.getElementById("txtEmailId").setAttribute("placeholder", "Invalid-Email");
        }
        else {
            document.getElementById("txtEmailId").classList.remove('validate');
        }
    }

    chkEmailSent() {
        let email = ((document.getElementById("txtemailsent") as HTMLInputElement).value);
        let regex = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+\.)+[a-zA-Z0-9.-]{2,4}$/;
        if (regex.test(email) != true) {
            this.UserForm.controls['emailsent'].setValue("");
            document.getElementById("txtemailsent").classList.add('validate');
            document.getElementById("txtemailsent").setAttribute("placeholder", "Invalid-Email");
        }
        else {
            document.getElementById("txtemailsent").classList.remove('validate');
        }
    }

    onRowClicked(User: any) {
        const Currentrowid = this.UserForm.value;
        this.Userid = User.UserId;


        this.editData();
        //document.getElementById("btnSave").removeAttribute("disabled");
        //document.getElementById("btnEdit").setAttribute("disabled", "disabled");
        //document.getElementById("btnNew").setAttribute("disabled", "disabled");
        //document.getElementById("btnBack").removeAttribute("disabled");
        //this.tableid = false;
        //this.formid = true;
        this.Temp = 2;

    }

    editData() {
        this.Preloader=true;
        this.userservice.EditData(this.Userid).subscribe((data) => {
          
            this.Preloader=false;
            this.userdata = data.Table;
            this.sponsorbankid = data.Table1;
            this.getcatcode = data.Table9;
            this.getmaker = data.Table4;
            this.getAccessRight1 = data.Table5;
            this.getAccessRight2 = data.Table6;
          
            this.tableid=false;
            this.formid=true;
            this.UserForm.controls['UserName'].setValue(this.userdata[0].UserName);
            this.UserForm.controls['EmailId'].setValue(this.userdata[0].EmailId);
            this.UserForm.controls['emailsent'].setValue(this.userdata[0].EmailSendTo);
            this.UserForm.controls['PhoneNo'].setValue(this.userdata[0].PhoneNo);
            this.UserForm.controls['sponsorbankcode'].setValue(this.sponsorbankid[0].SponsorBankCodeId);
            this.UserForm.controls['bankval'].setValue(this.userdata[0].BankValidationUserCount);
            this.UserForm.controls['accountval'].setValue(this.userdata[0].AcValidationUserCount);
            this.UserForm.controls['categorycode'].setValue(this.getcatcode[0].CategoryCode);
            if (this.userdata[0].PresentmentMaker == 1) {
                this.UserForm.controls['chkPresentMaker'].setValue(true);
            }
            if (this.userdata[0].PresentmentChecker == 1) {
                this.divPresentmentAccess = true;
                this.UserForm.controls['chkPresentChecker'].setValue(true);

            }

            if (this.getAccessRight1[0].IsCreate == true) {
                this.UserForm.controls['chkCreate'].setValue(true);
            }
            if (this.getAccessRight1[0].IsDownload == true) {
                this.UserForm.controls['chkDownload'].setValue(true);
            }
            if (this.getAccessRight1[0].IsRead == true) {
                this.UserForm.controls['chkView'].setValue(true);
                this.divNachUser = true;
                this.UserForm.controls['nachuser'].setValue(this.getAccessRight1[0].ParallelUserIDs);

            }
            else {
                this.UserForm.controls['chkView'].setValue(false);
                this.divNachUser = false;
            }

            this.getmaker = data.Table4;
            if (this.userdata[0].PresentmentChecker == "1") {
                this.divMaker = true;
                this.UserForm.controls['maker'].setValue(this.getmaker[0].MakerUserId);
            }

            if (this.userdata[0].IsRefrenceEdit == true) {
                this.UserForm.controls['chkRefEdit'].setValue(true);
            }
            else {
                this.UserForm.controls['chkRefEdit'].setValue(false);
            }
            if (this.userdata[0].IsRefrenceEdit == true) {
                this.UserForm.controls['chkRefEdit'].setValue(true);
            }
            else {
                this.UserForm.controls['chkRefEdit'].setValue(false);
            }
            if (this.userdata[0].IsEnableCancel == true) {
                this.UserForm.controls['chkEnableCancel'].setValue(true);
            }
            else {
                this.UserForm.controls['chkEnableCancel'].setValue(false);
            }
            this.UserForm.controls['Type'].setValue(this.userdata[0].UserType);

            if (this.userdata[0].UserType == 'u') {
                this.divaccessright = true;
            }
            else {
                this.divaccessright = false;
            }
            debugger;
            for (var i = 0; i < data.Table6.length; i++) {
                if (this.getAccessRight2[i].LinkID == 17) {
                    this.UserForm.controls['chkUmrnHistory'].setValue(true);
                }
                if (this.getAccessRight2[i].LinkID == 18) {
                    this.UserForm.controls['chkUmrnUpload'].setValue(true);
                }
                if (this.getAccessRight2[i].LinkID == 19) {
                    this.UserForm.controls['chknachpresentment'].setValue(true);
                }
                if (this.getAccessRight2[i].LinkID == 22) {
                    this.UserForm.controls['chkAllUMRN'].setValue(true);
                }
                if (this.getAccessRight2[i].LinkID == 25) {
                    //var ids = "25";
                    var ids = this.getAccessRight2[i].LinkID;
                    (<HTMLInputElement>document.getElementById("" + ids + "")).checked = true;
                }
                if (this.getAccessRight2[i].LinkID == 26) {
                    //  var ids = "26";
                    var ids = this.getAccessRight2[i].LinkID;
                    (<HTMLInputElement>document.getElementById("" + ids + "")).checked = true;
                }
                if (this.getAccessRight2[i].LinkID == 27) {
                    // var ids = "27";
                    var ids = this.getAccessRight2[i].LinkID;
                    (<HTMLInputElement>document.getElementById("" + ids + "")).checked = true;
                }
                if (this.getAccessRight2[i].LinkID == 28) {
                    // var ids = "28";
                    var ids = this.getAccessRight2[i].LinkID;
                    (<HTMLInputElement>document.getElementById("" + ids + "")).checked = true;
                }

            }

        });

        document.getElementById("btnSave").removeAttribute("disabled");
        document.getElementById("btnEdit").setAttribute("disabled", "disabled");
        document.getElementById("btnNew").setAttribute("disabled", "disabled");
        document.getElementById("btnBack").removeAttribute("disabled");
        document.getElementById('divSearch').hidden = true;
        document.getElementById('btnExport').hidden = true;
        this.tableid = false;
        this.formid = true;



    }


    bankValidationChange() {

        if (this.UserForm.controls['bankval'].value == 0) {
            this.UserForm.controls['bankval'].setValue(this.bankvalUsercount);
            alert('Value should Be Greater Than 0');

        }
        else {

            if ((this.UserForm.controls['bankval'].value) > (this.bankvalUsercount)) {
                this.UserForm.controls['bankval'].setValue("");


                alert("Max Bank Validation count for Corporate Is :  " + this.bankvalUsercount)

                this.UserForm.controls['bankval'].setValue(this.bankvalUsercount);
            }
        }
    }


    accountValidationChange() {
        if (this.UserForm.controls['accountval'].value == 0) {
            this.UserForm.controls['accountval'].setValue(this.AcvalUsercount);
            alert('Value should Be Greater Than 0');

        }
        else {

            if ((this.UserForm.controls['accountval'].value) > (this.AcvalUsercount)) {
                this.UserForm.controls['accountval'].setValue("");


                alert("Max Bank Validation count for Corporate Is :  " + this.AcvalUsercount)

                this.UserForm.controls['accountval'].setValue(this.AcvalUsercount);
            }
        }
    }

    setClickedRow(User: any) {
        const Currentrowid = this.UserForm.value;
        this.Userid = User.UserId;
        this.Temp = 2;

        document.getElementById("btnEdit").removeAttribute("disabled");


    }

    checkLinks(data: any) {

        var ids = data.LinkID;

        if ((<HTMLInputElement>document.getElementById(ids)).checked == true) {
            this.checkbulkuploadlink.push(ids);
        }
        else {
            this.checkbulkuploadlink.pop();
        }
        //for (var i = 0; i < this.checkbulkuploadlink.length; i++) {
        //    //this.UserForm.controls['chkbulkuploadlink'].setValue(this.checkbulkuploadlink[i]);
        //   this.UserForm.setControl('chkbulkuploadlink', this.formBuilder.array(this.checkbulkuploadlink || []));
        //}

    }

    checkVideoLinks(data: any) {
        var ids1 = data.LinkID;
        if ((<HTMLInputElement>document.getElementById(ids1)).checked == true) {
            this.chkvideolink.push(ids1);
        }
        else {
            this.chkvideolink.pop();
        }
        //for (var i = 0; i < this.chkvideolink.length; i++) {
        //   // this.UserForm.controls['chkvideolink'].setValue(this.chkvideolink[i]);
        //   this.UserForm.setControl('chkvideolink', this.formBuilder.array(this.chkvideolink || []));
        //}

    }

    download() {
        let item = JSON.parse(sessionStorage.getItem('User'));
        this.userservice.getUserReport(item.ReferenceId).subscribe((data) => {
            this.userreport = data.Table;
            var csvData = this.ConvertToCSV(JSON.stringify(this.userreport));
            var a = document.createElement("a");
            a.setAttribute('style', 'display:none;');
            document.body.appendChild(a);
            var blob = new Blob([csvData], { type: 'text/csv' });
            var url = window.URL.createObjectURL(blob);
            a.href = url;
            a.download = 'Userlist.csv';/* your file name*/
            a.click();
            return 'success';
        });
    }

    ConvertToCSV(objArray) {
        this.HeaderArray = {
            Srno: "Sr No.", UserName: "User Name", EmailId: "Email ID", PhoneNo: "Phone Number",
            Type: "Type", Status: "Status"
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

    checkSingleUser(data) {
      
        var id = data.UserId;

        if ((<HTMLInputElement>document.getElementById(id)).checked == true) {
            this.chkuserlist.push(id);
             
        }
        else {

            this.chkuserlist.splice(id);
            (<HTMLInputElement>document.getElementById('chkalluserlist')).checked = false;
        }


    }

    getUserlist() {
        var userdata = [];
        for (var i = 0; i < this.chkuserlist.length; i++) {
            userdata.push(this.chkuserlist[i]);
        }
        this.UserForm.controls['nachuser'].setValue(userdata);
        this.showModal = false;
        this.chkuserlist = [];

    }

    chkAllUser(event) {
        if (event.target.checked == true) {
            this.IsViewAll = 1;
            this.lblalluser = true;
        }
        else {
            this.IsViewAll = 0;
            this.lblalluser = false;
        }
    }




    //@HostListener('paste', ['$event']) blockPaste(e: KeyboardEvent) {
    //    e.preventDefault();
    //}

    // @HostListener('copy', ['$event']) blockCopy(e: KeyboardEvent) {
    //     e.preventDefault();
    // }

    // @HostListener('cut', ['$event']) blockCut(e: KeyboardEvent) {
    //     e.preventDefault();
    //}
}

