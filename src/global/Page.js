import React from "react";

import Navigation from "./navigation/Navigation";
import Sidebar from "./Sidebar";

const Page = ({ component }) => {
  return (
    <div className="flex flex-row w-full h-full">
      <Sidebar />
      <div className="flex flex-col justify-start">
        <Navigation />
        {component()}
      </div>
    </div>
  );
};

export default Page;
