function checkCashRegister(price, cash, cid) {
    let cashRegister = {
        status: '',
        change: cid
    };

    const denominationValue = {
        'PENNY': .01,
        'NICKEL': .05,
        'DIME': .10,
        'QUARTER': .25,
        'ONE': 1.00,
        'FIVE': 5.00,
        'TEN': 10.00,
        'TWENTY': 20.00,
        'ONE HUNDRED': 100.00
    };

    let changeNeeded = parseFloat(cash - price).toFixed(2);
    let changeAvailable = getTotalCash(cid);

    if (changeNeeded > changeAvailable) {
        cashRegister.status = 'INSUFFICIENT_FUNDS';
        cashRegister.change = [];
    } else if (changeNeeded < changeAvailable) {
        cashRegister.status = 'OPEN';
        cashRegister.change = getCustomerChange(changeNeeded, cid);
    } else {
        cashRegister.status = 'CLOSED';
        cashRegister.change = [];
    }

    if (changeNeeded > getTotalCash(cashRegister.change)) {
        cashRegister.status = 'INSUFFICIENT_FUNDS';
        cashRegister.change = [];
    }

    return cashRegister;
}

function getCustomerChange(changeNeeded, cashInDrawer) {
    let change = [];
    for (let i = cashInDrawer.length - 1; i >= 0; i--) {
        const coinName = cashInDrawer[i][0];
        const coinTotal = cashInDrawer[i][1];
        const coinValue = denominationValue[coinName];
        let coinAmount = (coinTotal / coinValue).toFixed(2);
        let coinsToReturn = 0;

        while (changeNeeded >= coinValue && coinAmount > 0) {
            changeNeeded -= coinValue;
            changeNeeded = changeNeeded.toFixed(2);
            coinAmount--;
            coinsToReturn++;

        }

        if (coinsToReturn > 0) {
            change.push([coinName, coinsToReturn * coinValue]);
        }
    }
    return change;
}

function getTotalCash(cashInDrawer) {
    let total = 0;

    for (let i = 0; i < cashInDrawer.length; i++) {
        total += cashInDrawer[i][1];
    }

    return total.toFixed(2);
}
