import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { API } from "../../Assets/constant";
import { AppContext } from "../../App";

function DetailSearchScreen({ match }) {
  const itemId = match?.params?.itemId || false;
  const [values, setValues] = useState(null);
  var contextData = useContext(AppContext);

  const config = {
    headers: { Authorization: `Bearer ${contextData.token}` },
  };

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
    getRegisteredItem();
  }, []);

  if (!values) return <> </>;
  return (
    <div className="container my-4 ">
      <div className="mx-md-5">
        {values?.photo &&
          values.photo.length > 0 &&
          values.photo.map((imgLink) => (
            <img
              style={{ width: "100%" }}
              src={imgLink}
              className="img-fluid"
            />
          ))}

        <h5 className="my-4">Item Number: {values.certificate_number}</h5>
      </div>
    </div>
  );
}

export default DetailSearchScreen;
