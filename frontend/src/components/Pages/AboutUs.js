import React from "react";
import about from "../../images/Lapitas-About-Us.png";
function AboutUs() {
  return (
    <div
      className="p-3 p-md-5"
      style={{ background: "#38383B", color: "white" }}
    >
      <div className="row align-items-center">
        <div className="col-md-6">
          <div>
            <h2 className="fw-normal my-3">About US</h2>
            <h5 className="fw-normal mb-3">Lapitas: </h5>
            <p className="fw-normal mb-3">Lapis (Latin) Meaning “Stone” </p>
            <p className="fw-normal mb-3">Veritas (Latin) Meaning “Truth”</p>
            <p className="fw-normal mb-3">
              With the collective experience of over 50 years in the luxury
              jewellery industry; and offices spanning 3 continents, we are
              obsessed with the integrity and protection of diamonds, fine
              jewels, timepieces and gold.{" "}
            </p>
            <p className="fw-normal mb-3">
              We believe these treasured pieces cannot be valued by the sum
              total of their material parts. They hold the meaning and history
              of love, family and who we are.
            </p>
            <p className="fw-normal mb-3">
              Lapitas exists to authenticate ownership of precious goods
              worldwide. Helping lost & stolen items return home, no matter the
              distance of location or time.
            </p>
            <p className="fw-normal mb-3">
              “Protecting Your Love, Legacy & Investment.”
            </p>
            <p className="fw-normal mb-3">contact@lapitas.org</p>
          </div>
        </div>
        <div className="col-md-6">
          <div>
            <img src={about} className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
