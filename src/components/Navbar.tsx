import React from "react";
import { NavLink } from "react-router-dom";

import { ReactComponent as GithubIcon } from "../assets/github.svg";

const Navbar: React.FC = () => {
  return (
    <header className="bg-gray-900 sm:px-4 sm:py-3">
      <nav className="px-2 pt-2 pb-4 flex justify-between sm:p-0">
        <div className="flex">
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
          <a
            className="nav-link"
            rel="noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/mohsen-khodadadi/"
          >
            Linkedin
          </a>
        </div>
        <a href="https://github.com/mossen/forecast" className="nav-link">
          <GithubIcon className="w-6" />
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
