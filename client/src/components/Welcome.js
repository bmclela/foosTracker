import React from "react";
import { Card } from "react-bootstrap";

const Welcome = () => {
  return (
    <Card id="background" style={{ textAlign: "center" }}>
      <Card.Body>
        <Card.Text style={{ fontSize: 36 }}>Welcome to FoosTracker!</Card.Text>
        <Card.Text style={{ fontSize: 18 }}>
          Please visit the about page to learn about this application.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Welcome;
