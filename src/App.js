import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Button from './components/Button';

function App() {
    let name = 'Brian';
    let buttons = [
        {color: 'primary', step: 1},
        {color: 'secondary', step: 10},
        {color: 'success', step: 100},
        {color: 'danger', step: 1000}
    ];

    const [count, setCount] = useState(0);

    function increaseCount(step){
        setCount(count + step)
    };

    return (
        <div className="App">
            <Navbar username={name} city={"Chicago"}/>
            <div className='container'>
                {count < 50 ? <h1>Hello {name} {count}</h1> : <h1>Good Bye {name} {count}</h1>}
                {buttons.map(button => <Button key={button.step} color={button.color} step={button.step} handleClick={increaseCount}/> )}
            </div>
        </div>
    );
}

export default App;
