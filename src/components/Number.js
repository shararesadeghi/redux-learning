import React from 'react';
import { numberIncrease,numberDecrease } from '../redux/number/numberAction';
import { useSelector,useDispatch } from 'react-redux';

const Number = () => {

    const number = useSelector(state=>state.numberState.number);
    const dispatch = useDispatch();
    return (
        <div>

            <h1>Number - {number} </h1>
            <button onClick={()=>dispatch(numberIncrease())}>IncreaseNumber</button>
            <button onClick ={()=>dispatch(numberDecrease())}>DecreaseNumber</button>
            
        </div>
    );
};

export default Number;