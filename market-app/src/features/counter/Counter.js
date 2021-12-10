import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { jobform, login } from './counterSlice'


export function Counter() {
  const count = useSelector((state) => state.Counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="login value"
          onClick={() => dispatch(login())}
        >
          Login
        </button>
        <span>{count}</span>
        <button
          aria-label="JobForm value"
          onClick={() => dispatch(jobform())}
        >
          JobForm
        </button>
      </div>
    </div>
  )
}

export default Counter;