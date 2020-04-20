/*
Always use higher order component with small letter 
*/

import React from "react";

const withCustomHOC = (WrapperComponent) => {
    return (props) => (
        <div>
            <WrapperComponent />
        </div>
    )
}

export default withCustomHOC;