export class user{
    id:string;
    username:string;
    imgurl:string;
    constructor(object:Object){
        this.id=object[0];
        this.username=object[1];
        this.imgurl=object[2];
    }

}