import { useSelector, useDispatch } from 'react-redux'

import { decrement, increment, toggle } from '../store/counterSlice'
import classes from './Counter.module.css'

const Counter = () => {
  const dispatch = useDispatch()
  const counter = useSelector((state) => state.counter.counter)
  const show = useSelector((state) => state.counter.showCounter)
  const isAuth = useSelector((state) => state.auth.isAuthenticated)
  if (!isAuth) {
    return <></>
  }

  const incrementHandler = () => {
    dispatch(increment(1))
  }

  const increaseHandler = () => {
    dispatch(increment(10)) // { type: SOME_UNIQUE_IDENTIFIER, payload: 10 }
  }

  const decrementHandler = () => {
    dispatch(decrement(1))
  }

  const toggleCounterHandler = () => {
    dispatch(toggle())
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 10</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  )
}

export default Counter
