import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/wayne-logo.png";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.facebook.com/ahwayne0321">
                <img src={navIcon2} alt="" />
              </a>
              <a href="https://www.instagram.com/__wlynx___/">
                <img src={navIcon3} alt="" />
              </a>
            </div>
            <p>Copyright 2023 by Rain Poo. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
