export class chat{
    username:string;
    message:string;
    flt:string;
    constructor(sender:string,msg:string,user:string){
        this.username=sender;
        this.message=msg;
        if(user==sender){
            this.flt="me";
        }
        else{
            this.flt="others";
            
        }
        
    }
}