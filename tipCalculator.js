const bills = [100, 10, 1000];
const tips = [];
const totalBill = [];

function calcTip(bill) {
    if (bill >= 50 && bill <= 300){
        const tip = bill * 0.15;
        return tip;
    } else {
        const tip = bill * 0.2;
        return tip;
    }
}

function tipArray(billArray) {
    for (let i = 0; i < billArray.length; i++) {
        const tip = calcTip(billArray[i]);
        tips.push(tip);
    }
    return tips;
}

function addTip(tips, bills){
    for (let i = 0; i < tips.length; i++) {
        const total = tips[i] + bills[i];
        totalBill.push(total);
    }
    return totalBill;
}
