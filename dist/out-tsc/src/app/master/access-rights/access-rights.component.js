import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AccessRightsService } from '../../services/accessrights/access-rights.service';
var AccessRightsComponent = /** @class */ (function () {
    function AccessRightsComponent(_accessRightsService) {
        this._accessRightsService = _accessRightsService;
        //dataArray: Array<AccessRightsDetails> = [];
        //public LAccessStore: Array<AccessRightsStoreLink> = [];
        //public RAccessStore: AccessRightsStoreRead;
        //public AAccessStore: AccessRightsStoreactive;
        //Arratdata = [];
        this.selectedItems = [];
        this.Ischecked = 0;
        this.storeLinkID = [];
        this.storeIsRead = [];
        this.storeIsActive = [];
        this.numbers = [];
    }
    AccessRightsComponent.prototype.ngOnInit = function () {
        this.getEntityDetails();
    };
    AccessRightsComponent.prototype.hideSuccess = function () {
        alert('hide');
        this.showModalSuccess = false;
        // this.getEntityDetails();
    };
    AccessRightsComponent.prototype.showSuccess = function () {
        this.showModalSuccess = true;
    };
    AccessRightsComponent.prototype.getEntityDetails = function () {
        var _this = this;
        var item = JSON.parse(sessionStorage.getItem('User'));
        this._accessRightsService.getEntityDetails(item.UserType, item.ReferenceId).subscribe(function (data) {
            //(res => this.entitydDetails = res, error => console.log(error))
            _this.entitydDetails = data;
        });
    };
    AccessRightsComponent.prototype.getLinksForUser = function (data) {
        var _this = this;
        var item = JSON.parse(sessionStorage.getItem('User'));
        //alert(data.userid)
        //alert(data)
        //userid
        this._accessRightsService.getLinksForUser(data, item.UserType).subscribe(function (res) {
            _this.AccessRightDetails = res,
                _this.Ischecked = 0,
                _this.checkAccessRights(res),
                function (error) { return console.log(error); };
        });
    };
    AccessRightsComponent.prototype.checkAccessRights = function (data) {
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
            if (document.getElementById(ids).checked == true) {
                // console.log('index = ' + "" + index);
                this.storeLinkID.splice(index, 1, data.LinkID);
                this.storeIsActive.splice(index, 1, true);
                this.storeIsRead.splice(index, 1, true);
            }
            else {
                this.storeIsActive.splice(index, 1, false);
                this.storeIsRead.splice(index, 1, false);
            }
            //console.log('ON change start');
            //console.log(this.storeLinkID);
            //console.log(this.storeIsRead);
            //console.log(this.storeIsRead);
            //console.log('ON change end');
        }
    };
    AccessRightsComponent.prototype.InsertData = function (userid) {
        var _this = this;
        //  alert('hi');
        var item = JSON.parse(sessionStorage.getItem('User'));
        this._accessRightsService.getInsertdata(userid, this.storeIsActive, this.storeIsRead, this.storeLinkID, item.UserId).subscribe(function (res) {
            _this.AccessRightDetails = res;
            debugger;
            // this.user = data;
            console.log(_this.AccessRightDetails[0]);
            if (_this.AccessRightDetails[0].result == 0) {
                // this.message = 'User already exists';
                _this.showSuccess();
            }
            else {
                alert('error');
            }
            (function (error) { return console.log(error); });
        });
    };
    AccessRightsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-access-rights',
            templateUrl: './access-rights.component.html',
            styleUrls: ['./access-rights.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [AccessRightsService])
    ], AccessRightsComponent);
    return AccessRightsComponent;
}());
export { AccessRightsComponent };
//# sourceMappingURL=access-rights.component.js.map