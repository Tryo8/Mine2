const User  ={
    name : "abdo",
    email: "as@jsj",
    isActive : true,
}

function createUser ({name:string, isPaid: boolean}){}

let newUser = {name: "sd", isPaid:false, email: "ddd@234"}

createUser(newUser)


function createCourse():{name: string, price: number}{
    return {name: "reactsjs", price:500}
}



type User = {
    name: string;
    email: string;
    isActive: boolean;
}


function getUserDet(user:User){
    return {name:"",email:"",isActive: true}
}

getUserDet({name:"",email:"",isActive: true})



type User1 = {
    readonly _id:string
    name:string
    email:string
    isActive:boolean
    creditDetails?:number
}

let myUser : User1 ={
    _id:"123",
    name:"s",
    email:"sa@aa",
    isActive:false
}

type cardNumber = {
    cardnumber:string
}

type cardDate = {
    cardData:string
}

type cardDetails = cardNumber & cardDate &{
    cvv:number
}

myUser.email = "sad@sdad"


export{}