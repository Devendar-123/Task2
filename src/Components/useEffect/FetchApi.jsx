import React, { useEffect, useState } from 'react'

const FetchApi = () => {
    const details = "https://jsonplaceholder.typicode.com/posts"
const [data,setData] = useState([])
const [loading,setLoading]= useState(true)
const [error, setError] = useState("")

useEffect(()=>{
    const fetchData = async () => {
        try{
            const response = await fetch(details)
        const newData = await response.json()
        setData(newData);
        }
        catch{
            setError("Data is not fetched!")
        }
        finally{
            setLoading(false)
        }
        
    }
    fetchData()
},[])

if(loading){
    return(
        <p>Loading.......</p>
    )
}

if(error){
    return(
        <p>{error}</p>
    )
}
  return (
    
    <div>
      <h3>Fetching Data!</h3>
      <table align='center'>
        <thead>
            <tr>
                <th>Sl.No</th>
                <th>Title</th>
                <th>Body</th>
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

export default FetchApi
