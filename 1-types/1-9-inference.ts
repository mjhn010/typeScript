/**
 * Type inference
 */
//뻔한 변수명 같은 경우에는 타입을 지정하지 않아줘도 괜찮다.
let text = 'hello';
//이런경우는 꼭 타입 지정
let what:string = 'hi'
function print(message = 'hello'){
    console.log(message);
}
print('hello');

function addA(x:number, y:number):number{
    return x + y;
}
const result = addA(1,2);