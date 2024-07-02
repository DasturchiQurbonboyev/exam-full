import React from "react";
import phone from "../../assets/images/home/phone.png";
import sms from "../../assets/images/home/sms.png";
const Contact = () => {
  return (
    <div className="kontainer contact">
      <div className="cards">
        <div className="left">
          <div className="icon">
            <img src={phone} alt="" />
            <span>Call To Us</span>
          </div>
          <p>We are available 24/7, 7 days a week.</p>
          <p>Phone: +8801611112222</p>
          <hr />
          <div className="icon">
            <img src={sms} alt="" />
            <span>Write To US</span>
          </div>
          <p>Fill out our form and we will contact you within 24 hours.</p>
          <p>Emails: customer@exclusive.com</p>
          <p>Emails: support@exclusive.com</p>
        </div>
        <div className="right">
          <div className="inp2">
            <input type="text" placeholder="Your Name *" />
            <input type="email" placeholder="Your Email *" />
            <input type="number" placeholder="Your Phone *" />
          </div>

          <textarea placeholder=" Your Massage" cols="100" rows="10"></textarea>
          <button>Send Massage</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
