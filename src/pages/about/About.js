import React, { useContext } from "react";
import { UserContext } from "../../Store";

const About = () => {
  const [user] = useContext(UserContext);

  if (!user) return null;

  return (
    <div>
      <h3>{user.firstName + " " + user.lastName}</h3>
    </div>
  );
};

export default About;
