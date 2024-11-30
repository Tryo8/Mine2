abstract class TakePhoto{
    constructor(
        public cameraMode:string,
        public filter: string
    ){}

    abstract GetApollo():void

    GetReelTime(): number{
        return 99
    }
}



class Instagram extends TakePhoto{
    constructor(
        public cameraMode:string,
        public filter: string,
        public burst: number
    ){
        super(cameraMode, filter)
    }

    GetApollo(): void {
        console.log("APOOLLO!")
    }
}

const Man = new Instagram("con", "hon", 7)

Man.GetReelTime