import React from "react";
import Button from "@material-ui/core/Button";
import styled from "@emotion/styled";
const TypeStyle = {
  big: { padding: "1.4em 1.9em" },
  small: { padding: "1em 1.9em" },
};

const StyledButton = styled(Button)`
  border-radius: 0px !important;
  font-size: 12px;
  margin: 1rem 0;

  .material-icons {
    font-size: 10px;
  }
`;
function CustomButton({
  children,
  style,
  uppercase = true,
  type = "big",
  btnType,
  disabled,
  ...props
}) {
  return (
    <StyledButton
      style={{
        textTransform: uppercase ? "uppercase" : "none",
        ...TypeStyle[type],
        ...style,
      }}
      variant="contained"
      color="primary"
      disabled={disabled}
      type={btnType}
      {...props}
    >
      {children}
    </StyledButton>
  );
}

export default CustomButton;
