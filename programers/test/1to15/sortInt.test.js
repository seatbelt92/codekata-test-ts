const {sortInt} = require('../../problems/1to15/sortInt')

describe('정수 내림차순으로 배치하기 테스트입니다', ()=>{
    test('1이상의 자연수 여부 체크', ()=>{
        const n = -1;
        expect(()=>sortInt(n)).toThrow('n은 1이상의 자연수입니다.')
    })

    test('80억 이하의 자연수 여부 체크',()=>{
        const n = 9000000000;
        expect(()=>sortInt(n)).toThrow('n은 8,000,000,000이하의 자연수입니다.') 
    })

    test('정수 여부 체크',()=>{
        const n = 1.2;
        expect(()=>sortInt(n)).toThrow('n은 정수입니다.')
    })

    test('118372는 873211입니다.',()=>{
        const n =118372
        expect(sortInt(n)).toBe(873211)
    })

    test('7281946는 9876421입니다.',()=>{
        const n =7281946
        expect(sortInt(n)).toBe(9876421)
    })
})