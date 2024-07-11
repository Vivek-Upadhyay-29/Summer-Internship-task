import { useState } from 'react';
import './App.css';

function App() {

  return (
    <>
     <h1>New api</h1>
     <NewApi/>
     <NewsApi />
    </>
  );
}
export function NewApi(){
  const [ data,setData] = useState([]);
  const apiGet= ()=>{
fetch("http://api.coindesk.com/v1/bpi/currentprice.json")
.then((response)=> response.json())
.then((json)=>{
   setData(json.bpi.USD);
});
  };
apiGet();
  return(
    <>
    <h1>{data.rate}</h1>
    </>
  );
}



export function NewsApi(){
const [news, setNews] = useState([]);


const getNews = ()=>{
  fetch("https://inshortsapi.vercel.app/news?category=sports")
  .then((response)=> response.json())
  .then ((json)=>{
    setNews (json.data);
  });
};
getNews();
return(

  <>
  <h1> this the title {news.author}</h1>
  {value.content}
  </>
);
}
export default App;
