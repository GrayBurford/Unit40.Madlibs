

function addCommas(num) {
    // is num negative?
    let negative = num < 0 ? true : false;

    num = Array.from(Math.abs(num).toString());
    // 1234 -> ['1', '2', '3', '4']

    let result = [];
    let count = 0;
    let commasToPlace = 0;

    if (num.length > 3 && num.length % 3 !== 0) {
        commasToPlace = Math.floor(num.length / 3);
    }

    if (num.length > 3 && num.length % 3 === 0) {
        commasToPlace = (num.length / 3) - 1;
    }

    // ['1', '2', '3', '4']
    for (let i = num.length - 1; i >= 0; i--) {
        result.push(num[i]);
        count++;
        if (count % 3 === 0 && commasToPlace > 0) {
            result.push(',');
            commasToPlace--;
        }
    }

    if (negative) result.push('-');

    result = result.reverse().join('').toString();

    return result;
}

module.exports = addCommas;