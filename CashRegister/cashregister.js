function checkCashRegister(price, cash, cid) {
    var changeValue = { 'ONE HUNDRED': [100, cid[8][1]], 'TWENTY': [20, cid[7][1]], 'TEN': [10, cid[6][1]], 'FIVE': [5, cid[5][1]], 'ONE': [1, cid[4][1]], 'QUARTER': [.25, cid[3][1]], 'DIME': [.10, cid[2][1]], 'NICKEL': [.05, cid[1][1]], 'PENNY': [.01, cid[0][1]] };

    var changes = parseFloat((cash - price).toFixed(2))
    var leftover = 0;
    var change = [];
    var total = 0;
    var counter = 0;
    const result = {};
    var currentChange = [];
    for (const key in changeValue) {
        total = parseFloat(total.toFixed(2)) + parseFloat(changeValue[key][1].toFixed(2))
    }
    if (total >= changes) {
        do {
            if (counter == 9) {
                var check_changes = total - changes
            }

            if (counter > 9 && check_changes == total - changes) {
                return { 'status': 'INSUFFICIENT_FUNDS', change }
            }
            for (const key in changeValue) {
                var check = (changes / changeValue[key][0]).toFixed(2);
                if (parseInt(check) > 0) {
                    if (counter == 9) {
                        var check_changes = total - changes
                    }
                    counter = counter + 1
                    //leftover is holds the value of change minus current amount of this currenty currency 
                    var leftover = parseFloat((changes - changeValue[key][0]).toFixed(2))
                    if (changeValue[key][1] >= changeValue[key][0] && leftover >= 0) {
                        changeValue[key][1] = parseFloat(changeValue[key][1].toFixed(2)) - parseFloat(changeValue[key][0].toFixed(2));
                        currentChange.push([key, parseFloat(changeValue[key][0].toFixed(2))])
                        changes = leftover;
                        break;
                    }
                }
            }
        }
        while (changes > 0);
        currentChange.forEach(([key, value]) => {
            if (key in result) {
                result[key] += value;
                change[change.length - 1][1] = parseFloat(result[key].toFixed(2));
            } else {
                result[key] = value;
                change.push([key, parseFloat(value.toFixed(1))]);
            }
        });
        for (const key in changeValue) {
            leftover = leftover + parseFloat(changeValue[key][1].toFixed(2))
        }
        if (leftover == 0) {
            change = cid
            return { 'status': 'CLOSED', change }
        }
        else {
            return { 'status': 'OPEN', change }
        }
    }
    if (total == 0 || total <= changes) {
        change = []
    } else {
        change = cid
    }

    return { 'status': 'INSUFFICIENT_FUNDS', change }
}



checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])