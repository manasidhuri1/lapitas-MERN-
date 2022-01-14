import styled from "@emotion/styled";

import React from "react";
import colors from "../../Assets/colors";
import Error from "./Error";

const TextInput = styled.input`
  background: transparent;
  border: 1px solid ${colors.black};
  width: 100%;
  padding: 0.8rem;
  &:focus: {
    background-color: red !important;
    border-color: #5cb85c;
  }
`;
export const Label = styled.p`
  font-size: 16px;
  color: ${colors.gray};
  padding-bottom: 10px;
  text-align: ${(props) => props.labelAlignment};
`;

function Input({
  error,
  name,
  label,
  readonly = false,
  mandatory = false,
  labelAlignment = "right",
  ...props
}) {
  return (
    <>
      {label && <Label labelAlignment={labelAlignment}>{label}</Label>}
      <TextInput
        name={name}
        readOnly={readonly}
        required={mandatory}
        {...props}
      />
      {error && <Error error={error} />}
    </>
  );
}

export default Input;
