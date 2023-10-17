{
    //javaScript 기본지식 숙지 !
    // let es6  값 변경가능.
    // let name = 'hello'; 
    // name = 'hi'
    // const 상수! 한번 선언하면 다시 값 변경 불가능.
    // const age = 1;


    /**
     * JavaScriptType
     * 원시타입 한가지 데이터를 담을 수 있는 타입 == Primitive: number,string,boolean, bigint == 큰숫자, symbol,null,undefined
     * 오브젝트타입 여러가지 데이터를 담을 수 있는 타입object: funtion, Array....
     */

    //number
    const num:number = 10;

    //string
    const str:string = 'hi';

    //boolean
    const boal:boolean = false;

    //undefined == 값이 있는지 없는지 즉 정의가 되어있지않다.
    let name:undefined;//안씀.
    let age:number |undefined; //데이터가 들어갈수도있고 정의가되지 않을수도 있다. 보편적으로는 null 보다는 undefined를 많이사용한다.
    age = undefined;
    age = 1;

    function find():number|undefined{
        return 1;
        // return undefined
        // 찾았다면 숫자를 리턴하고 찾지못했다면 undefined를 리턴
    }
    //null == 값이 없다.
    let person:null;
    let person2:string |null; //데이터가 있을수도 있고 없을수도 있을때 사용

    //unkown 알수없는 너무 추상적이다.쓰지않는타입 있는이유는 자바스크립트(타입이없는)와 연동해서 쓰기때문.
    let notSure :unknown = 0;
    notSure = "hi";
    notSure =true;

    //any 어떤것이든 허용 되도록 사용하지않는것이 좋다.
    let anything:any = 0;
    anything = 'hello'

    //void 리턴하지않는다. 함수에만 사용! 변수에는 사용하지않는다.
    function print():void{
        console.log('hello')
        return;
    }

    //never 절대절대 리턴할수없다.
    function throwError(message:string):never{
        // 서버에 에러메시지 기록을 남기고 클라이언트에서 에러를 띄우는 함수.
        //message -> server(log)
        throw new Error(message);
        while(true){
            //무한반복
        }
    }

    //object 원시타입을 제외한 모든 오브젝트타입을 할당할 수 있다. 쓰지않는것이좋음. 구체적으로 타입을 선언하고 사용하는것이 중요하다.
    let  obj:object = [1,4];
    function acceptSoneObject(obj:object){

    }
    acceptSoneObject({name:'jun'})
    acceptSoneObject({anmal:'dog'})
    acceptSoneObject([1,2,3,4])
    




}