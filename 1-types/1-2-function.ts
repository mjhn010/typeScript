
{
//JavaScript
// function jsAdd(num1,num2){
//     return num1 + num2;
// };

//TypeScript
function add(num1:number, num2:number):number{
    return num1 + num2;
};

//javaScript
//function jsFetchNum(id){
    //code..
    //code..
   // return new Promise((resolve, reject)=>{
     //   resolve(100);
  //  });

//TypeScript
// function jsFetchNum(id:string):Promise<number>{
//     //code..
//     //code..
//     return new Promise((resolve, reject)=>{
//         resolve(100);
//     });
// }


//JavaScript => TypeScript

//Optional parameter == ? - 전달을 할수도 안할수도있다. 전달을 안한 인수의 경우 undefined이다.
function printName(firstName:string,lastName?:string){
    console.log(firstName);
    console.log(lastName);   
}
printName('yoon','junY');
printName('steve')
printName('Anna',undefined);

// Defailt parameter 인수를 전달하지 않으면 default값이 지정.
function printmassege(messege:string = 'default'){
    console.log(messege);
    
}
printmassege()

// Rest parameter good !!!
function addNumbers(...numbers:number[]):number{
    return numbers.reduce((a,b)=>a+b);
}
console.log(addNumbers(1,2));
console.log(addNumbers(1,2,3,4,5));
console.log(addNumbers(1,2,3,4,5,6,7,8));
}
