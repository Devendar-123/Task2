import React, { useEffect, useState } from 'react'
import axios from 'axios'

const AxiosExample = () => {
    const details = "https://jsonplaceholder.typicode.com/posts"
    const [data,setData] = useState([])
    const [loading,setLoading]= useState(true)
    const [error,setError]= useState("")

    useEffect(()=>{
        const AxiosData = async()=>{
            try{
                const response = await axios.get(details)
                setData(response.data)
            }catch{
                setError("Data fetching is not done with axios!")
            }finally{
                setLoading(false)
            }
        }
        AxiosData()
    },[])

    if(loading){
        return(
            <p>Loading....</p>
        )
    }
    if(error){
       return(
        <p>{error}</p>
       )
    }
  return (
    <div>
      <h1>Accesing data using Axios!</h1>
      <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>TITLE</th>
                <th>BODY</th>
            </tr>
        </thead>
        <tbody>
            {data.map((item,id)=>(
                <tr key={id}>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.body}</td>
                </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default AxiosExample
