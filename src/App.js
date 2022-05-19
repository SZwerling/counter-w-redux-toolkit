import React from 'react';
import { useSelector, useDispatch } from 'react-redux'; //to call from reducer
import { increment, decrement, incrementByAmount } from './counter'; //import the actions from the reducer


const App = () => {
    const { count } = useSelector(state => state.counter) //destructure the count var from the counter reducer
    const dispatch = useDispatch() //use to call any action from any reducer
    return(
        <div className="app">
            <h1>The count is: {count}</h1>
            <button onClick={() => dispatch(increment())}>increment</button>
            <button onClick={() => dispatch(decrement())}>decrement</button>
            <button onClick={() => dispatch(incrementByAmount(22))}>add 22</button>
        </div>
    )
}


export default App;