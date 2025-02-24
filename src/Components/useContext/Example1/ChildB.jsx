import React, { useContext } from 'react'
import ChildC from './ChildC'
import { data1 } from './Example1'
const ChildB = () => {
    const {actualDetail} = useContext(data1);
  return (
    <div>
        <table align='center'>
        <caption>Favourite items With Names!</caption>
        <thead>
            <tr>
                <th id='th1'>Name</th>
                <th id='th2'>Email</th>
                <th id='th3'>Favourite Animal</th>
                <th id='th4'>Favourite Flower</th>
                <th id='th5'>Favourite Place</th>
                <th id='th6'>Favourite Bird</th>
            </tr>
        </thead>
            <tbody>
                {actualDetail.map((data,id)=>(
                    <tr key={id}>
                        <td id='td1'>{data.name}</td>
                        <td id='td2'>{data.email}</td>
                        <td id='td3'>{data.animal}</td>
                        <td id='td4'>{data.flower}</td>
                        <td id='td5'>{data.place}</td>
                        <td id='td6'>{data.bird}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        <br /><br />
        <hr />
        <hr />
        <ChildC/>
    </div>
  )
}

export default ChildB
