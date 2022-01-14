import React, { useContext, useRef } from "react";
import CustomButton from "./Button";
import item1 from "../../images/item.jpg";
import item2 from "../../images/item2.jpg";
import styled from "@emotion/styled";
import { css } from "@emotion/css";
import colors from "../../Assets/colors";
import { getValue } from "../../helper";
import { Link } from "react-router-dom";
import axios from "axios";
import { API } from "../../Assets/constant";
import { AppContext } from "../../App";
import { toast } from "react-toastify";
import { useHistory } from "react-router";

const ImgContainer = styled.div`
  padding-top: 1rem;
  img {
    width: 300px;
    margin-right: 2rem;
  }
`;
const borderBottom = css`
  border-bottom: 0.5px solid ${colors.gray};
`;

const Container = styled.div`
  .formatted_value {
    color: #505050;
  }
`;
function ItemCard({ number, type, value, item, handleReload }) {
  const hiddenFileInput = useRef(null);
  var contextData = useContext(AppContext);
  const history = useHistory();
  const config = {
    headers: { Authorization: `Bearer ${contextData?.token}` },
  };

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
  const handleChange = (event) => {
    const files = event.target.files;

    var formData = new FormData();
    for (const key of Object.keys(files)) {
      formData.append("photo", files[key]);
    }
    axios
      .put(`${API}/item/${item._id}/${contextData.user._id}`, formData, config)
      .then((res) => {
        toast.success("Files Uploaded Successfully!", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        handleReload();
      })
      .catch((error) => {
        console.log({ error });
      });
  };

  const handleDeleteItem = () => {
    var formData = new FormData();

    formData.append("status", "Deregistered");

    axios
      .put(`${API}/item/${item._id}/${contextData.user._id}`, formData, config)
      .then((res) => {
        toast.success("Item Deregistered Successfully!", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        handleReload();
      })
      .catch((error) => {
        console.log({ error });
      });
  };
  return (
    <Container className={`${borderBottom} py-5`}>
      <h5 className="fw-normal">Item #{number}</h5>
      <div className="d-flex my-3">
        <Link
          to={`/edit-lost-item/${item._id}`}
          style={{ color: colors.white, textDecoration: "none" }}
        >
          <CustomButton type="small" uppercase={false}>
            Edit Item Details
          </CustomButton>
        </Link>
        <CustomButton
          onClick={handleClick}
          type="small"
          uppercase={false}
          className="mx-3"
        >
          Upload Documents
        </CustomButton>
        <input
          type="file"
          ref={hiddenFileInput}
          onChange={handleChange}
          name="photo"
          style={{ display: "none" }}
          multiple
        />
        {item?.status !== "Deregistered" && (
          <CustomButton
            type="small"
            uppercase={false}
            onClick={handleDeleteItem}
          >
            Deregister Items
          </CustomButton>
        )}
      </div>
      <div className="my-3">
        <h5 class="fw-normal">Item Type: {getValue(type)} </h5>
        <h5 class="fw-normal">Status: {getValue(item?.status)} </h5>
        {type === "Gem" && (
          <>
            <h5 class="fw-normal">Gem Colour: {getValue(item?.gem_colour)}</h5>
            <h5 class="fw-normal">Gem Clarity: {getValue(item.gem_clarity)}</h5>
            <h5 class="fw-normal">Gem Shape/Cut: {getValue(item.gem_shape)}</h5>
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
            <h5 class="fw-normal">Jewel Metal: {getValue(item.jewel_metal)}</h5>
            <h5 class="fw-normal">
              Jewel Materials: {getValue(item.jewel_materials)}
            </h5>
            <h5 class="fw-normal">
              Jewel Serial Number/Jewel Laser Inscription:{" "}
              {getValue(item.jewel_laser_inscription)}
            </h5>
            <h5 class="fw-normal">Jewel Brand: {getValue(item.jewel_brand)}</h5>
          </>
        )}
        {type === "Watch" && (
          <>
            <h5 class="fw-normal">Watch Metal: {getValue(item.watch_metal)}</h5>
            <h5 class="fw-normal">
              Watch Serial Number: {getValue(item.watch_serial_number)}
            </h5>
            <h5 class="fw-normal">Watch Brand: {getValue(item.watch_brand)}</h5>
          </>
        )}
        <h5 class="fw-normal">
          Certificate Number, Valuation Number, or Other Unique Number assigned
          to item: {getValue(item.certificate_number)}
        </h5>
        <h5 class="fw-normal">
          Issuer of Certificate, Valuation and Other Unique Number:{" "}
          {getValue(item.issuer_of_certificate)}
        </h5>
        <h5 class="fw-normal">
          Country of the Issuer of Certificate,Valuation and Other Unique
          Number: {getValue(item.country_of_certificate_issuer)}
        </h5>

        <h5 class="fw-normal">Value of Item: {getValue(value)}</h5>
      </div>
      <div className="my-1">
        {item?.photo?.length > 0 && (
          <h5 class="fw-normal">Uploaded Documents:</h5>
        )}
        <ImgContainer className="my-2">
          {item?.photo?.map((imgLink) => (
            <img src={imgLink} className="img-fluid" />
          ))}
        </ImgContainer>
      </div>
    </Container>
  );
}

export default ItemCard;
