let num: number | string = 11

let apiStatus: 'pending' | 'success' | 'error' = 'success'

let seat: 'aile'| 'widdow' | 'mid' = "mid"

const orders : string[] = ['12', '20', '94', '5']

let currentOrder : string | undefined

for(let order of orders){
    if (order === '20') {
        currentOrder = order
        break
    }
}

console.log(currentOrder);
