import React from "react";
import AboutHeader from "./components/aboutHeader/AboutHeader";
import AboutDel from "./components/aboutDel/AboutDel";
import Users from "./components/users/Users";
import Delev from "../../components/delev/Delev";
const About = () => {
  return (
    <div>
      <AboutHeader />
      <AboutDel />
      <Users />
      <Delev />
    </div>
  );
};

export default About;
