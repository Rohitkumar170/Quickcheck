import { Time } from '@angular/common';
import { TimeInterval } from 'rxjs/internal/operators/timeInterval';

export interface BankBind {

    SponsorBankCodeId: number;
    SponsorBankCodeName: string;

}

export interface CheckUser {

    PresentmentChecker: string;
    PresentmentMaker: string;
    admin: string;

}


export interface BindGridForm {

    AccountNumber: string;
    SponsorBankcode: string;
    UtilityCode: string;
    IFSC: string;
    username: string;
    UserID: number;
    Bank_ID: string;
}

export interface BindMainGrid {

    RowNumber: number;
    date: string;
    FileNo: string;
    UserName: string;
    CreatedOn: string;
    UpdatedOn: string;
    ApprovedBy: number;
    ApprovedOn: number;
    LastStatus: number;
    BankName: string;
    FileStatus: string;

}

export interface BindUMRN {

    UMRN: string;

}

export interface BindRefrence {

    Refrence1: string;

}
export interface BindOnRowdblClick {

    SponsorBankName: string;
    SponsorbankId: number;
    Date: string;
    FileNo: string;
    AccountNumber: string;
    createdby: string;
    SponsorBankcode: string;
    IFSC: string;
    UtilityCode: string;
    UserID: number;
    presentmentchecker: string;
    presentmentmaker: string;


}

export interface BindUMRNOnchange {

    UMRN: string;

}

export interface BindRefOnchange {

    Refrence1: string;
    Amount: string;
    DebitType: string;

}