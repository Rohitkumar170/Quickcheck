import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainLayoutComponent } from '../main-layout/main-layout.component';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FooterComponent } from '../footer/footer.component';
import { LayOutRoutingModule } from './lay-out-routing.module';
var LayOutModuleModule = /** @class */ (function () {
    function LayOutModuleModule() {
    }
    LayOutModuleModule = tslib_1.__decorate([
        NgModule({
            declarations: [MainLayoutComponent, HeaderComponent, SidebarComponent, FooterComponent],
            imports: [
                CommonModule, FormsModule, ReactiveFormsModule,
                LayOutRoutingModule
            ],
            exports: []
        })
    ], LayOutModuleModule);
    return LayOutModuleModule;
}());
export { LayOutModuleModule };
//# sourceMappingURL=lay-out-module.module.js.map