const rdux = require("redux");

const crtStore = rdux.createStore;

const initialState = {
    counter: 0
}

const reducer = (state = initialState, action)=>{
   
    if(action.type==="INC") {
        return  { 
            ...state,counter: state.counter+1
        }
    }
    else if(action.type==="DEC") {
        return {
            ...state,counter:state.counter-1
        }
    }
    return state;
}

const store = crtStore(reducer);

console.log(store.getState());


store.dispatch({type:"INC",value:1});
console.log(store.getState());



store.dispatch({type:"DEC",value:1});

console.log(store.getState());