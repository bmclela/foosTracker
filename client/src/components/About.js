import React from "react";
import { Card } from "react-bootstrap";

const About = () => {
  return (
    <Card id="background" style={{ margin: "40px" }}>
      <Card.Body>
        <Card.Text style={{ fontSize: 36, textAlign: "center" }}>
          About
        </Card.Text>
        <Card.Text style={{ fontSize: 24 }}>
          What is this application?
        </Card.Text>
        <Card.Text style={{ fontSize: 14 }}>
          I developed this web application to track the rankings of my friends
          and I as we played foosball games. Because the original application is
          still used regularly, this is a separate instance to showcase my work.
          Feel free to add your own games and mess around with the data to see
          how the application works.
        </Card.Text>
        <br />
        <Card.Text style={{ fontSize: 24 }}>
          How do I use this application?
        </Card.Text>
        <Card.Text style={{ fontSize: 14 }}>
          The app tracks the standings of players and teams across multiple
          foosball games. To start, add players by clicking Add Player. You can
          see a list of existing players above the input box. Once you have
          enough players, click Add Game and select the players that won and
          lost the game. After clicking submit, you will see the application
          update immediately to reflect the newly added game.
        </Card.Text>
        <br />
        <Card.Text style={{ fontSize: 24 }}>
          How are players and teams ranked?
        </Card.Text>
        <Card.Text style={{ fontSize: 14 }}>
          The ranking method for both players and teams is based on the{" "}
          <a
            href="https://en.wikipedia.org/wiki/Elo_rating_system"
            target="_blank"
            rel="noopener noreferrer"
          >
            elo rating system
          </a>
          . Various other statistics are also recorded and displayed for each
          player and team.
        </Card.Text>
        <br />
        <Card.Text style={{ fontSize: 24 }}>
          What is the application built with?
        </Card.Text>
        <Card.Text style={{ fontSize: 14 }}>
          This application was built with the MERN stack (MongoDB, Express,
          React, Node.js) and deployed on Heroku. Other technologies used
          include Redux, React Router, React Boostrap, Mongoose, Cron, and
          Axios.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default About;
