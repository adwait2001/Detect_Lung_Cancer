import React from "react";
import "./Purpose.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/esm/Container";
import rib from "../../Assets/images/rib.png";

const Purpose = () => {
  return (
    <div className="purpose-why">
      <h2 className="purpose-heading"> Why are we doing this? </h2>
      <hr className="horizontal-line" color="#fff" />
      <Container>
        <Row className="justify-content-md-center">
          <Col xs lg="5">
            <ul>
              <li>
                The cause of lung cancer stays obscure & prevention become
                impossible hence early detection of lung cancer is the only
                way to cure.
              </li>
              <li>
                Sometimes, knobs are not satisfactory & required
                prepared eye & extensive measure of time to recognize.
              </li>
              <li>
                The death of people is extending dramatically considering
                lung dangerous development. In order to decrease sickness,
                wrong comprehension of radiologist, & extra human’s
                existence, the lung illness acknowledgment and assurance
                structure are required.
              </li>
              <li>
                As demonstrated by overall threatening development experiences
                report in 2012, around 1.83 million new lung sickness cases has
                joined up and over 1.5 million passing’s are evaluated .
              </li>
            </ul>
          </Col>
          <Col xs lg="2">
          <div className="why-img">
          <img
            variant="top"
            src={rib}
            width="200"
            height="300"
            alt="LungTech logo"
        /></div>
          </Col>
          <Col xs lg="5">
            <ul>
              <li>
                The motivation behind the lung detection is to give dependable
                data to specialists and clinicians from the clinical picture.
              </li>
              <li>
                Doctor and radiologist utilize the CT examine pictures to
                investigate, decipher and analyze the lung malignant growth from
                lung tissues.
              </li>
              <li>
                Be that as it may, much of the time, getting an exact
                determination result without utilizing the additional clinical
                device known as a PC Aid identification and Diagnosis (CAD)
                framework is monotonous work for some doctors.{" "}
              </li>
              <li>
                To get a precise outcome from PC supported analysis framework
                lung disease identification techniques are essential once.
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Purpose;
