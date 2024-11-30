"use strict";
// class User {
//     email :string
//     name:string
//     private readonly city: string = ""
//     constructor(email : string, name:string){
//         this.email =email;
//         this.name = name 
//     }
// }
// const abdo = new User ( "sc@ad", "man")
//  abdo.city 
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.city = "";
    }
}
