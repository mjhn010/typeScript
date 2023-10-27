// Array
const fruits:string[] = ['tomato','banana'];
const num:Array<number> = [1,2,3,4];

function printArray(fruits:readonly string[]){}

//tuple(가독성이 떨어진다.) 서로 다른 타입의 데이터를 담을 수 있다. -> interface, type alias, class로 대체해서 사용.
let student:[string, number];
student=['good',123];
student[0];//name
student[1];//number
const [good,age] = student;