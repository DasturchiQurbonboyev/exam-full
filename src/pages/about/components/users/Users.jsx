import React from "react";
import { USERS } from "../../../../static/index";
import { CiTwitter, CiInstagram } from "react-icons/ci";
import { SlSocialLinkedin } from "react-icons/sl";

const Users = () => {
  let card = USERS?.map((el) => (
    <div className="card" key={el.id}>
      <img src={el.img} alt="" />
      <h2>{el.title}</h2>
      <p>{el.job}</p>
      <div className="icons">
        <CiTwitter className="icon" />
        <CiInstagram className="icon" />
        <SlSocialLinkedin className="icon" />
      </div>
    </div>
  ));
  return (
    <div className="kontainer users">
      <div className="cards">{card}</div>
    </div>
  );
};

export default Users;
