import { useState } from "react";

import "./App.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Badge from "react-bootstrap/Badge";
import { useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
       <Button as="a" variant="primary">
       <FetchAPT />
  </Button>
        
    
    </>
  );
}

export function FetchAPT() {
  const [data, setData] = useState([]);

  const getApi = () => {
    fetch("http://api.coindesk.com/v1/bpi/currentprice.json")
      .then((response) => response.json())
      .then((json) => {
        setData(json.bpi.USD);
      });
  }
  useEffect(() => {
    getApi();
    const interval = setInterval(
      () =>
       {
      getApi();
    }, 7000
  );
    return () => clearInterval(interval);
  }, []
);

  return (
    <>
      <h2>{data.rate}</h2>
    </>
  );
}

export default App;
