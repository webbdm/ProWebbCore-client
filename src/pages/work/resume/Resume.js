import React, { useState } from "react";

import { Col, Container, Row } from "react-bootstrap";

import "./Resume.sass";

const Resume = ({ resumes }) => {
  const [resume, setResume] = useState(resumes[0]);

  return (
    <Container className="resume-panel">
      <Col sm="1" className="user-panel">
        <img src="" />
        <h2>Summary</h2>
        <div>Education Box</div>
      </Col>
      <Col sm="auto" className="work-panel">
        <Row className="skill-panel justify-content-between">
          {resume.skills.map((skill) => (
            <Col key={skill.name} md>
              <span>{skill.name}</span>
            </Col>
          ))}
        </Row>
        <Col className="job-panel">
          <h2>Job 1</h2>
          <h2>Job 2</h2>
          <h2>Job 3</h2>
        </Col>
      </Col>
    </Container>
  );
};

export default Resume;
