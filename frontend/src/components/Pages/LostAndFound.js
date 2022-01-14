import React, { useContext, useState } from "react";
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
import { AppContext } from "../../App";
import TextArea from "../Common/TextArea";
import LostFound from "../../images/lost&found.JPG";
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

function LostAndFound() {
  return (
    <div>
      <div
        className="p-md-5  px-2"
        style={{
          backgroundColor: "#DFE0E1",
          textAlign: "center",
        }}
      >
        <h2 className="fw-normal">Lost & Found</h2>
        <img src={LostFound} />
        <div className="px-md-5 mx-md-5 my-2">
          <h3 className="fw-normal">
            Found an item and want to return it home? Thank you! Book your FREE
            and secure pick up & delivery service.
          </h3>
          <p className="mt-4">
            Thank you for being a super star! Simply fill in the form below and
            we will contact you to organise a free secure pick up and delivery
            service to the owner. Thanks to you, you’ve made the world a nicer
            place to live in. Need our direct email address? found@lapitas.org
          </p>
          <RightForm />
        </div>
      </div>

      <div
        className="p-3 p-md-5"
        style={{ background: "#38383B", color: "white" }}
      >
        <div className=" px-md-5 m-md-5">
          <h2 className="fw-normal my-4">FAQs</h2>

          <h5 className="fw-normal mb-4">
            How does the Lapitas: Lost & Found work?
          </h5>
          <p className="mb-4">
            We love to help and want to make it as easy as possible to reunite
            precious items to their owners. If you’ve found an item, we make
            sure it returns home. Simply fill in the form above and Lapitas
            arranges FREE secure pick up and delivery of the item (at zero cost
            to the finder and the owner!) Lapitas also gives a special thank you
            reward to the finder for being a beautiful human being (Lapitas
            picks up the tab for the reward so the owner doesn’t have to!)
          </p>

          <h5 className="fw-normal mb-4">Will I get a reward?</h5>
          <p className="mb-4">
            Most people that hand in lost or stolen pieces don’t want a reward
            and are happy to receive good karma. But also Lapitas believes that
            good deeds should be rewarded. Lapitas gives you a reward on behalf
            of the owner (and behalf of all Lapitas Members!) for being an
            amazing human being. This is a community that cares about returning
            precious items home and Lapitas loves to facilitate the flow of lost
            and stolen items back to their distressed owners.
          </p>

          <h5 className="fw-normal mb-4">Do I have to pay for shipping?</h5>
          <p className="mb-4">
            Shipping is free! Lapitas takes care of the costs for the shipping.
            We want to make is as easy as possible to reunite items to their
            owners so both the finder and the owner do not pay any shipping
            fees. We use secure shipping services that require ID and signature
            on delivery.
          </p>

          <h5 className="fw-normal mb-4">When will you pick up the item?</h5>
          <p className="mb-4">
            Pick a day and time that suits you! We work around your schedule to
            make it as easy as possible.
          </p>
        </div>
      </div>
    </div>
  );
}

const initialData = {
  firstname: "",
  lastname: "",
  contact_email: "",
  found_item_description: "",
};
const RightForm = () => {
  const history = useHistory();
  const [values, setValues] = useState(initialData);

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
    axios
      .post(
        `${API}/founditem/create/${contextData.user._id}`,
        form_data,
        config
      )
      .then((res) => {
        toast.success("Found Item Registered!", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setValues(initialData);
        history.push("/");
      })
      .catch((error) => {
        setError(error.response.data.error);
      });
  };

  const handleChange = (name, e) => {
    setValues({ ...values, [name]: e.target.value });
  };

  const inputStyle = { background: "white", border: "none" };
  return (
    <>
      <div className="px-3 py-3  px-sm-3">
        <form className="py-3" onSubmit={handleSubmit}>
          {error && (
            <div class="alert alert-danger" role="alert">
              {error}
            </div>
          )}

          <div className="row ">
            <div className="col-md-6 py-3">
              <Input
                style={inputStyle}
                labelAlignment="left"
                type="text"
                name="First Name"
                label="First Name"
                onChange={(e) => handleChange("firstname", e)}
                value={values.firstname}
              />
            </div>
            <div className="col-md-6 py-3">
              <Input
                style={inputStyle}
                labelAlignment="left"
                type="text"
                name="Last Name"
                label="Last Name"
                onChange={(e) => handleChange("lastname", e)}
                value={values.lastname}
              />
            </div>
          </div>

          <div className="row ">
            <div className="col-md-12 py-3">
              <Input
                style={inputStyle}
                labelAlignment="left"
                type="email"
                name="Contact Email"
                label="Contact Email"
                onChange={(e) => handleChange("contact_email", e)}
                value={values.contact_email}
              />
            </div>
          </div>
          <div className="row ">
            <div className="col-md-12 py-3">
              <TextArea
                style={inputStyle}
                labelAlignment="left"
                name="Found Item Description"
                label="Found Item Description"
                onChange={(e) => handleChange("found_item_description", e)}
                value={values.found_item_description}
              />
            </div>
          </div>

          <div className="row py-3">
            <div className="col-md-2">
              <CustomButton
                btnType="submit"
                style={{ alignSelf: "center", width: "100%" }}
                onClick={handleSubmit}
              >
                Send
              </CustomButton>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default LostAndFound;
