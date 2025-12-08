function getNameOrAge(name: string | number){
    if (typeof name === 'string') {
        return `Name is ${name}`
    }

    return `Age is ${name}`
}

function serve(msg?: string){
    if (msg) {
        return `msg is - ${msg}`
    }
    return `on msg`
}

function order(size: "small" | "medium" | "large" | number){
    if (size === 'small') {
        return `geting small one`
    }
    if (size === 'medium' || size === 'large') {
        return `getting medium or large one`
    }

    return `Order is ${size}`
}

// console.log(order('large'));


class car{
    drive(){
        return `Driving a car`
    }
}

class bike{
    drive(){
        return `Driving a bike`
    }
}

function drive (vehicle: bike | car){
    if (vehicle instanceof car) {
        return vehicle.drive()
    }
}

const car1 = new car()

// console.log(drive(car1));


type Person = {
    name: string,
    age: number,
}

function isPerson(obj: any): obj is Person{
    return(
        typeof obj === 'object' && 
        obj !== null && 
        typeof obj.name === 'string' &&
        typeof obj.age === 'number'
    )
}

function getPesson(item: Person | string){
    if (isPerson(item)) {
        return `Person is - ${item.name}, Age is - ${item.age}`
    }

    return `others - ${item}`
}

type SUV = {
    type: 'suv',
    color: 'blue'
}

type Sedan = {
    type: 'sedan',
    cylinder: 3
}

type Hatchback = {
    type: 'hatchback',
    seats: 4
}

type Car = SUV | Sedan | Hatchback

function getCar(order: Car){
    switch (order.type) {
        case 'suv':
           return `SUV`
        case 'hatchback':
            return `Hatchback`
        case 'sedan':
            return `Sedan`
        default:
            break;
    }
}

console.log(getCar({ type: 'hatchback', seats: 4 }));
