import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from '../main-layout/main-layout.component';
import { LoginComponent } from '../login/login.component';
import { ChangePasswordComponent } from '../change-password/change-password.component';
import {AuthGuardService } from '../Services/auth-guard.service';
import {AppSettings} from '../app-settings';
const routes: Routes = [
    { path: '', redirectTo: 'Login', pathMatch: 'full' },
    { path: 'Login', component: LoginComponent },
    { path: 'ChangePassword', redirectTo: 'Login', pathMatch: 'full' },
    { path: 'ChangePassword/:Id', component: ChangePasswordComponent },
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            { path: 'user', loadChildren: './user/user.module#UserModule',canActivate: [AuthGuardService] },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule', canActivate: [AuthGuardService] },
            { path: 'NachMandate', loadChildren: './nach-mandate/nachmandate.module#NachmandateModule', canActivate: [AuthGuardService] },
            { path: 'HistoricalMandate', loadChildren: './historical-mandate/historicalmandate.module#HistoricalmandateModule', canActivate: [AuthGuardService] },
            { path: 'Downloadmandate', loadChildren: './downloadmandate/downloadmandate.module#DownloadmandateModule', canActivate: [AuthGuardService] },
            { path: 'DownloadEmandate', loadChildren: './download-emandate/downloademandate.module#DownloademandateModule', canActivate: [AuthGuardService] },
            { path: 'Downloadoldmandate', loadChildren: './downloadoldmandate/downloadoldmandate.module#DownloadoldmandateModule', canActivate: [AuthGuardService] },
            { path: 'Downloadoldemandate', loadChildren: './downloadoldemandate/downloadoledemandate.module#DownloadoledemandateModule', canActivate: [AuthGuardService] },
            { path: 'Umrnhistory', loadChildren: './umrnhistory/umrnhistory.module#UmrnhistoryModule', canActivate: [AuthGuardService] },
            { path: 'Umrnupload', loadChildren: './umrnupload/umrn-upload.module#UmrnUploadModule', canActivate: [AuthGuardService] },
            { path: 'Demophysical', loadChildren: './demophysical/demophysical.module#DemophysicalModule', canActivate: [AuthGuardService] },
            { path: 'Demoemandate', loadChildren: './demoemandate/demoemandate.module#DemoemandateModule', canActivate: [AuthGuardService] },
            { path: 'Allumrn', loadChildren: './allumrn/all-umrn.module#AllUmrnModule', canActivate: [AuthGuardService] },
            { path: 'Nachtransactionpresentation', loadChildren: './nachtransactionpresentation/nachtransactionpresentation.module#NachtransactionpresentationModule', canActivate: [AuthGuardService] },
            { path: 'AccessRights', loadChildren: './access-rights/access-rights.module#AccessRightsModule', canActivate: [AuthGuardService] },
            { path: 'EntityBankSetup', loadChildren: './entity-bank-setup/entity-bank-setup.module#EntityBankSetupModule', canActivate: [AuthGuardService] },
            { path: 'LinkSetup', loadChildren: './link-setup/link-setup.module#LinkSetupModule', canActivate: [AuthGuardService] }, 
            { path: 'BulkEmandate', loadChildren: './bulk-emandate/bulk-emandate.module#BulkEmandateModule', canActivate: [AuthGuardService] },
            { path: 'EntitySetup', loadChildren: './entity-setup/entity-setup.module#EntitySetupModule', canActivate: [AuthGuardService] },
            { path: 'BulkUpload', loadChildren: './bulk-upload/bulk-upload.module#BulkUploadModule', canActivate: [AuthGuardService] },
            { path: 'ReportView', loadChildren: './report-view/report-view.module#ReportViewModule', canActivate: [AuthGuardService] },
            { path: 'eCreateMandate', loadChildren: './ecreatemandate/ecreate-mandate.module#EcreateMandateModule', canActivate: [AuthGuardService] }
       
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
    , providers: [
        AuthGuardService,
          { provide: 'BASE_URL', useFactory: getBaseUrl }
    ]
})
export class LayOutRoutingModule { }
export function getBaseUrl() {
    var BASE_URL=AppSettings.API_ENDPOINT;
      return BASE_URL;
  }