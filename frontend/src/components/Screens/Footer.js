import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
const Container = styled.div`
  background: black;
  color: white;
  h4 {
    font-size: calc((1.6 - 1) * 1.2vw + 1rem);
    font-weight: normal;
    padding: 3px 0;
  }
  p {
    font-size: calc((1 - 1) * 1.2vw + 1rem);
  }

  h5 {
    font-size: 18px;
    text-transform: uppercase;
    font-weight: bold;
    margin: 0.8rem 0;
  }

  .link {
    text-decoration: none;
    color: white;
    font-size: calc((1 - 1) * 1.2vw + 1rem);
    margin: 0.8rem 0;
    display: block;
  }
  .icons {
    i {
      font-size: 18px;
      margin-right: 1rem;
    }
  }
`;
function Footer() {
  return (
    <Container>
      <div className="p-5">
        <div className="row">
          <div className="col-md-6">
            <h4>Lapitas.org </h4>
            <h4>International Gem, Jewel & Watch Registry.</h4>
            <p className="my-4">New York - Cambridge - Sydney </p>
            <div className="d-flex icons my-4">
              <a>
                <i class="fab fa-instagram"></i>
              </a>
              <a>
                <i class="fab fa-facebook-f"></i>
              </a>
              <a>
                <i class="fab fa-pinterest"></i>
              </a>
            </div>
            <h5>Search for Numbers, Update Your Account & Register Items.</h5>
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-4">
                <h5>Lapitas</h5>
                <Link className="link" to="/about-us">
                  About Us
                </Link>

                <Link className="link" to="/privacy">
                  Privacy
                </Link>
                <Link className="link" to="/legal">
                  Legal
                </Link>
                <Link className="link" to="/press">
                  Press
                </Link>
                <Link className="link" to="#">
                  Contact
                </Link>
                <Link className="link" to="#">
                  Merchent login
                </Link>
              </div>
              <div className="col-md-4">
                <h5>INFORMATION</h5>
                <Link className="link" to="/search-list">
                  Search Databse
                </Link>
                <Link className="link" to="/lost-and-found">
                  Lost & Found
                </Link>
                <Link className="link" to="#">
                  Lost & Stolen Alerts
                </Link>
                <Link className="link" to="#">
                  Serial Number
                </Link>
                <Link className="link" to="#">
                  Lapitas Library
                </Link>
                <Link className="link" to="#">
                  Insurance
                </Link>
                <Link className="link" to="#">
                  Vaults
                </Link>
                <Link className="link" to="#">
                  Valuation
                </Link>
              </div>
              <div className="col-md-4">
                <h5>CLIENT RESOURCES</h5>
                <Link className="link" to="/login">
                  Account Login
                </Link>
                <Link className="link" to="/register-lost-item">
                  Register Your Item
                </Link>
                <Link className="link" to="#">
                  Flag Item as Lost/Stolen
                </Link>
                <Link className="link" to="#">
                  Transfer Registration
                </Link>
                <Link className="link" to="#">
                  LAPLAND
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Footer;
