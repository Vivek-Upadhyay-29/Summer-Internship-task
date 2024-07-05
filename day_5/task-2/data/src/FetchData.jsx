import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

export const FetchData=()=> {
    const [data,setData] = useState([])
  useEffect(() => {
    axios.get("http://jsonplaceholder.typicode.com/users")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return <div className="container">
    <div className="mt-3">
FetchData from API
<table className="table">
    <thead><tr>
    <th>ID</th>
    <th>NAME</th>
    <th>Username</th>
    <th>Adderss</th>
    </tr></thead>
    <tbody>{

        data.map((user,index)=>{
 return <tr key={index}>
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.address.city}</td>
    </tr>
 
        })
    }</tbody>
</table>
    </div>
    </div>;
}
