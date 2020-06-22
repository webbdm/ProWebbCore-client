import React, { useContext } from "react";
import { UserContext } from "../../Store";

const About = () => {
  const [user] = useContext(UserContext);

  return (
    <div>
      <h1>About</h1>
      <h3>{user}</h3>
    </div>
  );
};

export default About;
