export class userobj{
    username:string;
    userprofile;
    imgurl;
    constructor(s:string,m:any){
        this.username=s;
        this.userprofile=m;
        this.imgurl=m.photoURL;
        
    }
}