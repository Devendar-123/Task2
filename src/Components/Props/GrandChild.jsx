import React from 'react'

const GrandChild = (props) => {
  return (
    <table>
        
        <thead>
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            </tr>
        </thead>

        
        <tbody>
            {props.details.map((detail,id)=>(
                <tr key={id}>
                    <td>{detail.name}</td>
                    <td>{detail.email}</td>
                    <td>{detail.age}</td>
                </tr>
            ))}
        </tbody>
        
    </table>
  )
}

export default GrandChild
