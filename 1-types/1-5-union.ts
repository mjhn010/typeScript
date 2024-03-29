
{
/**
 * Union Types: 또는 OR
 */

type Direction = 'left' | 'right' | "up" | 'down';

function move(direction:Direction){
    console.log(direction);
}
move('down');

type TileSize = 8 | 16 | 32;
const tile:TileSize = 16;


//function: login -> success, fail;
type SuccessState = {
    response:{
        body:string;
    }
}
type FailState = {
    reason:{
        body:string;
    }
}
type LoginState = SuccessState | FailState;
function unionLogin():LoginState{ 
    return{
       response:{
        body:"login in",
       }
    }
}

let success:SuccessState;
let fail:FailState;

//printLoginState(state)
//success -> body
//fail -> reason
function unionPrintLoginState(state:LoginState){
    if('response' in state){
        console.log(state.response.body)
    }else{
        console.log(state.reason.body);
        
    }
}

}