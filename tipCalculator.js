const bills = [100, 10, 1000];
const tips = [];
const totalBill = [];

// This function takes in a bill value and calculates the tip amount
function calcTip(bill) {
    if (bill >= 50 && bill <= 300){
        const tip = bill * 0.15;
        return tip;
    } else {
        const tip = bill * 0.2;
        return tip;
    }
}

// This function adds the tip amounts to a new array for each bill value
function tipArray(billArray) {
    for (let i = 0; i < billArray.length; i++) {
        const tip = calcTip(billArray[i]);
        tips.push(tip);
    }
    return tips;
}

// Add the total bill to a new array by summing up the bill and tip values
function addTip(tips, bills){
    for (let i = 0; i < tips.length; i++) {
        const total = tips[i] + bills[i];
        totalBill.push(total);
    }
    return totalBill;
}
