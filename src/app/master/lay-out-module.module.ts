import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainLayoutComponent} from '../main-layout/main-layout.component';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FooterComponent } from '../footer/footer.component';
import {LayOutRoutingModule } from './lay-out-routing.module';
@NgModule({
    declarations: [MainLayoutComponent,HeaderComponent,SidebarComponent,FooterComponent],
  imports: [
      CommonModule, FormsModule, ReactiveFormsModule,
      LayOutRoutingModule
    ],
    exports: []
})

export class LayOutModuleModule { }
