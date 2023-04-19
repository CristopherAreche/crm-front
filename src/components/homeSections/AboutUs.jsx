import React from "react";
import { personas } from "../../utils/cardsprofile.js";
import CardProfile from "../CardProfile";

const AboutUsSection = () => {
  return (
    <section
      name="creadores"
      className="flex-col justify-center  items-center flex px-2 lg:px-12 gap-y-3 pb-6"
    >
      <h3 className="bg-gradient-to-r from-primary  to-secondary text-transparent bg-clip-text text-6xl font-extrabold">
        CREADORES
      </h3>
      <div>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
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
    </section>
  );
};

export default AboutUsSection;
