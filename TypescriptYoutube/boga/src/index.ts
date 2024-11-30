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

    protected _coursecount = 1
   
    readonly city: string = "10th ramadan"
    constructor(public email : string,
                public name:string){
     
    }
    private deletToken(){
        console.log("Token deleted successfuly")
    }

    // get getAppleEmail(): string{
    //     return `apple${this._email}`
    // }

    // get getAppleEmail(): number{
    //     return this._coursecount
    // }


    // set coursecount(courseNum) {
    //     if (courseNum <= 1){
    //         throw new Error("course count must be more then 1")
    //     }
    //     this._coursecount = courseNum
    // }
  
}

class SubUser extends User {
    isFamily: boolean = true
    changeCourseCount(){
        this._coursecount = 90
    }
}

const abdo = new User("s@s","sad")