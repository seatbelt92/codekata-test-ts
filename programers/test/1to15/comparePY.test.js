const {comparePY} = require("../../problems/1to15/comparePY")

describe("p,y개수를 비교하는 테스트입니다.", ()=>{
    test("pPoooyY는 true입니다.",()=>{
        let s = 'pPoooyY'
        expect(comparePY(s)).toBe(true)
    })

    test("ppoooYY는 true입니다.", ()=>{
        let s = 'ppoooYY'
        expect(comparePY(s)).toBe(true)
    })

    test("Pyy는 false입니다", ()=>{
        let s = 'Pyy'
        expect(comparePY(s)).toBe(false)
    })

    test("pYY false입니다", ()=>{
        let s = 'pYY'
        expect(comparePY(s)).toBe(false)
    })

    test("문자열 길이 50 이하 자연수 테스트", ()=>{
        let s = ''
        expect(()=>comparePY(s.length)).toThrow(Error)
    })

    test("문자열 구성이 오직 알파벳인지 확인 테스트",()=>{
        let s = '123a'
        expect(()=>comparePY(s)).toThrow(Error)
    })

    test("py 어느것도 없다면 true입니다.", ()=>{
        let s = 'abcd'
        expect(comparePY(s)).toBe(true)
    })
})