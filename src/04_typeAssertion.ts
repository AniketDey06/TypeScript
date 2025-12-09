let res : any = "42"

let numberLen : number = (res as string).length

type Book = {
    name: string,
}

let bookString = '{"name": "aa"}'
let bookObj = JSON.parse(bookString) as Book

console.log(bookObj.name);

const inputElemet = document.getElementById("") as HTMLInputElement


let value:any

value = "aa"
value = [1,2,3]
value = 2.5
value.toLocaleUpperCase()


let value1: unknown

value1 = "aa"
value1 = [1,2,3]
value1 = 2.5
if (typeof value1 === 'string') {
    value1.toLocaleUpperCase()
}

try {
    
} catch (error) {
    if (error instanceof Error) {
        console.log(error.message);
    }
    console.log("Error");
}

const data:unknown = "aniket"
const strData:string = data as string

type Role = "admin" | "user" | "superAdmin"
function redirectBasedOnRole (role:Role):void{
    if (role === "admin") {
        console.log(`Redirecting to admin Dashboard`);
        return
    }
    if (role === "user") {
        console.log(`Redirecting to admin Dashboard`);
        return
    }
    role
}

function noReturn():never {
    while(true){

    }
}