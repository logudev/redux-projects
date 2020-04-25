import React from 'react';

const Counter = ({value, onIncrement, onDecrement}) => {
    return (
      <div>
          <div>Value : <span>{value}</span></div>
          <div>
              <button style={{marginRight: "5px"}} onClick={onIncrement}>Increment</button>
              <button onClick={onDecrement}>Decrement</button>
          </div>
      </div>
    );
};

export default Counter;