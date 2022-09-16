function getAverage(arr) {
    if (!(arr.length >= 1 && arr.length <= 100)) {
        throw new Error('arr의 길이는 1이상, 100이하입니다.');
    }
    else if (arr.find(function (el) { return (el < -10000) || (el > 10000); })) {
        throw new Error('arr의 원소는 -10,000이상 10,000이하인 정수입니다');
    }
    else {
        return arr.reduce((acc, cur)=> acc + cur)/arr.length
    }
}
module.exports = {
    getAverage: getAverage
};
