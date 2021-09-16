import React from "react";
import One from "../../../assets/sluggers.png";
import Two from "../../../assets/mingo.png";
import Three from "../../../assets/life_ui.png";

import "./Designs.sass";

const Designs = () => (
    <div className="row px-3">
        <div className="column">
            <img className="rounded-md" src={One} />
            <img className="rounded-md" src={Three} />
        </div>
        <div className="column">
            <img className="rounded-md" src={Two} />
            <img className="rounded-md" src={One} />
        </div>
        <div className="column">
            <img className="rounded-md" src={Three} />
            <img className="rounded-md" src={Two} />
        </div>
        <div className="column">
        <img className="rounded-md" src={Two} />
            <img className="rounded-md" src={One} />
        </div>
    </div>
);

export default Designs;