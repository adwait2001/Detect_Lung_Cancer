import React from "react";
import "./Team.css";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/esm/Container";
import teammate from "../../Assets/images/teammate.png";

const Team = () => {
  return (
    <div>
      <h2 className="team-heading"> Our Team </h2>
      <br />
      <Container>
        <Row>
          <Col>
            <Card style={{ width: "15rem" }} className="team-card">
              <Card.Img variant="top" src={teammate} />
              <Card.Body>
                <Card.Title>Bindi Shah</Card.Title>
                <Card.Text>
                  <p>name@github.com</p>
                  <p>name.sur@linkedin</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "15rem" }} className="team-card">
              <Card.Img variant="top" src={teammate} />
              <Card.Body>
                <Card.Title>Sejal Bhalgat</Card.Title>
                <Card.Text>
                  <p>name@github.com</p>
                  <p>name.sur@linkedin</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "15rem" }} className="team-card">
              <Card.Img variant="top" src={teammate} />
              <Card.Body>
                <Card.Title>Anuj Pandey</Card.Title>
                <Card.Text>
                  <p>name@github.com</p>
                  <p>name.sur@linkedin</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "15rem" }} className="team-card">
              <Card.Img variant="top" src={teammate} />
              <Card.Body>
                <Card.Title>Rohit Chitale</Card.Title>
                <Card.Text>
                  <p>name@github.com</p>
                  <p>name.sur@linkedin</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Team;
