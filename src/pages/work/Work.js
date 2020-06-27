import React, { useContext } from "react";
import Resume from "./resume/Resume";

import { UserContext } from "../../Store";

import "./Work.sass";

const Work = () => {
  const [user] = useContext(UserContext);

  if (!user) return null;

  return (
    <div>
      <div className="work-wrapper">
        <Resume resumes={user.resumes} />
      </div>
    </div>
  );
};

export default Work;
