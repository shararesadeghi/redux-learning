import React from 'react';
//import { connect } from 'react-redux';
import { useSelector,useDispatch } from 'react-redux';
import { decrease, increase } from '../redux/counter/counterAction';

// const Counter = (props) => {
    const Counter =()=>{
        const counter = useSelector(state=>state.counterState.counter);
        const dispatch = useDispatch();
    return (
        <div>
            <h1>Counter - {counter}</h1>
            <button onClick={()=>dispatch(increase())}>Increase</button>
            <button onClick={()=>dispatch(decrease())}>Decrease</button>
            {/* <h1>Counter - {props.counter}</h1>
            <button onClick={props.increase}>Increase</button> */}
        </div>
    );
};

// const mapStateToProps = state =>{
//     return{
//         counter:state.counter
//     }
// }

// const mapDispatchToProps = dispatch =>{
//     return {
//         increase: ()=>dispatch(increase())
//     }
// }

//export default connect(mapStateToProps,mapDispatchToProps)(Counter);
export default Counter;