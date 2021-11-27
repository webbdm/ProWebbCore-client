import React, { useContext } from "react";
import { UserContext } from "../../Store";

import One from "../../../assets/sluggers.png";
import Two from "../../../assets/mingo.png";
import Three from "../../../assets/life_ui.png";

import "./Designs.sass";

const Designs = () => {
    const [user] = useContext(UserContext);

    if (!user) return null;

    const makeLayout = designs => {
        const perChunk = 2 // items per chunk    
        const result = designs.reduce((resultArray, item, index) => {
            const chunkIndex = Math.floor(index / perChunk)
            if (!resultArray[chunkIndex]) {
                resultArray[chunkIndex] = [] // start a new chunk
            }
            resultArray[chunkIndex].push(item)
            return resultArray
        }, [])
        return result;
    };
    return (
        <div className="row px-3">
            {makeLayout(user.projects.filter(p => p.type === "design")).map((paired, i) =>
                <div className="column" key={i}>
                    {paired.map(design =>
                        <img className="rounded-md" src={`${process.env.BUCKET_URL}/${design.image}`} key={design.id} />
                    )}
                </div>
            )}
        </div>
    )
};

export default Designs;