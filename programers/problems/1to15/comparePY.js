function comparePY(s) {
    const re = /^[a-z]+$/i
    const lengthP = s.toUpperCase().split('').filter(function (el) { return el === 'P'; }).length;
    const lengthY = s.toUpperCase().split('').filter(function (el) { return el === 'Y'; }).length;
  
    if (s.length < 1 || s.length > 50) {
        throw new Error("문자열 길이 50 이하 자연수입니다!");
    }
    else if (!re.test(s)) {
        throw new Error("문자열은 알파벳으로만 이루어져야 합니다.");
    }
    else if (lengthP === lengthY)
        return true;
    else
    return false;
}

module.exports = {
    comparePY: comparePY
};
