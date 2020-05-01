export interface SaveData {
       
    dataList: any;
    Flag: string;
    FlagValue: string;
    MandateMode: string;
    Bankaccountno: string;
    Catagorycode: string;
    Mandatetype: string;
    UMRN: string;
    UMRNDATE: string;
    Sponsorcode: string;
    Utilitycode: string;
    Authrizename: string;
    Todebit: string; 
    Withbank: string;
    Debittype: string;
    IFSC: string;
    MICR: string;
    Frequency: string;
    Amountrupees: string;
    Amount: string;     
    Email: string;
    Phoneno: string;
    Refrence1: string;
    Refrence2: string;
    PeriodFrom: string;
    PeriodTo: string;
    Untillcancelled: string;
    Customer1: string;
    Customer2: string;
    Customer3: string;

}
export interface SaveData0{

    IFSCResult:string;
}
export interface SaveData1{

    MICRResult:string;
}

export interface SaveData2{

    MandateId:string;
    Description:string;
    Status:string;
    Date:string;
    Time:string;
    result:number;
    
}
export interface SaveData3{

    Bank:string;      
}
export interface SaveData4{

    mandateid:string;
    MandateFreshId:string;
    ActivityId:string;
    IFSC:string;      
}
export interface SaveData5{

    IsLiveInNACH:Boolean;
  
}
export interface SaveData6{
    IsLiveIMPS:Boolean
    IsNachLive:Boolean;
    is_enach_live:Boolean;      
}
export interface SaveData7{

    IsPhysical:Boolean;
    Enach:Boolean;
  
}
export interface SaveData8{

    result:number;
  
}
