import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function BasicExample() {
  return (
    <Card style={{ width: '18rem', margin:"5px" }}>
    <Card.Img variant="top" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.forbes.com%2Fsites%2Fdanafeldman%2F2024%2F02%2F08%2Fthe-netflix-drama-series-one-day-is-more-than-a-love-story%2F&psig=AOvVaw1LW8ficaOLDgV3wZeNksNp&ust=1720627768214000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPjDz4usmocDFQAAAAAdAAAAABAR" />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
  )
}

export default BasicExample