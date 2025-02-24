import React from 'react'
import Child from './Child'

const Parent = () => {

    const details = [
        {name:"Devendar",email:"devendar@gmail.com",age:22,id:1},
        {name:"Ajay",email:"ajay@gmail.com",age:21,id:2},
        {name:"Kiran",email:"kiran@gmail.com",age:22,id:3},
        {name:"Devan",email:"dev@gmail.com",age:20,id:4},
    ]
  return (
    <div>
      <Child
        details = {details}
      />
    </div>
  )
}

export default Parent
