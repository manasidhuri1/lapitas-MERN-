import React from "react";
import styled from "@emotion/styled";

const Image = styled.img((props) => ({
  width: props.size,
  height: props.size,
  borderRadius: props.size / 2,
  objectFit: "cover",
  margin: 10,
}));
function Avatar({ size = 30, ...props }) {
  return <Image size={size} {...props} />;
}

export default Avatar;
