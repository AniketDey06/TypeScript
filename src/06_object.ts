// const chai = {
//     name: "Masala Chai",
//     price: 20,
//     isHot: true,
// }

// let tea: {
//     name: string;
//     price: number;
//     isHot: boolean;
// }

// tea = {
//     name: "masala",
//     price: 12,
//     isHot: false,
// }

type Tea = {
    name: string,
    price: number,
    ingre: string[],
}

const masalaChai: Tea = {
    name: "Masala Chai",
    price: 30,
    ingre: ["aa", "bb", "cc"]
}

type Cup = {size: string}
let smallCup: Cup = {size: "200ml"}

let bigCup = {size: "500ml", material: "steel"}
smallCup = bigCup

type Brew = {
    brewTime: number
}

const coffee = {brewTime: 5, beans: "Arebica"}
const chaiBrew: Brew = coffee

type User = {
    username: string;
    password: string;
}

const u1: User = {
    username: "aniket",
    password: "123"
}

type Item = {
    name: string,
    quantity: number,
}
type Address = {
    street: string,
    pin: number
}

type Order = {
    id: string,
    item: Item,
    address: Address,
}

// type Chai = {
//     name: string,
//     price: number,
//     isHot: boolean,
// }

const updateChai = (updates: Partial<Chai>) => {
    console.log(updates);
    
}

type ChaiOrder = {
    name?: string,
    quantity?: number,
}

const placeOrder = (order: Required<ChaiOrder>) => {
    console.log(order);
    
}


type Chai = {
    name: string,
    price: number,
    isHot: boolean,
    ingredients: string[],
}

type BasicChai = Pick<Chai, "name"| "price">;

const chaiInfo:  BasicChai = {
    name: "m Chai",
    price: 30
}

type Chai1 = {
    name: string,
    price: number,
    isHot: boolean,
    ingredients : string[],
}

type PublicChai = Omit<Chai1, "ingredients">