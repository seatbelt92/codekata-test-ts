function sortInt(n) {
    if (n < 1) {
        throw new Error('n은 1이상의 자연수입니다.');
    }
    else if (n > 8000000000) {
        throw new Error('n은 8,000,000,000이하의 자연수입니다.');
    }
    else if (!(n % 1 == 0)) {
        throw new Error('n은 정수입니다.');
    }
    else {
        return Number(n.toString().split('').sort(function (a, b) { return parseInt(b) - parseInt(a); }).join(''));
    }
}
module.exports = {
    sortInt: sortInt
};
