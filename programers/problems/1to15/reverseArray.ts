function solution(n:number){
    if(n<=0){
        throw new Error("실패: n은 자연수를 입력해야 합니다.")
    } else if(typeof(n) !== 'number'){
        throw new Error("n은 숫자 타입을 입력해주세요")
    }
    return n.toString().split('').reverse().map((el)=> Number(el))
}

module.exports = {
    solution
}