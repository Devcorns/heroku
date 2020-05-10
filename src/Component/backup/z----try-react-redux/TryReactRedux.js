import  React from "react";

import { connect } from "react-redux";

class TryReactRedux extends React.Component {

    state = {
        counter: 0
    }

    counterChangeHandler = (action,value=1) => {

        switch(action) {
            case "inc":
                this.setState((prevstat)=>{
                    return {
                        counter:this.state.counter+value
                    }
                })
            break;
            case "dec":
                this.setState((prevstat)=>{
                    return {
                        counter:this.state.counter-value
                    }
                })
            break;
            case "inc5":
                this.setState((prevstat)=>{
                    return {
                        counter:this.state.counter+5
                    }
                })
            break;
        }

    }

    render() {
        return(
            <React.Fragment>
                output Container: {this.props.ctr}<br />
                <button onClick={this.props.incrementByOne}>Inc 1</button>
                <button onClick={this.props.decrementByOne}>Dec 1</button>
                <button onClick={this.props.incByVal}>Inc 10</button>
                <button onClick={this.props.decByVal}>Dec 15</button>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        incrementByOne: () => dispatch({type:"INC_1"}),
        decrementByOne: () => dispatch({type:"DEC_1"}),
        incByVal:       () => dispatch({type:"INC_WITH_VAL",value:10}),
        decByVal:       () => dispatch({type:"DEC_WITH_VAL",value:15})
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(TryReactRedux);