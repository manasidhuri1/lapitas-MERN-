import React, { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import colors from "../../Assets/colors";
import Avatar from "./Avatar";
import Icon from "./Icon";

const ProfileContainer = styled.div`
  position: relative;
  background: ${colors.white};
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1.5px solid ${colors.black};
`;
const dummyImg =
  "https://cdn.pixabay.com/photo/2015/08/05/04/25/people-875617_960_720.jpg";

function Profile({ photo, handleChange = () => {} }) {
  const [image, setImage] = useState(`${photo}`);
  useEffect(() => {
    if (typeof photo === "object" && !Array.isArray(photo) && photo !== null) {
      setImage(URL.createObjectURL(photo));
    } else {
      setImage(`${photo}`);
    }
  }, [photo]);

  const hiddenFileInput = useRef(null);
  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
      handleChange(event);
    }
  };

  return (
    <ProfileContainer>
      <div
        onClick={handleClick}
        className="p-2"
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          cursor: "pointer",
        }}
      >
        <Icon color={colors.black}>more_vert</Icon>
      </div>
      <Avatar size={120} src={image || dummyImg} />
      <h5>Profile</h5>
      <input
        type="file"
        ref={hiddenFileInput}
        onChange={onImageChange}
        name="photo"
        style={{ display: "none" }}
      />
    </ProfileContainer>
  );
}

export default Profile;
