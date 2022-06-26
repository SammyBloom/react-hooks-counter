import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <div>Count: {count}</div>
      <div>
        <button onClick={() => setCount(count+1)}>+</button>
      </div>
    </div>
  );
};

export default App;
