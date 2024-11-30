interface TakePhoto {
    cameraMode: string
    filter: string
    burst: number
}

class nstagram implements TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){}
}

interface story{
    createSTORY(): void
}

class youTube implements TakePhoto,story{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){}

    createSTORY(): void {
        console.log("stoty created successfully")
    }
}