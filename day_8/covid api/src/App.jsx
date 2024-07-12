
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState, useEffect } from 'react'

function App() {
  return (
    <>
     <CovidApi/>
    </>
  )
}


export function CovidApi(){
const [data,setData] = useState([]);

const api = ()=>{
  fetch("https://data.covid19india.org/data.json")
  .then((response)=>response.json())
  .then((json)=>{
    setData(json.statewise);
  });
};

useEffect(
 ()=>{
  api();
  const interval = setInterval(
    ()=>{
      api();
    },100000
  );
  return ()=> clearInterval(interval);
 },[]
);

return(
  <>
  <table>
    <tr>
      <th>Sr</th>
      <th>States</th>
      <th>Daily Cases</th>
      <th>Daily Death</th>
      <th>Daily Recovered</th>      
      
      </tr>
{
      data.map(
        (item,i)  =>(
        <tr>
         <td> {i+1}</td>
         <td> {item.state}</td>
         <td> {item.confirmed}</td>
         <td> {item.deaths}</td>
         <td> {item.recovered}</td>
        </tr>
        )
       ) 
       } 
       
        </table>
  
  </>
);
}
export default App
