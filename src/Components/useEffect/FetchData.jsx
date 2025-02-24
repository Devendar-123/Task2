import React, { useEffect, useState } from 'react'

const FetchData = () => {
    const fetchDetails = "https://jsonplaceholder.typicode.com/posts"
    const [data,setData] = useState([])
    const [loading,setLoading]= useState(true)
    const [error,setError] = useState("")



    useEffect(()=>{
        const FetchExample = async ()=>{
            try{
                const response = await fetch(fetchDetails)
                const newData = await response.json()
                setData(newData)
    
            }catch{
                setError("Failed to fetch data!")
            }finally{
                setLoading(false)
            }
        }
        FetchExample()
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
      <h1>Fetching data from Json placeholder!</h1>
      <table>
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

export default FetchData
