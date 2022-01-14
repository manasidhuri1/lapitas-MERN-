import { VerticalAlignBottom } from "@material-ui/icons";
import React from "react";
import VerticalCard from "./../Common/VerticalCard";
import Button from "../Common/Button";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <div className="py-4 my-5">
      <h2 className="text-center">Where Do I Find My Unique Number?</h2>
      <ScrollAnimation animateIn="fadeIn">
        <div class="container text-center ">
          <div class="row">
            <div class="col-lg-4 col-md-4 col-sm-12">
              <VerticalCard
                image="https://images.squarespace-cdn.com/content/v1/60227ba39dbc57670b6c8a5b/1614516533204-4K4F8110PQI0SNQBP1ZM/Diamond+Number.jpg?format=500w"
                title="Diamonds"
                description="The unique serial number is laser inscribed on the girdle of the diamond. The same number is stated on the Certificate Report Number issued by the gemstone laboratory."
              />
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12">
              <VerticalCard
                image="https://images.squarespace-cdn.com/content/v1/60227ba39dbc57670b6c8a5b/1614516798584-N6XT5NADBI4XC84QQX7O/cartier+serial+number.jpg?format=500w"
                title="Jewels"
                description="The unique serial number can be found engraved either near the karat stamp, hallmark or the brand/makers mark. The same number is stated on the Certificate of Authenticity issued by the jewellery brand."
              />
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12">
              <VerticalCard
                image="https://images.squarespace-cdn.com/content/v1/60227ba39dbc57670b6c8a5b/1614516605668-I22BN7WFTADCVVNF9U1X/rolex+serial+number.jpg?format=500w"
                title="Watches"
                description="The unique serial numbers on watches can be found either between the lugs, inside the case or the case back. The same number is stated on the Certificate of Authenticity issued by the brand."
              />
            </div>
          </div>
          <Button style={{ alignSelf: "center" }}>
            Register Your Item Now
          </Button>
        </div>
      </ScrollAnimation>
    </div>
  );
}

export default About;
