import React from "react";
import Navbar from "./../Screens/Navbar";
import styled from "@emotion/styled";
import colors from "../../Assets/colors";

const InformationContainer = styled.div`
  width: 100%;
  background: ${colors.gray};
  padding: 6rem 6rem;
  text-align: center;
  color: ${colors.white};
`;

const InformationCard = ({ image }) => {
  return (
    <div className="p-3 my-2 text-left" style={{ textAlign: "left" }}>
      <img
        src="https://images.squarespace-cdn.com/content/v1/60227ba39dbc57670b6c8a5b/1629816806308-C1F78CMAJVJVNGR82W2N/protectyourlegacy.jpg?format=500w"
        className="img-fluid"
      />
      <div className="pt-2">
        <p style={{ fontSize: "18px" }}>Watches: Serial Numbers FAQ</p>
        <p style={{ fontSize: "12px" }}>It all begins with an idea.</p>
        <p style={{ fontSize: "12px" }}>Aug 25, 2021</p>
      </div>
    </div>
  );
};

function Information() {
  return (
    <>
      <InformationContainer>
        <h2>Information</h2>
        <div className="container py-3">
          <div className="row">
            <div className="col-md-4 col-sm-6">
              <InformationCard />
            </div>
            <div className="col-md-4 col-sm-6">
              <InformationCard />
            </div>
            <div className="col-md-4 col-sm-6">
              <InformationCard />
            </div>
            <div className="col-md-4 col-sm-6">
              <InformationCard />
            </div>
            <div className="col-md-4 col-sm-6">
              <InformationCard />
            </div>
            <div className="col-md-4 col-sm-12">
              <InformationCard />
            </div>
          </div>
        </div>
      </InformationContainer>
    </>
  );
}

export default Information;
