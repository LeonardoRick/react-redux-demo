import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/counter';

const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector((state) => state.counter.counter);
    const showCounter = useSelector((state) => state.counter.showCounter);

    const toggleCounterHandler = () => {
        dispatch(counterActions.toggleCounter());
    };

    const decrementHandler = () => {
        dispatch(counterActions.decrement());
    };

    const increaseHandler = () => {
        dispatch(counterActions.increase({ amount: 5 }));
    };

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            {showCounter && <div className={classes.value}> {counter} </div>}
            <button onClick={decrementHandler}>Decrement</button>
            <button onClick={() => dispatch(counterActions.increment())}>Increment</button>
            <button onClick={increaseHandler}>Increase by 5</button>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
};

export default Counter;
