{
  /**
   * Print Loading State
   */
  type LoadingState = {
    state: 'loading';
  };

  type SuccessState = {
    state: 'success';
    response: {
      body: string;
    };
  };

  type FailState = {
    state: 'fail';
    reason: string;
  };

  type ResourceLoadState = LoadingState | SuccessState | FailState;

  //if
  // function printLoginState2(resourceLoadState:ResourceLoadState){
  //   if(resourceLoadState.state == 'loading'){
  //     return console.log("loading...")
  //   }else if(resourceLoadState.state == 'success'){
  //     return console.log(resourceLoadState.response.body)
  //   }else{
  //     return console.log(resourceLoadState.reason)
  //   }


  // }

  //swich
  function printLoginState2(state:ResourceLoadState){
    switch(state.state){
      case "loading":
        return console.log('loading...')
        break;
      case 'success':
        return console.log(state.response.body)
        break;
      case 'fail':
        return console.log(state.reason);
        break;
        default:
          throw new Error('error');
    }
  }

  printLoginState2({ state: 'loading' }); // 👀 loading...
  printLoginState2({ state: 'success', response: { body: 'loaded' } }); // 😃 loaded
  printLoginState2({ state: 'fail', reason: 'no network' }); // 😱 no network
}
