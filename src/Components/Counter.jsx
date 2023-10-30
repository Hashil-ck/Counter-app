import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from '../redux/counterSlice'

function Counter() {
    const [amount,setAmount]=useState(0)
    console.log(    typeof(parseInt(amount))
    );
    const dispatch = useDispatch()
    const count = useSelector(state => state.counterReducer.count)
  return (
    <div className='w-100 d-flex justify-content-center align-items-center ' style={{height:'70vh'}}>
        <div className='border rounded p-5 w-25 d-flex justify-content-center align-items-center flex-column'>
            <h1>{count}</h1>
            <div className='d-flex justify-content-between w-100 mt-5 '>
                    <button onClick={()=>dispatch(decrement())} className='btn btn-warning'>Decrement</button>
                    <button onClick={()=>dispatch(reset())} className='btn btn-danger'>Rest</button>
                    <button onClick={()=>dispatch(increment())} className='btn btn-success'>Increment</button>
            </div>
            <div className='d-flex mt-3 justify-content-between w-100'>
                <input onChange={(e)=>setAmount(e.target.value)} type="number" style={{width:'100px', height:"40px", border:'0px 0px 1px '}}/>
                <button onClick={()=>dispatch(incrementByAmount(parseInt(amount)))} className='btn btn-primary '>Increment by Amount</button>
            </div>
            </div>
    </div>
  )
}

export default Counter