const {checkHarshard} = require("../../problems/1to15/harshard")

describe("harshard Number TEST",()=>{

    test('1이상 10000이하 수 여부 테스트',()=>{
        let x = 0.1;
        expect(()=>checkHarshard(x)).toThrow('x는 1이상, 10000이하인 정수를 입력해야 합니다');
    })

    test('정수 여부 테스트',()=>{
        let x = 222.1;
        expect(()=>checkHarshard(x)).toThrow('x는 정수를 입력해야 합니다.');
    })

    test('10은 harshard Number 입니다.', ()=>{
        let x = 10;
        expect(checkHarshard(x)).toBe(true)
    })

    test('11은 harshard Number가 아닙니다.', ()=>{
        let x = 11;
        expect(checkHarshard(x)).toBe(false)
    })

    test('12은 harshard Number 입니다.', ()=>{
        let x = 12;
        expect(checkHarshard(x)).toBe(true)
    })

    test('10은 harshard Number가 아닙니다.', ()=>{
        let x = 13;
        expect(checkHarshard(x)).toBe(false)
    })
})