import React, { useContext, useEffect, useState } from "react";
import colors from "../../Assets/colors";
import SearchIcon from "@material-ui/icons/Search";
import styled from "@emotion/styled";
import myimg from "../../images/Gia Report.jpg";
import { getValue } from "../../helper";
import axios from "axios";
import { API } from "../../Assets/constant";
import { AppContext } from "../../App";
import CustomButton from "../Common/Button";
import { useLocation } from "react-router";
const SearchInput = styled.input`
  background: ${colors.white};
  border: none;

  &:focus {
    background-color: transparent;
    border-color: none;
    box-shadow: none;
  }
`;

const SearchInputContainer = styled.div`
  background: ${colors.white};
  border: 0.5px solid ${colors.white};
  padding: 0.5rem;
  align-items: center;
  margin: 1rem 0;
  &:before {
    content: "";
    position: absolute;
    top: -5px;
    left: -5px;
    bottom: -5px;
    right: -5px;
    border: 1px transparent solid;
  }
  &:focus-within {
    // margin: 1rem;
    border-color: none;
    box-shadow: none;
    outline: none;

    &:after {
      content: "";
      position: absolute;
      top: -5px;
      left: -5px;
      bottom: -5px;
      right: -5px;
      border: 1px ${colors.white} solid;
    }
  }
`;

const Card = ({ item }) => {
  const type = item.item_type;
  return (
    <div className="my-3" style={{ borderBottom: "1px solid white" }}>
      <div className="row " style={{ color: "white" }}>
        <div className="col-md-4">
          <img
            src={item?.photo?.length > 0 ? item.photo[0] : myimg}
            className="img-fluid mb-3"
          />
        </div>
        <div className="col-md-8">
          <div className="mb-3">
            <h5 class="fw-normal">Item Type: {getValue(item.item_type)} </h5>
            {type === "Gem" && (
              <>
                <h5 class="fw-normal">
                  Gem Colour: {getValue(item?.gem_colour)}
                </h5>
                <h5 class="fw-normal">
                  Gem Clarity: {getValue(item.gem_clarity)}
                </h5>
                <h5 class="fw-normal">
                  Gem Shape/Cut: {getValue(item.gem_shape)}
                </h5>
                <h5 class="fw-normal">
                  Gem Laser Inscription: {getValue(item.gem_laser_inscription)}
                </h5>
                <h5 class="fw-normal">Gem Brand: {getValue(item.gem_brand)}</h5>
              </>
            )}

            {type === "Jewel" && (
              <>
                <h5 class="fw-normal">
                  Jewel Colour: {getValue(item.jewel_colour)}
                </h5>
                <h5 class="fw-normal">
                  Jewel Metal: {getValue(item.jewel_metal)}
                </h5>
                <h5 class="fw-normal">
                  Jewel Materials: {getValue(item.jewel_materials)}
                </h5>
                <h5 class="fw-normal">
                  Jewel Serial Number/Jewel Laser Inscription:{" "}
                  {getValue(item.jewel_laser_inscription)}
                </h5>
                <h5 class="fw-normal">
                  Jewel Brand: {getValue(item.jewel_brand)}
                </h5>
              </>
            )}
            {type === "Watch" && (
              <>
                <h5 class="fw-normal">
                  Watch Metal: {getValue(item.watch_metal)}
                </h5>
                <h5 class="fw-normal">
                  Watch Serial Number: {getValue(item.watch_serial_number)}
                </h5>
                <h5 class="fw-normal">
                  Watch Brand: {getValue(item.watch_brand)}
                </h5>
              </>
            )}
            <h5 class="fw-normal">
              Certificate Number, Valuation Number, or Other Unique Number
              assigned to item: {getValue(item.certificate_number)}
            </h5>
            <h5 class="fw-normal">
              Issuer of Certificate, Valuation and Other Unique Number:{" "}
              {getValue(item.issuer_of_certificate)}
            </h5>
            <h5 class="fw-normal">
              Country of the Issuer of Certificate,Valuation and Other Unique
              Number: {getValue(item.country_of_certificate_issuer)}
            </h5>

            <h5 class="fw-normal">
              Value of Item: {getValue(item.value_of_item)}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};
function SearchScreen({ props }) {
  const location = useLocation();

  const [text, setText] = useState(location?.state?.text || "");
  const [data, setData] = useState([]);
  var contextData = useContext(AppContext);
  const config = {
    headers: { Authorization: `Bearer ${contextData.token}` },
  };
  const getDataBySearch = () => {
    axios
      .get(`${API}/search/${text}`, config)
      .then((res) => setData(res.data))
      .catch((err) => {
        setData([]);
        console.log({ err });
      });
  };
  useEffect(() => {
    getDataBySearch();
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    getDataBySearch();
  };
  return (
    <div
      className="py-4"
      style={{ background: "#38383B", marginTop: "-20px", minHeight: "90vh" }}
    >
      <div className="container ">
        <form className="my-5 text-center" onSubmit={handleSubmit}>
          <SearchInputContainer className="input-group  ">
            <SearchIcon />
            <SearchInput
              value={text}
              onChange={(e) => setText(e.target.value)}
              type="text"
              className="form-control"
              placeholder=""
            />
          </SearchInputContainer>
          <CustomButton
            style={{ background: "white", color: "black" }}
            btnType="submit"
            onClick={handleSubmit}
          >
            Search Data
          </CustomButton>
        </form>
        {data && data.length > 0 ? (
          data.map((item) => <Card item={item} />)
        ) : (
          <h4 style={{ color: "white", textAlign: "center" }}>
            No Search result
          </h4>
        )}
        {/* <Card /> */}
      </div>
    </div>
  );
}

export default SearchScreen;
