//different denominations
let euroDenominations = [
    { denomination: 500, amount: 0 },
    { denomination: 200, amount: 0 },
    { denomination: 100, amount: 0 },
    { denomination: 50, amount: 0 },
    { denomination: 20, amount: 0 },
    { denomination: 10, amount: 0 },
    { denomination: 5, amount: 0 },
    { denomination: 2, amount: 0 },
    { denomination: 1, amount: 0 },
    { denomination: 0.5, amount: 0 },
    { denomination: 0.2, amount: 0 },
    { denomination: 0.1, amount: 0 },
    { denomination: 0.05, amount: 0 },
    { denomination: 0.02, amount: 0 },
    { denomination: 0.01, amount: 0 },
]

let dollarDenominations = [
    { denomination: 100, amount: 0 },
    { denomination: 50, amount: 0 },
    { denomination: 20, amount: 0 },
    { denomination: 10, amount: 0 },
    { denomination: 5, amount: 0 },
    { denomination: 2, amount: 0 },
    { denomination: 1, amount: 0 },
    { denomination: 0.5, amount: 0 },
    { denomination: 0.25, amount: 0 },
    { denomination: 0.1, amount: 0 },
    { denomination: 0.05, amount: 0 },
    { denomination: 0.01, amount: 0 },
]

function cashier (price, amountPaid, denominations) {
    if (price > amountPaid) {
        return {price, amountPaid, denominations};
    }
    let change = (amountPaid - price).toFixed(2);
    for (let i = 0; i < denominations.length; i++) {
        if (change > 0) {
            // calculate change / denomination
            let calculation = Math.floor(change / denominations[i].denomination);
            //subtract (denomination * calculation e.g. 10 * 1) from change
            change = (change - (denominations[i].denomination * calculation)).toFixed(2);
            if (calculation >= 1){
                // assign calculation to denomination amount
                denominations[i].amount += calculation;
            }
        }
    }
    return {price, amountPaid, denominations};
}

// no magic numbers, store returned objects from our function call
const price = 9.51;
const paid = 13.46;
let changeOutput = cashier(price, paid, euroDenominations);

//build a string to print 
function printChange(object, currencySymbol ) {
    if (price > paid) {
        console.log(`Not enough, chump! Price: ${currencySymbol}${price}, Paid: ${currencySymbol}${paid}`);
    } else {
        let str = `Price: ${currencySymbol}${price}, Paid: ${currencySymbol}${paid}, Change: ${currencySymbol}${(paid - price).toFixed(2)} \n`;
        for (let i = 0; i < object.denominations.length; i++) {

            if (object.denominations[i].amount >= 1){
                //printing amounts e.g 1 X 10
                str += `${object.denominations[i].amount} X ${currencySymbol}${object.denominations[i].denomination}\n`;
            }
        }
        console.log(str);
    }
}
printChange(changeOutput, "€");