import React, { useContext, useEffect, useState } from 'react'
import { details } from './MainComponent'

const Child1 = () => {
    const {userData} = useContext(details)
    const [data,setData] = useState([])
    const [error,setError] = useState("")
    const [loading,setLoading]= useState(true)

    useEffect(()=>{
        const myFun = async ()=>{
            try{
                const response = await fetch(userData)
                const newData = await response.json()
                setData(newData)
            }catch{
                setError("Failed to fetch Data....?")
            }finally{
                setLoading(false)
            }
        }
        myFun()
    },[])

    if(loading){
        return(
            <h1>Loading please wait!........</h1>
        )
    }

    if(error){
        <p>{error}</p>
    }
  return (
    <table align='center'>
        <caption><h1>Fetching Data using UseContext and fetch api!</h1> </caption>
        <thead>
            <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>USERNAME</th>
                <th>PHONE</th>
                <th>WEBSITE</th>
                <th>COMPANY</th>
                <th>ADDRESS</th>
            </tr>
        </thead>
        <tbody>
            {data.map((item,id)=>(
                <tr key={id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.username}</td>
                    <td>{item.phone}</td>
                    <td>{item.website}</td>
                    <td>{item.company.name}</td>
                    <td>{item.address.city}</td>
                </tr>
            ))}
        </tbody>
    </table>
  )
}

export default Child1
