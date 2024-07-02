import React from "react";
import about1 from "../../../../assets/images/home/about1.png";
const AboutHeader = () => {
  return (
    <div className="kontainer aboutheader">
      <div className="cards">
        <div className="left">
          <h1>Our Story</h1>
          <p>
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.
          </p>
          <p>
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>
        <div className="right">
          <img src={about1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutHeader;
