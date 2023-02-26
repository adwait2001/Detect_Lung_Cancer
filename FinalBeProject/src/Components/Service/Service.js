import React from "react";
import "./Service.css";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/esm/Container";
import search from "../../Assets/images/Search.png";
import medbox from "../../Assets/images/med-box.png";
import tab from "../../Assets/images/Tablet.png";

const Service = () => {
  return (
    <div>
      <h2 className="service-heading"> Our services </h2>
      <hr />
      <p className="service-para">
        We provide you the best result for detecting lung cancer in an instant.
        We act as a helping hand intended to reduce time for checkup before
        performing the further surgical steps.
      </p>
      <Container>
        <Row className="justify-content-md-center">
          <Col>
            <Card style={{ width: "18rem" }} className="card-start">
              <div className="img-class">
                <img
                  variant="top"
                  src={search}
                  width="80"
                  height="100"
                  alt="LungTech logo"
                />
              </div>
              <Card.Body>
                <Card.Title>Time Saving</Card.Title>
                <Card.Text>
                  Luntect considerably reduced consultation time for each patient without
                  compromising the accuracy.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }} className="card-start">
              <div className="img-class">
                <img
                  variant="top"
                  src={medbox}
                  width="80"
                  height="100"
                  alt="LungTech logo"
                />
              </div>
              <Card.Body>
                <Card.Title>Cost Cutting</Card.Title>
                <Card.Text>
                Lungtect enables the hospitals to reduce the headcount for the CT specialists.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }} className="card-start">
              <div className="img-class">
                <img
                  variant="top"
                  src={tab}
                  width="80"
                  height="100"
                  alt="LungTech logo"
                />
              </div>
              <Card.Body>
                <Card.Title>User Friendly</Card.Title>
                <Card.Text>
                Has concise user interface with minimal action needed from users-instance by uploading CT scans.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Service;
