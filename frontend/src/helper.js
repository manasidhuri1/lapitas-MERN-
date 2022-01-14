export const isAutheticated = () => {
  if (typeof window == "undefined") {
    return false;
  }
  if (localStorage.getItem("Lapitas_token")) {
    return JSON.parse(localStorage.getItem("Lapitas_token"));
  } else {
    return false;
  }
};

export const getValue = (value) => {
  return (
    <span class="formatted_value">
      {value == null || value == undefined || value === ""
        ? "Not Specified"
        : value}
    </span>
  );
};
