const score: Array <number> = []
const names: Array <string> = []

function identityOne(val: boolean| number): boolean |number{
    return val
}

function identityTwo(val: any): any{
    return val
}
//<type> or T is like any, difference is that the value is Locked🔒
function identityThree<Type>(val: Type): Type{
    return val
}
identityThree(true)

function identityFour<T>(val:T):T{
    return val
}
//using your own types
interface Buttol{
    brand: string,
    type: number
}
identityFour<Buttol>({brand:"Addidos", type:33});

function getSearchProducts<T>(Products: T[]): T{
    //do some database oporations
    const myIndex = 3
    return Products[3]
}

const getMoreSearchProducts = <T>(Products: T[]):T => {
    const myIndex = 5
    return Products[myIndex]
}

function anotherFunction<T, U extends number>(valOne:T, valTwo: U): object {
    return{
        valOne,
        valTwo
    }
}
anotherFunction(3,3)