// discriminated == 차별화,구분하다
{
    //function: login -> success, fail;


    //1. 성공일때, 실패일때 타입을 선언한다(객체로).
    //2. 유니온타입으로 타입을 지정한다.
    //3.discriminated을 통해 공통된 result라는 키와 그에 맞는 값을 할당한다.
    //4. 공통된 키를 가지고 있기때문에 접근이가능하며 ex))state.result == 성공 실패를 통해 좀 더 쉽게 구현이 가능하다.

// 성공 객체타입
type SuccessState = {
    result:'success';
    response:{
        body:string;
    }
}

// 실패 객체타입
type FailState = {
    result:'fail';
    reason:{
        body:string;
    }
}

//유니온타입을 통해 loginState 타입 선언
type LoginState = SuccessState | FailState;

function login():LoginState{ 
    return{
        result:'success',
       response:{
        body:"login in",
       }
    }
}

function printLoginState(state:LoginState){
    state.result // success or fail LoginState가 result라는 공통된것을 가지고 있기때문에 접근이  가능하다.
    if(state.result === 'success'){
        console.log(state.response.body)
    }else{
        console.log(state.reason.body);
        
    }
}
}
