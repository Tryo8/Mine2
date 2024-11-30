interface User7 {
    readonly dbid:number
    email: string
    userID: number
    Googleid?:string
    dbID:number

    startTrail:() => string
    startTrail1(): string
    getV(getVname: string):number
}

type dbID ={
    dbID: string
}


interface User {
    githubToken: string
}
interface Admin extends User{
    role: "admin" | "ta" | "learner"
}
