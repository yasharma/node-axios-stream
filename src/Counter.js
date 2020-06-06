import React, { useState } from 'react';

function Counter() {
  const [counter, setCounter] = useState(0);
  const onButtonClick = () => {
    console.log('Button Clicked!');
    setCounter(c => c + 1);
  }
  return (
    <div className="App">
      <button onClick={() => onButtonClick()}>Counter</button>
      <input type="text" name="text"/>
      {counter}
    </div>
  );
}

export default Counter;

