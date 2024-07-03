import React from "react";
import AboutHeader from "../../components/about/aboutHeader/AboutHeader";
import AboutDel from "../../components/about/aboutDel/AboutDel";
import Users from "../../components/about/aboutDel/Users";
import Delev from "../../components/delev/Delev";
// import Delev from "../../components/delev/Delev";
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
