import React from 'react';
import {VISIBILITY} from "../constants";

const TodoControls = ({visibility, setVisibility}) => {
    console.log(visibility);
    return (
        <div>
            <button
                disabled={visibility === VISIBILITY.ALL}
                onClick={() => {setVisibility(VISIBILITY.ALL)}}
                style={{marginLeft: "4px"}}
            >All
            </button>
            <button
                disabled={visibility === VISIBILITY.OPEN}
                onClick={() => {setVisibility(VISIBILITY.OPEN)}}
                style={{marginLeft: "4px"}}
            >Active</button>
            <button
                disabled={visibility === VISIBILITY.COMPLETED}
                onClick={() => setVisibility(VISIBILITY.COMPLETED)}
                style={{marginLeft: "4px"}}
            >Completed</button>
        </div>
    );
};

export default TodoControls;