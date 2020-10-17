import React from "react";
import { NavLink } from "react-router-dom";

const MobileDropdown = ({ showingDropdown, setShowingDropdown }) => {
  if (!showingDropdown) return null;

  return (
    <div
      onMouseLeave={() => setShowingDropdown(false)}
      className="p-2 px-4 pl-8 text-white text-right items-end flex flex-col bg-panel border-2 border-t-0 border-accent rounded-b fixed z-50 right-0 mt-4 mr-3"
    >
      {[
        { name: "Home", path: "/" },
        { name: "Work", path: "/work" },
        { name: "Projects", path: "/projects" },
        { name: "About", path: "/about" },
      ].map((link) => (
        <NavLink
          exact
          key={link.name}
          className="text-xl"
          activeStyle={{ fontWeight: "bold" }}
          to={link.path}
        >
          {link.name}
        </NavLink>
      ))}
    </div>
  );
};

export default MobileDropdown;
