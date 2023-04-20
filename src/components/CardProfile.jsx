import React from "react";
import { BsGithub } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";

const CardProfile = ({ image, name, role, github, linkedIn }) => {
  return (
    <div className="border rounded-lg bg-white border-b-8 border-secondary w-full">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 p-4">
        <img
          src={image}
          alt="JT Devs"
          lazyload="true"
          className="rounded-full w-20 h-20 object-cover ring-4 ring-gray-300"
        />
        <div>
          <h3 className="font-semibold text-xl md:text-2xl text-gray-700">
            {name}
          </h3>
          <p className="text-gray-600">{role}</p>
        </div>
      </div>
      <div className="flex flex-col gap-4 px-6">
        <div className="flex items-center justify-center lg:justify-start gap-2 py-4">
          <a
            href={github}
            target="_blank"
            className="p-2 bg-gray-100 rounded-lg hover:scale-[1.03] transition-all"
            rel="noreferrer"
          >
            <BsGithub className="text-2xl" />
          </a>
          <a
            href={linkedIn}
            target="_blank"
            className="p-2 bg-gray-100 rounded-lg hover:scale-[1.03] transition-all"
            rel="noreferrer"
          >
            <AiFillLinkedin className="text-2xl text-blue-600" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardProfile;
