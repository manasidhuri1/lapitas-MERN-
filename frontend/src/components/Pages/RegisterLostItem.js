import React, { useContext, useEffect, useState } from "react";
import colors from "../../Assets/colors";
import CustomButton from "../Common/Button";
import Profile from "../Common/Profile";
import styled from "@emotion/styled";
import { Formik } from "formik";
import Input from "../Common/Input";
import Dropdown from "./../Common/Dropdown";
import Registration from "./Registration";
import axios from "axios";
import { API } from "../../Assets/constant";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { AppContext } from "./../../App";
import { Label } from "./../Common/Input";
import Payment from "../Common/Payment";
const FormHeader = styled.div`
  padding-bottom: 2rem;
  text-align: right;
  border-bottom: 1px solid ${colors.lightBlack};
  p {
    padding: 5px 0;
  }
  a {
    color: ${colors.black};
    text-decoration: none;
  }
`;
function RegisterLostItem({ match }) {
  return (
    <div>
      {/* {match.params.itemId} */}
      <div
        className="p-md-5 m-md-5"
        style={{
          backgroundColor: colors.lightGray,
        }}
      >
        <div className="row justify-content-between">
          <div className="col-md-9 mx-auto">
            <RightForm itemId={match?.params?.itemId || false} />
          </div>
        </div>
      </div>
    </div>
  );
}
const initialData = {};
const item_types = [
  { value: "Gem", label: "Gem" },
  { value: "Jewel", label: "Jewel" },
  { value: "Watch", label: "Watch" },
];
const RightForm = ({ itemId }) => {
  const isEdit = itemId ? true : false;
  const getRegisteredItem = () => {
    axios
      .get(`${API}/item/${itemId}`, config)
      .then((res) => {
        const data = res.data;

        setValues(data);
      })
      .catch((err) => console.log({ err }));
  };
  useEffect(() => {
    if (isEdit) getRegisteredItem();
  }, []);

  const history = useHistory();
  const [values, setValues] = useState(initialData);
  const [checkoutNow, setCheckoutNow] = useState(false);

  const [error, setError] = useState("");
  var contextData = useContext(AppContext);

  const config = {
    headers: { Authorization: `Bearer ${contextData.token}` },
  };

  const handleSubmit = () => {
    setError(null);
    const data = { ...values };
    let form_data = new FormData();

    for (var key in data) {
      if (data[key] === Object(data) || Array.isArray(data[key])) {
        for (var i in data[key]) {
          form_data.append(`${key}[${i}]`, data[key][i] || "");
        }
        if (Array.isArray(data[key]) && data[key].length === 0) {
          form_data.append(`${key}[0]`, "");
        }
      } else {
        form_data.append(key, data[key]);
      }
    }
    form_data.append("created_by", contextData.user._id);
    const createNewItem = () =>
      axios.post(
        `${API}/item/create/${contextData.user._id}`,
        form_data,
        config
      );

    const updateItem = () =>
      axios.put(
        `${API}/item/${itemId}/${contextData.user._id}`,
        form_data,
        config
      );
    const execCommand = isEdit ? updateItem : createNewItem;
    execCommand()
      .then((res) => {
        toast.success(
          isEdit
            ? "Item Updated Successfully!"
            : "Item Registered Successfully!",
          {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }
        );
        setValues(initialData);
        history.push("/registrations");
      })
      .catch((error) => {
        console.log({ error });
        setError(error.response.data.error);
      });
  };

  const handleChange = (name, e) => {
    setValues({ ...values, [name]: e.target.value });
  };

  return (
    <>
      <div className="p-md-5 m-md-5 px-5 ">
        <FormHeader>
          <h3>{isEdit ? "Edit Item" : "Register Item"}</h3>
        </FormHeader>

        <form className="py-3" onSubmit={handleSubmit}>
          {error && (
            <div class="alert alert-danger" role="alert">
              {error}
            </div>
          )}
          <div className="row py-3">
            <div className="col-md-6"></div>
            <div className="col-md-6">
              <div>
                <Label labelAlignment="right">Item types</Label>
                <Dropdown
                  isDisabled={isEdit}
                  value={item_types.filter(
                    ({ value }) => value === values.item_type
                  )}
                  options={item_types}
                  onChange={(item) => {
                    handleChange("item_type", {
                      target: { value: item.value },
                    });
                  }}
                />
              </div>
            </div>
          </div>
          {/* // Gem fields */}
          {values?.item_type === "Gem" && (
            <>
              <div className="row py-3">
                <div className="col-md-6">
                  <Input
                    type="text"
                    name="gem_colour"
                    label="Gem Colour"
                    onChange={(e) => handleChange("gem_colour", e)}
                    value={values.gem_colour}
                  />
                </div>
                <div className="col-md-6">
                  <Input
                    type="text"
                    name="gem_clarity"
                    label="Gem Clarity"
                    onChange={(e) => handleChange("gem_clarity", e)}
                    value={values.gem_clarity}
                  />
                </div>
              </div>
              <div className="row py-3">
                <div className="col-md-6">
                  <Input
                    type="text"
                    name="gem_shape"
                    label="Gem Shape/Cut"
                    onChange={(e) => handleChange("gem_shape", e)}
                    value={values.gem_shape}
                  />
                </div>
                <div className="col-md-6">
                  <Input
                    type="text"
                    name="gem_laser_inscription"
                    label="Gem Laser Inspiration"
                    onChange={(e) => handleChange("gem_laser_inscription", e)}
                    value={values.gem_laser_inscription}
                  />
                </div>
              </div>
              <div className="row py-3">
                <div className="col-md-6"></div>

                <div className="col-md-6">
                  <Input
                    type="text"
                    name="gem_brand"
                    label="Gem Brand"
                    onChange={(e) => handleChange("gem_brand", e)}
                    value={values.gem_brand}
                  />
                </div>
              </div>
            </>
          )}
          {/* //Jewel fields */}
          {values?.item_type === "Jewel" && (
            <>
              <div className="row py-3">
                <div className="col-md-6">
                  <Input
                    type="text"
                    name="jewel_colour"
                    label="Jewel Colour"
                    onChange={(e) => handleChange("jewel_colour", e)}
                    value={values.jewel_colour}
                  />
                </div>
                <div className="col-md-6">
                  <Input
                    type="text"
                    name="jewel_metal"
                    label="Jewel Metal"
                    onChange={(e) => handleChange("jewel_metal", e)}
                    value={values.jewel_metal}
                  />
                </div>
              </div>
              <div className="row py-3">
                <div className="col-md-6">
                  <Input
                    type="text"
                    name="jewel_materials"
                    label="Jewel Materials"
                    onChange={(e) => handleChange("jewel_materials", e)}
                    value={values.jewel_materials}
                  />
                </div>
                <div className="col-md-6">
                  <Input
                    type="text"
                    name="jewel_laser_inscription"
                    label="Jewel Serial Number/Jewel Laser Inscription"
                    onChange={(e) => handleChange("jewel_laser_inscription", e)}
                    value={values.jewel_laser_inscription}
                  />
                </div>
              </div>
              <div className="row py-3">
                <div className="col-md-6"></div>

                <div className="col-md-6">
                  <Input
                    type="text"
                    name="jewel_brand"
                    label="Jewel Brand"
                    onChange={(e) => handleChange("jewel_brand", e)}
                    value={values.jewel_brand}
                  />
                </div>
              </div>
            </>
          )}
          {/* //watch fields */}
          {values?.item_type === "Watch" && (
            <>
              <div className="row py-3">
                <div className="col-md-6">
                  <Input
                    type="text"
                    name="watch_metal"
                    label="Watch Metal"
                    onChange={(e) => handleChange("watch_metal", e)}
                    value={values.watch_metal}
                  />
                </div>
                <div className="col-md-6">
                  <Input
                    type="text"
                    name="watch_serial_number"
                    label="Watch Serial Number"
                    onChange={(e) => handleChange("watch_serial_number", e)}
                    value={values.watch_serial_number}
                  />
                </div>
              </div>
              <div className="row py-3">
                <div className="col-md-6"></div>

                <div className="col-md-6">
                  <Input
                    type="text"
                    name="watch_brand"
                    label="Watch Brand"
                    onChange={(e) => handleChange("watch_brand", e)}
                    value={values.watch_brand}
                  />
                </div>
              </div>
            </>
          )}
          {/* //common fields */}
          <div className="row py-3">
            <div className="col-md-3"></div>
            <div className="col-md-9">
              <Input
                type="text"
                name="certificate_number"
                label="Certificate Number, Valuation Number, or Other Unique Number assigned to item"
                onChange={(e) => handleChange("certificate_number", e)}
                value={values.certificate_number}
              />
            </div>
          </div>
          <div className="row py-3">
            <div className="col-md-3"></div>
            <div className="col-md-9">
              <Input
                type="text"
                name="issuer_of_certificate"
                label="Issuer of Certificate, Valuation and Other Unique Number"
                onChange={(e) => handleChange("issuer_of_certificate", e)}
                value={values.issuer_of_certificate}
              />
            </div>
          </div>
          <div className="row py-3">
            <div className="col-md-3"></div>
            <div className="col-md-9">
              <Input
                type="text"
                name="country_of_certificate_issuer"
                label="Country of the Issuer of Certificate,Valuation and Other Unique Number"
                onChange={(e) =>
                  handleChange("country_of_certificate_issuer", e)
                }
                value={values.country_of_certificate_issuer}
              />
            </div>
          </div>
          <div className="row py-3">
            <div className="col-md-3"></div>

            <div className="col-md-9">
              <Input
                type="text"
                name="value_of_item"
                label="Value of Item"
                onChange={(e) => handleChange("value_of_item", e)}
                value={values.value_of_item}
                mandatory
              />
            </div>
          </div>
          {!isEdit && values.checkout && (
            <div className="row py-3">
              <div className="col-md-3"></div>
              <div className="col-md-9"> Payment Successful</div>
            </div>
          )}
          {!isEdit && values.value_of_item && !values.checkout && (
            <div className="row py-3">
              <div className="col-md-3"></div>

              <div className="col-md-9">
                {checkoutNow ? (
                  <Payment
                    value={values.value_of_item}
                    name={`${values.item_type}-${
                      values.certificate_number || "00"
                    }`}
                    onSuccess={() => {
                      setCheckoutNow(false);
                      handleChange("checkout", { target: { value: true } });
                    }}
                    onError={() => {
                      setCheckoutNow(false);
                      handleChange("checkout", { target: { value: false } });
                    }}
                  />
                ) : (
                  <CustomButton
                    type="submit"
                    style={{ alignSelf: "center", width: "100%" }}
                    onClick={() => setCheckoutNow(true)}
                  >
                    Checkout Now
                  </CustomButton>
                )}
              </div>
            </div>
          )}

          <div className="row py-3">
            <div className="col-md-3"></div>
            <div className="col-md-9">
              <CustomButton
                disabled={!values.checkout}
                type="submit"
                style={{ alignSelf: "center", width: "100%" }}
                onClick={handleSubmit}
              >
                {isEdit ? "Edit Item" : "Register Item"}
              </CustomButton>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default RegisterLostItem;
