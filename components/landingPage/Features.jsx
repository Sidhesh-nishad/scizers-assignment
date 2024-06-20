"use client";
import FeaturesCard from "../ui/FeaturesCard";
import { featuresData } from "../../utils";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Features() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div
      className="md:px-[222px] px-[30px] pt-[18px] pb-[20px] items-center flex bg-[#F4F9FF] justify-start lg:justify-center gap-[60px] md:gap-[160px] overflow-x-scroll hide-scrollbar  w-full"
      data-aos="fade-in"
      data-aos-duration="5000"
    >
      {featuresData.map((data) => (
        <FeaturesCard data={data} key={data.id} />
      ))}
    </div>
  );
}

export default Features;
