import React, { useContext } from 'react'
import { data } from './Parent'

const GrandChild = () => {

    const {detail} = useContext(data)
  return (
    <div>
      <table align='center'>
        <caption><h1>UseContext Example</h1></caption>
        <thead >
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Animal</th>
                <th>Flower</th>
                <th>Bird</th>
            </tr>
        </thead>
        <tbody>
            {detail.map((item,id)=>(
                <tr key={id}>
                    
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.animal}</td>
                    <td>{item.flower}</td>
                    <td>{item.bird}</td>
                </tr>
            ))}
        </tbody>
      </table>
      <GrandChild/>
    </div>
  )
}

export default GrandChild
