import React, { useEffect, useState } from 'react'

const Main = () => {
    const [count, setCount]= useState(0)
    const [total,setTotal ]= useState(0)

    const handleCount = ()=>{
        setCount(count+1)
    }
    const decreaseCount = ()=>{
        setCount(count-1)
    }
    const resetCount = ()=>{
        setCount(0)
    }

    const handleTotal = ()=>{
        setTotal(total+1)
    }
    const decreaseTotal = ()=>{
        setTotal(total-1)
    }
    const resetTotal = ()=>{
        setTotal(0)
    }

    useEffect(()=>{
        alert("I will run when button releated to count is pressed!")
    },[count])

    useEffect(()=>{
        alert("I will run when button releated to total is pressed!")
    },[total])
  return (
    <div style={{textAlign:"center"}}>
      <h1>Count :{count}</h1>
      <h1>Total :{total}</h1>
      <button onClick={handleCount}>Count++</button> <button onClick={decreaseCount}>Count--</button> <button onClick={resetCount}>reset</button> <br /><br />
      <button onClick={handleTotal}>Total++</button> <button onClick={decreaseTotal}>Total--</button> <button onClick={resetTotal}>reset</button>
    </div>
  )
}

export default Main
