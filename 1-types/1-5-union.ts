
{
/**
 * Union Types: OR
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
function login():LoginState{
    return{
       response:{
        body:"login in",
       }
    }
}

//printLoginState(state)
//success -> body
//fail -> reason
}