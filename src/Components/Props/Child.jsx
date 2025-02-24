import React from 'react'
import GrandChild from './GrandChild'

const Child = (props) => {
  return (
    <div>
        <br /><br />
      <GrandChild details ={props.details}/>
    </div>
  )
}

export default Child
