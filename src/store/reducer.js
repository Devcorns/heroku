
const initialize = {
    counter: 0
}

const reducer = (state=initialize,action) => {
    switch(action.type) {
        case "INC_1":
            return {
                counter:state.counter+1
            }
        break;
        case "DEC_1":
            console.log("Dec works")
            return {
                counter:state.counter-1
            }
        break;
        case "INC_WITH_VAL":
            return {
                counter: state.counter+action.value
            }
        break;
        case "DEC_WITH_VAL":
            return {
                counter: state.counter-action.value
            }
        break;
    }

    return state;
}

export default reducer;