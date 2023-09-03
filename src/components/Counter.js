import React,{useState} from 'react';
//import { connect } from 'react-redux';
import { useSelector,useDispatch } from 'react-redux';
import { decrease, increase } from '../redux/counter/counterAction';

// const Counter = (props) => {
    const Counter =()=>{

        const [value,setValue] = useState(1);
        const counter = useSelector(state=>state.counterState.counter);
        const dispatch = useDispatch();
    return (
        <div>
            <h1>Counter - {counter}</h1>
            <input type="text" value={value} onChange={event=>setValue(event.target.value)}/>
            <button onClick={()=>dispatch(increase(+value))}>Increase</button>
            <button onClick={()=>dispatch(decrease(+value))}>Decrease</button>
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