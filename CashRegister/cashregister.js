
function checkCashRegister(price, cash, cid) {

    var changeValue = { 'ONE HUNDRED': [100, cid[8][1]], 'TWENTY': [20, cid[7][1]], 'TEN': [10, cid[6][1]], 'FIVE': [5, cid[5][1]], 'ONE': [1, cid[4][1]], 'QUARTER': [.25, cid[3][1]], 'DIME': [.10, cid[2][1]], 'NICKEL': [.05, cid[1][1]], 'PENNY': [.01, cid[0][1]] };

    var change = parseFloat((cash - price).toFixed(2))

    var currentChange = [];

    //cid.reverse().forEach(function (row) {

    //cid.reverse().forEach(function (element, index) {

    //if (index % 2 == 0) {
    do {
        // console.log(element,index)
        for (const key in changeValue) {
            let check = (change / changeValue[key][0]).toFixed(2);
            if (parseInt(check) > 0) {

                var leftover = parseFloat((change - changeValue[key][0]).toFixed(2))
                if (changeValue[key][1] - leftover > 0 && leftover > 0) {
                    changeValue[key][1] = parseFloat((changeValue[key][1] - leftover).toFixed(2));
                    currentChange.push([key, changeValue[key][0]]);
                    console.log(change)
                }
                change = leftover;
                console.log(change);
                break;
            }
        }
    }

    while (change > 0);
    console.log(currentChange);
}




checkCashRegister(19.10, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);