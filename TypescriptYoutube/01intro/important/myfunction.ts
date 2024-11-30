function addTwo(num: number) : number{
    return num + 2
}

function getUpper(val:string){
    return val.toUpperCase()
}

function sginUpUser(name:string, email:string, isPaid: boolean){
}

let loginUser =(name: string, email: string, isPaid: boolean = false) => {}

loginUser("sd","sd.com")
sginUpUser("jsdsa","asd@sda", true)
getUpper("55nero")
let myValue = addTwo(5)



//function getValue(myVal: number):boolean{
  //  if (myVal > 5) {
  //      return true
 //   }
 //   return "300k"
//}


const getHalo = (a: string): string => {
    return ""
}

const heros = ["thor", "bero", "mero"]
//const heros = [1, 2, 3]

heros.map(hero => {
    return `hero is ${hero}`
})

function consoleError(errmsg:string){
    console.log(errmsg);
    
}

function handleError(errmsg:string){
    throw new Error(errmsg);
    
}
export{}