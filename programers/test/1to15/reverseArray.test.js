const {solution} = require("../../problems/1to15/reverseArray")
    test("n 자연수 여부 테스트", ()=> { 
        expect(()=>solution(-10)).toThrow("실패: n은 자연수를 입력해야 합니다.")
    }); 

    test("입력값 타입 체크 테스트", ()=>{
        expect(()=>solution("string")).toThrow("n은 숫자 타입을 입력해주세요")
    })

    test("1 입력 테스트", ()=>{
        expect(solution(1)).toEqual([1]);
    })

    test("1000 입력 테스트", ()=>{
        expect(solution(1000)).toEqual([0,0,0,1]);
    })

    test("1111 입력 테스트", ()=>{
        expect( solution(1111)).toEqual([1,1,1,1]);
    })

    test("10101 입력 테스트", ()=>{
        expect( solution(10101)).toEqual([1,0,1,0,1]);
    })

    test("1111 입력 테스트", ()=>{
        expect(solution(1111)).toEqual([1,1,1,1]);
    })

    test("12345 입력 테스트", ()=>{
        expect( solution(12345)).toEqual([5,4,3,2,1]);
    })