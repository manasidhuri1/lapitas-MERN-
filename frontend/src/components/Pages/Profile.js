import React, { useContext, useEffect, useState } from "react";
import colors from "../../Assets/colors";
import CustomButton from "../Common/Button";
import ProfilePhoto from "../Common/Profile";
import styled from "@emotion/styled";
import { Formik } from "formik";
import Input from "../Common/Input";
import Dropdown from "../Common/Dropdown";
import Registration from "./Registration";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { API } from "../../Assets/constant";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { AppContext } from "./../../App";

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
`;
function Profile() {
  return (
    <div>
      <div
        className="p-3 m-4 p-md-5 m-md-5"
        style={{
          backgroundColor: colors.lightGray,
          // margin: "4rem 4rem",
          // padding: "3rem 4rem",
        }}
      >
        <RightForm />
        {/* <Registration /> */}
      </div>
    </div>
  );
}

const RightForm = (props) => {
  let history = useHistory();
  const [values, setValues] = useState({});
  const [loading, setLoading] = useState(false);
  const [reloadData, setReloadData] = useState(false);
  var contextData = useContext(AppContext);

  const config = {
    headers: { Authorization: `Bearer ${contextData.token}` },
  };
  useEffect(() => {
    if (contextData.isLoggedIn) {
      setLoading(true);
      axios
        .get(`${API}/user/${contextData.user._id}`, config)
        .then((res) => {
          setLoading(false);
          setValues({ ...res.data });
        })
        .catch((err) => {
          setLoading(false);
          console.log({ err });
        });
    }
  }, [reloadData]);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
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
      .put(`${API}/user/${contextData.user._id}`, form_data, config)
      .then((res) => {
        const data = { token: contextData.token, user: res.data };
        window.localStorage.setItem("Lapitas_token", JSON.stringify(data));

        toast.success("User Updated Successfully!", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        contextData.login();
        setReloadData((prev) => !prev);
      })
      .catch((error) => {
        console.log({ error });
        setError(error.response.data.error);
      });
  };

  const handleChange = (e) => {
    if (e.target.name == "photo" && e.target.files) {
      setValues({
        ...values,
        [e.target.name]: e.target.files.length > 0 ? e.target.files[0] : null,
      });
    } else {
      setValues({ ...values, [e.target.name]: e.target.value });
    }
  };
  // console.log({ values });
  console.log({ values });
  if (loading) return <></>;
  return (
    <form onSubmit={handleSubmit}>
      <div className="row justify-content-between">
        <div className="col-md-3">
          <ProfilePhoto photo={values?.photo} handleChange={handleChange} />
        </div>
        <div className="col-md-8">
          <FormHeader>
            <h3>My Account</h3>
            <p>View and edit your personal info below</p>
          </FormHeader>
          <div className="py-3">
            {error && (
              <div class="alert alert-danger" role="alert">
                {error}
              </div>
            )}
            <div className="row ">
              <div className="col-md-6 py-3">
                <Input
                  name="lastname"
                  label="Last Name"
                  onChange={handleChange}
                  value={values.lastname}
                />
              </div>
              <div className="col-md-6 py-3">
                <Input
                  name="firstname"
                  label="First Name"
                  onChange={handleChange}
                  value={values.firstname}
                />
              </div>
            </div>

            <div className="row ">
              <div className="col-md-6 py-3">
                <Input
                  name="contact"
                  label="Phone"
                  onChange={handleChange}
                  value={values.contact}
                />
              </div>
              <div className="col-md-6 py-3">
                <Input
                  name="contact_email"
                  label="Contact Email"
                  onChange={handleChange}
                  value={values.contact_email}
                  readonly={true}
                />
              </div>
            </div>

            <div className="row ">
              <div className="col-md-12 py-3">
                <Input
                  name="address"
                  label="Address"
                  onChange={handleChange}
                  value={values.address}
                />
              </div>
            </div>

            <div className="row ">
              <div className="col-md-6 py-3">
                <Input
                  name="zip"
                  placeholder="Zip"
                  onChange={handleChange}
                  value={values.zip}
                />
              </div>
              <div className="col-md-6 py-3">
                <Input
                  name="city"
                  placeholder="City"
                  onChange={handleChange}
                  value={values.city}
                />
              </div>
            </div>
            <div className="row ">
              <div className="col-md-6"></div>
              <div className="col-md-6 py-3">
                <Input
                  placeholder="Country"
                  name="country"
                  onChange={handleChange}
                  value={values.country}
                />
              </div>
            </div>

            <div className="row ">
              <div className="col-md-6"></div>
              <div className="col-md-6 py-3">
                <CustomButton
                  btnType="submit"
                  type="small"
                  style={{ alignSelf: "center", width: "100%" }}
                  onClick={handleSubmit}
                >
                  Update Info
                </CustomButton>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </form>
  );
};

// const RightForm = () => {
//   return (
//     <>
//       <div>
//         <FormHeader>
//           <h3>My Account</h3>
//           <p>View and edit your personal info below</p>
//         </FormHeader>
//         <Formik
//           initialValues={{ email: "", password: "" }}
//           validate={(values) => {
//             const errors = {};
//             if (!values.email) {
//               errors.email = "Required";
//             } else if (
//               !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
//             ) {
//               errors.email = "Invalid email address";
//             }
//             return errors;
//           }}
//           onSubmit={(values, { setSubmitting }) => {
//             setTimeout(() => {
//               alert(JSON.stringify(values, null, 2));
//               setSubmitting(false);
//             }, 400);
//           }}
//         >
//           {({
//             values,
//             errors,
//             touched,
//             handleChange,
//             handleBlur,
//             handleSubmit,
//             isSubmitting,
//             /* and other goodies */
//           }) => (
//             <form className="py-3" onSubmit={handleSubmit}>
//               <div className="row py-3">
//                 <div className="col-md-6">
//                   <Input
//                     type="email"
//                     name="email"
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     value={values.email}
//                     error={errors.email && touched.email && errors.email}
//                   />
//                 </div>
//                 <div className="col-md-6">
//                   <Input
//                     type="email"
//                     name="email"
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     value={values.email}
//                     error={errors.email && touched.email && errors.email}
//                   />
//                 </div>
//               </div>

//               <div className="row py-3">
//                 <div className="col-md-6">
//                   <Input
//                     type="email"
//                     name="email"
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     value={values.email}
//                     error={errors.email && touched.email && errors.email}
//                   />
//                 </div>
//                 <div className="col-md-6">
//                   <Input
//                     type="email"
//                     name="email"
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     value={values.email}
//                     error={errors.email && touched.email && errors.email}
//                   />
//                 </div>
//               </div>

//               <div className="row py-3">
//                 <div className="col-md-12">
//                   <Input
//                     type="email"
//                     name="email"
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     value={values.email}
//                     error={errors.email && touched.email && errors.email}
//                   />
//                 </div>
//               </div>

//               <div className="row py-3">
//                 <div className="col-md-6">
//                   <Input
//                     type="email"
//                     name="email"
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     value={values.email}
//                     error={errors.email && touched.email && errors.email}
//                   />
//                 </div>
//                 <div className="col-md-6">
//                   <Input
//                     type="email"
//                     name="email"
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     value={values.email}
//                     error={errors.email && touched.email && errors.email}
//                   />
//                 </div>
//               </div>
//               <div className="row py-3">
//                 <div className="col-md-6"></div>
//                 <div className="col-md-6">
//                   <Dropdown
//                     options={users}
//                     error={errors.email && touched.email && errors.email}
//                   />
//                 </div>
//               </div>
//               <div className="row py-3">
//                 <div className="col-md-6"></div>
//                 <div className="col-md-6">
//                   <CustomButton
//                     type="submit"
//                     disabled={isSubmitting}
//                     style={{ alignSelf: "center", width: "100%" }}
//                   >
//                     Update Info
//                   </CustomButton>
//                 </div>
//               </div>
//             </form>
//           )}
//         </Formik>
//       </div>
//     </>
//   );
// };

export default Profile;
