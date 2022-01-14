import React, { useState } from "react";
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
function Register() {
  return (
    <div>
      <div
        className="p-3 m-4 p-md-5 m-md-5"
        style={{
          backgroundColor: colors.lightGray,
        }}
      >
        <div className="row justify-content-between">
          <div className="col-md-9 mx-auto">
            <RightForm />
          </div>
        </div>
      </div>
    </div>
  );
}
const initialData = {
  firstname: "",
  lastname: "",
  contact_email: "",
  password: "",
  contact: "",
};

const RightForm = () => {
  const history = useHistory();
  const [values, setValues] = useState(initialData);

  const [error, setError] = useState("");

  const handleSubmit = () => {
    setError(null);
    if (values.password !== values.confirm_password) {
      setError("Password and Confirm Password is not matching.");
      return;
    }
    axios
      .post(`${API}/signup`, values)
      .then((res) => {
        toast.success("User Registered!", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setValues(initialData);
        history.push("/login");
      })
      .catch((error) => {
        setError(error.response.data.error);
      });
  };

  const handleChange = (name, e) => {
    setValues({ ...values, [name]: e.target.value });
  };
  return (
    <>
      <div>
        <FormHeader>
          <h3>Create New Account</h3>
          <p>
            Already have account? <Link to="/login"> Login here </Link>
          </p>
        </FormHeader>

        <form className="py-3" onSubmit={handleSubmit}>
          {error && (
            <div class="alert alert-danger" role="alert">
              {error}
            </div>
          )}

          <div className="row py-3">
            <div className="col-md-6">
              <Input
                type="text"
                name="First Name"
                label="First Name"
                onChange={(e) => handleChange("firstname", e)}
                value={values.firstname}
              />
            </div>
            <div className="col-md-6">
              <Input
                type="text"
                name="Last Name"
                label="Last Name"
                onChange={(e) => handleChange("lastname", e)}
                value={values.lastname}
              />
            </div>
          </div>

          <div className="row py-3">
            <div className="col-md-6">
              <Input
                type="text"
                name="Phone"
                label="Phone"
                onChange={(e) => handleChange("contact", e)}
                value={values.contact}
              />
            </div>
            <div className="col-md-6">
              <Input
                type="email"
                name="Contact Email"
                label="Contact Email"
                onChange={(e) => handleChange("contact_email", e)}
                value={values.contact_email}
              />
            </div>
          </div>

          <div className="row py-3">
            <div className="col-md-6">
              <Input
                type="password"
                name="Password"
                label="Password"
                onChange={(e) => handleChange("password", e)}
                value={values.password}
              />
            </div>
            <div className="col-md-6">
              <Input
                type="password"
                name="Confirm Password"
                label="Confirm Password"
                onChange={(e) => handleChange("confirm_password", e)}
                value={values.confirm_password}
              />
            </div>
          </div>

          <div className="row py-3">
            <div className="col-md-6"></div>
            <div className="col-md-6">
              <CustomButton
                type="submit"
                style={{ alignSelf: "center", width: "100%" }}
                onClick={handleSubmit}
              >
                Register
              </CustomButton>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
