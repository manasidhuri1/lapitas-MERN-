import React, { useContext, useEffect, useState } from "react";
import styled from "@emotion/styled";
import CustomButton from "../Common/Button";
import { Link, withRouter } from "react-router-dom";
import colors from "../../Assets/colors";
import { useHistory } from "react-router";
import Icon from "../Common/Icon";
import axios from "axios";
import { API } from "../../Assets/constant";
import { isAutheticated } from "../../helper";
import { AppContext, defaultContext } from "./../../App";
// import LogoutIcon from "@material-ui/icons/logoutIcon";
const Nav = styled.nav`
  position: relative;
  z-index: 2;
  width: 100%;
  box-sizing: border-box;
  padding-top: 1.2vw;
  padding-bottom: 1.2vw;
  padding-left: 4vw;
  padding-right: 4vw;
  pointer-events: auto;
  background: #fff !important;

  .navbarAlign {
    align-items: center;
  }
  @media (max-width: 720px) {
    .navbarAlign {
      align-items: flex-start;

      .nav-item {
        padding: 0px !important;
        padding: 4px 0px !important;
      }import Icon from './../Common/Icon';

    }
  }
`;

const currentTab = (history, path) => {
  if (history.location.pathname === path) {
    return { borderBottom: "1px solid #000" };
  } else {
    return { color: "#000" };
  }
};
function Navbar() {
  let history = useHistory();
  const contextData = useContext(AppContext);
  const handleLogout = () => {
    window.localStorage.removeItem("Lapitas_token");
    contextData.logout(defaultContext);
    axios
      .get(`${API}/signout`)
      .then((res) => {
        history.push("/");
      })
      .catch((error) => console.log({ error }));
  };

  const { user, isLoggedIn } = contextData;

  return (
    <Nav className="navbar navbar-expand-lg navbar-light bg-light ">
      <div className="container-fluid">
        <Link
          // style={currentTab(history, "/")}
          className="navbar-brand"
          to="/"
        >
          <h3>Lapitas.org</h3>
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          data-toggle="collapse"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <ul className="navbar-nav mb-2 mb-lg-0 navbarAlign ">
            <li className="nav-item px-3">
              <Link
                style={currentTab(history, "/search-list")}
                className="nav-link active"
                aria-current="page"
                to="/search-list"
              >
                Search
              </Link>
            </li>
            <li className="nav-item px-3">
              <Link
                style={currentTab(history, "/lost-and-found")}
                className="nav-link active"
                aria-current="page"
                to="/lost-and-found"
              >
                Lost & Found
              </Link>
            </li>

            <li className="nav-item px-3">
              <Link
                style={currentTab(history, "/information")}
                className="nav-link active"
                aria-current="page"
                to="/information"
              >
                Information
              </Link>
            </li>
            {isLoggedIn && (
              <li className="nav-item px-3">
                <Link
                  style={currentTab(history, "/registrations")}
                  className="nav-link active"
                  aria-current="page"
                  to="/registrations"
                >
                  Items Registration
                </Link>
              </li>
            )}

            {!isLoggedIn && (
              <li className="nav-item px-3">
                <Link
                  style={currentTab(history, "/registrations")}
                  className="nav-link active"
                  aria-current="page"
                  to="/register"
                >
                  Register User
                </Link>
              </li>
            )}

            <li className="nav-item px-3">
              {!isLoggedIn ? (
                <Link
                  style={currentTab(history, "/login")}
                  style={{ color: colors.white, textDecoration: "none" }}
                  to="/login"
                >
                  <CustomButton
                    //  style={{ padding: "1.2em 1.9em", margin: 0 }}
                    type="small"
                  >
                    Account Login
                  </CustomButton>
                </Link>
              ) : (
                <Link
                  style={currentTab(history, "/profile")}
                  className="nav-link active"
                  aria-current="page"
                  to="/profile"
                >
                  <div className="d-flex align-items-center">
                    <Icon color="black">account_circle</Icon>
                    <div className="ml-2">
                      {user.firstname + " " + user.lastname}
                    </div>
                  </div>
                </Link>
              )}
            </li>
            {isLoggedIn && (
              <li className="nav-item px-3">
                <div
                  className="d-flex"
                  style={{ cursor: "pointer" }}
                  onClick={handleLogout}
                >
                  <Icon color="black">logout</Icon>
                  <Link className="nav-link active" aria-current="page" to="#">
                    Logout
                  </Link>
                </div>
              </li>
            )}
          </ul>
        </div>
      </div>
    </Nav>
  );
}

export default withRouter(Navbar);
