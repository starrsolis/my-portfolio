import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import resumeImg from "../assets/img/RESUME.png";




export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code == 200) {
      setStatus({ success: true, message: 'Message sent successfully'});
    } else {
      setStatus({ success: false, message: 'Something went wrong, please try again later.'});
    }
  };

 

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
          <img src={resumeImg} alt="Resume Img" className='resume'/>
          <a href="https://docs.google.com/document/d/1Zq4msVTXf3xrjVrxzG-bh-oEs6Yj-j1Kb4hXnyyx0TA/edit?usp=sharing" target="_blank">
          <button>Download Resume</button>
          </a>
          </Col>
          <Col size={12} md={6}>
                <h2>Get In Touch</h2>
                <a href="mailto:starr.solis7@gmail.com">
            <button>Send Me A Email</button>
          </a>
            </Col>
        </Row>
      </Container>
    </section>
  )
}