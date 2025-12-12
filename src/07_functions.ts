function makeChai(type: string, cups: number){
    console.log(`Make ${cups} cups of ${type}`);
    
}

makeChai('Masala', 2)

function makeOrder (order: string) {
    if (!order) return null
    return order 
}

function log(): void{
    console.log("logs");
}

function orderChai(type?: string){
    
}

function orderChai2(type: string = "--"){

}

function createChai (order: {
    type: string;
    sugar: number;
    size: "samll" | "large"
}): number {
    return 3
}