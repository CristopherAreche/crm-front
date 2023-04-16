import React from "react";
import { personas } from "../../utils/cardsprofile.js";
import CardProfile from "../CardProfile";

const AboutUsSection = () => {
  return (
    <section
      name="creadores"
      className="h-[100vh] pt-28  flex-col lg:flex-row justify-center flex"
    >
      <div className=" text-white h-[90%] lg:w-[70%] flex flex-col justify-evenly lg:items-center">
        <h1 className="text-[2.5em] font-bold mb-4">CREADORES</h1>
        <div>
          <div className="flex gap-5 flex-wrap justify-center">
            {personas.map((item, index) => {
              return (
                <CardProfile
                  linkedIn={item.linkedIn}
                  github={item.github}
                  role={item.role}
                  name={item.name}
                  image={item.image}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
