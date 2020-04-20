import React from "react";

import withCustomHoc from "../customHOC/withCustomHOC"

class ApplyHigherOrderComponent extends React.Component {
    render() {
        return(
            <div>
                <h1>I am a higher order function</h1>
            </div>
        )
    }
}

export default withCustomHoc(ApplyHigherOrderComponent);