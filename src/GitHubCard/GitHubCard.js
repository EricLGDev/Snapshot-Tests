import React from "react"
import Card from "react-bootstrap/Card"
import ProfilePicture from './ProfilePicture.png'

function GitHubCard() {
  return (
      <div className="card">
        <Card style={{ width: "18rem"}}>
        <Card.Img variant="top" src={ProfilePicture} />
        <Card.Body>
            <Card.Title>Eric Giron</Card.Title>
            <Card.Text>
                Student Software Developer at UNLV.
            </Card.Text>
        </Card.Body>
        </Card>
      </div>
  );
}

export default GitHubCard