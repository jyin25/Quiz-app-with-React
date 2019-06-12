import React from 'react';

function RenderQuestion (props) {
    console.log(props.store[0].ans1);

    return (
        <div>
            <input></input>{props.store[0].ans1}
        </div>
    )
}



export default RenderQuestion;