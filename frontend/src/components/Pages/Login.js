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
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { AppContext } from "../../App";
const users = [
  { value: "Sonia_Pathan", label: "Sonia Pathan" },
  { value: "Ram_Warma", label: "Ram Warma" },
  { value: "Alex_Chery", label: "Alex Chery" },
];

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
function Login(props) {
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
            <RightForm props={props} />
          </div>
        </div>
      </div>
    </div>
  );
}

const RightForm = (props) => {
  let history = useHistory();
  const [values, setValues] = useState({
    contact_email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const contextData = useContext(AppContext);

  const handleSubmit = () => {
    setError(null);

    axios
      .post(`${API}/signin`, values)
      .then((res) => {
        window.localStorage.setItem("Lapitas_token", JSON.stringify(res.data));
        contextData.login();

        toast.success("User LoggedIn!", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        history.push("/");
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
      <div>
        <FormHeader>
          <h3>Login</h3>
          <p>
            Do not have account?
            <Link to="/register"> Register here</Link>
          </p>
        </FormHeader>

        <form className="py-3" onSubmit={handleSubmit}>
          {error && (
            <div class="alert alert-danger" role="alert">
              {error}
            </div>
          )}

          <div className="row py-3">
            <div className="col-md-4"></div>
            <div className="col-md-8">
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
            <div className="col-md-4"></div>
            <div className="col-md-8">
              <Input
                type="password"
                name="Password"
                label="Password"
                onChange={(e) => handleChange("password", e)}
                value={values.password}
              />
            </div>
          </div>

          <div className="row py-3">
            <div className="col-md-4"></div>
            <div className="col-md-8">
              <CustomButton
                type="submit"
                style={{ alignSelf: "center", width: "100%" }}
                onClick={handleSubmit}
              >
                Login
              </CustomButton>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
