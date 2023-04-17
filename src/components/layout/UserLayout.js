import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Link } from "react-router-dom";

export const UserLayout = ({ children }) => {
  return (
    <div className="use-layout">
      <div className="left bg-dark p-2 pt-5">
        <div className="title mt-5 fs-2">User Name</div>
        <hr />
        <div className="sidbar  fw-boler ">
          <ul>
            {/* for admin only  */}
            <li>
              <Link className="nav-link" to="/books">
                Books
              </Link>{" "}
            </li>
            <li>
              <Link className="nav-link" to="/clients">
                Clients
              </Link>{" "}
            </li>

            {/* for all user type */}
            <li>
              <Link className="nav-link" to="/History">
                History
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/dashboard">
                Dashboard
              </Link>{" "}
            </li>
            <li>
              <Link className="nav-link" to="/profile">
                Profile
              </Link>{" "}
            </li>
          </ul>
        </div>
      </div>
      <div className="right">
        {" "}
        {/* Header section */}
        <Header />
        {/* main content area */}
        <div className="main pt-5">{children}</div>
        {/* footer sectio */}
        <Footer />
      </div>
    </div>
  );
};
