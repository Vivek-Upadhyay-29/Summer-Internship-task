import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import{Container,Row,Col,Card} from "react-bootstrap";


function App() {
  const [mydata, setData] = useState([]);

  const getApi = () => {
    fetch("https://inshortsapi.vercel.app/news?category=sports")
      .then((response) => response.json())
      .then((json) => {
        setData(json.data);
      });
  };
  useEffect(() => {
    getApi();
    const interval = setInterval(() => {
      getApi();
    }, 50000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container fluid  >
      <Row xs={1} md={3} className="g-4 mt-4">
        {mydata.map((value) => {
          return (
            <>
              <Col className="container-fluid mt-4"   >
                <Card >
                  <Card.Img variant="top" src={value.imageUrl} style={{height: 275}}/>
                  <Card.Body>
                    <Card.Title>{value.title}</Card.Title>
                    <Card.Text>{value.content}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </>
          );
        })}
      </Row>
    </Container>
  );
}

export default App;
