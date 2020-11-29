import React, { Fragment, useContext } from "react";
import Resume from "./resume/Resume";

import { UserContext } from "../../Store";

import "./Work.sass";

const Work = () => {
  const [user] = useContext(UserContext);

  if (!user || !user.resumes) return <h1>Loading...</h1>;

  return (
    <div className="flex flex-row justify-center">
      <Resume
        name={`${user.firstName + " " + user.lastName}`}
        resumes={user.resumes}
      />
    </div>
  );
};

export default Work;
