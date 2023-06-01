// 타입스크립트 타입 
// number
// string
// boolean
// null
// undefined
// any(이것도 저것도 아닌 타입 모든 타입 기존 js방식으로 허용.)
// let a:number = 3
// a = 4
// let b:string = "love"
// let c:any = 4
// c = "asdf"
// let d:number|string|boolean = 3
// d = "asdjk"
// d= true
// let e:string[]=["d","s"]
// let f:number[]=[1,2,3,4,]
function addNumber(a, b) {
    return a + b;
}
addNumber(1, 2);
// node는 자바스크립트만 이해하지 타입스크립트는 이해못한다 그래서 타입스크립트는 ex)tsc index.ts
//타입스크립트는 브라우저가 이해하지못한다. 타입스크립트는 개발자의 편의를 위해서 나온 프레임워크.
