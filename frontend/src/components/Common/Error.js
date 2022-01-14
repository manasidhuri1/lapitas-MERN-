import React from "react";
import colors from "../../Assets/colors";

function Error({ error }) {
  return (
    <p style={{ fontSize: 12, color: colors.red, textAlign: "right" }}>
      {error}
    </p>
  );
}

export default Error;
