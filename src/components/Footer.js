import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.png"
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
  <Container>
    <Row className="align-items-center">
      <Col size={12} sm={12} className="d-flex justify-content-between align-items-center">
        <div className="copyright">
          <h4>Copyright 2024. All Rights Reserved</h4>
        </div>
        <div className="social-icon">
          <a href="https://www.linkedin.com/in/mukul-sharma-mm7m262002">
            <img src={navIcon1} alt="LinkedIn Icon" />
          </a>
          {/* <a href="#"><img src={navIcon2} alt="Icon" /></a> */}
          <a href="https://www.instagram.com/thisismukul_">
            <img src={navIcon3} alt="Instagram Icon" />
          </a>
          <a href="https://www.github.com/Mukulsh26">
            <img src={navIcon4} alt="Instagram Icon" />
          </a>
        </div>
      </Col>
    </Row>
  </Container>
</footer>

  )
}
