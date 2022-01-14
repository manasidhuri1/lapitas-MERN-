import React from "react";
import styled from "@emotion/styled";
import colors from "../../Assets/colors";
import ScrollAnimation from "react-animate-on-scroll";

export const CardImage = styled.img`
  width: 50%;
  margin-left: ${(props) => (props.moveLeft ? "-50px" : "0")};
  margin-right: ${(props) => (props.moveRight ? "-50px" : "0")};
  z-index: 1;
`;
const InformationCard = styled.div`
  width: 50%;
  background: ${colors.white};
  padding: 4rem;
  z-index: 2;
  & > ul > li {
    color: ${colors.black};
    font-weight: 600;
    font-size: 18px;
  }
`;

const HorizontalInfoCard = styled.div`
  display: flex;
  margin: 8rem 0;
`;
const imageLink =
  "https://images.squarespace-cdn.com/content/v1/60227ba39dbc57670b6c8a5b/1614516533204-4K4F8110PQI0SNQBP1ZM/Diamond+Number.jpg?format=500w";

export const Information = ({ title, description, children }) => {
  return (
    <InformationCard className="informationCard">
      <h3>{title}</h3>
      <p>{description}</p>
      {children}
    </InformationCard>
  );
};

function InfoCard({ image = imageLink, children }) {
  return (
    <HorizontalInfoCard className="horizontalInfoCard">
      {children}
    </HorizontalInfoCard>
  );
}

export default InfoCard;
