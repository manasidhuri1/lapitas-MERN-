import React, { useState } from "react";
import styled from "@emotion/styled";
import SearchIcon from "@material-ui/icons/Search";
import colors from "../../Assets/colors";
import Button from "../Common/Button";
import Background from "../../images/lapitas-home-page.jpg";
import { useHistory } from "react-router";

const BannerContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;

  // padding: 0 2rem;
  padding-top: 5rem;
`;

const BackgroundContainer = styled.div`
  background-image: url(${Background});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const SearchInput = styled.input`
  background: ${colors.darkGray};
  border: none;
  &:focus {
    background-color: transparent;
    border-color: none;
    box-shadow: none;
  }
`;

const SearchInputContainer = styled.div`
  background: ${colors.darkGray};
  border: 0.5px solid ${colors.borderColor};
  padding: 0.5rem;
  align-items: center;
  margin: 1rem 0;

  &:focus-within {
    margin: 1rem;
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
      border: 1px ${colors.black} solid;
    }
  }
`;

// .form-control:focus{border-color: #5cb85c;  box-shadow: none; -webkit-box-shadow: none;}
function Banner() {
  const history = useHistory();

  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    history.push({
      pathname: "/search-list",

      state: { text: text },
    });
  };
  return (
    <BackgroundContainer>
      <BannerContainer className="py-5  text-center">
        <h1>Lapitas:</h1>
        <h2 className="my-4">
          The International Gem, Jewel and Watch Registry.
        </h2>
        <p className="my-3">Protecting Your Love, Legacy & Investmen</p>
        <h6 className="my-3">SEARCH THE ITEM NUMBER</h6>
        <form onSubmit={handleSubmit}>
          <SearchInputContainer className="input-group mb-3">
            <SearchIcon />
            <SearchInput
              value={text}
              onChange={(e) => setText(e.target.value)}
              type="text"
              className="form-control"
              placeholder=""
            />
          </SearchInputContainer>
          <Button btnType="submit" onClick={handleSubmit}>
            Search Data
          </Button>
        </form>
        <h6 className="my-3">
          CHECK THE OWNERSHIP STATUS OF GEMS, JEWELS & WATCHES
        </h6>
      </BannerContainer>
    </BackgroundContainer>
  );
}

export default Banner;
