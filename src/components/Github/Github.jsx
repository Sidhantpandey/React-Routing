import React, { useState, useEffect } from "react";
import {useLoaderData} from 'react-router-dom'
const Github = () => {
    const data=useLoaderData()
//   const [data, setData] = useState({}); // Initialize as an empty object

//   useEffect(() => {
//     fetch("https://api.github.com/users/Sidhantpandey")
//       .then(res => res.json())
//       .then(data => {
//         console.log(data);
//         setData(data);
//       })
//       .catch(error => console.error("Error fetching data:", error)); // Handle errors
//   }, []);

  return (
    <div className="text-center m-4 bg-gray-400 text-white p-4 text-3xl">
      Github Followers: {data.followers || 0} {/* Prevent undefined issues */}
      <img src={data.avatar_url} alt='none' width={200}/> 
    </div>
  );
};

export default Github;

export const githubinforloader = async()=>{
    const res=await fetch("https://api.github.com/users/Sidhantpandey")
    return res.json()
}

