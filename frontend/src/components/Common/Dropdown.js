import React, { Component } from "react";
import Select, { components } from "react-select";
import Error from "./Error";
import colors from "../../Assets/colors";

const customStyles = {
  container: (provided, state) => ({
    ...provided,
    border: `1px solid ${colors.black}`,
    borderRadius: 0,
  }),

  valueContainer: (provided, state) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "50px",
    paddingLeft: "0.75rem",
    ...state.selectProps.valueContainerStyle,
  }),

  control: (provided, state) => ({
    ...provided,
    outline: 0,
    borderRadius: 0,
    border: 0,
    background: "transparent",
    borderBottom: state.selectProps.error
      ? "1px solid var(--errorColor)"
      : state.selectProps.selectedBorderBottom
      ? state.selectProps.selectedBorderBottom
      : "1px solid var(--darkBorderColor)",
    borderColor: state.isFocused ? "var(--inputColor)" : "var(--borderColor)",
    boxShadow: "none",
    minHeight: "36px",
    "&:hover": {
      borderColor: state.isFocused ? "var(--inputColor)" : "var(--borderColor)",
    },
    ...state.selectProps.controlStyle,
  }),

  menu: (provided, state) => ({
    ...provided,
    border: "1px solid #EFEFEF",
    borderRadius: "5px",
    width: "auto",
    padding: "0 10px",
    // position: 'absolute',
    background: "#FFFFFF",
    // width: '220px',
    zIndex: 5,
    boxShadow: "none",
  }),

  option: (provided, state) => ({
    fontSize: "0.875rem",
    fontWeight: "500",
    color: "var(--inputColor)",
    padding: "12px 7px",
    borderBottom: "1px solid #E2E2E2",
    cursor: "pointer",
    width: "100%",

    "&:last-child": {
      borderBottom: 0,
    },
  }),

  input: (provided, state) => ({
    ...provided,
    margin: "1px",
  }),

  singleValue: (provided, state) => ({
    fontSize: state.selectProps.selectedFontSize
      ? state.selectProps.selectedFontSize
      : "1rem",
    fontWeight: state.selectProps.selectedFontWeight
      ? state.selectProps.selectedFontWeight
      : "400",
    color: state.selectProps.selectedColor
      ? state.selectProps.selectedColor
      : "var(--inputColor)",

    ...state.selectProps.singleValueStyle,
  }),

  indicatorSeparator: () => ({
    display: "none",
  }),

  placeholder: () => ({
    fontSize: "1rem",
    // textAlign: "right",
  }),

  // menu: (provided, state) => ({
  //   ...provided,
  //   width: state.selectProps.width,
  //   borderBottom: '1px dotted pink',
  //   color: state.selectProps.menuColor,
  //   padding: 20,
  // }),
};

export default function Dropdown({
  onChange,
  options = [],
  width,
  controlWidth,
  defaultValue,
  placeholder = "Select one",
  className = "",
  Menu,
  SingleValue,
  isClearable = false,
  isSearchable = false,
  name,
  error = false,
  selectedFontSize,
  selectedFontWeight,
  selectedColor = "#000",

  selectedBorderBottom,
  singleValueStyle = {},
  valueContainerStyle = {},
  controlStyle = {},
  value,
  isDisabled = false,
}) {
  let Components = {};

  if (Menu) {
    Components = { ...Components, Menu };
  }
  if (SingleValue) {
    Components = { ...Components, SingleValue };
  }
  return (
    <>
      <Select
        value={value}
        styles={customStyles}
        components={Components}
        options={options}
        defaultValue={defaultValue}
        width={width}
        controlWidth={controlWidth}
        placeholder={placeholder}
        className={className}
        placeholder={placeholder}
        onChange={onChange}
        isClearable={isClearable}
        isSearchable={isSearchable}
        name={name}
        error={error}
        className={`${error ? "is-invalid" : ""}`}
        selectedFontSize={selectedFontSize}
        selectedFontWeight={selectedFontWeight}
        selectedColor={selectedColor}
        selectedBorderBottom={selectedBorderBottom}
        singleValueStyle={singleValueStyle}
        valueContainerStyle={valueContainerStyle}
        controlStyle={controlStyle}
        isDisabled={isDisabled}
      />
      {error && <Error>{error}</Error>}
    </>
  );
}
