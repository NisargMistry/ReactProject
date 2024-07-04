import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {

    const data = useLoaderData()


    // 1 Method to Fetch
    // const[data,setData] = useState([])
    // useEffect(()=>{
    //     fetch('http://api.github.com/users/NisargMistry')
    //     .then(response => response.json())
    //     .then(data =>{
    //         console.log(data);
    //         setData(data)
    //     })
    // },[])
  return (
    <div className='text-center m-4 bg-gray-500 text-white p-4 text-3xl'>Github Follower :{data.followers} 

    <img src={data.avatar_url} alt="Git Picture" width={300} />
    
    
    </div>

  )
}

export default Github

// 2 Method to Fetch
export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/NisargMistry')
    return response.json()
}
