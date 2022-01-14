import { VerticalAlignBottom } from "@material-ui/icons";
import React from "react";
import VerticalCard from "./../Common/VerticalCard";
import Button from "../Common/Button";
import ScrollAnimation from "react-animate-on-scroll";
function Process() {
  return (
    <div className="py-4 my-5">
      <h2 className="text-center">How to Register Your Item</h2>
      <ScrollAnimation animateIn="fadeIn">
        <div class="container text-center ">
          <div class="row">
            <div class="col-lg-4 col-md-4 col-sm-12">
              <VerticalCard
                image="https://images.squarespace-cdn.com/content/v1/60227ba39dbc57670b6c8a5b/1614505888487-68276L4E9H8Y93H13GW4/Free+Account.jpg?format=500w"
                title="1: Create Your Free Account"
                description="Registering with Lapitas is simple. Start by signing up to create a free account. All items registered under your account will be forever linked to your email address. In the event of loss or theft, wherever you are in the world, your item can be traced back to you. "
              />
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12">
              <VerticalCard
                image="https://images.squarespace-cdn.com/content/v1/60227ba39dbc57670b6c8a5b/1614505937041-RMFCFB8BSY8AFB4E62F0/Gia+Report.jpg?format=500w"
                title="2: Add Your Gem, Jewel or Watch details."
                description="Complete the online registration form and add your items unique identifying serial number. Upload photos, images of certificates and any other paperwork associated with your item. Your place to keep digital copies of gem, jewel & watch documents forever."
              />
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12">
              <VerticalCard
                image="https://images.squarespace-cdn.com/content/v1/60227ba39dbc57670b6c8a5b/1614505985504-Z0PKHV5E3LDL3SWWW1BR/Lifetime+Security.jpg?format=500w"
                title="3: Single Payment for Lifetime Registration & Protection. "
                description=" Pay a single, one-time fee for lifetime registration. Your registration is secured by blockchain technology and your data privacy is protected. Flag your item as lost or stolen at anytime and transfer registration when you sell your item."
              />
            </div>
          </div>
          <Button style={{ alignSelf: "center" }}>
            Create Your Free Account
          </Button>
        </div>
      </ScrollAnimation>
    </div>
  );
}

export default Process;
