const { getAverage }= require('../programers/getAverage')

describe("getAverage test", ()=>{
    test("arr length err", ()=>{
        let arr = []    
        expect(()=> getAverage(arr)).toThrow('arr의 길이는 1이상, 100이하입니다.')
    })

    test("arr element err",()=>{
        let arr = [1,2,10000000]
        expect(()=>getAverage(arr)).toThrow('arr의 원소는 -10,000이상 10,000이하인 정수입니다')

    })

    test("success to get average of array1",()=>{
        let arr = [1,2,3,4]
        expect(getAverage(arr)).toBe(2.5)
    })

    test("success to get average of array2",()=>{
        let arr = [5,5]
        expect(getAverage(arr)).toBe(5)
    })


})