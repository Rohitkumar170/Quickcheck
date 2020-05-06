import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NachtransactionporesentationService } from '../../Services/nachtransactionpresentation/nachtransactionporesentation.service';
var NachtransactionpresentationComponent = /** @class */ (function () {
    function NachtransactionpresentationComponent(NTPService) {
        this.NTPService = NTPService;
        // var EntityId;
        // var UserId;
        this.bank = 25;
        this.userid = 86;
        this.EntityId = 10;
        this.UsErId = 95;
        this.entityId = 13;
        this.refNo = 'rrdtr';
    }
    NachtransactionpresentationComponent.prototype.ngOnInit = function () {
        this.showlabel2 = true;
        this.showlabel = false;
        this.showlabel1 = false;
        this.BindMainGrid();
        //this.BankBind();
        this.CheckUser();
        //this.BindUMRN();
        //this.BindRefrence();
        this.BindOnRowdblClick();
        //this.BindGridForm();
    };
    NachtransactionpresentationComponent.prototype.BankBind = function () {
        var _this = this;
        alert('NewButton');
        this.showlabel2 = false;
        this.showlabel = true;
        this.showlabel1 = true;
        //let item = JSON.parse(sessionStorage.getItem('User'));
        this.NTPService.BankBind('86', '10').
            subscribe(function (res) { return _this.bankbind = res; }, function (error) { return console.log(error); });
    };
    NachtransactionpresentationComponent.prototype.CheckUser = function () {
        //let item = JSON.parse(sessionStorage.getItem('User'));
        this.NTPService.CheckUser('86', '10').
            subscribe(function (data) {
            //this.bankbind = data.Table;
            //this.i = Object.entries(this.bankbind)[0][1];
        });
    };
    NachtransactionpresentationComponent.prototype.BindGridForm = function (bank, userid, EntityId) {
        var _this = this;
        this.NTPService.BindGridForm('25', '86', '10').
            subscribe(function (res) { return _this.bindgrid = res; }, function (error) { return console.log(error); });
        //this.Databind = data;
        // });
    };
    NachtransactionpresentationComponent.prototype.BindMainGrid = function () {
        var _this = this;
        this.NTPService.BindMainGrid('95').
            //subscribe((data) => {
            //});
            subscribe(function (res) { return _this.bindmaingrid = res; }, function (error) { return console.log(error); });
    };
    NachtransactionpresentationComponent.prototype.BindUMRN = function () {
        var _this = this;
        var k = '020-04-30';
        this.NTPService.BindUMRN('10', '86', '2020-04-30').
            subscribe(function (res) { return _this.bindumrn = res; }, function (error) { return console.log(error); });
        //subscribe((data) => {
        //});
    };
    //BindRefrence() {
    //    this.NTPService.BindRefrence('86', '10', '04/30/2020').
    //        //subscribe((data) => {
    //        //});
    //}
    NachtransactionpresentationComponent.prototype.BindRefrence = function () {
        var _this = this;
        alert('ButtonRefre');
        this.NTPService.BindRefrence('10', '86', '2020-04-30').
            subscribe(function (res) { return _this.bindref = res; }, function (error) { return console.log(error); });
        //subscribe((data) => {
        //});
    };
    NachtransactionpresentationComponent.prototype.BindOnRowdblClick = function () {
        this.NTPService.BindOnRowdblClick('95', '13', '300720A13').
            subscribe(function (data) {
        });
    };
    NachtransactionpresentationComponent.prototype.BindRefOnchange = function () {
        this.NTPService.BindRefOnchange('95', '13', '123456789').
            subscribe(function (data) {
        });
    };
    NachtransactionpresentationComponent.prototype.BindUMRNOnchange = function (UsErId, entityId, refNo) {
        this.NTPService.BindUMRNOnchange('95', '13', 'rrdtr').
            subscribe(function (data) {
        });
    };
    NachtransactionpresentationComponent = tslib_1.__decorate([
        Component({
            selector: 'app-nachtransactionpresentation',
            templateUrl: './nachtransactionpresentation.component.html',
            styleUrls: ['./nachtransactionpresentation.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [NachtransactionporesentationService])
    ], NachtransactionpresentationComponent);
    return NachtransactionpresentationComponent;
}());
export { NachtransactionpresentationComponent };
//# sourceMappingURL=nachtransactionpresentation.component.js.map