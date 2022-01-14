import React from "react";
import CustomButton from "../Common/Button";

function Press() {
  return (
    <div
      className="p-3 p-md-5"
      style={{ background: "#38383B", color: "white" }}
    >
      <div className="mx-md-5 px-md-5">
        <div className="mx-md-5 px-md-5">
          <h2 className="fw-normal text-center my-5">Press</h2>

          <p className="fw-normal  mb-4">
            Find the latest press releases from Lapitas, and related material
            such as press kit, company information and images library.
          </p>
          <p className="fw-normal  mb-4">
            For any media inquiries, please reach out to press@lapitas.org
          </p>
          <div>
            <iframe
              width="100%"
              height="500"
              src="https://www.youtube.com/embed/xzEqFEq1-Ko"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="d-flex justify-content-center my-4">
            <CustomButton>Download Press Release</CustomButton>
          </div>
          <p className="fw-normal my-4 text-center">
            Lapitas.org is the First Ownership Authentication Platform Built on
            Blockchain Technology to Protect your Most Treasured Jewels, Gems &
            Watches Worldwide. Helping to reunite lost/stolen items to their
            owners no matter the distance of location or length of time.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Press;
