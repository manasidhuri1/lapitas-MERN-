import React from "react";
import Navbar from "./../Screens/Navbar";
import Banner from "./../Screens/Banner";
import About from "../Screens/About";
import styled from "@emotion/styled";
import colors from "../../Assets/colors";
import Process from "../Screens/Process";
import InfoCard, { CardImage, Information } from "../Common/InfoCard";
import CustomButton from "../Common/Button";
import ScrollAnimation from "react-animate-on-scroll";

const TextBanner = styled.div`
  width: 100%;
  background: ${colors.gray};
  padding: 6rem 13rem;
  text-align: center;
  color: ${colors.white};

  @media (max-width: 720px) {
    & {
      padding: 4rem 4rem;
    }
  }
`;
const image =
  "https://images.squarespace-cdn.com/content/v1/60227ba39dbc57670b6c8a5b/1629903613218-HHGYK1VVP96S6KMD8TVQ/engagement-ring.png?format=1000w";

const CustomContainer = styled.div`
  .smallScreen {
    display: none;
  }

  @media (max-width: 720px) {
    .horizontalInfoCard {
      display: block;
    }
    .bigScreen {
      display: none;
    }
    .smallScreen {
      display: block;
      width: 100%;
      margin-bottom: 1rem;
    }
    .informationCard {
      width: 100%;
    }
  }
`;
function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <Banner />
      <About />
      <TextBanner>
        <h2 className="pb-4 fw-normal">
          Lapitas.org is the First Ownership Authentication Platform Built on
          Blockchain Technology to Protect your Most Treasured Jewels, Gems &
          Watches Worldwide.
        </h2>
        <h4 className="fw-normal">
          Helping to reunite lost/stolen items to their owners no matter the
          distance of location or length of time.
        </h4>
      </TextBanner>
      <Process />
      <div className="container">
        <img
          style={{ width: "100%" }}
          className="py-2 img-fluid"
          src="https://images.squarespace-cdn.com/content/v1/60227ba39dbc57670b6c8a5b/1629730596003-Z9GW26DL512BCQSIN54G/logos.png?format=1000w"
        />
        <h3 className="py-3 fw-normal text-center">
          LAPITAS registers any registration number, certificate number and
          laser inscription from any brand, gem laboratory or institution.{" "}
        </h3>
      </div>
      <TextBanner>
        <h2 className="pb-4 fw-normal">
          A Single Payment for Lifetime Registration & Worldwide Protection
        </h2>
        <h4 className="fw-normal">
          No Annual Renewals, No Subscription Fees, No Expirations.
        </h4>
      </TextBanner>

      <CustomContainer className="container">
        <ScrollAnimation animateIn="bounceInRight" animateOnce={true}>
          <InfoCard>
            <CardImage src={image} className="img-fluid smallScreen" />

            <Information
              title="Protect Your Love. testttt"
              description="Stop your lost or stolen diamond from being illegally sold or trafficked by registering your diamond’s unique laser inscription number to your details. "
            >
              <ul>
                <li>Link Your Details to Your Diamond</li>
                <li>One Simple Payment</li>
                <li>Lifetime Registration</li>
              </ul>
              <CustomButton style={{ alignSelf: "center" }}>
                Register Now
              </CustomButton>
            </Information>

            <CardImage moveLeft src={image} className="img-fluid bigScreen" />
          </InfoCard>
        </ScrollAnimation>
        <ScrollAnimation animateIn="bounceInLeft" animateOnce={true}>
          <InfoCard>
            <CardImage
              src="https://images.squarespace-cdn.com/content/v1/60227ba39dbc57670b6c8a5b/1629902853609-FPUQDY6KB2X78SW2139O/legacy-watches-lapitas.png?format=1000w"
              className="img-fluid smallScreen"
            />
            <CardImage
              moveRight
              src="https://images.squarespace-cdn.com/content/v1/60227ba39dbc57670b6c8a5b/1629902853609-FPUQDY6KB2X78SW2139O/legacy-watches-lapitas.png?format=1000w"
              className="img-fluid bigScreen"
            />
            <Information
              title="Your Legacy, Secured by Blockchain."
              description="Luxury timepieces are worn and appreciated for generations. Assure provenance and legitimate ownership by linking your watches unique serial number to your details.  "
            >
              <ul>
                <li>Secured by Blockchain Technology</li>
                <li>No Annual Renewals</li>
                <li>No Subscription Fees</li>
              </ul>
              <CustomButton style={{ alignSelf: "center" }}>
                Register Now
              </CustomButton>
            </Information>
          </InfoCard>
        </ScrollAnimation>
        <ScrollAnimation animateIn="bounceInRight" animateOnce={true}>
          <InfoCard>
            <CardImage src={image} className="img-fluid smallScreen" />

            <Information
              title="Protect Your Love."
              description="Stop your lost or stolen diamond from being illegally sold or trafficked by registering your diamond’s unique laser inscription number to your details. "
            >
              <ul>
                <li>Link Your Details to Your Diamond</li>
                <li>One Simple Payment</li>
                <li>Lifetime Registration</li>
              </ul>
              <CustomButton style={{ alignSelf: "center" }}>
                Register Now
              </CustomButton>
            </Information>
            <CardImage moveLeft src={image} className="img-fluid bigScreen" />
          </InfoCard>
        </ScrollAnimation>

        <ScrollAnimation animateIn="bounceInLeft" animateOnce={true}>
          <InfoCard>
            <CardImage src={image} className="img-fluid smallScreen" />

            <CardImage moveRight src={image} className="img-fluid bigScreen" />
            <Information
              title="Protect Your Love."
              description="Stop your lost or stolen diamond from being illegally sold or trafficked by registering your diamond’s unique laser inscription number to your details. "
            >
              <ul>
                <li>Link Your Details to Your Diamond</li>
                <li>One Simple Payment</li>
                <li>Lifetime Registration</li>
              </ul>
              <CustomButton style={{ alignSelf: "center" }}>
                Register Now
              </CustomButton>
            </Information>
          </InfoCard>
        </ScrollAnimation>

        <ScrollAnimation animateIn="bounceInRight" animateOnce={true}>
          <InfoCard>
            <CardImage src={image} className="img-fluid smallScreen" />

            <Information
              title="Protect Your Love."
              description="Stop your lost or stolen diamond from being illegally sold or trafficked by registering your diamond’s unique laser inscription number to your details. "
            >
              <ul>
                <li>Link Your Details to Your Diamond</li>
                <li>One Simple Payment</li>
                <li>Lifetime Registration</li>
              </ul>
              <CustomButton style={{ alignSelf: "center" }}>
                Register Now
              </CustomButton>
            </Information>
            <CardImage moveLeft src={image} className="img-fluid bigScreen" />
          </InfoCard>
        </ScrollAnimation>

        <ScrollAnimation animateIn="bounceInLeft" animateOnce={true}>
          <InfoCard>
            <CardImage src={image} className="img-fluid smallScreen" />

            <CardImage moveRight src={image} className="img-fluid bigScreen" />
            <Information
              title="Protect Your Love."
              description="Stop your lost or stolen diamond from being illegally sold or trafficked by registering your diamond’s unique laser inscription number to your details. "
            >
              <ul>
                <li>Link Your Details to Your Diamond</li>
                <li>One Simple Payment</li>
                <li>Lifetime Registration</li>
              </ul>
              <CustomButton style={{ alignSelf: "center" }}>
                Register Now
              </CustomButton>
            </Information>
          </InfoCard>
        </ScrollAnimation>
      </CustomContainer>
    </>
  );
}

export default Home;
