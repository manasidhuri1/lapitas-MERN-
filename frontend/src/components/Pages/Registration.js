import React, { useEffect, useContext, useState } from "react";
import colors from "../../Assets/colors";
import { css } from "@emotion/css";
import CustomButton from "./../Common/Button";
import Icon from "../Common/Icon";
import ItemCard from "./../Common/ItemCard";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import { AppContext } from "./../../App";
import { API } from "../../Assets/constant";

const borderVertical = css`
  border-top: 0.5px solid ${colors.gray};
  border-bottom: 0.5px solid ${colors.gray};
`;
const borderBottom = css`
  border-bottom: 0.5px solid ${colors.gray};
`;
function Registration() {
  const [data, setData] = useState([]);
  const [reloadData, setReloadData] = useState(false);
  var contextData = useContext(AppContext);
  const config = {
    headers: { Authorization: `Bearer ${contextData.token}` },
  };
  const getRegisteredItem = () => {
    if (contextData.isLoggedIn)
      axios
        .get(`${API}/items/${contextData.user._id}`, config)
        .then((res) => setData(res.data))
        .catch((err) => console.log({ err }));
  };
  useEffect(() => {
    getRegisteredItem();
  }, [reloadData]);

  return (
    <div>
      <div
        className="p-md-5 m-md-5 px-5 "
        style={{
          backgroundColor: colors.lightGray,
        }}
      >
        <div className="row justify-content-between">
          <div className="col-md-9 mx-auto">
            <div>
              <div className={`${borderVertical} py-5`}>
                <h2>Your Registration</h2>
              </div>
              <div className={`${borderBottom} py-3`}>
                <h5 className="fw-normal">
                  Total number of items {data?.length || 0}
                </h5>
                <Link
                  to="/register-lost-item"
                  style={{ color: colors.white, textDecoration: "none" }}
                >
                  <CustomButton type="small" uppercase={false} className="my-3">
                    <Icon>add</Icon> Add an Item
                  </CustomButton>
                </Link>
              </div>
              <div className={` py-1`}>
                {data.map((item, index) => (
                  <ItemCard
                    handleReload={() => setReloadData((prev) => !prev)}
                    number={index + 1}
                    item={item}
                    type={item.item_type}
                    value={item.value_of_item}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;
