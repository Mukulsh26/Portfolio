import { useState } from "react";
import emailjs from 'emailjs-com'; // Import EmailJS library
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import { EMAIL_JS_SERVICE_ID, EMAIL_JS_TEMPLATE_ID, EMAIL_JS_PUBLIC_KEY } from "../constants";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  const formInitialDetails = {
    first_name: '',
    last_name: '',
    email_id: '',
    phone: '',
    message: ''
  };

  const serviceId = process.env.REACT_APP_EMAIL_JS_SERVICE_ID;
  const templateId = process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID;
  const publicKey = process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY;


  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    // Replace 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', and 'YOUR_PUBLIC_KEY' with actual values
    emailjs.send(serviceId, templateId, formDetails, publicKey)
      .then((response) => {
        console.log('Email sent successfully:', response);
        setStatus({ success: true, message: 'Message sent successfully' });
        setFormDetails(formInitialDetails);
      }, (error) => {
        console.error('Failed to send email:', error);
        setStatus({ success: false, message: 'Something went wrong, please try again later.' });
      })
      .finally(() => {
        setButtonText("Send");
        setTimeout(() => setStatus({ success: null, message: '' }), 3000);
      });
  };

  const getStatusStyles = () => {
    if (status.success === true) {
      return { color: 'white', fontSize: '18px' }; // Success style
    } else if (status.success === false) {
      return { color: 'red', fontSize: '18px' }; // Error style
    } else {
      return { color: 'black', fontSize: '18px' }; // Default style
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Get In Touch</h2>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" name="first_name" required value={formDetails.first_name} placeholder="First Name" onChange={(e) => onFormUpdate('first_name', e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" name="last_name" required value={formDetails.last_name} placeholder="Last Name" onChange={(e) => onFormUpdate('last_name', e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="email" name="email_id" required value={formDetails.email_id} placeholder="Email Address" onChange={(e) => onFormUpdate('email_id', e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="tel"
                          name="phone"
                          pattern="[0-9]*"
                          maxLength={10}
                          required
                          value={formDetails.phone}
                          placeholder="Phone No."
                          onChange={(e) => {
                            // Ensure only numeric values are set
                            const value = e.target.value.replace(/\D/g, '');
                            if (value.length <= 10) {
                              onFormUpdate('phone', value);
                            }
                          }}
                        />

                      </Col>
                      <Col size={12} className="px-1">
                        <textarea rows="6" name="message" required value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                      </Col>
                    </Row>
                    {
                      status.message &&
                      <Col>
                        <p style={getStatusStyles()}>
                          {status.message}
                        </p>
                      </Col>
                    }
                    <button type="submit"><span>{buttonText}</span></button>
                  </form>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
