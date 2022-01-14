import styled from "@emotion/styled";

const StyledIcon = styled.span`
  color: ${(props) => props.color || "var(--white)"};
`;

export default function Icon({
  children,
  className = "",
  style = {},
  color,
  outlined = true,
}) {
  return (
    <StyledIcon
      className={`material-icons ${
        outlined && "material-icons-outlined"
      } ${className}`}
      color={color}
      style={style}
    >
      {children}
    </StyledIcon>
  );
}
