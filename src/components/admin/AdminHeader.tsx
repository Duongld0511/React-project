import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const AdminHeader = (props: Props) => {
  return (
    <nav className="bg-gray-800 pt-2 md:pt-1 pb-1 px-1 mt-0 h-auto fixed w-full z-20 top-0">
      <div className="flex flex-wrap items-center">
        <div className="flex flex-shrink md:w-1/3 justify-center md:justify-start text-white">
          <Link to="/">
            <span className="text-xl pl-2">
              <i className="em em-grinning" />
            </span>
          </Link>
        </div>
        <div className="flex flex-1 md:w-1/3 justify-center md:justify-start text-white px-2">
          <span className="relative w-full">
            <input
              type="search"
              placeholder="Search"
              className="w-full bg-gray-900 text-white transition border border-transparent focus:outline-none focus:border-gray-400 rounded py-3 px-2 pl-10 appearance-none leading-normal"
            />
            <div
              className="absolute search-icon"
              style={{ top: "1rem", left: ".8rem" }}
            >
              <svg
                className="fill-current pointer-events-none text-white w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
              </svg>
            </div>
          </span>
        </div>
        <div className="flex w-full pt-2 content-center justify-between md:w-1/3 md:justify-end">
          <button className="w-10 h-10 text-white">
            <i className="fa-solid fa-user"></i>
          </button>
          <button className="w-10 h-10 text-white">
            <i className="fa-solid fa-right-from-bracket "></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default AdminHeader;
