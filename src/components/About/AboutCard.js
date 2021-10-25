import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Md Marzukul Islam </span>
            from <span className="purple"> Dhaka, Bangladesh.</span>
            <br />I am a junior Software Engineer, work at Ethics advance technology limited (EATL).
            I have studied at Stamford uniiversity Bangladesh in Compuer Science and Engineering.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Success is the journey, not a destination...."{" "}
          </p>
          {/* <footer className="blockquote-footer">Marzuk</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
