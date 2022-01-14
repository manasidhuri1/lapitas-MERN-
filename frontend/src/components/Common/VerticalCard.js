import React from "react";
import styled from "@emotion/styled";
const CardImage = styled.img`
  width: 100%;
`;

const imageLink =
  "https://images.squarespace-cdn.com/content/v1/60227ba39dbc57670b6c8a5b/1614516533204-4K4F8110PQI0SNQBP1ZM/Diamond+Number.jpg?format=500w";
function VerticalCard({ image = imageLink, title, description }) {
  return (
    <div className="py-5">
      <CardImage src={image} className="img-fluid" />
      <h4 className="py-4 my-1 text-center">{title}</h4>
      <p className="text-center">{description}</p>
    </div>
  );
}

export default VerticalCard;
