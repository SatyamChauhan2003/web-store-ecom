import React from "react";
import HeroSection from "./components/HeroSection";
import { useProductContext } from "./context/productContext";

const About = () => {
  const { myName } = useProductContext();
  const data = {
    name: "Web Ecommerce",
  };
  return (
    <>
      {myName}
      <HeroSection data={data} />
    </>
  );
};

export default About;
