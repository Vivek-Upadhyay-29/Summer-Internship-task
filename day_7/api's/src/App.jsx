import { useEffect, useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <h1>Bitcoin Price Chart</h1>
      <FetchApi />
    </>
  );
}

export function FetchApi() {
  const [data, setData] = useState([]);
  const apiGet = () => {
    fetch("http://api.coindesk.com/v1/bpi/currentprice.json")
      .then((response) => response.json())
      .then((json) => {
        setData(json.bpi.USD);
      });
  };
  apiGet();
  return (
    <>
      <h1>{data.rate}</h1>
      <h1>{data.rate_float}</h1>
      <h1>{data.description}</h1>
    </>
  );
}
export default App;
