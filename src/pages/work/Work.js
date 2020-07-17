import React, { useContext } from "react";
import Resume from "./resume/Resume";

import { UserContext } from "../../Store";

import "./Work.sass";

const Work = () => {
  const [user] = useContext(UserContext);

  if (!user || !user.resumes) return null;

  console.log(user, "WORK");
  return (
    <Resume
      name={`${user.firstName + " " + user.lastName}`}
      resumes={user.resumes}
    />
  );
};

export default Work;
