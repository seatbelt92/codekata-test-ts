function checkHarshard(x:number) {
    if(x<1 || x>10000) 
        throw new Error ('x는 1이상, 10000이하인 정수를 입력해야 합니다')
    else if(x % 1 !==0)
        throw new Error ('x는 정수를 입력해야 합니다.')
    else
        return x % Number(x.toString().split('').reduce((acc,cur) => String(parseInt(acc) + parseInt(cur))))  === 0 ? true: false
}

module.exports = {
    checkHarshard
}