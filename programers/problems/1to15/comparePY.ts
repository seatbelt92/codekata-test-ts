function comparePY(s:string){
    const re = /^[a-z]+$/i
    let lengthP = s.toUpperCase().split('').filter(el => el==='P').length
    let lengthY = s.toUpperCase().split('').filter(el => el==='Y').length

    if(s.length<1 || s.length>50){
        throw new Error("문자열 길이 50 이하 자연수입니다!")
    } else if (!re.test(s)) {
        throw new Error("문자열은 알파벳으로만 이루어져야 합니다.")
    } else if (lengthP === lengthY) return true
    return false
}

module.exports= {
    comparePY
}