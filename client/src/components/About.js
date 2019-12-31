import React from "react";
import { Card } from "react-bootstrap";

const About = () => {
  return (
    <Card id="background" style={{ margin: "40px", textAlign: "center" }}>
      <Card.Body>
        <Card.Text style={{ fontSize: 36 }}>About</Card.Text>
        <Card.Text style={{ fontSize: 18 }}>TODO</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default About;
