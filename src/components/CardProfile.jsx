import React from "react";
import { Link } from "react-router-dom";
import { BsGithub } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";

const CardProfile = ({ image, name, role, github, linkedIn }) => {
  return (
    <div>
      <div className=" w-[14em] bg-base-light shadow-xl rounded-lg py-3 px-4">
        <div className="photo-wrapper p-2">
          <img
            className="w-32 h-32 object-cover rounded-full mx-auto"
            src={image}
            alt={name}
          />
        </div>
        <div className="p-2">
          <h3 className="text-center text-xl text-white font-medium leading-8">
            {name}
          </h3>
          <div className="text-center text-light text-xs font-semibold">
            <p className="py-2">{role}</p>
            <div className="flex justify-evenly pt-4 text-[2.5em]">
              <Link target="_blanck" to={github}>
                <BsGithub />
              </Link>
              <Link target="_blanck" to={linkedIn}>
                <AiFillLinkedin />
              </Link>
            </div>
          </div>

          <div className="text-center my-3"></div>
        </div>
      </div>
    </div>
  );
};

export default CardProfile;
