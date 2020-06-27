import React, { useContext } from "react";
import Resume from "./resume/Resume";

import { UserContext } from "../../Store";

import "./Work.sass";

const Work = () => {
  const [user] = useContext(UserContext);

  if (!user) return null;

  return (
    <div>
      <h1>Work</h1>

      {/* <Container>
        <Row className="justify-content-md-center">
          <Col xs lg="2">
            1 of 3
          </Col>
          <Col md="auto">Variable width content</Col>
          <Col xs lg="2">
            3 of 3
          </Col>
        </Row>
        <Row>
          <Col>1 of 3</Col>
          <Col md="auto">Variable width content</Col>
          <Col xs lg="2">
            3 of 3
          </Col>
        </Row>
      </Container> */}
      <div className="work-wrapper">
        <Resume resumes={user.resumes} />
      </div>
    </div>
  );
};

export default Work;
